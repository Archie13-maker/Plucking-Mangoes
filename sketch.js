
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImage;
var gameState="start";
var lmango,lstone;
var launcherObject;
var trees,treeImage;
function preload(){
  boyImage=loadImage("boy.png");
  treeImage=loadImage("tree.png");
}

function setup() {
	createCanvas(1000,500);

	boy=createSprite(200,430,10,10);
	boy.addImage(boyImage);
	boy.scale=0.1;

  trees=createSprite(800,300,50,50);
  trees.addImage(treeImage);
  trees.scale=0.3;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	// tree1=new Tree(800,300,400,400);
	 
	 ground1=new ground(500,495,1000,10);

	 stone1=new stone(145,360,50);

	 mango1=new mangoes(700,220,50);
	 mango2=new mangoes(800,200,40);
	 mango3=new mangoes(860,260,60);
	 mango4=new mangoes(760,240,40);
	 mango5=new mangoes(900,210,50);
	 mango6=new mangoes(850,190,40);
	 mango7=new mangoes(820,235,45);
	 mango8=new mangoes(780,155,55);
	 mango9=new mangoes(730,180,40);
	 mango10=new mangoes(890,175,35);

   // elastic1=new elastic(boy,stone1);
   elastic1 = new elasticRubber(stone1.body,{x:150,y:370});
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  ground1.display();
  //tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  elastic1.display();

  detectCollision(mango1,stone1);
  detectCollision(mango2,stone1);
  detectCollision(mango3,stone1);
  detectCollision(mango4,stone1);
  detectCollision(mango5,stone1);
  detectCollision(mango6,stone1);
  detectCollision(mango7,stone1);
  detectCollision(mango8,stone1);
  detectCollision(mango9,stone1);
  detectCollision(mango10,stone1);
}
 
function mouseDragged(){
   
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    
}
function mouseReleased(){
    elastic1.fly();
}

function keyPressed(){                        
    if(keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:145 , y:360});
		elastic1.attach(stone1.body);
    }
}

function detectCollision(lmango,lstone){
 var mangoBodyPosition=lmango.body.position;
 var stoneBodyPosition=lstone.body.position;

 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.radius+lstone.radius){
	 Matter.Body.setStatic(lmango.body,false);
 }
}