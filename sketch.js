function setup() {
  createCanvas(650, 400);
  somTrilha.loop();
}

function draw() {
  background(estrada);
  carros();
  correr();
  loopCarros();
  
  vaca();
  vacaanda();
  colidiram();
  ponto();
  marcaPonto();
  retorna();
  
}



