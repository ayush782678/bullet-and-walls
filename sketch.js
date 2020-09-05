
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var Paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	paper = new Paper(200,200,20);
	//Create the Bodies Here.
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Paper.display();
  
  drawSprites();
 
}



