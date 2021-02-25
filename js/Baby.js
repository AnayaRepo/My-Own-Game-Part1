class Baby{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.baby = createSprite(this.x, this.y);
        this.image = loadAnimation("images/baby/babyCrawl1.png", "images/baby/babyCrawl2.png", "images/baby/babyCrawl3.png", "images/baby/babyCrawl4.png", "images/baby/babyCrawl5.png", "images/baby/babyCrawl6.png", "images/baby/babyCrawl7.png", "images/baby/babyCrawl8.png");
        this.baby.addAnimation("happyBaby", this.image);
        this.baby.scale = 0.6;
        this.baby.visible = false;
    }
    display(){
        this.baby.visible = true;
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

    calculateToysCollection(){
        if(toysGroup.length>0){
            //console.log("testing....");
            for(var i=0;i<toysGroup.length;i++){
                
                if(toysGroup.get(i).isTouching(this.baby)){
                    toysCollected+= 5;
                    toysGroup.get(i).destroy();

                    console.log("toys collected"+toysCollected);
                }
                
            }
          }
    }
    checkBabyStatus(){
        if(sharpObjGroup.length>0 && dangerAlert>0){
            //console.log("testing....");
            for(var i=0;i<sharpObjGroup.length;i++){
                
                if(sharpObjGroup.get(i).isTouching(this.baby)){
                    dangerAlert -=1;
                    sharpObjGroup.get(i).destroy();

                    console.log("remaining lives"+dangerAlert);
                }
                
            }
          } else{
            //gameState = END;
          }
    }
}