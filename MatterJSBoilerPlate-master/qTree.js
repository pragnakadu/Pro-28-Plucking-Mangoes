class Tree
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
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.image=loadImage("Plucking mangoes/tree.png")
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		
            this.image.scale = 0.1
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill("green")
			imageMode(CENTER);
			//rect(0,0,this.w, this.h);
			//this.image.scale = 0
			image(this.image,this.x,this.y,this.width/2, this.height/2)
			pop()
			
	}

}