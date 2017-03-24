const commando = require ("discord.js-commando");

class YesNoCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "decision",
            name: "yesno",
            memberName: "yesno",
            description: ""
        });
    }

    async run (message, args)
    {
        var question = message.content.replace ("~yesno ", "");

        var responses = [
            "http://www.reactiongifs.com/wp-content/gallery/no/no-effin-way.gif",
            "http://www.reactiongifs.com/wp-content/gallery/no/seth-rogan-no.gif",
            "http://www.reactiongifs.com/wp-content/gallery/no/oh-hell-no.gif",
            "http://www.reactiongifs.com/wp-content/gallery/no/dwight-no.gif",
            "http://www.reactiongifs.com/wp-content/gallery/no/shakes-head-no.gif",
            "http://www.reactiongifs.com/wp-content/gallery/no/no-no-no-.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/tumblr_lm11bt4OaK1qe6xr2.gif",
            "http://www.reactiongifs.com/wp-content/gallery/no/pauley-no.gif",
            "http://www.reactiongifs.com/wp-content/gallery/no/snlno.gif",
            "http://www.reactiongifs.com/wp-content/gallery/no/no.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/illK6U.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/ace_ventura.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/tumblr_ln9g4rWf1k1qztit6.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/excited_yes.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/Chuck_Norris_Approves.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/stanley2.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/kip_yes.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/dwight_yes.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/elf_joy.gif",
            "http://www.reactiongifs.com/wp-content/gallery/yes/the_rock_gif.gif",
        ];

        var index = Math.floor (Math.random () * responses.length) + 0;

        var response = responses[index];

        await message.channel.sendMessage ("Question: " + question + "\n" + response);
    }
}

module.exports = YesNoCommand;
