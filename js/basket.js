class Basket{

constructor(){
var options = {
    isStatic:true
}
this.Image1 = loadImage("pole.png")
this.Image2 = loadImage("basket.png")
this.body = Bodies.rectangle(775,225,50,100,options);
World.add(world,this.body);
}

display(){
imageMode(CENTER)
    image(this.Image1,800,400,100,400)
    image(this.Image2,775,225,250,230)
    //rect(this.body.position.x,this.body.position.y,50,100)
}





}