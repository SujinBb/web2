var gif_createImg;
var myText = [];
var randomLineOfText;

function preload() {
    myText = loadStrings('atikel.txt'); 
  gif_createImg = createImg("manipul3.gif");
}

function setup() {
  createCanvas(1400,700);
  background(255);
  randomLineOfText = round(random(0,myText.length));
  print(myText[randomLineOfText]);
  textAlign(CENTER,CENTER);

}

function draw() {
 gif_createImg.position(mouseX, mouseY - 66, mouseX, mouseY + 66);
 textSize(40);
	text(myText[randomLineOfText],width/2,height/2);
}

function mousePressed(){
 background(255);
  r = random(255);
 g = random(255);
 b = random(255);
  fill(r,g,b);
randomLineOfText = round(random(0,myText.length));
  console.log(randomLineOfText);
}
