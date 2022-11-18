#!/usr/bin/env node

// const yargs = require("yargs");
const fs = require("fs");
// const { execSync } = require("child_process");

const directories = [
  "app/Models",
  "app/Http/Controllers",
  "app/Http/Middleware",

  "resources/css",

  "resources/js/Components",
  "resources/js/Helpers",
  "resources/js/Layouts",
  "resources/js/Pages",

  "routes",

  "tests",
];

const files = [
  ["App.css", "resources\\css"],
  ["App.js", "resources\\js"],
  ["App.test.js", "tests"],
  ["index.css", "resources\\js"],
  ["index.js", "resources\\js"],
  ["logo.svg", "resources\\js\\Components"],
  ["reportWebVitals.js", "resources\\js\\Helpers"],
  ["setupTests.js", "tests"],
];

// const currentPath = process.cwd();
const sourcePath = __dirname + "\\src";
const packagePath = process.cwd();

// Starting Messages
console.log("==============================");
console.log("Sit back, relax. I've got this!");
console.log("==============================");
console.log("Creating directories and files...");

directories.map((directory) => {
  fs.mkdirSync(directory, { recursive: true });
  console.log(directory, ".......... Created.");
});

files.map((file) => {
  fs.copyFileSync(sourcePath + "\\" + file[0], packagePath + "\\" + file[1] + '\\' + file[0]);
  console.log(file[0], ".......... Created.");
});

fs.rmSync(packagePath + '\\src', {recursive: true})

// Closing Messages
console.log("==============================");
console.log("Thank you for using EXACT!");
console.log("More features to come.");
console.log("Feel free to share your suggestions at:");
console.log("https://github.com/higherordermalfunction/exact-boiler");
console.log("==============================");