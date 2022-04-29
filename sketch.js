const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var ball, ground, basket
var score

function preload(){

}

function setup(){
createCanvas(1000,600)
engine = Engine.create();
world = engine.world
ball = new Ball()
basket = new Basket()
ground = new Ground()
rectMode(CENTER)
score = 0
Engine.run(engine);
console.log(ball.body)
}

function draw(){
background("blue")
//Engine.update(engine)
ball.display()
basket.display()
ground.display()
textSize(40)
text("Score:"+score,100,100)
//if(Matter.Collision.collides(ball.body,basket.body)){
  //console.log("working")
}

if( keyIsDown(UP_ARROW)){
  //  console.log("working");
    Matter.Body.applyForce(ball.body, ball.body.position,{x:3, y:-05});
}

//if(ball.isTouching(basket)){
  //score = score + 1
//}

}

