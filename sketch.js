//Namespacing for matter.js 
const Engine = Matter.Engine;

const World= Matter.World;

const Bodies = Matter.Bodies;

const Body=Matter.Body;

const Constraint = Matter.Constraint;

//Variable declaration for Bodies
var pentagon;

var ground1,ground2,ground3;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;

var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;

function preload()
{}

//Setup function
function setup() {
  //To create canvas
  createCanvas(1000,400);

  //Creating small engine and world
  engine = Engine.create();

  world = engine.world;

  //first ground
  ground1=new Ground(450,310,270,12);

  //First level
  block1=new Box1(360,275,30,30);

  block2=new Box(390,275,30,30);

  block3=new Box2(420,275,30,30);

  block4=new Box3(450,275,30,30);

  block5=new Box2(480,275,30,30);

  block6=new Box(510,275,30,30);

  block7=new Box1(540,275,30,30);

  //Second level
  block8=new Box1(390,235,30,30);

  block9=new Box(420,235,30,30);
  
  block10=new Box3(450,235,30,30);

  block11=new Box(480,235,30,30);

  block12=new Box1(510,235,30,30);

  //Third level
  block13=new Box1(360+60,195,30,30);

  block14=new Box3(390+60,195,30,30);

  block15=new Box1(420+60,195,30,30);
  
  //Fouth level
  block16=new Box1(390+60,155,30,30);

  //Second ground
  ground2=new Ground(800,225,210,12);

  //Bottom level
  block17=new Box1(800-30,205,30,30);

  block18=new Box2(800-60,205,30,30);

  block19=new Box3(800,205,30,30);

  block20=new Box1(830,205,30,30);

  block21=new Box2(860,205,30,30);

  //Middle level 
  block22=new Box3(800-30,205-40,30,30);

  block23=new Box1(800,205-40,30,30);

  block24=new Box3(800+30,205-40,30,30);

  //Top level
  block25=new Box3(800,205-80,30,30);

  //Lower Ground
  ground3=new Ground(500,390,1000,20);

  //pentagon
  pentagon=new polygon(200,200,20);

  //constraint
  sling=new SlingShot(pentagon.body,{x:150,y:190})
}

function draw() {

  //To assign brown background color
  background(mouseY ,mouseX , mouseY); 

  Engine.update(engine);
  
  //Displaying ground
  ground1.display();

  //Displaying first level
  block1.display();

  block2.display();

  block3.display();

  block4.display();

  block5.display();

  block6.display();

  block7.display();

  //Displaying second level
  block8.display();

  block9.display();

  block10.display();

  block11.display();

  block12.display();

  //Displaying third level
  block13.display();

  block14.display();

  block15.display();

  //Displaying fourth level
  block16.display();
  
  //displaying second ground
  ground2.display();

  //Displaying bottom level
  block17.display();

  block18.display();

  block19.display();

  block20.display();

  block21.display();

  //Display middle level
  block22.display();

  block23.display();

  block24.display();

  block25.display();
 
  //Displaying pentagon
  pentagon.display();
  
  //displaying ground 3
  ground3.display();

  //displaying constraint line
  sling.display();


  //Addiding instructions
 // fill("Blue");
  //textSize(20);
  //text("Hey there drag the haxagonal!!!",20,25);
  //text("Press space to attach haxagonal again!",20,370);
  //text("Press F5 to play again!",20,350);
  //text("-Rashi Sharma",800,25);
}

function mouseReleased()
{
   sling.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(pentagon.body,{x:100,y:200});
    sling.attacher(pentagon.body);
  }
}

function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}


