const commando = require ("discord.js-commando");

class RandomRangeCommand extends commando.Command
{
    constructor (client)
    {
        super(client, {
            name: "rng",
            group: "random",
            memberName: "rng",
            description: "Rolls a die",
        });
    }

    async run(message, args) 
    {
        // The message has no seperator?
        if(!message.content.includes (","))
        {
            // Inform the user that the command must have a seperator between the two numbers.
            await message.channel.startTyping ();
            await message.channel.sendMessage ("No seperators found, I don't understand it boo. ¯\_(ツ)_/¯");
            await message.channel.stopTyping ();

            return;
        }

        // Split the message and remove the command usage from the first element.
        var lines = message.content.split (",");
        lines[0] = lines[0].replace ("~rng ", "");

        // Ensure that the two ranges can be parsed.
        if(!isNaN (parseInt (lines[0])) && !isNaN (parseInt (lines[1])))
        {
            // Parse the min and max number ranges.
            var min = parseInt (lines[0]);
            var max = parseInt (lines[1]);

            // Perform a calculation to generate a number inclusive of both the bottom and top ranges.
            var value = Math.floor (Math.random () * (max - min + 1) + min);

            // Send the generate value back to the user.
            await message.channel.startTyping ();
            await message.channel.sendMessage (value);
            await message.channel.stopTyping ();
        
            // Break from the function.
            return;
        }

        // Inform the user as to why the command failed.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("Huh... _Scratches head_ I can't seem to parse that. I only accept two numbers.");
        await message.channel.stopTyping ();
    }
}

module.exports = RandomRangeCommand;
