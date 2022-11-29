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
score.src = "score.mp3";

//Variáveis

eec = 100; //Espaços entre os canos
constant;
bX = 33; //Posição X do bird
bY = 200; //Posição Y do bird
gravity = 1.4; //Gravidade
escore = 0; //Placar do jogo
