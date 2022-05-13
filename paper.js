class paper{
constructor(x,y,r){
    var config = {
        isStatic:false,restitution:0.3,friction:0,density:1.2
    }
    this.r = r
    this.ball = loadImage("paper.png")
    this.body = Bodies.circle(x,y,r,config)
    World.add(world,this.body)
}
display(){image(this.ball,this.body.position.x,this.body.position.y,this.r,this.r)}

}