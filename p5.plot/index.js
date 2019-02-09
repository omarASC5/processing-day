function setup() {
	createCanvas(800, 600);

	var foo = new p5.Plot();
	var bar = [1, 0.2, -0.3, 0.5, -1]; // some data
	foo.plot({data: bar});


}

function draw() {
}