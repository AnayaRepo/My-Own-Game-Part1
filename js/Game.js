class Game{
    constructor(){
        this.level1Bg = loadImage("images/bg/bg.png");
        this.level2Bg = loadImage("images/bg/bg4.jpg");
        this.level3Bg = loadImage("images/bg/bg5.png");
        this.gameLevel = "level1";
        this.gameOver = loadImage("images/gameover.jpg")
    }
    showLevel1(){
        background(this.level1Bg);
    }
    showLevel2(){
        this.gameLevel = "level2";
        background(this.level2Bg);
    }
    showLevel3(){
        this.gameLevel = "level3";
        background(this.level3Bg);
    }
    endGame(){
        background(this.gameOver);
    }
}