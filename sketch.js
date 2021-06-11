var log1,log2,log3;
var ball,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);
log1=createSprite(330,650,30,50);
log2=createSprite(350,650,90,30);
log3=createSprite(390,650,30,50);

ball=createSprite(width/2,80,10,10);


engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
ballBody=Bodies.circle(width/2,600,5,{restitution:0.4,isStatic:true})
World.add(world,ballBody);
	 
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true})
World.add(world,ground);

ballPosition=width/2-100
ballY=610;

ballleftSprite=createSprite(ballPosition,ballY,20,100);
ballleftSprite.shapeColor=color(255,0,0);

ballLeftBody = Bodies.rectangle(ballPosition+20, ballY, 20,100 , {isStatic:true} );
 	World.add(world, ballLeftBody);

	 ballBase=createSprite(ballPosition+100, ballY+40, 200,20);
 	ballBase.shapeColor=color(255,0,0);

	 ballBottomBody = Bodies.rectangle(ballPosition+100, ballY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, ballBottomBody);

 	ballleftSprite=createSprite(ballPosition+200 , ballY, 20,100);
 	ballleftSprite.shapeColor=color(255,0,0);

 ballRightBody = Bodies.rectangle(ballPosition+200-20 , ballY, 20,100 , {isStatic:true} );
 	World.add(world, ballRightBody);

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ballSprite.x=ballBody.position.x
  ballSprite.y=ball.position.y
  drawSprites();
 
}

function keypressed(){
	if (keyCode === SPACE_ARROW) {

		   
		translation={x:-20,y:0}
		Matter.Body.translate(ballBody, translation)
	
}

}