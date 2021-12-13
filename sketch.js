var sea,ship;
var seaImg,shipImg;

function preload(){
 shipImg1 = loadAnimation("ship-1.png",ship-2.png,ship-3.png,ship-4.png);
 seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background("blue");
  if(keyDown("enter"));
  ship.velocityX = 5;
}

  if(keyDown("left"));
  ship.velocityX = -5;
}


if(keyDown("space"));
  ship.velocityX = 0;
}

 if(sea.x < 0){
  sea.x = sea.width/2;
  }

  ship.collide(edges[3]);
  drawSprites();
}