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
        // this.speedy += 0.15;
        this.speedy += 0.3
        if (this.x <= 0 + ball.radius) {
            this.speedx *= -1
        }
        
        if (this.y -this.radius <= 0) {
            this.speedy += 1;
        }
        // if (this.y + this.radius + 30 <= 0) {
        //     // this.speedy *= -1
        //     // this.speedy = 0;
        //     this.speedy += 0.1;
        // }
        if (this.x >= myCanvas.width - this.radius) {
            this.speedx *= -1
        }
        if (this.y >= myCanvas.height) {
            this.x = Infinity
            this.speedy *= -Infinity
            // console.log('GAME OVER');
            const recordContainer = document.getElementById('record');
            const oldRecord = recordContainer.innerHTML;
            // console.log(oldRecord)
            if (pointCount >= oldRecord) {
                putRecord()
            }
            end()
        }
        //collision
        if (((this.y >= bar.y - ball.radius || this.y >= bar.y - ball.radius + 1)  && this.y - ball.radius <= bar.y) && (this.x > bar.x && this.x < bar.x + bar.length)) {
            this.speedy *= -0.985;
            this.speedy -= 0.03;
        }
        if ((this.x + this.radius === bar.x) && (this.y <= bar.y && this.y >= bar.y + 12)) {
            this.x *= -1;
        }
        if ((this.x - this.radius === bar.x + bar.length) && (this.y <= bar.y && this.y >= bar.y + 12)) {
            this.x *= -1;
        }
    }

}