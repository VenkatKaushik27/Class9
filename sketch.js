var ball 
var wood_img
function preload (){
wood_img =loadImage ("woods.jpg")
}
function setup() {
  createCanvas(600,600);
ball= createSprite (200,200,50,50)
ball.addImage ("Woods",wood_img)
}

function draw() 
{
  background(30);



  drawSprites ()
}




