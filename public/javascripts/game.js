var snake;
var food;
var scl = 20;

function setup() {
   createCanvas(700, 700);
   snake = new Snake();
   food = new Food();
}

function draw() {
   background(100);
   frameRate(10)
   //snake.updateScale();
   snake.updatePosition()
   snake.show();

   //If true, snake is on top of food and can eat it
   if (food.getX() === snake.getX() && food.getY() === snake.getY()) {
      snake.eat(); //Update foodEaten for Snake
      food.newFood(); //Change position of food to a new random coordinate
   }
   food.drawFood(); //Draw the food

}

function keyPressed() {
   if (keyCode === UP_ARROW) {
      snake.direction(0, -1);
   }
   else if (keyCode === DOWN_ARROW) {
      snake.direction(0, 1);
   }
   else if (keyCode === RIGHT_ARROW) {
      snake.direction(1, 0);
   }
   else if (keyCode === LEFT_ARROW) {
      snake.direction(-1, 0);
   }
}

function pickLocation() {
   //var cols = floor(wid)
}

function Snake() {
   this.x = randPlace();
   this.y = randPlace();
   this.xspeed = 1;
   this.yspeed = 0;
   this.foodEaten = 0;

   this.updatePosition = function() {
      this.x = this.x + this.xspeed * scl;
      this.y = this.y + this.yspeed * scl;
   }

   //Draw the snake
   this.show = function() {
      fill('green');
      rect(this.x, this.y, 20,20);
   }

   //Change the direction of the snake
   this.direction = function(x, y) {
      this.xspeed = x;
      this.yspeed = y;
   }

   this.updateScale = function() {
      scale = document.getElementById('scaleInput').value;
      console.log(scale);
   }

   this.eat = function() {
      this.foodEaten++;
      console.log("Food eaten");
   }

   this.getX = function() {
      return this.x;
   }

   this.getY = function() {
      return this.y;
   }
}

function Food() {
   this.x = randPlace();
   this.y = randPlace();

   this.drawFood = function() {
      fill(255, 204, 0);
      ellipse(this.x, this.y, 20, 20);
   }

   this.newFood = function() {
      this.x = randPlace();
      this.y = randPlace();
   }

   this.getX = function() {
      return this.x;
   }

   this.getY = function() {
      return this.y;
   }
}

//return a random number within 0-699
function randPlace() {
   return Math.floor(Math.random() * 700);
}
