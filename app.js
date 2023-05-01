const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

let record;

record = DataService.getRecord()
console.log(record)

let bar = new Bar(myCanvas.width / 2, myCanvas.height / 1.3, 100)

let speed = 7;

let ball = new Ball(3, 0, 0, 15, 0, Math.PI * 2)

let counter = 0;

let power;

let pointsUp;

setInterval(() => {
    power = new SizeUp()
}, 12000 + ((Math.random()) * 12000));


setInterval(() => {
    pointsUp = new PointsUp()
}, 15000 + ((Math.random() * 15000)));



function ballMove() {
    ball.draw(ctx);
    ball.changePosition();
    bar.draw(ctx);
    counter++;
    if (counter % 1000 === 0) {
        const increase = Math.random();
        if (ball.speedx > 0) { ball.speedx += increase }
        if (ball.speedx < 0) { ball.speedx -= increase }
        if (ball.speedy > 0) { ball.speedy += increase }
        if (ball.speedy < 0) { ball.speedy -= increase }
    }
    if (power) {
        power.draw(ctx);
        power.changePosition();
    }
    if (pointsUp) {
        pointsUp.draw(ctx);
        pointsUp.changePosition();
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

//timeOut reduce size

function reduce() {
    setTimeout(() => {
        bar.x += 25;
        bar.length -= 50;
        return
    }, 10000);

}

//timer

let pointCount = 0;

function displayTimer() {
    const points = document.getElementById('points');
    points.innerHTML = '';
    pointCount++;
    let pointsText = document.createTextNode(pointCount)
    points.appendChild(pointsText);
}

setInterval(() => {
    displayTimer()
}, 1000);