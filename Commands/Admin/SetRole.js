const commando = require ("discord.js-commando");

class SetRoleCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "admin",
            name: "setrole",
            memberName: "setrole",
            description: ""
        });
    }

    // Add in the ability to add roles to OTHER members.
    async run (message, args)
    {
        // Ensure that the user is allowed to add roles to themselves.
        if(message.member.permissions.hasPermission ("MANAGE_ROLES_OR_PERMISSIONS"))
        {
            // Remove the command and return the name of the role.
            var role = message.content.replace ("~setrole ", "");

            // Retrieve the ID of the given role.
            var roleID = await message.guild.roles.findKey("name", role);
            
            // Check to ensure that the given role actually exists.
            if(roleID != null)
            {
                //TODO: Fix this as catching an error is not a sufficient way to deal with this.
                // Add this role to the guild member and inform the user of success.
                var thing = await message.member.addRole (roleID).catch (console.error);

                // Ensure that the role has and can be given to the user.
                if(thing != undefined)
                {
                    // Inform the user that the role has been successfully given.
                    await message.channel.startTyping ();
                    await message.channel.sendMessage ("You've been given the: **" + role + "** role.\nHope ya enjoy it!");
                    await message.channel.stopTyping (true);

                    return;
                }

                // Inform the user as to why the role cannot be given.
                await message.channel.startTyping ();
                await message.channel.sendMessage ("I can't give ya that role. It's just not possible, sorry boo.");
                await message.channel.stopTyping (true);

                return;
            }

            // Inform user as to why it failed.
            await message.channel.startTyping ();
            await message.channel.sendMessage ("Sorry! That role doesn't seem to exist I'm afraid. :C");
            await message.channel.stopTyping (true);

            return;
        }

        // Inform user that they do not have sufficient permissions.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("Ehh... I can't do that.\nYou don't have the right permissions boo. Sorry. Q_Q");
        await message.channel.stopTyping (true);
    }
}

module.exports = SetRoleCommand;
