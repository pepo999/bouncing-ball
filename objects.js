class SizeUp {

    constructor(length = 40) {
        this.x = (Math.random() * myCanvas.width - 100) + 50;
        this.y = 0;
        this.length = length;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#fafafa';
        ctx.stroke()
        ctx.closePath()
        ctx.beginPath();
        ctx.arc(this.x, this.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill()
        ctx.closePath()
    }
    changePosition() {
        if (Math.random() > 0.2) {
            this.x += (Math.random() - Math.random());
        }
        this.y += 1;
        if ((this.x >= bar.x && this.x <= bar.x + bar.length) && (this.y + 7 >= bar.y && this.y + 7 <= bar.y + 20)) {
            bar.x -= 25;
            bar.length += 50;
            this.x = -500;
            this.y = 0;
            this.length = 0;
            pointCount += 10;
            reduce();
            return;
        }
    }
}

class PointsUp {

    constructor(powered = false) {
        this.x = 20 + (Math.random() * myCanvas.width - 20);
        this.y = 20;
        this.powered = powered;
    }

    draw(ctx) {

        ctx.beginPath();
        ctx.arc(this.x, this.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = 'yellow';
        ctx.fill()
        ctx.closePath()
        ctx.beginPath();
        ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#fafafa';
        ctx.stroke()
        ctx.closePath()
    }

    changePosition() {
        if (Math.random() > 0.2) {
            this.x += (Math.random() - Math.random());
        }
        if (this.powered === false) {
            this.y += 1;
        }
        if ((this.x >= bar.x && this.x <= bar.x + bar.length) && (this.y + 7 >= bar.y && this.y + 7 <= bar.y + 20)) {
            pointCount += 50;
            this.x = -50;
            this.y = -100;
            this.powered = true;
            return;
        }
    }
}