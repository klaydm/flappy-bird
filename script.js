canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

//Carregando imagens

bird = new Image();
bird.src = "images/bird.png";
bg = new Image();
bg.src = "images/bg.png";
chao = new Image;
chao.src = "images/chao.png";
canoCima = new Image();
canoCima.src = "images/canoCima.png";
canoBaixo = new Image();
canoBaixo.src = "images/canoBaixo.png";

//Carregando os sons

fly = new Audio();
fly.src = "sounds/fly.mp3";
score = new Audio();
score.src = "sounds/score.mp3";

//Variáveis

eec = 100; //Espaços entre os canos
var constant;
bX = 33; //Posição X do bird
bY = 200; //Posição Y do bird
gravity = 1.4; //Gravidade
escore = 0; //Placar do jogo
cano = [];

cano[0] = {
  x: canvas.width,
  y: 0
}

document.addEventListener("keydown", voa); //Cacturando tecla

function voa() {
  bY = bY - 26;
  fly.play();
}


function jogo() {
  ctx.drawImage(bg, 0, 0) //Desenhando o background
  
  for(let i = 0; i < cano.length; i++){
    constant = canoCima.height + eec; //posicionando o cano
    ctx.drawImage(canoCima, cano[i].x, cano[i].y)
    ctx.drawImage(canoBaixo, cano[i].x, cano[i].y + constant)
    cano[i].x = cano[i].x - 1;
    if(cano[i].x == 125) {
      cano.push({
        x: canvas.width,
        y: Math.floor(Math.random()*canoCima.height)-canoCima.height
      })
    }

  }
  ctx.drawImage(chao, 0, canvas.height - chao.height) //Desenhando o chão
  ctx.drawImage(bird, bX, bY); //Desenhando o pássaro
  bY += gravity; //Aplicando a gravidade
  requestAnimationFrame(jogo);  
}

jogo();