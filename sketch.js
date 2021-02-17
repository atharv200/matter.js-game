const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base1,base2,base3
var box1,box2,box3,box5,box6,box7
var box8,box9,box10,box11,box12
var box13,box14,box15
var box16

var Box1,Box2,Box3,Box4,Box5,Box6,Box7
var Box8,Box9,Box10,Box11,Box12
var Box13,Box14,Box15
var Box16

var polygon,polygonImg

var rubber,backImg

function preload(){
    polygonImg = loadImage("stone.png")
    backImg = loadImage("w-qjCHPZbeXCQ-unsplash.jpg")
}

function setup(){

    createCanvas(1500,600)
    engine = Engine.create();
    world = engine.world;

    

    
    base3 = new Ground(width/2,570,1500,20)

    box1 = new block(1200-1000,265,40,50)
    box2 = new block(1160-1000,265,40,50)
    box3 = new block(1120-1000,265,40,50)
    box4 = new block(1080-1000,265,40,50)
    box5 = new block(1240-1000,265,40,50)
    box6 = new block(1280-1000,265,40,50)
    box7 = new block(1320-1000,265,40,50)
    box8 = new block(1200-1000,265-50,40,50)
    box9 = new block(1160-1000,265-50,40,50)
    box10 = new block(1120-1000,265-50,40,50)
    box11 = new block(1240-1000,265-50,40,50)
    box12 = new block(1280-1000,265-50,40,50)
    box13 = new block(1200-1000,265-50-50,40,50)
    box14 = new block(1160-1000,265-50-50,40,50)
    box15 = new block(1240-1000,265-50-50,40,50)

    box16 = new block(1200-1000,265-50-50-50,40,50)
    

    Box1 = new block(1200-000,265,40,50)
    Box2 = new block(1160-000,265,40,50)
    Box3 = new block(1120-000,265,40,50)
    Box4 = new block(1080-000,265,40,50)
    Box5 = new block(1240-000,265,40,50)
    Box6 = new block(1280-000,265,40,50)
    Box7 = new block(1320-000,265,40,50)
    Box8 = new block(1200-000,265-50,40,50)
    Box9 = new block(1160-000,265-50,40,50)
    Box10 = new block(1120-000,265-50,40,50)
    Box11 = new block(1240-000,265-50,40,50)
    Box12 = new block(1280-000,265-50,40,50)
    Box13 = new block(1200-000,265-50-50,40,50)
    Box14 = new block(1160-000,265-50-50,40,50)
    Box15 = new block(1240-000,265-50-50,40,50)

    Box16 = new block(1200-000,265-50-50-50,40,50)

    

    var options = {
        isStatic:false,
        density:5,
        restitution:0.5
    }
    polygon = Bodies.circle(width/2,50,30,options)
    
    World.add(world,polygon)

    rubber = new slingshot(this.polygon,{x:width/2,y:50})

}

function draw(){

    background(backImg)

    Engine.update(engine);

    push()
    textSize(30)
    fill("white")
    stroke("black")
    strokeWeight(3)
    text("Drag the Hexagon to lanch it.",500,50)
    pop()

    
    base3.display()
    fill("brown")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()  
   
    box13.display()
    box14.display()
    box15.display()
    
    box16.display()

 
    Box1.display()
    Box2.display()
    Box3.display()
    Box4.display()
    Box5.display()
    Box6.display()
    Box7.display()
   
    Box8.display()
    Box9.display()
    Box10.display()
    Box11.display()
    Box12.display()
   
    Box13.display()
    Box14.display()
    Box15.display()
   
    Box16.display()


    rubber.display()
    var pos = polygon.position

    push()
    imageMode(CENTER)
    image(polygonImg,pos.x,pos.y,70,70)
    pop()

    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    rubber.fly()
}

