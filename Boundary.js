class Boundary {
    constructor(x1, y1, x2, y2) {
      this.a = createVector(x1, y1)
      this.b = createVector(x2, y2)
    }
    
    show() {
      push()
      colorMode(HSB)
      stroke(127, 80, 200)
      strokeWeight(2)
      scribble.scribbleLine(this.a.x, this.a.y, this.b.x, this.b.y)
      pop()
    }
  }