var helicopterIMG, helicopterSprite, packageSprite, packageIMG, box1, box2, box3;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.5, isStatic: true });
	World.add(world, packageBody);

	box1 = Bodies.rectangle(500, 660, 20, 200, { isStatic: true });
	World.add(world, box1)

	box2 = Bodies.rectangle(400, 750, 200, 20, { isStatic: true });
	World.add(world, box2)

	box3 = Bodies.rectangle(300, 660, 20, 200, { isStatic: true });
	World.add(world, box3);

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 730, width, 10, { isStatic: true });
	World.add(world, ground);


	Engine.run(engine);
}


function draw() {

	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	fill("red");

	rect(box1.position.x, box1.position.y, 20, 200);

	rect(box2.position.x, box2.position.y, 200, 20);

	rect(box3.position.x, box3.position.y, 20, 200);

	drawSprites();



}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(packageBody, false);

	}
}

