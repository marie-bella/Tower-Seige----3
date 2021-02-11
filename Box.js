class Box{
    constructor(x,y,width,height){
        var options ={
            isStatic:false,
            restitution:0.4

        };

        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height=height;
        World.add(world, this.body);
        this.Visibility=255;

    }

    display(){
        
         if(this.body.speed < 3){
         var angle = this.body.angle;
         var pos= this.body.position;
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         rectMode(CENTER);
         rect(0,0,this.width, this.height);
         pop();
         }
        else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         pop();
        
       }
}

    score(){
        if(this.Visibility<0 && this.Visibility >-105){
            score++;
        }
    }

}


