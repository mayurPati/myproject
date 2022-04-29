class Ball{
    
constructor(){
    var options = {
        restitution:0.8,isStatic:false,density:1,friction:0.5
    }
this.body = Bodies.circle(200,200,10,options)
this.image = loadImage("basketball.png");
World.add(world, this.body)

}

display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y, 60,60);
}

    
}