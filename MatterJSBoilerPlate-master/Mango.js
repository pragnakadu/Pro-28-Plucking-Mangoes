class mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			//density:1.2
			

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("Plucking mangoes/mango.png")
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		
		World.add(world, this.body);

	}
	display()
	{
			
			var mangoPos=this.body.position
				
            
			push()
			translate(mangoPos.x, mangoPos.y);
			rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(3);
			fill("yellow")
			imageMode(CENTER)
			ellipseMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)

			//image(this.body.position.x,this.body.position.y,this.r*3,this.r*3)
			pop()
			
	}

}