class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.image=loadImage("Plucking mangoes/tree.png")
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var treePos=this.body.position;		

			push()
			translate(treePos.x, treePos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("green")
			imageMode(CENTER)

			rect(0,0,this.w, this.h);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}