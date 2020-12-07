//Create variables here


var dog ,happyDog ,database , food,foodStock;
var dogImage,happyDogImage;







function preload()
{
  //load images here
  
 dog = loadImage(images/dogImg.png);
 happyDog = loadImage(images/dogImg1.png);





}

function setup() {
  createCanvas(500,500);
  
   dog=createSprite(250,250,20,20);
   dogImage.addImage(dog);

   database=firebase.database();
   foodStock=database.ref("food");
   foodStock.on("value",readStock);










  
}


function draw() {  

  background(46,139,87);
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    happyDogImage.addImage(happyDog);
  }
  drawSprites();
  text("FOOD STOCK REMAINING",220,220);
  textSize(35);
  fill ("black");
  stroke ();
  text("press UP_ARROW key to feed watkins",220,10);
  textSize(20);
  fill("white");
  stroke();
}


function readStock(data){
  food=data.val();
}


function writeStock(x){


  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    food:x
  })
}



















