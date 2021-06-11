
var monkey , monkey_running,ground;
var bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png",
 "sprite_1.png","sprite_2.png","sprite_3.png",
 "sprite_4.png","sprite_5.png","sprite_6.png",
 "sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,1200,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  score=0;
 
}

function draw() {
  background("white");
  stroke("black")
  textSize(15);
  fill("green");
  text("Survival Time : "+ score, 240,50);
  
  score = Math.ceil(frameCount/frameRate());
  
  if(ground.x < 0){
    ground.x = ground.width/2;
 }
  
  if(keyDown("space") && monkey.y >= 310 ){
    monkey.velocityY = -17;
  }    
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  Food();
  
  obstacles();
  
  drawSprites();
}

function Food(){
  if(frameCount % 80 === 0){
    var banana = createSprite(610,
    Math.round(random(120,200)),50,20);   
    banana.addImage("food",bananaImage);
    banana.velocityX = -(6 + 10 * score/100);
    banana.scale = 0.05;
    banana.lifetime = 110;
    
    FoodGroup.add(banana);
  }
  
}

function obstacles (){
  if(frameCount %300 === 0 ){
    var obstacles = createSprite(650,310,20,20);
    obstacles.addImage("stones",obstacleImage);
    obstacles.velocityX = -(6 + 10 * score/100); 
    obstacles.lifetime = 110;
    obstacles.scale = 0.2;
    
    obstacleGroup.add(obstacles);
  }
  
  
}


