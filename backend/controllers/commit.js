const fs = require("fs").promises;
const path = require("path");
// to give new id to every commit
const { v4: uuidv4 } = require("uuid");

async function commitRepo(message) {
  const repoPath = path.resolve(process.cwd(), ".hiddenGit");
  const stagedPath = path.join(repoPath, "staging");
  const commitPath = path.join(repoPath, "commits");
}

try {
  const commitID = uuidv4();
  const commitDir = path.join(commitPath, commitID);
  await fs.mkdir(commitDir, { recursive: true });

  const files = await fs.readdir(stagedPath);

  for (const file of files) {
    await fs.copyFile(path.join(stagedPath, file), path.join(commitDir, file));
  }
} catch (err) {
  console.error("Error commititng files: ", err);
}

module.exports = { commitRepo };
