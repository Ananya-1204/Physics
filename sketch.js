var engine, world;
var ground;
var ball;

function setup() {
    createCanvas(400, 400);
    engine = Matter.Engine.create();
    world = engine.world;

    var ground_options={
        isStatic: true
        }

    ground = Matter.Bodies.rectangle(200, 385, 400, 25, ground_options);
    Matter.World.add(world, ground);

    var circle_options={
        isStatic: false,
        restitution: 1,
        density: 3
    }

    ball = Matter.Bodies.circle(200, 10, 30, circle_options);
    Matter.World.add(world, ball);
}




function draw() {
    background(0);
    Matter.Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 25);

    circle(ball.position.x, ball.position.y, 30);
}


