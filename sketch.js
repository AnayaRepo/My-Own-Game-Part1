//gameStates
var WELCOME = 0;
var PLAY = 1;
var END = 2;
var gameState = WELCOME;

//different variables
var baby, mom;
var toysGroup, sharpObjGroup;
var toy1, toy2, toy3, toy4, toy5, toy6, toy7, toy8;
var SO1, SO2, SO3, SO4, SO5, SO6, SO7, SO8;
var pic1, img1;
var score, game, toysCollected;
var dangerAlert;
var randNum;
var gameoverImg;

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

  SO1 = loadImage("images/dangerous/1.png");
  SO2 = loadImage("images/dangerous/2.png");
  SO3 = loadImage("images/dangerous/3.png");
  SO4 = loadImage("images/dangerous/4.png");
  SO5 = loadImage("images/dangerous/5.png");
  SO6 = loadImage("images/dangerous/6.png");
  SO7 = loadImage("images/dangerous/7.png");
  SO8 = loadImage("images/dangerous/8.png");

  gameoverImg = loadImage("images/gameover.jpg");
}

function setup() {
  createCanvas(displayWidth-50, displayHeight-50);
  game = new Game();

  baby = new Baby(width-100, height/2);
  mom = new Mother(width+100, height);

  toysGroup = new Group();
  sharpObjGroup = new Group();

  pic1 = createSprite(displayWidth/2+250, displayHeight/2-50, 50, 50);

  score = 0;
  toysCollected = 0;
  dangerAlert = 3;
}

function draw() {
  background("#27aee3"); 
  
  //welcome screen
  if(gameState===WELCOME){
    textSize(35);
    fill("black");
    textFont('Century Gothic');
    text("Welcome", displayWidth/2-85, 50);
    text("Press SPACE to start game", displayWidth/2-195, displayHeight-200);
    textSize(25);
    text("Hey there!👋, Thank You for playing this game😁", displayWidth/4-310, 80);
    text("The objective of this game is too help Jason(The baby) get back to his mother,", displayWidth/4-310, 110);
    text("and on the way collect some toys, but be aware of the dangerous items", displayWidth/4-310, 140);
    text("which will hurt Jason!", displayWidth/4-310, 170);
    textStyle(BOLDITALIC);
    text("RULES OF THE GAME:",displayWidth/4-310, 230);
    text("1. Use the arrow keys to move the baby.",displayWidth/4-310, 270);
    text("2. Try to collect the toys.",displayWidth/4-310, 310);
    text("3. Try not to touch the dangerous items as,",displayWidth/4-310, 350);
    text("the baby will only have 3 lives.",displayWidth/4-285, 390);
    text("4. Try to reach his mother and make Jason happy!",displayWidth/4-310, 430);

    pic1.addImage("game", img1);
    pic1.scale = 0.55;

    if(keyDown("space")){
      gameState=PLAY;
    }
  }
  else if(gameState===PLAY){

    //to remove the img on the welcome screen
    pic1.remove();

    console.log(game.gameLevel);
    

    //to spawn toys 
    spawnToys();
    spawnSharpObj(game.gameLevel);
    baby.checkBabyStatus();
    baby.calculateToysCollection();
  
    //for adding no. of toys collected and the score
    if(frameCount%100===0){
      score++;0
    }
      
    //for level 1
    if(score<50){
      game.showLevel1();
      fill("black")
      textSize(30);
      textFont('Century Gothic');
      textStyle(BOLD);
      text("Score: "+score, 50, 50);
      text("Toys Collected: "+toysCollected, 200, 50);
      fill("#f50a0a")
      text("Baby is Danger: "+dangerAlert+" Lives", width-350, 50);

      baby.display();
      mom.display();
     
    }
    //for level 2
    else if(score>50 && score<100){
      game.showLevel2();
      fill("black")
      textSize(30);
      textFont('Century Gothic');
      textStyle(BOLD);
      text("Score: "+score, 50, 50);
      text("Toys Collected: "+toysCollected, 200, 50);
      fill("#f50a0a")
      text("Baby is Danger: "+dangerAlert+" Lives", width-350, 50);

      
      baby.display();
      mom.display();
    }
    //for level 3
    else{
      game.showLevel3();
      fill("black")
      textSize(30);
      textFont('Century Gothic');
      textStyle(BOLD);
      text("Score: "+score, 50, 50);
      text("Toys Collected: "+toysCollected, 200, 50);
      fill("#f50a0a")
      text("Baby is Danger: "+dangerAlert+" Lives", width-350, 50);

           
      baby.display();
      mom.display();
    }



    //for arrow keys
    if(keyIsDown(LEFT_ARROW)){
      baby.moveLeft();
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
    //game.endGame();
  }
  drawSprites();
}

//spawn toys
function spawnToys(){
  if(frameCount%200===0){
    var toy = createSprite(random(30, 800), random(50, 500));

    var randNum = Math.round(random(1,8));
    toy.scale = 0.65;
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
    toysGroup.add(toy);
  } 
}

function spawnSharpObj(level){
  if(frameCount%400===0){
    var sharpObj = createSprite(random(30, 800), random(50, 500));

    if(level==="level1") {
      randNum = Math.round(random(1,3));
    } else if(level==="level2") {
      randNum = Math.round(random(1,5));
    } else{
      randNum = Math.round(random(1,8));
    }

    sharpObj.scale = 0.65;
    switch(randNum){
      case 1: sharpObj.addImage("plane", SO1);
        break;
      case 2: sharpObj.addImage("ball", SO2);
        break;
      case 3: sharpObj.addImage("plane", SO3);
        break;
      case 4: sharpObj.addImage("horse", SO4);
        break;
      case 5: sharpObj.addImage("star", SO5);
        break;
      case 6: sharpObj.addImage("teddy", SO6);
        break;
      case 7: sharpObj.addImage("milk", SO7);
        break;
      case 8: sharpObj.addImage("train", SO8);
        break;
      default: break;
    }

    sharpObjGroup.add(sharpObj);
  } 
}