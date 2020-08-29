var canvas;

var runnerCount = 0;
var gameState = 0;
var form, game, runner;
var allRunners;
var distance = 0;
var database;

var run1, run2, run3, run4, run5, runners;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("yellow");

  if(runnerCount === 3){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    background("yellow");
    game.play();
  }
}