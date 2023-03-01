//jshint esversion:6

const fs = require('fs');

fs.copyFileSync("text1.txt", "text2.txt");
console.log('text1.txt was copied to text2.txt');
