
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	bobObject1=new bob (400,350,30);
	bobObject2=new bob (450,400,30);
	bobObject3=new bob (450,450,30);
	bobObject4=new bob (500,500,30);
	bobObject5=new bob (450,550,30);
	roof1=new ground(width/2,670,width,20);
	rope1=new ground ();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  roof1.display();

  drawSprites();
 
}



