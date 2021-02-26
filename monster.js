class Monster {
    constructor(x, y) {
      var options = { 
          'restitution':0,
          'friction':0,
          'density':0.2
      }
      this.body = Bodies.rectangle(x, y, 100, 100,options);
      this.width = 100;
      this.height = 100;
      this.monsterImg = loadImage("Monster-01.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      image(this.monsterImg,0,0,100,100);
      
      pop();
    }
  };