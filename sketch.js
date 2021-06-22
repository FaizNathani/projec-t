var cat, catImg,cat2Img
var mouse, mouseImg
var backG ,backgImage



function preload() {
    //load the images here
    catImg= loadAnimation("images/cat1.png")
    cat2Img = loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg = loadAnimation('images/mouse1.png','images/mouse2.png','images/mouse3.png','images/mouse4.png')
    backgImage = loadImage("images/garden.png")

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    cat = createSprite(200,200)
    cat.addImage("catIm",catImg,cat2Img)
    
    
   

   
    //create tom and jerry sprites here


}

function draw() {
    
 
    background(backgImage)
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
