#!/usr/bin/env node

// const yargs = require("yargs");
const fs = require("fs");
const chalk = require("chalk");
const { execSync } = require("child_process");

const slash = process.platform.toLowerCase() === "darwin" ? "/" : "\\";

const sourcePath = __dirname + `${slash}src`;
const packagePath = process.cwd();

// Starting Messages
console.log("==============================");
console.log("Sit back, relax. I've got this!");
console.log("==============================");

console.log("Cleaning out unnecessary files...");

try {
  if (fs.existsSync(packagePath + slash + "src")) {
    fs.rmSync(packagePath + slash + "src", { recursive: true, force: true });
  }
} catch (e) {
  console.log("Couldn't remove 'src' directory");
}

console.log("");
console.log("==============================");
console.log("Installing and Configuring Tailwind...");

execSync("npm install -D tailwindcss postcss autoprefixer");
execSync("npx tailwindcss init -p");

console.log("");
console.log("==============================");
console.log("Installing React Router...");

execSync("npm i react-router-dom");

console.log("");
console.log("==============================");
console.log("Creating important files...");

fs.cpSync(sourcePath, packagePath, { recursive: true, force: true });

// Closing Messages
console.log("==============================");
console.log(chalk.green("Thank you for using EXPACT!"));
console.log("More features to come.");
console.log("Feel free to share your suggestions at:");
console.log("https://github.com/higherordermalfunction/expact");
console.log("==============================");
