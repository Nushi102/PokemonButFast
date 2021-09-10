var PLAY = 1;
var END = 0;
var gameState = PLAY;
var pikachuImg, eeveeImg, voltorbImg,rightEdgeImg;
var pokeballImg,trainerImg;
var scene,backgroundImg,rightEdge;
var trainer ;
var eeveeG, pikachuG, voltorbG;
var pokeballG
var score=0;
var path1, path2, path3;

function preload(){
    backgroundImg = loadImage("Grass_Background.png");
    pokeballImg = loadAnimation("Pokeball1.png","Pokeball2.png");
    trainerImg = loadImage("Trainer.png");
    pikachuImg = loadAnimation("Pikachu1.png","Pikachu2.png");
    eeveeImg = loadAnimation("Eevee1.png","Eevee2.png");
    voltorbImg = loadAnimation("Voltorb1.png","Voltorb2.png","Voltorb3.png","Voltorb4.png");
    pathImg = loadImage("Path.png")
}
function setup(){
createCanvas(600,500);



scene = createSprite(200,250);
scene.addImage(backgroundImg);
scene.velocityX=-5;

trainer = createSprite(500,250);
trainer.addImage(trainerImg);
trainer.scale=2.5;
trainer.velocityY=50;


edge= createEdgeSprites()

path1 = createSprite(300,50)
path1.addImage(pathImg);
path1.scale=15

path2 = createSprite(300,250)
path2.addImage(pathImg);
path2.scale=15

path3 = createSprite(300,450)
path3.addImage(pathImg);
path3.scale=15

trainer.depth=path3.depth
trainer.depth=trainer.depth+1

eeveeG= new Group();
pikachuG= new Group();
voltorbG= new Group();
pokeballG= new Group();

score = 0;    

trainer.debug=true
}


function draw(){

background(0);   

if(gameState === PLAY){



if(scene.x<0){
   scene.x=width/2;
}

if(trainer.y>475||trainer.y<25){
    trainer.velocityY=-trainer.velocityY;
}

if (keyDown("space")) {
  createPokeball();
  
}
   
var Select_Pokemon_Coordinates = Math.round(random(1,9));
  
  if (World.frameCount % 100 == 0) {
    if (Select_Pokemon_Coordinates == 1) {
      letsGoEevee1();
    } else if (Select_Pokemon_Coordinates == 2) {
      letsGoEevee2();
    } else if (Select_Pokemon_Coordinates == 3) {
      letsGoEevee3();
    } else if (Select_Pokemon_Coordinates == 4)  {
      letsGoPikachu1();
    } else if (Select_Pokemon_Coordinates == 5)  {
      letsGoPikachu2();
    } else if (Select_Pokemon_Coordinates == 6)  {
      letsGoPikachu3();
    } else if (Select_Pokemon_Coordinates == 7)  {
      letsGoVoltorb1();
    } else if (Select_Pokemon_Coordinates == 8)  {
      letsGoVoltorb2();
    } else if (Select_Pokemon_Coordinates == 9)  {
      letsGoVoltorb3();
    }
  } 
  if(pokeballG.isTouching(eeveeG))
  {
  pokeballG.destroyEach();
  eeveeG.destroyEach();
  score=score+2;
  }
  if(pokeballG.isTouching(pikachuG))
  {
  pokeballG.destroyEach();
  pikachuG.destroyEach();
  score=score+1;
  }
  if(pokeballG.isTouching(voltorbG)){
    pokeballG.destroyEach();
    voltorbG.destroyEach();
    gameState = END;
  } 
  if(pikachuG.collide(edge[1])||eeveeG.collide(edge[1])){
    gameState = END;
  }

  
  
}
drawSprites();
text("Score: "+ score, 300,50);
if(gameState === END){
  background(0)
  fill("yellow")
  textSize(30)
  text("Game Over",230,250)
  
  }


}
function createPokeball() {
  var pokeball= createSprite(100, 100);
  pokeball.addAnimation("Go_Pokeball",pokeballImg);
  pokeball.x = 360;
  pokeball.y=trainer.y;
  pokeball.velocityX = -4;
  pokeball.lifetime = 100;
  pokeball.scale = 0.3;
  pokeball.rotation=270
  pokeballG.add(pokeball);
}


  function letsGoEevee1() {
    var eevee = createSprite(50,50);
    eevee.addAnimation("Eevee_Running",eeveeImg);
    eevee.velocityX = 3;
    eevee.lifetime = 500;
    eevee.scale = 3;
    eeveeG.add(eevee);
  }
  function letsGoEevee2() {
    var eevee = createSprite(50,250);
    eevee.addAnimation("Eevee_Running",eeveeImg);
    eevee.velocityX = 3;
    eevee.lifetime = 500;
    eevee.scale = 3;
    eeveeG.add(eevee);
  }

  function letsGoEevee3() {
    var eevee = createSprite(50,450);
    eevee.addAnimation("Eevee_Running",eeveeImg);
    eevee.velocityX = 3;
    eevee.lifetime = 500;
    eevee.scale = 3;
    eeveeG.add(eevee);
  }

  function letsGoPikachu1() {
    var pikachu = createSprite(50,50);
    pikachu.addAnimation("Pikachu_Running",pikachuImg);
    pikachu.velocityX = 3;
    pikachu.lifetime = 500;
    pikachu.scale=1.5;
    pikachuG.add(pikachu);
  }

  function letsGoPikachu2() {
    var pikachu = createSprite(50,250);
    pikachu.addAnimation("Pikachu_Running",pikachuImg);
    pikachu.velocityX = 3;
    pikachu.lifetime = 500;
    pikachu.scale=1.5;
    pikachuG.add(pikachu);
  }

  function letsGoPikachu3() {
    var pikachu = createSprite(50,450);
    pikachu.addAnimation("Pikachu_Running",pikachuImg);
    pikachu.velocityX = 3;
    pikachu.lifetime = 500;
    pikachu.scale=1.5;
    pikachuG.add(pikachu);
  }

  function letsGoVoltorb1() {
    var voltorb = createSprite(50,50);
    voltorb.addAnimation("Voltorb_Rolling",voltorbImg);
    voltorb.velocityX = 3;
    voltorb.lifetime = 500;
    voltorb.scale=3;
    voltorbG.add(voltorb);
    voltorb.rotation=270;

  }

  function letsGoVoltorb2() {
    var voltorb = createSprite(50,250);
    voltorb.addAnimation("Voltorb_Rolling",voltorbImg);
    voltorb.velocityX = 3;
    voltorb.lifetime = 500;
    voltorb.scale=3;
    voltorbG.add(voltorb);
    voltorb.rotation=270;

  }

  function letsGoVoltorb3() {
    var voltorb = createSprite(50,450);
    voltorb.addAnimation("Voltorb_Rolling",voltorbImg);
    voltorb.velocityX = 3;
    voltorb.lifetime = 500;
    voltorb.scale=3;
    voltorbG.add(voltorb);
    voltorb.rotation=270;


  }

  function reset(){
    
  }


