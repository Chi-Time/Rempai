// Creates the initial client.
const Commando = require ("discord.js-commando");
const client = new Commando.Client ();
const fs = require ("fs");
var config = null;

Enter();

// Entry point for the program.
function Enter ()
{
    SetConsoleTitle("Rempai Logger");
    GetConfiguration();
}

// Set the title of the console window.
function SetConsoleTitle(title)
{
    process.stdout.write(
        `${String.fromCharCode(27)}]0; ${title} ${String.fromCharCode(7)}`
    );
}

// Get the current configuration file for the bot.
function GetConfiguration ()
{
    fs.readFile("config.json", "utf8", (err, data) => ParseConfiguration(err, data));
}

// Parse the configuration data for the bot.
function ParseConfiguration (err, data)
{
    if (err)
        return console.log(err);

    config = JSON.parse(data);

    SetupClient();
}

// Setup the clients modules and prefix.
function SetupClient ()
{
    client.registry.registerDefaults ();
    client.registry.registerGroups ([
        ["bot", "Bot"],
        ["user", "User"],
        ["admin", "Admin"],
        ["social", "Social"],
        ["search", "Search"],
        ["random", "Random"],
        ["utility", "Utility"],
        ["decision", "Decision"],
    ]);
    client.registry.registerCommandsIn (__dirname + "/Commands");

    client.commandPrefix = config.Prefix;

    LogClient();
}

// Log the client into Discord.
function LogClient ()
{
    client.login (config.Token);
}

// Event handler for when the bot has logged in.
client.on ("ready", () => InitialiseClient());

// Setup the client's initial values.
function InitialiseClient ()
{
    // Set the bot's initial states.
    client.user.setGame (config.PlayingStatus);
    client.user.setStatus ("online");

    // Clear the console window.
    process.stdout.write("\u001b[2J\u001b[0;0H");

    // Print welcome message as visual aid of connection.
    console.log ("Logging in.\n");
    console.log("Rempai is good to go! All modules are ready. I'm here boo. <3\n");
}
