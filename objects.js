class SizeUp {

    constructor(length = 40, powered = false) {
        this.x = Math.random() * myCanvas.width - 50;
        this.y = 20;
        this.length = length;
        this.powered = powered;
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
        if((this.x >= bar.x && this.x <= bar.x+bar.length) && (this.y + 7 >= bar.y && this.y + 7 <= bar.y + 100)) {
            bar.x -= 25;
            bar.length += 50;
            this.x = 0;
           this.y = 0;
           this.length = 0;
           this.powered = true;
           reduce();
           return;
        }
  
    }

}