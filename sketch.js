let hand;
let spritesheet;
let spritedata;
let animation =[];
let x =0;
let y =250;

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
  let this.r = 100;
  let this.x = 50;
  let this.y = height - this.r;
  let this.vy = 0;
  let this.gravity = 3;

  this.jump = function() {
        if (this.y == height - this.r) {
          this.vy = -35;
        }
      }
  this.move= function() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
  }
}

function keyPressed() {
if (keyCode === LEFT_ARROW) {
 x = x - 30;
} else if (keyCode === RIGHT_ARROW) {
 x = x + 30;
 else if (key == ' ') {
  hand.jump();
 }
}
