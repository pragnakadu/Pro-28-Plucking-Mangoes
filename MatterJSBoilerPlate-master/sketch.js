
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boyimg , mangoimg , stoneimg , treeimg
var Boy , Stone , ground
var mng1 , mng2 , mgn3 , mng4 , mng5
var plant , shoot


function preload()
{
	boyimg=loadImage("Plucking mangoes/boy.png")
	treeimg = loadImage("Plucking mangoes/tree.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
    Stone = new stone(590,350,58)
	
	mng1 = new mango(200,300,20)
	mng2 = new mango(380,360,20)
	mng3 = new mango(250,350,20)
	mng4 = new mango(100,380,20)
	mng5 = new mango(400,220,20)
	ground = new Ground(400,680,800,20)
	//plant = new Tree(200,400,10,10)
	//Launcher = new launcher(Stone.body,{x:600,y:340})
    shoot = new launch(Stone.body,{x:630,y:420})

	
    


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  textSize(20)
  text("Press space for second chance!" , 400,50)
  
  image(boyimg ,600,340,200,300);
  image(treeimg , 5,100,500,600)
  
  Stone.display()

  mng1.display()
  mng2.display()
  mng3.display()
  mng4.display()
  mng5.display()
  ground.display()
  shoot.display()

  detectollision(Stone,mng1)
  detectollision(Stone,mng2)
  detectollision(Stone,mng3)
  detectollision(Stone,mng4)
  detectollision(Stone,mng5)
  
  
 

 
 
}

function mouseDragged(){
	Matter.Body.setPosition(Stone.body,{x:mouseX,y:mouseY})
	Matter.Body.setPosition(Stone.body , {x:mouseX , y:mouseY})

}

function mouseReleased(){
	shoot.fly()
}

function keyPressed(){
   if (keyCode === 32){

	shoot.attach(Stone.body)
   }
}


function detectollision(lstone,lmango){

	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.r) {

		Matter.Body.setStatic(lmango.body,false)
	}
}




///qjfniehauhtujk

//function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  //mangoBodyPosition=lmango.body.position
 // stoneBodyPosition=lstone.body.position
  
  //var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	//if(distance<=lmango.r+lstone.r)
    //{
      //console.log(distance);
  	  //Matter.Body.setStatic(lmango.body,false);
    //

  //}
