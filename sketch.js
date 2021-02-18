var balloon;
var bg = "bg.png";



function preload() {
  getBackgroundImg();
  balloon = loadImage("HotAir.png")
}

function setup() {
  createCanvas(500,500);
 balloon = createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
  balloon.display();
  
}