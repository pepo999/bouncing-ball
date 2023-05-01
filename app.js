const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

let bar = new Bar(myCanvas.width/2, myCanvas.height/1.3, 100)

let speed = 7;

let ball = new Ball(3, myCanvas.width/2, myCanvas.height/2, 15, 0, Math.PI * 2)

let counter = 0;

let power;

setInterval(() => {
     power = new SizeUp()
}, 12000 * (Math.random() * 2));
// }, 9000);


function ballMove() {
    ball.draw(ctx);
    ball.changePosition();
    bar.draw(ctx);
    counter++;
    if(counter % 1000 === 0) {
       if(ball.speedx > 0) {ball.speedx+= 0.4}
       if(ball.speedx < 0) {ball.speedx-= 0.4}
       if(ball.speedy > 0) {ball.speedy+= 0.4}
       if(ball.speedy < 0) {ball.speedy-= 0.4}
    }
    if(power) {
        power.draw(ctx);
        power.changePosition();
    }
    window.requestAnimationFrame(ballMove)
}

window.requestAnimationFrame(ballMove)

//keys

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
     bar.rightPressed = true;
     bar.x += 10;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        bar.leftPressed = true;
        bar.x -= 10;
    }
  }
  
  function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        bar.rightPressed = false;
   
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        bar.leftPressed = false;
    }
  }

  
function reduce(){
    setTimeout(() => {
        bar.x += 25;
    bar.length -= 50;
   return
    }, 10000);
   
}


  