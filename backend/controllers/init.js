const fs = require("fs").promises;
const path = require("path");

async function initRepo() {
  const repoPath = path.resolve(process.cwd(), ".hiddenGit");
  const commitsPath = path.join(repoPath, "commits");

  try {
  } catch (err) {}
}

module.exports = { initRepo };
