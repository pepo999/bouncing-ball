const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');

let record;

function start() {
    const welcome = document.getElementById('welcome')
    welcome.style.display = 'none';
    myCanvas.style.display = 'block';
    const grid = document.getElementById('grid')
    grid.style.display = 'grid';
    const points = document.getElementById('points')
    const record = document.getElementById('record')
    points.style.display = 'block'
    record.style.display = 'block'
    points.style.color = '#fafafa'
    pointCount = 0;
    ballMove(false)
}

function end() {
    const recordContainer = document.getElementById('record');
    const gameover = document.getElementById('gameover')
    gameover.style.display = 'flex';
    myCanvas.style.display = 'none';
    const grid = document.getElementById('grid')
    grid.style.display = 'none';
    const points = document.getElementById('points')
    const oldRecord = recordContainer.innerHTML;
    if (pointCount <= oldRecord) {
        const gamoverContainer = document.getElementById('gameover');
        gamoverContainer.style.backgroundColor = 'rgba(235, 74, 59, 0.7)';
        const gameoverText = document.getElementById('gameover-text');
        const gameoverText1 = document.getElementById('gameover-text1');
        const pointsText = document.createTextNode('il tuo punteggio: ' + pointCount);
        const message = document.createTextNode('Non sei riuscito a battere il record precedente di ' + oldRecord + ' punti')
        gameoverText.appendChild(pointsText);
        gameoverText1.appendChild(message)
    } if (pointCount > oldRecord) {
        putRecord()
        const gamoverContainer = document.getElementById('gameover');
        gamoverContainer.style.backgroundColor = 'rgba(74, 235, 59, 0.7)';
        const gameoverText = document.getElementById('gameover-text');
        const gameoverText1 = document.getElementById('gameover-text1');
        const pointsText = document.createTextNode('il tuo punteggio: ' + pointCount);
        const message = document.createTextNode('Complimenti! sei riuscito a battere il record precedente di ' + oldRecord + ' punti')
        gameoverText.appendChild(pointsText);
        gameoverText1.appendChild(message)
    }
    points.style.display = 'none'
    recordContainer.style.display = 'none'
    ballMove(true)
}

function gameover() {
    location.reload()
}

let backgrounds = ['./assets/acquazzurra.jpg', './assets/laghettoplacido.jpg', './assets/stelle.jpg', './assets/pineforestlake.jpg', './assets/glitter.jpg', './assets/gattino.jpg', './assets/finestra.jpg']

function randomBackgroundImg() {
    myCanvas.style.backgroundImage = 'url' + '(' + backgrounds[Math.floor(Math.random() * 7)] + ')';
}

randomBackgroundImg()

DataService.getRecord().then(data => displayRecord(data))

let bar = new Bar(myCanvas.width / 2, myCanvas.height / 1.3, 100)

let speed = 7;

let ball = new Ball(1, myCanvas.width / 2, 15, 15, 0, Math.PI * 2)

let counter = 0;

let power;

let pointsUp;

setInterval(() => {
    power = new SizeUp()
}, 16000 + (Math.random()) * 12000);


setInterval(() => {
    pointsUp = new PointsUp()
}, 20000 + (Math.random() * 15000));



function ballMove(off) {
    if (off !== true) {
        ball.draw(ctx);
        ball.changePosition();
        bar.draw(ctx);
        counter++;
        if (counter % 1000 === 0) {
            const increase = Math.random() / 2;
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
    } else if (off === true) {
        ball.x = -500000000;
        ball.y = - 5000000;
        ball.speedx = 400000;
        ball.speedy /= 10000000000000000000000000;
    }
}

//keys

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        bar.rightPressed = true;
        bar.x += 10;
    } if (e.key === "Left" || e.key === "ArrowLeft") {
        bar.leftPressed = true;
        bar.x -= 10;
    }
    if (e.key === "Up" || e.key === "ArrowUp") {
        bar.UpPressed = true;
        bar.y -= 10;
    } if (e.key === "Down" || e.key === "ArrowDown") {
        bar.DownPressed = true;
        bar.y += 10;
    }

}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        bar.rightPressed = false;

    } if (e.key === "Left" || e.key === "ArrowLeft") {
        bar.leftPressed = false;
    }
    if (e.key === "Up" || e.key === "ArrowUp") {
        bar.rightPressed = false;

    } else if (e.key === "Down" || e.key === "ArrowDown") {
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

//timer and record

let pointCount = 0;

function displayTimer() {
    const points = document.getElementById('points');
    points.innerHTML = '';
    pointCount++;
    let pointsText = document.createTextNode('il tuo punteggio: ' + pointCount)
    points.appendChild(pointsText);
}

setInterval(() => {
    displayTimer()
}, 1000);

function displayRecord(data) {
    const recordContainer = document.getElementById('record');
    recordContainer.innerHTML = '';
    let recordNumber = document.createTextNode(data[0].points)
    recordContainer.appendChild(recordNumber);
}

//put function

function putRecord() {
    DataService.putRecord(pointCount)
}