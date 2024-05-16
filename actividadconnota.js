// posiciones
let ellX1 = 350
let ellY1 = 100
let ellX2 = 200
let ellY2 = 100
//velocidades
let movX1 = 2
let movY1 = 2
let movX2 = 5
let movY2 = 5
//colores
let r1 = 255
let g1 = 0
let b1 = 0

let r2 = 0
let g2 = 0
let b2 = 255
// hipotenusa
let h2 = 0
let distancia = 10
function setup() {
  createCanvas(600,600)
}
function draw() {
  background(200,200,200)
  fill(r1,g1,b1)
  ellipse(ellX1,ellY1,50,50)
  fill(r2,g2,b2)
  ellipse(ellX2,ellY2,50,50)
  ellX1 = ellX1 + movX1
  ellY1 = ellY1 + movY1
  ellX2 = ellX2 + movX2
  ellY2 = ellY2 + movY2
  
  text(ellX1, 100,100) 
  text(ellY1, 200,200) 
  text(ellX2, 300,300) 
  text(ellY2, 400,400) 
   
  if(ellX1 > 575 || ellX1 < 25){
    movX1 = movX1 * (-1)
  }
  
  if(ellX2 > 575 || ellX2 < 25){
    movX2 = movX2 * (-1)
    text("true",200,300)
  }
  if(ellY1 > 575 || ellY1 < 25){
    movY1 = movY1 * (-1)
  }
  if(ellY2 > 575 || ellY2 < 25){
    movY2 = movY2 * (-1)
  }
  h2 =((ellY1 - ellY2)* (ellY1 - ellY2)) + ((ellX1 - ellX2) * (ellX1 - ellX2))
  distancia =sqrt(h2);
  text(distancia, 350,500)
  if(distancia < 50){
    text("colicion",0,500)
        movX1 = movX1 * (-1)
        movY2 = movY1 * (-1)
        movX2 = movX2 * (-1)
        movY2 = movY2 * (-1)
  }
}
