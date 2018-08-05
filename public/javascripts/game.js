var snake;

function setup() {
   createCanvas(700, 700);
   snake = new Snake();
}

function draw() {
   background(100);
   frameRate(10)
   //snake.updateScale();
   snake.updatePosition()
   snake.show();
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

function Snake() {
   this.x = Math.floor(Math.random() * 700);
   this.y = Math.floor(Math.random() * 700);
   this.xspeed = 1;
   this.yspeed = 0;
   this.scale = 4;

   this.updatePosition = function() {
      this.x = this.x + this.xspeed * this.scale;
      this.y = this.y + this.yspeed * this.scale;
   }

   this.show = function() {
      fill(255);
      rect(this.x, this.y, 10,10);
   }

   this.direction = function(x, y) {
      this.xspeed = x;
      this.yspeed = y;
   }

   this.updateScale = function() {
      var scale = document.getElementById('scaleInput').value;
      console.log(scale);
   }
}
