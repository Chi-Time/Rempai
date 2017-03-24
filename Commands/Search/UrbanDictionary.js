const commando = require ("discord.js-commando");

class UrbanDictionaryCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            group: "search",
            name: "urban",
            memberName: "urban",
            description: ""
        });
    }

    async run (message, args)
    {   
        // Remove command from message.
        var line = message.content.replace ("~urban ", "");
        
        // Ensure that the search term is alphanumeric.
        if(IsAlphaNumeric (line))
        {
            // Split the message by it's spaces.
            var words = line.split (" ");

            // The search term to return to the user.
            var term = "";

            // Loop through each word that was split and rebuild the term.
            for(var i = 0; i < words.length; i++)
            {
                // If we've reached the last word, only add the word into the term.
                if(i == words.length - 1)
                    term += words[i];   
                // Otherwise, add the word to the term and add a "%20" for spaces.
                else
                    term += words[i] + "%20";
            }

            // Send the search result to the user.
            await message.channel.sendMessage ("http://www.urbandictionary.com/define.php?term=" + term);

            // Break from the function.
            return;
        }

        // Inform user as to why search term isn't accepted.
        await message.channel.startTyping ();
        await message.channel.sendMessage ("That term isn't gonna work boo.\nMake sure to keep it alphanumeric huh?");
        await message.channel.stopTyping (true);
    }
}

// Is the given string alphanumeric only?
function IsAlphaNumeric (str)
{
    // Loop through each character of the string.
    for (var i = 0; i < str.length; i++)
    {
        // Grab the current char's code.
        code = str.charCodeAt(i);

        // Ensure that the current char falls within the correct codes.
        if (!(code > 47 && code < 58)  && // Numeric (0-9) 
            !(code > 64 && code < 91)  && // Upper alpha (A-Z)
            !(code > 96 && code < 123) && // lower alpha (a-z)
            !(code == 95)              && // Underscore (_)
            !(code == 32)              && // Space ( )
            !(code == 45))                // Hyphen/Dash (-)

        // It didn't? String is not alphanumeric.
        return false;
    }
    
    // It did? String is alphanumeric.
    return true;
}

module.exports = UrbanDictionaryCommand;
