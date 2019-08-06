let hand;
let spritesheet;
let spritedata;
let animation =[];
let this.move;
let x =0;
let y = 300;
let vy = 0;
let gravity = 3;

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
let index = floor (frameCount / 6) % animation.length;
image(animation[index],x,y,300,240);
}


  this.move= function() {
        y += vy;
        vy += gravity;
        y = constrain(y, 0, 300);
  
}

function keyPressed() {
if (keyCode === LEFT_ARROW) {
 x = x - 30;
} else if (keyCode === RIGHT_ARROW) {
 x = x + 30;
}
 else if (key == ' ') {
  vy = -35;
 }
}
