#!/usr/bin/env node

const chalk = require("chalk");
const yargs = require("yargs");
const fs = require("fs");
const { execSync } = require("child_process");

const directories = [
  "app/models",

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

const currentPath = process.cwd();
const sourcePath = process.cwd() + "/src";
const packagePath = __dirname;

// Starting Messages
console.log("==============================");
console.log("Sit back, relax. I've got this!");
console.log("==============================");
console.log("Creating directories and files...");

directories.map((directory) => {
  fs.mkdirSync(directory, { recursive: true });
  console.log(directory, "..........", chalk.bgGreen(" Created "));
});

files.map((file) => {
  fs.copyFileSync(sourcePath + "\\" + file[0], packagePath + "\\" + file[1]);
  console.log(file[0], "..........", chalk.bgGreen(" Created "));
});
