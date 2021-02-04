var bgImage,bg
var girl,girlImg



var girl,girlImage
var girl_running

function preload(){
bgImage=loadImage("candyland.jpg")
girl_running=loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png","Run (9).png","Run (10).png","Run (11).png","Run (12).png","Run (14).png","Run (15).png","Run (16).png","Run (17).png","Run (18).png","Run (19).png","Run (20).png")


girlImage=loadImage("ggg.png")

}
function setup(){
    createCanvas(600,400)
    bg=createSprite(0,-200,800,400);
    bg.addImage(bgImage);
    bg.scale=1.5;
    bg.x=bg.width/2;
    bg.velocityX=-3.5;
    
    girl = createSprite(100,300,20,50);
    girl.addAnimation("girl_running",girl_running);
    girl.addImage("girlImage",girlImage);
    girl.scale=0.2
    //girl.scale = 0.1;
    
    ground = createSprite(400,300,800,10);
    ground.velocityX=-4;
    ground.x=ground.width/2;
    ground.visible=false;
    
   
}
 function draw(){
      
  background(255);

 
    
 if(ground.x<0) {
   ground.x=ground.width/2;
 }
 if(bg.x<10){
   bg.x=bg.width/2;
 }
 
   
 
   if(keyDown("space") &&girl.y >= 100) {
     girl.velocityY = -12;
   }
   girl.velocityY = girl.velocityY + 0.8;
 
   girl.collide(ground);
   

   
 
 drawSprites();
 
 
  }
  
 
 