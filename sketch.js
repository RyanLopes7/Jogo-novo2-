var world;
var trex, trexImg;
var chaoinvisivel;
var objetoImg;
objeto2, objeto3, objeto4, objeto5, objeto6, objeto7, objeto8, objeto9;
var obstaculo;
function preload() {
  world = loadImage("assets/fundo.jpg");
  trexImg = loadImage("assets/personagem/Idle (1).png");
  objetoImg = loadImage("assets/Barrel.png");
  objeto2Img = loadImage("assets/Barrel2.png");
  objeto3Img = loadImage("assets/BGTile (1).png");
  objeto4Img = loadImage("assets/BGTile (2).png");
  objeto5Img = loadImage("assets/BGTile (3).png");
  objeto6Img = loadImage("assets/BGTile (4).png");
  objeto7Img = loadImage("assets/BGTile (5).png");
  objeto8Img = loadImage("assets/BGTile (6).png");
  objeto9Img = loadImage("assets/BGTile (7).png");
}
function setup() {
  createCanvas(600, 600);

  //funcao de adicioanar os objetos
  trex = createSprite(250, 200, 40, 40);
  trex.addImage(trexImg);
  trex.scale = 0.2;

  trex.setCollider("rectangle", -100, 40, 130, 270);
  trex.debug = true;

  // objeto = createSprite(100, 500, 30, 30);
  // objeto.addImage(objetoImg);
  // objeto.scale = 0.2;

  // objeto2 = createSprite(150, 50, 30, 30);
  // objeto2.addImage(objeto2Img);
  // objeto2.scale = 0.2;

  objeto3 = createSprite(100, 550, 30, 30);
  chaoinvisivel_1 = createSprite(100, 545, 50, 20);
  objeto3.addImage(objeto3Img);
  objeto3.scale = 0.2;

  objeto4 = createSprite(400, 550, 30, 30);
  chaoinvisivel_2 = createSprite(400, 550, 50, 20);
  objeto4.addImage(objeto4Img);
  objeto4.scale = 0.2;

  objeto5 = createSprite(460, 470, 30, 30);
  chaoinvisivel_3 = createSprite(46, 465, 50, 20);
  objeto5.addImage(objeto5Img);
  objeto5.scale = 0.2;

  objeto6 = createSprite(40, 470, 30, 30);
  chaoinvisivel_4 = createSprite(40, 465, 50, 20);
  objeto6.addImage(objeto6Img);
  objeto6.scale = 0.2;

  objeto7 = createSprite(530, 400, 30, 30);
  chaoinvisivel_5 = createSprite(530, 395, 50, 20);
  objeto7.addImage(objeto7Img);
  objeto7.scale = 0.2;

  objeto8 = createSprite(150, 400, 30, 30);
  chaoinvisivel_6 = createSprite(150, 395, 50, 20);
  objeto8.addImage(objeto8Img);
  objeto8.scale = 0.2;

  objeto9 = createSprite(300, 370, 30, 30);
  chaoinvisivel_7 = createSprite(300, 365, 50, 20);
  objeto9.addImage(objeto9Img);
  objeto9.scale = 0.2;

  // funcao de adicionar o chao invisivel

  chaoinvisivel = createSprite(300, 590, 600, 20);
  //chaoinvesivel.viseble = false
}

function draw() {
  background(world);

  trex.velocityY = trex.velocityY + 1;

  trex.collide(chaoinvisivel);
  trex.collide(chaoinvisivel_1);
  trex.collide(chaoinvisivel_2);
  trex.collide(chaoinvisivel_3);
  trex.collide(chaoinvisivel_4);
  trex.collide(chaoinvisivel_5);
  trex.collide(chaoinvisivel_6);
  trex.collide(chaoinvisivel_7);

  if (keyDown("space") && trex.y > 532) {
    trex.velocityY = -13;
  }

  //
  if (keyIsDown(RIGHT_ARROW)) {
    trex.x += 3;
  }

  if (keyIsDown(LEFT_ARROW)) {
    trex.x -= 3;
  }

  drawSprites();
}
