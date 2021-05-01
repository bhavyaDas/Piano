var background_pinkImg,background_pink
var background_blueImg,background_blue

var blackTilesImg,whiteTilesImg,Tiles
var pianoImg,piano
var distance
var SERVE=2
var PLAY=1
var END=0
var gameState=SERVE

function preload(){
  background_pinkImg=loadAnimation("background_pink.jpg")
  background_blueImg=loadAnimation("background_blue.png")

  blackTilesImg=loadImage("blackTiles.jpg")
  whiteTilesImg=loadImage("whiteTiles.jpg")
  pianoImg=loadImage("piano.jpg")
}

function setup(){

  createCanvas(1535,750)

background_pink=createSprite(width/2,height/2,height)
background_pink.addAnimation("background1",background_pinkImg)
background_pink.scale=4
background_pink.velocityY=6

piano=createSprite(width/2,height-200)
piano.addImage("piano_start",pianoImg)
piano.scale=1
}

function draw(){
background(255)

drawSprites();
if(gameState==SERVE){
  piano.visible=true
textSize(90)
fill("red")
stroke("blue")
textFont("Comic Sans Ms")
text("Start the game by clicking on piano",width-1500,height-650)


}
if(mousePressedOver(piano)&&gameState==SERVE){
  piano.visible=false
  gameState=PLAY
}
if(gameState==PLAY){

  if(background_pink.y>375){
    background_pink.height=background_pink.height/5
  }
}
}