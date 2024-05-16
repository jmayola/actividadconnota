// posiciones
let ellX1 = 10
let ellY1 = 10
let ellX2 = 10
let ellY2 = 10
//velocidades
let movX1 = 5
let movY1 = 5
let movX2 = 10
let movY2 = 10


function setup() {
  createCanvas(600,600)
}
function draw() {
  ellipse(ellX1,ellY1,10,10)
  ellipse(ellX2,ellY2,10,10)
  
  ellX1 = ellX1 * movX1
  ellY1 = ellY1 * movY1
  ellX2 = ellX2 * movX2
  ellX2 = ellX2 * movY2
  
  if(ellX1 > 590 || ellX1 < 10){
    movX1 = movX1 * -1
  }
}
