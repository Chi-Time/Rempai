const commando = require ("discord.js-commando");

class RemindMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "utility",
            name: "remindme",
            memberName: "remindme",
            description: "Sets a reminder for a given time specified."
        });
    }

    //TODO: Write id into user config file to cancel timeout later.
    async run (message, args)
    {
        var content = message.content.replace ("~remindme", "");
        content.trim();

        if(content != "")
        {
            console.log("Content: " + content);

            // Check the given request for any matches.
            var regPat = /[0-9]{1,5}\s(hour|minute)/g;
            var matches = content.match(regPat);

            if(matches != null)
            {
                console.log("Matches found: " + matches.length + "\n");
                console.log(matches + "\n");

                var reminder = content.replace(regPat, "");
                reminder.trim();

                console.log("Reminder: " + reminder);

                if(matches.length == 2)
                {
                    if(matches[0].includes("hour"))
                    {
                        var hours = parseInt(matches[0]);
                        var minutes = parseInt(matches[1]);

                        if(!isNaN(hours) && !isNaN(minutes))
                        {
                            hours = hours * 3600000;
                            minutes = minutes * 60000;

                            let time = hours + minutes;

                            console.log("hours: " + hours + "\nMinutes: " + minutes + "\n");

                            setTimeout(() => message.author.sendMessage(reminder), time);

                             // Send the response to the user.
                            await message.channel.startTyping ();
                            await message.channel.sendMessage ("Reminder set. HOURS FIRST");
                            await message.channel.stopTyping (true);

                            return;
                        }

                        console.log("Non numeric value returned.\n");

                        return;
                    }

                    var hours = parseInt(matches[1]);
                    var minutes = parseInt(matches[0]);

                    if(!isNaN(hours) && !isNaN(minutes))
                    {
                        hours = hours * 3600000;
                        minutes = minutes * 60000;

                        let time = hours + minutes;

                        console.log("hours: " + hours + "\nMinutes: " + minutes + "\n");

                        setTimeout(() => message.author.sendMessage(reminder), time);

                        // Send the response to the user.
                        await message.channel.startTyping ();
                        await message.channel.sendMessage ("Reminder set. MINUTES FIRST");
                        await message.channel.stopTyping (true);

                        return;
                    }

                    console.log("Non numeric value returned.\n");

                    return;
                }

                if(matches[0].includes("hour"))
                {
                    var hours = parseInt(matches[0]);

                    hours = hours * 3600000;

                    console.log("hours: " + hours + "\n");

                    setTimeout(() => message.author.sendMessage(reminder), hours);

                    // Send the response to the user.
                    await message.channel.startTyping ();
                    await message.channel.sendMessage ("Reminder set. ONLY HOURS");
                    await message.channel.stopTyping (true);

                    return;
                }

                var minutes = parseInt(matches[0]);

                minutes = minutes * 60000;

                console.log("minutes: " + minutes + "\n");

                setTimeout(() => message.author.sendMessage(reminder), minutes);

                // Send the response to the user.
                await message.channel.startTyping ();
                await message.channel.sendMessage ("Reminder set. ONLY MINUTES");
                await message.channel.stopTyping (true);

                return;
            }

            console.log("No matches.\n");

            // Send the response to the user.
            await message.channel.startTyping ();
            await message.channel.sendMessage ("Expression failed. No matches.");
            await message.channel.stopTyping (true);

            return;
        }

        // Send the response to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("Didn't provide anything.");
        await message.channel.stopTyping (true);
    }
}

module.exports = RemindMeCommand;
