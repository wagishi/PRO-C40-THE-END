var canvas;
var gameState =0;
var playerCount = 0;
var database , form, player, game;
var allPlayers;
var player1,player2;
var players;
var distance;
var xVel,yVel;
var obsatclesGroup , obsatcle

function preload(){
 spaceCraft1 = loadImage("images/spaceCraft.png");
 spaceCraft2 = loadImage("images/spaceCraft2.png");
 ob1 = loadImage("images/stone1.png");
 ob2 = loadImage ("images/stone2.png");
 trackImg = loadImage("images/track.jpg");
 ob3 = loadImage("images/ufo1.png");
 ob4 = loadImage("images/ufo2.png");
 obsatclesGroup = new Group();
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);

  database = firebase.database();
  game = new Game()
  game.getState();
  game.start();

  gameState = 0;
  distance = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
}

function draw(){

 if(playerCount === 2){
   game.update(1);
 }
 if(gameState === 1){
   clear();
   game.play();
 }
 if(gameState === 2){
  gameState = game.end();
}
 }




