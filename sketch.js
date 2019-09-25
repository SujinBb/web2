        let hand;
	let spritesheet;
	let spritedata;
	let animation =[];
	let x = 0;
	let y = 250;
        let myText = [];
        let randomLineOfText;
        let link;
        let _self;
      
	function preload(){
         myText = loadStrings('dead.txt'); 
	  spritedata = loadJSON('handsp.json');
	  spritesheet = loadImage('handsp.png');
	 
	}

	function setup() {
	createCanvas (1400,700);
	 r = random(255);
          g = random(255);
          b = random(255);
        console.log(animation);
       randomLineOfText = round(random(0,myText.length));
        print(myText[randomLineOfText]);
        textAlign(CENTER,CENTER); 
	 let frames = spritedata.frames;
	 for (let i = 0; i< frames.length; i++){
	  let pos= frames [i].position;
	  let img = spritesheet.get(pos.x,pos.y,pos.w,pos.h);
	  animation.push(img);
	 } 
	}

	function draw() {
	//background(r,g,b);
	fill(0);
        textSize(150);
	link = text(myText[randomLineOfText],width/2,height/2);
	let index = floor (frameCount / 6) % animation.length;
	image(animation[index],x,y,300,240);
	fill(0);
	noStroke();	
	 triangle(575,545, 630, 520, 630, 575);
         triangle(830,575, 830, 520, 886, 545);
		
	}

	function keyPressed() {
	  if (keyCode === LEFT_ARROW) {
	    x = x - 30;
	  } else if (keyCode === RIGHT_ARROW) {
	    x = x + 30;
          r = random(255);
          g = random(255);
          b = random(255);
          background(r,g,b);
 randomLineOfText = floor(random(myText.length));
  console.log(randomLineOfText);
	  }
	}

function mousePressed(){
  window.open("manipul.html", _self);
}


