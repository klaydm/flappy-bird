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

const fly = new Audio();
fly.src = "sounds/fly.mp3";
const audio = new Audio();
audio.src = "sounds/score.mp3";

//Variáveis

eec = 100; //Espaços entre os canos
var constant;
bX = 33; //Posição X do bird
bY = 200; //Posição Y do bird
gravity = 1.4; //Gravidade
score = 0; //Placar do jogo
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
    //Configurando morte do pássaro
    if(bX + bird.width >= cano[i].x && bX <= cano[i].x + canoCima.width 
      && (bY <= cano[i].y + canoCima.height || bY + bird.height >= cano[i].y + constant)
      || bY + bird.height >= canvas.height - chao.height){
        location.reload();
    }
    //Marcando ponto
    if(cano[i].x == 5){
      score = score + 1;
      audio.play();
    }

  }
  ctx.drawImage(chao, 0, canvas.height - chao.height) //Desenhando o chão
  ctx.drawImage(bird, bX, bY); //Desenhando o pássaro
  bY += gravity; //Aplicando a gravidade
  //Criando o placar do jogo
  ctx.fillStyle = "#000";
  ctx.font = "20px Verdana";
  ctx.fillText("Placar: " + score, 10, canvas.height - 20);

  requestAnimationFrame(jogo);  
}

jogo();