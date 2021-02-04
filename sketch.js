var WELCOME = 0;
var PLAY = 1;
var END = 2;
var gameState = WELCOME;

var baby, mom;
var toysGroup;
var toy1, toy2, toy3, toy4, toy5, toy6, toy7, toy8;
var button, pic1, img1;
var level1Bg;
var score, game;

function preload(){
  toy1 = loadImage("images/toys/1.png");
  toy2 = loadImage("images/toys/2.png");
  toy3 = loadImage("images/toys/3.png");
  toy4 = loadImage("images/toys/4.png");
  toy5 = loadImage("images/toys/5.png");
  toy6 = loadImage("images/toys/6.png");
  toy7 = loadImage("images/toys/7.png");
  toy8 = loadImage("images/toys/8.png");
  img1 = loadImage("images/game.png");
}

function setup() {
  createCanvas(displayWidth-50, displayHeight-50);
  game = new Game();

  baby = new Baby(width-100, height/2);
  mom = new Mother(200, 400);

  toysGroup = new Group();

  pic1 = createSprite(displayWidth/2+250, displayHeight/2-50, 50, 50);

  score = 0;
}

function draw() {
  background("#27aee3"); 
  
  if(gameState===WELCOME){
    textSize(35);
    fill("black");
    text("Welcome", displayWidth/2-85, 50);
    text("Press SPACE to start game", displayWidth/2-195, displayHeight-200);
    textSize(25);
    textFont('Century Gothic');
    text("Hey there!👋, Thank You for playing this game😁", displayWidth/4-310, 80);
    text("The objective of this game is too help Jason(The baby) get back to its mother,", displayWidth/4-310, 110);
    text("and on the way collect some toys, but be aware of the dangerous items", displayWidth/4-310, 140);
    text("which will hurt Jason!", displayWidth/4-310, 170);
    textStyle(BOLDITALIC);
    text("RULES OF THE GAME:",displayWidth/4-310, 230);
    text("1. Use the arrow keys to move the baby.",displayWidth/4-310, 270);
    text("2. Try to collect the toys.",displayWidth/4-310, 310);
    text("3. Try not to touch the dangerous items as,",displayWidth/4-310, 350);
    text("the baby will only have 3 lives.",displayWidth/4-285, 390);
    text("4. Try to reach the mother and make Jason happy!",displayWidth/4-310, 430);
    pic1.addImage("game", img1);
    pic1.scale = 0.55;

    if(keyDown("space")){
      gameState=PLAY;
    }
  }
  else if(gameState===PLAY){

    if(score<50){
      game.showLevel1();

      console.log(frameCount);
      mom.display();
    }else if(score>50 && score<100){
      game.showLevel2();
      // baby.x = 800;
      // mom.x = 200;
      
      // baby.display();
      // mom.display();
    }else{
      game.showLevel3();
      // baby.x = width-100;
      // baby.y = height/2;
      // mom.x = 200;
      
      // baby.display();
      // mom.display();
    }

    // if(frameCount%60===0){
    //   spawnToys();
    // }
    pic1.remove();

    if(keyIsDown(LEFT_ARROW)){
      baby.moveLeft();
      console.log("clicked left arrow");
    }
    if(keyIsDown(RIGHT_ARROW)){
      baby.moveRight();
    }
    if(keyIsDown(DOWN_ARROW)){
      baby.moveDown();
    }
    if(keyIsDown(UP_ARROW)){
      baby.moveUp();
    }
  }
  else{

  }
  drawSprites();
}

function spawnToys(){
  var toy = createSprite(100, 100);

  var randNum = Math.round(random(1,8))
  switch(randNum){
    case 1: toy.addImage("plane", toy1);
      break;
    case 2: toy.addImage("ball", toy2);
      break;
    case 3: toy.addImage("plane", toy3);
      break;
    case 4: toy.addImage("horse", toy4);
      break;
    case 5: toy.addImage("star", toy5);
      break;
    case 6: toy.addImage("teddy", toy6);
      break;
    case 7: toy.addImage("milk", toy7);
      break;
    case 8: toy.addImage("train", toy8);
      break;
    default: break;
  }
}