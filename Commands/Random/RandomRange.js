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
        if(!message.content.includes (","))
        {
            await message.channel.startTyping ();
            await message.channel.sendMessage ("shrug No seperators found, I don't understand it boo. ¯\_(ツ)_/¯");
            await message.channel.stopTyping ();

            return;
        }

        var lines = message.content.split (",");
        console.log("Line 1: " + lines[0] + "\nLine 2: " + lines[1]);
        lines[0] = lines[0].replace ("~rng ", "");
        console.log("Line 1: " + lines[0] + "\nLine 2: " + lines[1]);

        if(parseInt (lines[0]) != NaN && parseInt (lines[1]) != NaN)
        {
            var min = parseInt (lines[0]);
            var max = parseInt (lines[1]);

            console.log("min: " + min + "\nmax: " + max);

            var value = Math.floor (Math.random () * (max - min + 1) + min);

            console.log("value: " + value);

            await message.channel.startTyping ();
            await message.channel.sendMessage (value);
            await message.channel.stopTyping ();
        }
    }
}

module.exports = RandomRangeCommand;
