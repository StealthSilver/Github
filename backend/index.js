const yargs = require("yargs");
// utility to read commands
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");

yards(hideBin(process.argv)).command(
  "init", // name of the command
  "Initialize a new repository", // description of the command
  initRepo // which function to call
);
