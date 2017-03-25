// Creates the initial client.
const Commando = require ("discord.js-commando");
const client = new Commando.Client ();

// Setup the client's commands and prefix.
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

client.commandPrefix = "~";

// Setup the client's initial state.
client.on ("ready", () => {
    client.user.setGame ("with ♡Chihiro♡");
    client.user.setStatus ("online");
    console.log ("Logged In");
});

// Log the client into Discord.
client.login ("Mjk0MTUwMDMxMzQxMTI1NjQy.C7Q8FA.jJuIbC9ksIYOWkvfbAXW6s-jazE");