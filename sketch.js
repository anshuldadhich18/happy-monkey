
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananaGroup;
var rockGroup;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);  
ground=createSprite(200,380,1000,60);
ground.velocityX=-4;

  ground.x=ground.width/2;
monkey=createSprite(60,300,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.20;
  
inv = createSprite(200,400,400,20);
  inv.visible = false;
var ban=createSprite(400,100,10,10);
    ban.addImage(bananaImage);
    ban.scale=0.1;
    ban.velocityX=-4;
   
  bananaGroup=createGroup();  
  rockGroup=createGroup();
}


function draw() {
background("lightblue");

  

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if(keyDown("space")&& monkey.y >=314) {
    monkey.velocityY = -20;   
    
  }
  
 monkey.velocityY = monkey.velocityY +0.8;
monkey.collide(inv);
  if (frameCount % 174 === 0){
   var rock = createSprite(400,350,10,40);
  rock.addImage(rockImage);
    rock.scale=0.2;
   rock.velocityX = -4;
   rockGroup.add(rock);
  }
  
banana();  

drawSprites();
stroke("black");
fill("lightblue");
textSize(42);
survivalTime=Math.ceil(frameCount/frameRate()); text("survival Time :"+survivalTime,50,30) ;
}
function banana(){
 if(frameCount%230===0){
    var ban=createSprite(400,100,10,10);
    ban.addImage(bananaImage);
    ban.scale=0.1;
    ban.velocityX=-4;
    bananaGroup.add(ban);
    if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();  
    } 
 }
}




