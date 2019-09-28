var bubbles =[];
var manipulation = [];
var button;
var _self;

function preload() {
 for (var i = 0; i<25; i++){
 manipulation[i] = loadImage('Image/MP'+ i + '.png');
}
}

function setup() {
 createCanvas(1400,700);
  button = createButton('next')
  button.mousePressed(LinkClik);
  button.position(1300,650);
  button.size(80,40);
  button.style("background-color","#fff");
  button.style("color","#000");
 button.style('font-size', '20px');

}

function Bubble(x,y,img){
 this.x = x;
 this.y = y;
 this.img = img;

    this.display = function(){
      imageMode(CENTER);
      image(this.img,this.x,this.y,280,200);
 }
    this.update = function(){
     this.x = this.x + random(-1,1);
     this.y = this.y + random(-1,1);
    }
}

function draw() {
  for (var i =0; i < bubbles.length;  i++){
  //bubbles[i].update();
  bubbles[i].display();
 }
 fill(255);
 noStroke();
 //button= triangle(1230,675, 1230, 620, 1286, 645);
 
}

function mousePressed(){
  var r = floor(random(0,manipulation.length));
  var b = new Bubble(mouseX,mouseY,manipulation[r]);
  bubbles.push(b);
          r = random(255);
          g = random(255);
          b = random(255);
          background(r,g,b);
 //var d = dist(mouseX, mouseY,button);
// if (d<5) { 
 //  window.open("manipul2.html", _self);
 // }
}

function LinkClik(){
 window.open("manipul2.html", _self);
}

