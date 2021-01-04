class Drops{
    constructor(x,y){
        var options={
          friction:0.01,
        //  isStatic: true
          
        }
       
        this.body=Bodies.circle(x,y,6,options);
        World.add(world,this.body)
    }
     updateY(){
       if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,400)})
       }
    }
    display(){
        strokeWeight(1);
        stroke("blue")
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,6,6);

    }
}