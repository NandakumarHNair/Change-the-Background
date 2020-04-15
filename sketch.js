
var r = 0;
var g = 50;
var b = 255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

function setup(){

  createCanvas(1200,400);

}


function draw(){

  background(r, g, b);

  fill("white");
  stroke("white");
  ellipse(mouseX, mouseY, 50, 50);
  

  
  r = map(mouseX, 0, width, 70, 255);
  g = map(mouseX, 0, width, 50, 155);
  b = map(mouseX, 0, width, 90, 255);


  drawSprites();
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}