class Particle {
    constructor() {
      this.pos = createVector(width / 2, height / 2)
      this.rays = []
      this.rayCount = RES*FOV
      this.currDIR=DIR
      this.currFOV=FOV
      this.currRES=RES
      for (let a = this.currDIR-this.currFOV/2; a <( this.currFOV/2)-0.1+(this.currDIR); a += (this.currFOV/2) / this.rayCount) {
        this.rays.push(new Ray(this.pos, radians(a)))
      }
    }
    
    update() {
      this.pos.set(player.sprite.x, player.sprite.y)
      if(this.currDIR!=DIR||this.currFOV!=FOV||this.currRES!=RES){
        this.rays=[]
        this.rayCount = RES*FOV
        this.currDIR=DIR
        this.currFOV=FOV
        this.currRES=RES
        for (let a = this.currDIR-this.currFOV/2; a < (this.currFOV/2)-0.1+(this.currDIR); a += (this.currFOV/2) / this.rayCount) {
          this.rays.push(new Ray(this.pos, radians(a)))
        }
      }
    }
    
    look(walls) {
      for (let ray of this.rays) {
        let closest = null
        let record = Infinity
        
        for (let wall of walls) {
          let pt = ray.cast(wall)
          if (pt) {
            const d = p5.Vector.dist(this.pos, pt)
            const height=4000/d
            if (d < record) {
              closest = pt
              record = d
            }
          }
        }
        
        if (closest) {
          push()
          colorMode(HSB)
          stroke(16, 36, 96)
          strokeWeight(4)
          line(this.pos.x, this.pos.y, closest.x, closest.y)
          pop()
        }
      }
    }
    
    show() {
      push()
      noStroke()
      colorMode(HSB)
      fill(203, 80, 125)
      scribble.scribbleEllipse(this.pos.x, this.pos.y, 16, 16)
      pop()
    }
  }