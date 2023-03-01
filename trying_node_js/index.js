//jshint esversion:6

var superheroes = require('superheroes');
var supervillains = require('supervillains');

var mySuperVillainName = supervillains.random();
var mySuperHeroName = superheroes.random();

console.log(mySuperHeroName);
console.log(mySuperVillainName);
