const commando = require ("discord.js-commando");

class RateWaifuCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "decision",
            name: "ratewaifu",
            memberName: "ratewaifu",
            description: "Rate's the given waifu out of 10."
        });
    }

    async run (message, args)
    {
        // Generate the rating of the given waifu.
        var rating = Math.floor(Math.random() * 10) + 0;

        // Remove the command from the message so that only the waifu name remains.
        var waifu = message.content.replace("~ratewaifu ", "");

        // A list of adjectives to add before the rating.
        var adjectives = [
            "solid",
            "meh",
            "weak",
            "slick",
            "wonderful"
        ];

        // Retrieve a random adjective to place before the rating.
        var adjective = adjectives[Math.floor(Math.random() * adjectives.length) + 0];

        // Create the formatted response for the user.
        var response = `${waifu}?\nI'd give em a ${adjective} ${rating}/10 ;D`;

        // Send the rating of the waifu to the user.
        await message.channel.startTyping ();
        await message.channel.sendMessage (response);
        await message.channel.stopTyping ();
    }
}

module.exports = RateWaifuCommand;
