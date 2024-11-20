//firefly arrays
let x = [];
let y = [];



function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();

  for(let i = 0; i < 200; i++){
    x[i] = 0;
    y[i] = 0;
    
  }

  
 
}

function draw() {

  background(0, 0, 0, 1);
  
  fill(25, 66, 5, 1);
  rect(0, 250, 400, 150);
  
  fill(66, 40, 5, 1);
  rect(25, 280, 30, 40);
  
  fill(2, 46, 7, 1);
  triangle(40, 230, -40, 280, 120, 280);
  
  fill(2, 46, 7, 1);
  triangle(40, 190, -20, 240, 100, 240);
  
  fill(2, 46, 7, 1);
  triangle(40, 150, 0, 200, 80, 200);
  
  fill(2, 46, 7, 1);
  triangle(40, 110, 10, 160, 70, 160);
  
  fill(255,255, 255, 1);
  ellipse(320, 50, 90, 90);

//firefly

  for(let i = 20 - 1; i > 0; i--){

    x[i] = x[i - 1];
    print(x[i]);
    y[i] = y[i - 1];
  }
  
  x[0] = mouseX;
  y[0] = mouseY;

  for (let i = 0; i < 200; i++) {

    fill(220, 245, 56, .2);
    ellipse(x[i], y[i], 10, 10);
  }
  

}