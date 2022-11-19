#!/usr/bin/env node

// const yargs = require("yargs");
const fs = require("fs");
const chalk = require("chalk");
// const { execSync } = require("child_process");

const directoriesToCreate = [
  "app/Actions",
  "app/Http/Controllers",
  "app/Http/Middleware",
  "app/Models",

  // "resources/database",

  "resources/css",

  "resources/js/Components",
  "resources/js/Helpers",
  "resources/js/Layouts",
  "resources/js/Pages",

  "routes",

  "tests",
];

const filesToCopy = [
  ["index.html", "\\"],

  ["ReactLogo.jsx", "resources\\js\\Components"],

  ["App.jsx", "resources\\js"],
  ["main.jsx", "resources\\js"],

  ["App.css", "resources\\css"],
  ["index.css", "resources\\css"],
];

const filesToCreate = [
  ["api.js", "routes"],
  ["web.js", "routes"],
];

// const currentPath = process.cwd();
const sourcePath = __dirname + "\\src";
const packagePath = process.cwd();

// Starting Messages
console.log("==============================");
console.log("Sit back, relax. I've got this!");
console.log("==============================");
console.log("Creating directories...");

// Create New Directories
directoriesToCreate.map((directory) => {
  try {
    fs.mkdirSync(directory, { recursive: true });
    console.log(directory, ".........." + chalk.green("Created"));
  } catch (e) {
    console.log(directory, ".........." + chalk.red("Failed"));
    throw new Error();
  }
});

console.log("");
console.log("==============================");
console.log("Copying files...");

// Copy Files
filesToCopy.map((file) => {
  try {
    fs.copyFileSync(
      sourcePath + "\\" + file[0],
      packagePath + "\\" + file[1] + "\\" + file[0]
    );
    console.log(file[0], ".........." + chalk.green("Copied"));
  } catch (e) {
    console.log(file[0], ".........." + chalk.red("Failed"));
  }
});

console.log("");
console.log("==============================");
console.log("Deleting src...");

// Delete src Directory
try {
  if (fs.existsSync(packagePath + "\\src")) {
    fs.rmSync(packagePath + "\\src", { recursive: true });
  }
} catch (e) {
  console.log("Couldn't remove 'src' directory");
}

console.log("");
console.log("==============================");
console.log("Creating new files...");

// Create New Files
filesToCreate.map((file) => {
  try {
    fs.writeFileSync(file[1] + "\\" + file[0], "");
    console.log(file[0], ".........." + chalk.green("Created"));
  } catch (e) {
    console.log(file[0], ".........." + chalk.red("Failed"));
  }
});

// Closing Messages
console.log("==============================");
console.log("Thank you for using EXACT!");
console.log("More features to come.");
console.log("Feel free to share your suggestions at:");
console.log("https://github.com/higherordermalfunction/exact-boiler");
console.log("==============================");
