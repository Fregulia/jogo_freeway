let ator;
let xAtor = 50
let yAtor = 365
let colisao = false
let pontos = 0

function vaca(){
  image(ator, 50, yAtor, 35, 35);
}
function vacaanda (){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 5
  }
  if (keyIsDown(DOWN_ARROW)){
      yAtor += 5
    }
}

function retorna(){
  if (yAtor > 400) {
    yAtor = 365
  }
}

function colidiram (){
  for(let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i],
    comprimento, altura, xAtor + 20, yAtor + 20, 10);
    
    if(colisao){
      colidiu();
    }
  }
}
function colidiu (){
  yAtor = 365; 
  somColisao.play();
  if (pontos > 0){
    pontos --;
  }
}

function ponto() {
  textAlign(CENTER)
  textSize(25)
  fill(color(64,224,208))
  text(pontos, width / 4, 27)
  
}
function marcaPonto(){
  if (yAtor < 15){
    somPontos.play();
    pontos ++
    yAtor = 365
  }
}