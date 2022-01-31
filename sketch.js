var rocket,rocketImg;
var alien,alienImg,aliensGroup;
var space,spaceImg;
var star,starImg,starsGroup;
var gameState = "play";

function preload(){
rocketImg = loadImage("rocket.png");
spaceImg = loadImage("space.jpg");
starImg = loadImage("star.png");
alienImg = loadImage("alien.png");

}

function setup() {
createCanvas(600,600);
starsGroup = new Group();
aliensGroup = new Group();
space = createSprite(300,300);
space.scale = 1.60;
space.addImage("space",spaceImg);
space.velocityY = 1;
space.rotation = -90
rocket = createSprite(250,500,50,50);
rocket.scale = 0.05;
rocket.rotation = -45;
rocket.scale = 0.05;

}

function draw() {
 background(0);
 if(gameState === "play"){

 if(space.y > 400){
 space.y = 300;
 }

 if(keyDown("left_arrow")){
     rocket.x = rocket.x - 3;
 }

 if(rocket.x < 25){
     rocket.x = 25;
 }

 if(keyDown("right_arrow")){
     rocket.x = rocket.x + 3
 }

 if(rocket.x > 575){
     rocket.x = 575;
 }

 if(keyDown("space")){
     rocket.velocityY = -3;
     rocket.addImage("rocket",rocketImg);
 }

 if(keyDown("space")=== false){
    rocket.addImage("rocket",rocket2Img);
    rocket
}

 rocket.velocityY = rocket.velocityY + 0.5

 if(aliensGroup.isTouching(rocket)){
     gameState = "end";
 }
 }

 drawSprites();
}