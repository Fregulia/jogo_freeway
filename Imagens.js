let estrada;
let carro1;
let carro2;
let carro3;

let somColisao;
let somPontos;
let somTrilha;

function preload() {
  estrada = loadImage("Imagens/estrada.png")
  ator = loadImage("Imagens/ator-1.png")
  carro1 = loadImage ("Imagens/carro-1.png")
  carro2 = loadImage ("Imagens/carro-2.png")
  carro3 = loadImage ("Imagens/carro-3.png")
  imagemCarros = [carro1, carro2, carro3, carro1, carro2, carro3]
  
  somColisao = loadSound ("colidiu.mp3")
  somPontos = loadSound ("pontos.wav")
  somTrilha = loadSound ("trilha.mp3")
}