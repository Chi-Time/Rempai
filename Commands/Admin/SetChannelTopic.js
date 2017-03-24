const commando = require ("discord.js-commando");

class SetChannelTopicCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "admin",
            name: "topic",
            memberName: "topic",
            description: "Changes the topic of the current channel."
        });
    }

    async run (message, args)
    {
        await message.channel.startTyping ();

        // Remove the command from the message and returns the topic.
        var topic = message.content.replace ("~topic ", "");

        // Change the channel topic to the topic provided.
        message.channel.setTopic (topic).catch (console.error);

        // Inform user of channel topic change.
        await message.channel.sendMessage ("Channel topic has been changed! ^.^ Happy to help.");
        await message.channe.stopTyping (true);
    }
}

module.exports = SetChannelTopicCommand;
