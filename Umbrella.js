class Umbrella {
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.body=Bodies.circle(x,y-100,50,options)
        World.add(world,this.body);
        this.image=loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png",
        "Walking Frame/walking_3.png", "Walking Frame/walking_4.png",
        "Walking Frame/walking_5.png","Walking Frame/walking_6.png",
        "Walking Frame/walking_7.png","Walking Frame/walking_8.png")
        
    }
    display(){
        imageMode(CENTER);
        animation(this.image,this.x,this.y)
        
    }
}