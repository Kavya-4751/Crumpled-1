const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//you will be requiring one more matter.js 
//function called as Matter.Render
const Render = Matter.Render;


// create the varibales for the dustbin,paper and ground
	var dustbin  
	var paper
	var ground

function preload()
{
		
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Use the classes of ground,paper and dustbin to create the objects
	dustbin = new Dustbin(100,200,50,50);
	paper = new Paper(Matter.Bodies.circle(300,300,50));
	ground = new Ground(100,500,800,70);

	//use the hint given to you in the PDF of the project

	Matter.Bodies.circle(40,100,100,paper);
	//how/where am I supposed to put this in matter.js?


	//writing the code  for render here
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  })

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
//display the ground,paper and dustbin objects here
  dustbin.display();
  paper.display();
  ground.display();
 
}

//check out hint no.4 and write the code of function key pressed here
function keypressed() {
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
} 
