class block{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.1,
            friction:2,
            density:2
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        stroke("black")
        strokeWeight(2)
        rect(pos.x,pos.y,this.width,this.height)
    }
}