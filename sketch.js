//creating the variables trex and the ground
var trex ,trex_running;
var ground, groundImage;
var invisibleGround;

function preload(){
  //loading the ground iimage
  groundImage = loadImage ("ground2.png");
  //loading the trex animation
  trex_running = loadAnimation ("trex1.png", "trex3.png", "trex4.png");
}

function setup(){
  
  //creating the canvas for our game
  createCanvas(600,200);
  
  //create a trex sprite
  trex = createSprite(60, 170);
  //giving the animation to the trex
  trex.addAnimation("trexRunning", trex_running);
  //scaling down the trex
  trex.scale = 0.4;

  //setting the position of the ground sprite
  ground = createSprite(300, 170, 800, 10);
  // giving the ground its image
  ground.addImage("ground", groundImage);
  //making the ground move to the left
  ground.velocityX = -4;
  
  //making the invisible ground
  invisibleGround = createSprite( 300, 174, 800, 10);
  //making the ground for the trex invisible
  invisibleGround.visible = false;
}

function draw(){
  
  //making the background of the game black, it also clears tracing
  background("black");

  //making the trex jump whenever the spacebar is pressed
  if(keyDown("space")&&trex.y>150){
    trex.velocityY = -10
    
  }  
  console.log(trex.y);
  //gravity
  trex.velocityY = trex.velocityY + 0.8;
  //making the trex collide with the ground
  trex.collide(invisibleGround);

  //making the ground infinite
  if(ground.x <0){
    ground.x = ground.width/2;
  }

  drawSprites();
}
