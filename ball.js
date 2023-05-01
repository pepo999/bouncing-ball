class Ball {
    constructor(speed, x, y, radius, startAngle = 0, endAngle = Math.PI * 2) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.speedx = 1 * speed;
        this.speedy = 1 * speed;
        this.speed = speed;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
        ctx.fillStyle = 'black';
        ctx.fill()
        ctx.closePath()
    }

    changePosition() {  
        this.x += this.speedx;
        this.y += this.speedy;
        if (this.x <= 0) {
            this.speedx *= -1
        }
        if (this.y <= 0) {
            this.speedy *= -1
        }
        if (this.x >= myCanvas.width) {
            this.speedx *= -1
        }
        if (this.y >= myCanvas.height) {
            this.speedy *= -1
            console.log('GAME OVER');
            const recordContainer = document.getElementById('record');
            const oldRecord = recordContainer.innerHTML;
            if(pointCount >= oldRecord) {
                putRecord()
            }
        }
        //collision
        if((this.y >= bar.y - ball.radius/ 2 && this.y - ball.radius <= bar.y) && (this.x > bar.x && this.x < bar.x + bar.length)) {
            this.speedy *= -1;
        }  
      
    }

}