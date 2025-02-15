const yargs = require("yargs");
// utility to read commands
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { pullRepo } = require("./controllers/pull");
const { pushRepo } = require("./controllers/push");
const { commitRepo } = require("./controllers/commit");
const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv))
  .command(
    "init", // name of the command
    "Initialize a new repository", // description of the command
    {}, // parameters required
    initRepo // which function to call
  )
  .command(
    "add <file>", // name of the command
    "Add a new file to the repository", // description of the command
    (yargs) => {
      yargs.positional("file", {
        describe: "file to add to the staging area",
        type: "string",
      });
    }, // parameters required
    (argv) => {
      addRepo(argv.file); // the argument will contain the file name
    }
  )
  .command(
    "commit <message>", // name of the command
    "commit the staged files", // description of the command
    (yargs) => {
      yargs.positional("message", {
        describe: "commit message",
        type: "string",
      });
    }, // parameters required
    (argv) => {
      commitRepo(argv.message);
    } // which function to call, the argument will contain the message
  )
  .command(
    "push", // name of the command
    "push commits to S3", // description of the command
    {}, // parameters required
    pushRepo // which function to call
  )
  .command(
    "pull", // name of the command
    "pull commits from S3", // description of the command
    {}, // parameters required
    pullRepo // which function to call
  )
  .command(
    "revert <commitID>", // name of the command
    "revert to a specific commit", // description of the command
    (yargs) => {
      yargs.positional("commit ID", {
        describe: "commit ID to revert to",
        type: "string",
      });
    }, // parameters required
    revertRepo // which function to call
  )

  // which function to call
  .demandCommand(1, "you need ot give at least one command")
  .help().argv;
