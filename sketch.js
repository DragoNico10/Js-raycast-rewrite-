// From Daniel Shiffman's Coding Challenge #145: 2D Raycasting
// https://youtu.be/TOEi6T2mtHo

let walls = []
let particle
var DIR=100
var FPS
var FOV=60
var RES=8
var DV, DELTA=1
var drawDist=[], drawType=[], drawX=[], Draw_IDX
var player=new Player()
var preload=()=>{
  player.preloadCostumes()
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  player.setup()
  walls.push(new Boundary(0    , 0     , width, 0))
  walls.push(new Boundary(width, 0     , width, height))
  walls.push(new Boundary(width, height, 0    , height))
  walls.push(new Boundary(0    , height, 0    , 0))
  
  for (let i = 0; i < 5; i++) {
    let x1 = random(width)
    let y1 = random(height)
    let x2 = random(width)
    let y2 = random(height)
    wall = new Boundary(x1, y1, x2, y2)
    walls.push(wall)
  }
  
  particle = new Particle(100, 200)
}

function draw() {
  //DELTA=deltaTime
  background(0)
  player.run()
  particle.update()
  //particle.show()
  particle.look(walls)
  
  for (let wall of walls) {
    wall.show()
  }
}

function move(sprite, steps, angle){
  sprite.x += cos(angle)*steps;
  sprite.y += sin(angle)*steps;
}