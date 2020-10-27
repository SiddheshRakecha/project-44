var database;

function setup() {
  createCanvas(800,400);
  database = firebase.database();

}

function draw() {
  background(255,255,255);  
  drawSprites();
}