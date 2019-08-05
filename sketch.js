let hand;
let spritesheet;
let spritedata;
let animation =[];
let x =0;
let y =300;


function preload(){
  spritedata = loadJSON('handsp.json');
  spritesheet = loadImage('handsp.png');
}

function setup() {
createCanvas (1400,700);
 let frames = spritedata.frames;
 for (let i = 0; i< frames.length; i++){
  let pos= frames [i].position;
  let img = spritesheet.get(pos.x,pos.y,pos.w,pos.h);
  animation.push(img);
 }

console.log(animation);
}

function draw() {
background(255);

let index = floor (frameCount / 8) % animation.length;
image(animation[index],x,y,320,240);
  
  //if (x >= 400){
  // x = 0; 
  //}
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = x - 20;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 20;
  }
}
