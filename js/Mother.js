class Mother{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.mom = createSprite(this.x, this.y);
        this.image = loadImage("images/mother.png");
        this.mom.addImage("mom", this.image);
        this.mom.visible = false;
    }
    display(){
        this.mom.visible = true;
    }
}