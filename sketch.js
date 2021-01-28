const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinkos = []; 
var divisions = [];

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,790,480,20);

  for(var i = 0;i <= width; i = i +75 )
  {
    divisions.push(new Division(i,676,10,210))
  }

 /*  for(var j = 40; j <= width; j = j + 50)
  {
    plinkos.push(new Plinko(j,75));
  } */
  
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground1.display();

  for(var i = 0;i <= divisions.length; i = i ++ )
  {
    divisions[i].display()
  }
}