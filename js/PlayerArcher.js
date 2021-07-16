class PlayerArcher {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
  
  
    this.body=Bodies.rectangle(x,y,this.width,this.height)
    this.image=loadImage("./assets/playerArcher.png")
    World.add(world,this.body)
    }
  
    
  
    display() {
      if (keyIsDown(DOWN_ARROW)&& this.angle < -1.2){
       this.angle += 0.01;
        Matter.Body.setAngle(this.body, this.angle);
      }
  
      if (keyIsDown(UP_ARROW)&& this.angle > -1.9) {
        this.angle -= 0.01;
        Matter.Body.setAngle(this.body, this.angle);
      }
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      image(this.image,-100, -100, 100, 100);
      imageMode(CENTER)
      pop();
    }
  }
  