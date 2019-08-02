let hand;
let spritesheet;
let spritedata;
let animation =[];


function preload(){
  spritedata = loadJSON('handani.json');
  spritesheet = loadImage('handani.png');
}
function setup() {
createCanvas (1024,540);
 let frames = spritedata.frames;
 for (let i = 0; i< frames.length; i++){
  let pos= frames [i].position;
  let img = spritesheet.get(pos.x,pos.y,pos.w,pos.h);
  animation.push(img);
 }

 //hand = new Sprite (animation,100,100,1 );
console.log(animation);
}

function draw() {
background(255);

//hand.show();
//hand.animate();
image(animation[frameCount % 72],0,150,320,240);

}
