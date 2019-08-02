
class Sprite {
 constructor(animation,speed){
   this.x=x;
   this.y=y;
   this.animation = animation;
   this.len = this.animation.length;
   this.speed = speed;
   this.index = 0;
}

  show(){
   console.log(this.animation);
   let index = floor(this.index)% this.leg
   image(this.animation[index],0,150,320,240);
  }

  animate() {
   this.index += this.speed;
   this.x += this.speed;
 }
}
