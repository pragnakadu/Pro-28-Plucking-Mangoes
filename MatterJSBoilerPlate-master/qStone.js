class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic: false,
			restitution:0,
			friction:1,
			density:0.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("Plucking mangoes/stone.png")
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			
			strokeWeight(3);
			fill("black")
			imageMode(CENTER)
             ellipseMode(RADIUS)
			 image(this.image,0,0,this.r*1.5,this.r*1.5	)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}