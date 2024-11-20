var img1;

var img2;

var img3;

function preload (){
  img1 = loadImage("video-game-7348585_640.png")

  img2 = loadImage("wizboy64bit.png")

  img3 = loadImage("shroomypurple64bit.png")
}

function setup() {
  createCanvas(640, 436);
  textFont("Arial");
  fill(0);
  stroke(255);
}

function draw() {
  
  image(img1, 0, 0);

push();
translate(mouseX, mouseY);
  image(img2, -30, -54);
  pop();

  image(img3, 520, 170);

  textSize(28);
  text("GAME START", 220, 100);
}