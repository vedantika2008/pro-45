var bgImg;






function preload(){
  bgImg = loadImage("images/lake1 (2).jpg")
}





function setup() {
  createCanvas(windowWidth,windowHeight);
 bg= createSprite(displayWidth/2-20, displayHeight/2-40, 50, 50);
 bg.addImage(bgImg)
}

function draw() {
  background(0);  
  drawSprites();
}