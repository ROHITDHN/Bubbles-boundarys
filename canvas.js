var canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');
console.log(canvas.width);
console.log(canvas.height);
console.log(c);

function Circle(x,y,dx,dy,radius){
	console.log(x,y,dy.dx,radius);
	this.x=x;
	this.dx=dx;
	this.dy=dy;
	this.y=y;
	this.radius=radius;
	this.draw=function (){
			c.beginPath();
			c.arc(this.x,this.y,this.radius,0,2*Math.PI);
			c.strokeStyle="blue";
			c.stroke();
			c.fill();
						}

	this.update=function(){

		if(this.x + this.radius >window.innerWidth || this.x-this.radius<0){
			this.dx=-this.dx;
		}

		if(this.y + this.radius >window.innerHeight || this.y-this.radius<0){
			this.dy=-this.dy;
		}
		this.x +=this.dx;
		this.y +=this.dy;
		this.draw();
	}
}


var circleArray=[];
for (var i=0;i<200;i++){
	var x=Math.random()*(canvas.width-radius*2)+radius;
	console.log(x);
	var y=Math.random()*(canvas.height-radius*2)+radius;	
	var dy=(Math.random()-0.5)*5;
	var dx=(Math.random()-0.5)*5;
	var radius=30;
	circleArray.push(new Circle(x,y,dx,dy,radius));

}

function animate() {
	
	requestAnimationFrame(animate);
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
	
	console.log(circleArray);
	for (var i= 0;i < circleArray.length;i++){

		circleArray[i].update();

	}
										

}
console.log('this');
animate();

