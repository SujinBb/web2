var gif_createImg;
var myText = [];
var randomLineOfText;

function preload() {
    myText = loadStrings('atikel.txt'); 
  gif_createImg = createImg("manipul2.gif");
}

function setup() {
  createCanvas(1400,700);
  background(0);
  randomLineOfText = round(random(0,myText.length));
  print(myText[randomLineOfText]);
  textAlign(CENTER,TOP);

}

function draw() {
 gif_createImg.position(mouseX, mouseY - 66, mouseX, mouseY + 66);
frameRate(5);
 textSize(random(10,90));
text(myText[randomLineOfText],width/2,random(height));
}

function mousePressed(){
 background(0);
  r = random(255);
 g = random(255);
 b = random(255);
  fill(r,g,b);
randomLineOfText = round(random(0,myText.length));
  console.log(randomLineOfText);
}
