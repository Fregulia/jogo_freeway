let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 95, 147, 207, 263, 315]
let comprimento = 45
let altura = 45
let velocidade = [3, 7, 5, 9, 4, 6]

function carros (){
  for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimento, altura);
  }
}
function correr () {
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidade[i]
  }
  
}
function loopCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
    if (passouCarro (xCarros[i])){
    xCarros[i] = 680
  }
  }
}
function passouCarro(xCarro){
  return xCarro < - 50
}

