export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.speed = 0.07;
    this.cur = index; // 현재 포인트 값
    this.max = Math.random() * 100 + 150; // 얼마만큼 움직일 것인지 max값
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
