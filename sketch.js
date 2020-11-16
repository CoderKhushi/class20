var fixedrect,movingrect
function setup() {
  createCanvas(800,400);
fixedrect=createSprite(400, 200, 50, 50);
movingrect=createSprite(200,200,200,50)
fixedrect.shapeColor="red"
movingrect.shapeColor="red"
}

function draw() {
  background(255,255,255); 
  movingrect.y=World.mouseY
  movingrect.x=World.mouseX
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
fixedrect.shapeColor="blue"
movingrect.shapeColor="blue"
  } else{
fixedrect.shapeColor="red"
movingrect.shapeColor="red"
  }
  drawSprites();
}