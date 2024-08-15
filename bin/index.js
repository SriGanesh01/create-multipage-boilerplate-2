#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const TEMPLATE_DIR = path.join(__dirname, '../template');
const DEST_DIR = process.argv[2] || 'my-new-project';

// Copy template folder to destination
fs.copy(TEMPLATE_DIR, DEST_DIR, err => {
  if (err) {
    console.error('Error copying template:', err);
    process.exit(1);
  }
  console.log('Project created successfully at', DEST_DIR);

//   // Initialize a Git repository (optional)
//   if (process.argv.includes('--git')) {
//     try {
//       process.chdir(DEST_DIR);
//       execSync('git init');
//       execSync('git add .');
//       execSync('git commit -m "Initial commit from create-multipage-boilerplate-1"');
//       console.log('Git repository initialized.');
//     } catch (gitErr) {
//       console.error('Error initializing Git repository:', gitErr);
//     }
//   }
});
