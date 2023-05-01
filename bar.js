class Bar {

constructor(x, y, length){
    this.x = x;
    this.y = y;
    this.length = length;
}

static rightPressed = false;
static leftPressed = false;

draw(ctx) {
    if (this.rightPressed) {
        this.x += 7;
      } else if (this.leftPressed) {
        this.x -= 7;
      }
      if(this.x <= 0) {
        this.x = 0;
      }
      if(this.x >= myCanvas.width-100) {
        this.x = myCanvas.width-100;
      }
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.length, 10);
    ctx.fill();
}


}