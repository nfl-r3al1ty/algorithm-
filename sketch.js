var fixedRect,movingRect; 

function setup() { createCanvas(800,400); 
  fixedRect = createSprite(200, 200, 50, 100); 
  movingRect = createSprite(200,400,100,50); fixedRect.shapeColor = "green"; 
  movingRect.shapeColor = "green"; 
  //fixedRect.debug=true; //movingRect.debug=true;
  
  fixedRect.velocityY = 4;
  movingRect.velocityY = -4;
 } 


function draw() { 
  background(0); 
  //movingRect.x = mouseX;
   //movingRect.y = mouseY; 
   //console.log(movingRect.x-fixedRect.x); 
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && 
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 && 
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){ 
    fixedRect.shapeColor = "red"; movingRect.shapeColor = "red"; } 
    else{ 
      fixedRect.shapeColor = "green"; movingRect.shapeColor = "green";
     } 
     
if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2){
   fixedRect.velocityX = fixedRect.velocityX*(-1);
   movingRect.velocityX = movingRect.velocityX*(-1);
  }

  if(movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 && 
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
      fixedRect.velocityY = fixedRect.velocityY*(-1);
   movingRect.velocityY = movingRect.velocityY*(-1);
    }
      drawSprites(); }