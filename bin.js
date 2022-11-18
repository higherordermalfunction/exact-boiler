#!/usr/bin/env node

// const yargs = require("yargs");
const fs = require("fs");
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
  ["App.css", "resources\\css"],
  ["App.js", "resources\\js"],
  ["App.test.js", "tests"],
  ["index.css", "resources\\css"],
  ["index.js", "resources\\js"],
  ["logo.svg", "resources\\js\\Components"],
  ["reportWebVitals.js", "resources\\js\\Helpers"],
  ["setupTests.js", "tests"],
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
console.log("Creating directories and files...");

// Create New Directories
directoriesToCreate.map((directory) => {
  try {
    fs.mkdirSync(directory, { recursive: true });
    console.log(directory, ".......... Created.");
  } catch (e) {
    console.log(directory, ".......... Failed.");
    throw new Error();
  }
});

// Copy Files
filesToCopy.map((file) => {
  try {
    fs.copyFileSync(
      sourcePath + "\\" + file[0],
      packagePath + "\\" + file[1] + "\\" + file[0]
    );
    console.log(file[0], ".......... Copied.");
  } catch (e) {
    console.log(file[0], ".......... Failed.");
    throw new Error();
  }
});

// Delete src Directory
try {
  fs.rmSync(packagePath + "\\src", { recursive: true });
} catch (e) {
  console.log("Couldn't remove 'src' directory");
  throw new Error();
}

// Create New Files
filesToCreate.map((file) => {
  try {
    fs.writeFileSync(file[1] + "\\" + file[0], "");
    console.log(file[0], ".......... Created.");
  } catch (e) {
    console.log(file[0], ".......... Failed.");
    throw new Error();
  }
});

// Closing Messages
console.log("==============================");
console.log("Thank you for using EXACT!");
console.log("More features to come.");
console.log("Feel free to share your suggestions at:");
console.log("https://github.com/higherordermalfunction/exact-boiler");
console.log("==============================");
