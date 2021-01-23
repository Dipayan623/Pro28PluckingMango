class mango 
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic:true,
         
            friction:1,
            density:4
        }
        this.body=Bodies.circle(x,y,r/2,options)
        this.r=r;
        World.add(world,this.body)

        this.image=loadImage("Images/mango.png")
        
    }

    display()
    {
        var mangopos=this.body.position
        mango.scale=2;

        imageMode(CENTER);
        image(this.image,mangopos.x,mangopos.y,this.r,this.r);
    }
}
