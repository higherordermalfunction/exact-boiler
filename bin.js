#!/usr/bin/env node

// const yargs = require("yargs");
const fs = require("fs");
const chalk = require("chalk");
// const { execSync } = require("child_process");

const slash = process.platform.toLowerCase() === "darwin" ? "/" : "\\";

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
  ["index.html", slash],

  ["ReactLogo.jsx", `resources${slash}js${slash}Components`],

  ["App.jsx", `resources${slash}js`],
  ["main.jsx", `resources${slash}js`],

  ["App.css", `resources${slash}css`],
  ["index.css", `resources${slash}css`],
];

const filesToCreate = [
  ["api.js", "routes"],
  ["web.js", "routes"],
];

// const currentPath = process.cwd();
const sourcePath = __dirname + `${slash}src`;
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
      sourcePath + slash + file[0],
      packagePath + slash + file[1] + slash + file[0]
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
  if (fs.existsSync(packagePath + slash + "src")) {
    fs.rmSync(packagePath + slash + "src", { recursive: true, force: true });
  }
} catch (e) {
  console.log(e);
  console.log("Couldn't remove 'src' directory");
}

console.log("");
console.log("==============================");
console.log("Creating new files...");

// Create New Files
filesToCreate.map((file) => {
  try {
    fs.writeFileSync(file[1] + slash + file[0], "");
    console.log(file[0], ".........." + chalk.green("Created"));
  } catch (e) {
    console.log(file[0], ".........." + chalk.red("Failed"));
  }
});

// Closing Messages
console.log("==============================");
console.log("Thank you for using EXPACT!");
console.log("More features to come.");
console.log("Feel free to share your suggestions at:");
console.log("https://github.com/higherordermalfunction/expact");
console.log("==============================");
