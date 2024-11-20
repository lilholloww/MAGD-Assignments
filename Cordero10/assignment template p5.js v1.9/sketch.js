let spriteTest
let ground;

function setup() {
  createCanvas(400,400);
  spriteTest=new Sprite(width/2,0);
  spriteTest.collider = 'd';
  spriteTest.w = 50;
  spriteTest.h = 50;
  world.gravity.y = 10;
  ground = new Sprite(0,height - 50, width*2,10,'s');
 
}

function draw() {

    clear();
    background(0,0,0);

    if(kb.pressing('a')){
      spriteTest.x -=1;
    }

    if(kb.pressing('d')){
      spriteTest.x +=1;
    }

    if(kb.presses('space')){
      spriteTest.y -=100;
    }
}
