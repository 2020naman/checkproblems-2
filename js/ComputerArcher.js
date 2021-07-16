class ComputerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.ballImage = loadImage("assets/computerArcher.png");
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.ballImage, 0, 0, this.width, this.height);
      Matter.Body.setAngle(this.body, PI/2)
      pop();
    }
  }