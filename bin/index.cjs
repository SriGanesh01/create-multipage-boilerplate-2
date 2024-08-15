#!/usr/bin/env node


const { execSync } = require('child_process');
const { comma } = require('postcss/lib/list');

const runCommand = command => {
    try {
        execSync(command, { stdio: 'inherit' });
    }
    catch (error) {
        console.error(error);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/SriGanesh01/create-multipage-boilerplate-2.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log('Creating new project...');
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
    console.error('Failed to checkout repo');
    process.exit(1);
}

console.log('Installing dependencies...');
const installed = runCommand(installDepsCommand);
if (!installed) {
    console.error('Failed to install dependencies');
    process.exit(1);
}

console.log('Project created successfully!');
console.log(`cd ${repoName} && npm start`);
