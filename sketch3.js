   
var gif_createImg;

function preload() {
  gif_createImg = createImg("manipul2.gif");
}

function setup() {
  createCanvas(1400,700);
  background(255);
   textSize(50);
 text("DANGER",540,100);
}

function draw() {
gif_createImg.position(mouseX, mouseY - 66, mouseX, mouseY + 66);
}
