class Baby{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.baby = createSprite(this.x, this.y);
        this.babyCrawlImage = loadAnimation("images/baby/babyCrawl1.png", "images/baby/babyCrawl2.png", "images/baby/babyCrawl3.png", "images/baby/babyCrawl4.png", "images/baby/babyCrawl5.png", "images/baby/babyCrawl6.png", "images/baby/babyCrawl7.png", "images/baby/babyCrawl8.png");
        this.happyBabyImg = loadAnimation("images/baby/happy.png");
        this.sadBabyImg = loadImage("images/baby/sad.png");
        this.baby.addAnimation("crawlingBaby", this.babyCrawlImage);
        this.baby.addAnimation("happyBaby", this.happyBabyImg);
        //this.baby.addAnimation("sadBaby", this.sadBabyImg);
        this.baby.scale = 0.6;
        this.baby.visible = false;
        this.laughSound = loadSound("sounds/babyToyLaugh.mp3");
        this.crySound = loadSound("sounds/cry.mp3");
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
                    setTimeout(()=>{
                        this.baby.changeAnimation("happyBaby", this.happyBabyImg);
                        this.laughSound.play();
                        console.log("got toys");
                    }, 2000);
                    toysCollected+= 5;
                    toysGroup.get(i).destroy();
                    
                    console.log("toys collected"+toysCollected);
                }
                this.baby.changeAnimation("crawlingBaby", this.babyCrawlImage);
            }
          }
    }
    checkBabyStatus(){
        if(sharpObjGroup.length>0 && dangerAlert>0){
            //console.log("testing....");
            for(var i=0;i<sharpObjGroup.length;i++){
                
                if(sharpObjGroup.get(i).isTouching(this.baby)){
                    //this.baby.changeAnimation("sadBaby", this.sadBabyImg);
                    setTimeout(()=>{
                        this.baby.changeAnimation("sadBaby", this.sadBabyImg);
                        this.crySound.play();
                        console.log("got sharp obj");
                    }, 2000);
                    dangerAlert -=1;
                    sharpObjGroup.get(i).destroy();

                    console.log("remaining lives"+dangerAlert);
                }
               this.baby.changeAnimation("crawlingBaby", this.babyCrawlImage);
            }
          } 
    }
    sadBabyOnGameover(){
        this.baby.destroy();
        var sadBaby = createSprite(width/2, height/2);
        sadBaby.addImage(this.sadBabyImg);
    }
}