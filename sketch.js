var dog
var doggyImage, happydog
const database= firebase.database()
var foods

function preload()
{
	doggyImage= loadImage("images/dogImg.png")
  happydog= loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500)

  dog= createSprite(250, 300, 50, 50)
  dog.addImage(doggyImage)
  dog.scale= 0.3
  
  /*var Pageno2=database.ref('/')
  Pageno2.update({
    Food:20
  })*/
  writedata(20)

  var Pageno=database.ref("Food")
  Pageno.on("value", function(data){
  foods= data.val()
  })
}


function draw() {  

  background(46, 139, 87)

if(keyWentDown(UP_ARROW)) {
  foods= foods-1
  if(foods<0) {
    foods= 0
  }
  writedata(foods)
  dog.addImage(happydog)
}


textSize(20)
fill("red")
stroke("white")
text("Press UP ARROW key to feed the dog", 150, 50)

text("Food remaning :"+foods, 250, 150)
drawSprites()


}

function writedata(foods) {
  var Pageno=database.ref('/')
  Pageno.update({
    Food:foods
  })

}



