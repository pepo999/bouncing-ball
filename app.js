const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

let bar = new Bar(myCanvas.width/2, myCanvas.height/1.3, 100)

let speed = 7;

let ball = new Ball(myCanvas.width/2, myCanvas.height/2, 10, 0, Math.PI * 2, speed)

let counter = 0;

function ballMove() {
    ball.draw(ctx);
    ball.changePosition();
    bar.draw(ctx);
    counter++;
    if(counter % 100 === 0) {
        ball.speed += 100;
        console.log('speed increase ' + speed)
    }
    window.requestAnimationFrame(ballMove)
}

window.requestAnimationFrame(ballMove)

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
     bar.rightPressed = true;
     bar.x += 7;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        bar.leftPressed = true;
        bar.x -= 7;
    }
  }
  
  function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        bar.rightPressed = false;
   
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        bar.leftPressed = false;
    }
  }


 
  