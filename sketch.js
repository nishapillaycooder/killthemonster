const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7;
var bob;
var backgroundImg;


function preload(){
    backgroundImg = loadImage("GamingBackground.png");
}







function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    


    ground = new Ground(700,height,11500,20);
   
    box1 = new Box(680,320,70,70);
    box2 = new Box(680,320,70,70);
    
    box3 = new Box(680,240,70,70);
    box4 = new Box(680,240,70,70);
    
    box5 = new Box(800,160,70,70);
    box6 = new Box(800,160,70,70);
    box7 = new Box(800,160,70,70);
    box8 = new Box(800,160,70,70);

    monster = new Monster(972,128);
    

    

    bob = new Bob(320,200,45);
    

    //log6 = new Log(230,180,80, PI/2);
    thread = new Thread(bob.body,{x:489, y:70});
    
}

function draw(){

    background(backgroundImg);
    text(mouseX+ "," +mouseY, mouseX,mouseY);
    
    textSize(30);
    text("press space to move the superman",300,100);
        
        
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();
    box8.display();

    

    bob.display();
    monster.display();
   
    //log6.display();
    thread.display();    
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.applyForce(bob.body, bob.body.position,{x:300, y: -120})
    }
}


