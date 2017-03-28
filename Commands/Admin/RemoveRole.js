const commando = require ("discord.js-commando");

class RemoveRoleCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "admin",
            name: "removerole",
            memberName: "removerole",
            description: ""
        });
    }

    async run (message, args)
    {
        // Ensure that the user is allowed to remove roles.
        if(message.member.permissions.hasPermission ("MANAGE_ROLES_OR_PERMISSIONS"))
        {
            if(message.isMentioned (message.mentions.users.first ()))
            {
                var user = message.mentions.users.first();

                // Remove the command and return the name of the role.
                var role = message.content.replace ("~removerole ", "");
                role = role.replace ("<@" + user.id + ">", "");
                role = role.replace ("<@!" + user.id + ">", "");
                role = role.trim ();

                if(role != "")
                {
                    var members = await message.guild.members.array ();
                    console.log("|------Grabbing Member------|");
                    var member = GetMember (members, user);
                    console.log("|---------------------------|");

                    if (member != null) 
                    {
                        // Retrieve the ID of the given role.
                        var roleID = await message.guild.roles.findKey ("name", role);

                        console.log ("Role name: " + role + " | Role ID: " + roleID);

                        // Check to ensure that the given role actually exists.
                        if (roleID != null) 
                        {
                            //TODO: Fix this as catching an error is not a sufficient way to deal with this.
                            // Add this role to the guild member and inform the user of success.
                            //var guildRole = await member.addRole (roleID);//.catch (console.error);

                            //TODO: Fix this as catching an error is not a sufficient way to deal with this.
                            // Remove the role from the mentioned user.
                            var guildRole = await member.removeRole (roleID).catch(console.error);

                            // Ensure that the role has and can be removed from the user.
                            if (guildRole != undefined) 
                            {
                                // Inform the user that the role has been successfully removed.
                                await message.channel.startTyping ();
                                await message.channel.sendMessage ("The **" + role + "** role has been removed. Sorry for the demotion!");
                                await message.channel.stopTyping (true);

                                return;
                            }

                            // Inform the user as to why the role cannot be removed.
                            await message.channel.startTyping ();
                            await message.channel.sendMessage ("I can't remove that role. It's just not possible, sorry boo.");
                            await message.channel.stopTyping (true);

                            return;
                        }

                        // Inform user as to why it failed.
                        await message.channel.startTyping ();
                        await message.channel.sendMessage ("Sorry! That role doesn't seem to exist I'm afraid. :C");
                        await message.channel.stopTyping (true);

                        return;
                    }

                    // Inform user that member no longer exists.
                    await message.channel.startTyping ();
                    await message.channel.sendMessage ("That user is no longer here, I can't take away that role. Sorry!");
                    await message.channel.stopTyping (true);

                    return;
                }

                // Inform user that no role was specified.
                await message.channel.startTyping ();
                await message.channel.sendMessage ("Huh? There was no role there. I can't take a role if you don't name one.\nI'm not magic. T.T");
                await message.channel.stopTyping (true);

                return;
            }

            // Inform user as to why it failed.
            await message.channel.startTyping ();
            await message.channel.sendMessage ("No user was mentioned! To remove a role from yourself, use `~ditchrole` ^.^");
            await message.channel.stopTyping (true);

            return;
        }

        // Inform user that they do not have sufficient permissions.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("Ehh... I can't do that.\nYou don't have the right permissions boo. Sorry. Q_Q");
        await message.channel.stopTyping (true);
    }
}

//TODO: Consider finding way to use collection as looping may take too much processing.
function GetMember (members, user)
{
    for (let i = 0; i < members.length; i++)
    {
        console.log ("Guild User: " + members[i].id + " | Requested User: " + user.id)

        if(members[i].id === user.id)
        {
            console.log ("Found member: " + members[i].displayName);
            return members[i];
        }
    }

    console.log ("Member was not found.");

    return null;
}

module.exports = RemoveRoleCommand;
