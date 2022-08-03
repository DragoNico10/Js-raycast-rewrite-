class Particle {
    constructor() {
      this.pos = createVector(width / 2, height / 2)
      this.rays = []
      this.rayCount = RES*FOV
      this.currDIR=DIR
      for (let a =  DIR-FOV/2; a < FOV-0.1+(DIR); a += FOV / this.rayCount) {
        this.rays.push(new Ray(this.pos, radians(a)))
      }
    }
    
    update() {
      this.pos.set(player.sprite.x, player.sprite.y)
      if(this.currDIR!=DIR){
        this.rays=[]
        this.currDIR=DIR
        for (let a = DIR-FOV/2; a < FOV-0.1+(DIR); a += FOV / this.rayCount) {
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
            if (d < record) {
              closest = pt
              record = d
            }
          }
        }
        
        if (closest) {
          push()
          stroke(255, 100)
          strokeWeight(4)
          line(this.pos.x, this.pos.y, closest.x, closest.y)
          pop()
        }
      }
    }
    
    show() {
      noStroke()
      fill(255)
      ellipse(this.pos.x, this.pos.y, 16)
      
       /*for (const ray of this.rays) {
         ray.show()
       }*/
    }
  }