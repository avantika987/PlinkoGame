const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var div1,div2,div3,div4,div5,div6,div7;


var plinkos = [];
var particles = [];
var divisions = [];

function setup() {
  createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground = new Ground(250,795,500,10);

  div1 = new Division(0,650,10,300);
  div2 = new Division(80,650,10,300);
  div3 = new Division(160,650,10,300);
  div4 = new Division(240,650,10,300);
  div5 = new Division(320,650,10,300);
  div6 = new Division(400,650,10,300);
  div7 = new Division(480,650,10,300);

  for(var i =40;i <= width;i=i+50){
    plinkos.push(new Plinko(i,75,10));
  }
  for(var i =15; i <= width-10; i=i+50){
    plinkos.push(new Plinko(i,175,10));
  }
  for(var i =40; i <= width; i=i+50){
    plinkos.push(new Plinko(i,275,10));
  }
  for(var i =15; i <= width;i=i+50){
    plinkos.push(new Plinko(i,375,10));
  }
}

function draw() {
  background("black");
  Engine.update(engine);

  for(var i=0; i<plinkos.length; i++){
  plinkos[i].display();
  }

  if(frameCount%60 ===0){
    particles.push(new Particle(random(90,130),10,10))
  }

  for(var j=0; j<particles.length; j++){
    particles[j].display();
    }  

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();
  div6.display();
  div7.display();
  ground.display();

  //drawSprites();
}