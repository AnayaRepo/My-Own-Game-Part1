var WELCOME = 0;
var PLAY = 1;
var END = 2;
var gameState = WELCOME;

var baby, mom;
var toysGroup;
var toy1, toy2, toy3;

function preload(){
  toy1 = loadImage("images/toys/1.png");
  toy2 = loadImage("images/toys/2.png");
  toy3 = loadImage("images/toys/3.png");
}

function setup() {
  createCanvas(displayWidth-50, displayHeight-50);

  baby = new Baby(500, 500);
  mom = new Mother(700, 500);

  toysGroup = new Group();
}

function draw() {
  background("lightblue"); 
  
  if(gameState===WELCOME){
    textSize(30);
    fill("blue");
    text("Welcome", displayWidth/2-100, 50);
    text("Press SPACE to start game", displayWidth/2, displayHeight-200);

    if(keyDown("space")){
      gameState=PLAY;
    }
  }
  else if(gameState===PLAY){
    baby.display();
    mom.display();

    spawnToys();
  }
  else{

  }

  drawSprites();
}

function spawnToys(){
  var toy = createSprite(100, 100);

  var randNum = Math.round(random(1,3))
  switch(randNum){
    case 1: toy.addImage("plane", toy1);
      break;
    case 2: toy.addImage("plane", toy2);
      break;
    case 3: toy.addImage("plane", toy3);
      break;
    default: break;
  }
}