class Ground{

constructor(){
var options = {
    isStatic : true
    }
this.body = Bodies.rectangle(500,580,1000,10,options)
World.add(world, this.body)
}

display(){
rect(this.body.position.x, this.body.position.y, 1000, 10)
}



}
