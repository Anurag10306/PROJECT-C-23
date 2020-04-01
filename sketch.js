const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;
var ground;
var b1,b2,b3,b4,b5,b6;
var b7,b8;
var b9,b10;
var b11;
var r,g,b;
 
function setup() {
    createCanvas(1300, 600);
    engine = Engine.create();
    world = engine.world;
    b1 = new Box(650,500,150,125);
    ground = new Ground(650,600,1300,20);
    b2 = new Box(650,350,100,60)
    b3 = new Box(650,250,150,30);
    b4 = new Box(650,50,100,200);
    b5 = new Box(650,0,150,30);
    b6 = new Box(650,-50,100,60)

    b7 = new Box(525,400,100,350);
    b8 = new Box(525,100,150,30);

    b9 = new Box(775,400,100,350);
    b10 = new Box(775,100,150,30);

    b11 = new Box(240,450,460,125);

    b12 = new Box(1060,450,460,125);

    b13 = new Box(60,200,100,300);

    b14 = new Box(1240,200,100,300);
  }
 
 
function draw() {
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
    background(100);
    Engine.update(engine);
    b1.display();
    ground.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();

    b7.display();
    b8.display();

    b9.display();
    b10.display();

    b11.display();

    b12.display();

    b13.display();

    b14.display();
}