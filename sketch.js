const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var paper1;
var dustbin1;
var ground;
/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(400, 650, 800, 20);
  paper1 = new paper(150, 10);
  dustbin1 = new dustbin(300,20,50,30);

}


function draw() {
  //circleMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper1.display();
  dustbin1.display();
  drawSprites();
 
}



