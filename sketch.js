var bullet, wall,thickness
var speed,weight,Lbullet,Lwall

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83)

bullet=createSprite(50,200,10,100)

wall=createSprite(1200,200,30,height/2)

speed=random(55,200)
weight=random(400.1500)


 
bullet.velocityX=speed;
}



function draw() {
  
  background("lime");


if(wall.x-bullet.x<(bullet.width+wall.width/2)){
bullet.velocityX=0

var deformation=0.5*weight*speed*speed/22500

if(deformation>180)
{
  bullet.shapeColor="white"
}

if(deformation<180&&deformation>180)
{
  bullet.shapeColor="white"
}
if(deformation<180)
{
  bullet.shapeColor="white"
}

}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 *weight * speed * speed/(thickness*thickness*thickness)
  if(damage>10)
  {      
  wall.shapeColor="red";
  
  }
  if(damage<10 )
  {
      wall.shapeColor="green";
      
      }
  
    
  
      }


  drawSprites();
  }




  function  hasCollided (bullet,wall){

bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
  return false
}