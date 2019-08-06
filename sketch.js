let hand;
let spritesheet;
let spritedata;
let animation =[];
let x =0;
let y = height -100;
let this.vy = 0;
let this.gravity = 3;

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

function Hand(){
  
//  this.jump = function() {
        //  this.vy = -35;
        
    //  }
  this.move= function() {
        y += this.vy;
        this.vy += this.gravity;
        y = constrain(ty, 0, height - 100);
  }
}

function keyPressed() {
if (keyCode === LEFT_ARROW) {
 x = x - 30;
} else if (keyCode === RIGHT_ARROW) {
 x = x + 30;
 else if (key == ' ') {
  this.vy = -35;
 }
}
