const Engine = Matter.Engine;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,world,drops
var maxDrops=100;
var drops = [];
var img1,img2,img3,img4

function preload(){
   img1 = loadImage("thunderbolt/1.png");
   img2 = loadImage("thunderbolt/2.png");
   img3 = loadImage("thunderbolt/3.png");
   img4 = loadImage("thunderbolt/4.png");
   bg = loadImage("bg.jpg");
}

function setup(){
   createCanvas(600,760);
   engine=Engine.create();
   world=engine.world;

   ground= createSprite(300,730,600,10)
   umbrella = new Umbrella(300,600)
  

   if(frameCount % 150 === 0){

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,600), random(0,400)));
    }

}
    
}

function draw(){
    background(bg)
   Engine.update(engine);
    
      for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
        
    }
    if(frameCount % 80 === 0){
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: thunder = createSprite(random(0,600),0,20,20);
                thunder.addImage("img",img1);
                thunder.lifetime=30
                thunder.scale=0.5
                break;  
        case 2: thunder = createSprite(random(0,600),0,20,20);
                thunder.addImage("img",img2);
                thunder.lifetime=30
                thunder.scale=0.5
                 break;
        case 3: thunder = createSprite(random(0,600),0,20,20);
                thunder.addImage("img",img3);
                thunder.lifetime=30
                thunder.scale=0.5
                 break;
        case 4: thunder = createSprite(random(0,600),0,20,20);
                thunder.addImage("img",img4);
                thunder.lifetime=30
                thunder.scale=0.5
                 break;  
                 default: break;        
    }   
} 
   
     umbrella.display();
   
     drawSprites();
}   

