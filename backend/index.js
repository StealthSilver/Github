const yargs = require("yargs");
// utility to read commands
const { hideBin } = require("yargs/helpers");

yards(hideBin(process.argv)).command("init", "Initialize a new repository");
