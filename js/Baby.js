class Baby{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.baby = createSprite(this.x, this.y);
        this.image = loadImage("images/baby/happy.png");
        this.baby.addImage("happyBaby", this.image);
        this.baby.scale = 0.5;
        //this.baby.visible = false;
    }
    display(){
        //this.baby.visible = true;
    }
    moveLeft(){
        this.baby.x = this.baby.x-10;
    }
    moveRight(){
        this.baby.x = this.baby.x+10;
    }
    moveDown(){
        this.baby.y = this.baby.y+10;
    }
    moveUp(){
        this.baby.y = this.baby.y-10;
    }
}