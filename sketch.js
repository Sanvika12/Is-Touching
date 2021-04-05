var moving_object, target, rectangle, square;


function setup() {
  createCanvas(800,400);
  moving_object = createSprite(100, 350, 80, 80);
  target = createSprite(350, 300, 90, 90);
  rectangle = createSprite(500, 200, 80, 80);
  square = createSprite(200, 150, 80, 80);
  moving_object.debug=true
  target.debug=true
  rectangle.debug=true
  square.debug=true

}

function draw() {
  background("Pink");  

  moving_object.x = mouseX;
  moving_object.y = mouseY;

  //console.log(ob1.x-ob2.x);
  if(is_Touching(moving_object, square)){
    square.width=90;
    square.height=90;
    square.shapeColor="green"
  }
  else{
    square.shapeColor="white"
  }
  if(is_Touching(moving_object, rectangle)){
    rectangle.width=100;
    rectangle.height=90;
    rectangle.shapeColor="blue"
  }
  else{
    rectangle.shapeColor="lightblue"
  }
  
  if(is_Touching(moving_object, target)){
   target.shapeColor="purple"
  }
  else{
    target.shapeColor="blue"
  }

  drawSprites();
}
