class SizeUp {

    constructor(length = 40) {
        this.x = (Math.random() * myCanvas.width - 100) + 50;
        this.y = 0;
        this.length = length;
    }

    draw(ctx) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(this.x, this.y, this.length, 7);
    }
    changePosition() {
        if (Math.random() > 0.2) {
            this.x += (Math.random() - Math.random());
        }
        this.y += 1;
        if ((this.x >= bar.x && this.x <= bar.x + bar.length) && (this.y + 7 >= bar.y && this.y + 7 <= bar.y + 100)) {
            bar.x -= 25;
            bar.length += 50;
            this.x = 0;
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
        this.x = Math.random() * myCanvas.width - 50;
        this.y = 20;
        this.powered = powered;
    }

    draw(ctx) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(this.x, this.y, 40, 5);
        ctx.fillRect(this.x + 17.5, this.y - 17.5, 5, 40);
    }

    changePosition() {
        if (Math.random() > 0.2) {
            this.x += (Math.random() - Math.random());
        }
        if(this.powered === false){
            this.y += 1;
        }   
        if ((this.x >= bar.x && this.x <= bar.x + bar.length) && (this.y + 7 >= bar.y && this.y + 7 <= bar.y + 100)) {
            pointCount += 50;
            this.x = -50;
            this.y = -100;
            this.powered = true;
            return;
        }
    }
}