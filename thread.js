class Thread {
    constructor(bodyA, pointB){
    var  chain_options = {
         bodyA : bodyA,
         pointB :   pointB,
         stiffness : 0.04,
         lenght :10
       }
      this.pointB = pointB; 
     this.chain  = Constraint.create(chain_options);
     World.add(world,this.chain);
    }
 
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        fill("red")
        strokeWeight(10);
     //line(pointA.x,pointA.y-10,pointB.x,pointB.y);
     //thread.visible = false;
     pop();
    }
 }