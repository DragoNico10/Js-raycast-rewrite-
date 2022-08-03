class Player{
    constructor(){
        this.costume0
    }
    preloadCostumes(){
        this.costume0=loadImage("./Player.png")
    }
    setup(){
        this.sprite = createSprite(200, 200, 20, 20)
        this.sprite.addImage("0", this.costume0)
        this.sprite.changeImage("0")
        this.health=100
        this.sprite.scale = 0.06
        this.sprite.setCollider("circle", 0, 0, 50)
    }
    run(){
        FPS = Math.round(30/DELTA)
        this.playerTick()
        this.initalizeRaycaster()
    }
    playerTick(){
        if(keyIsDown(39)){
            this.sprite.rotation += Math.round(0.5*DELTA)
        }
        if(keyIsDown(37)){
            this.sprite.rotation -= Math.round(0.5*DELTA)
        }
        if(keyIsDown(38)||keyIsDown(87)){
            move(this.sprite, 5*DELTA, this.sprite.rotation)-this.sprite.rotation/2
        }
        if(keyIsDown(40)||keyIsDown(83)){
            move(this.sprite, -5*DELTA, this.sprite.rotation)-this.sprite.rotation/2
        }
        if(keyIsDown(68)){
            move(this.sprite, -5*DELTA, this.sprite.rotation-90)-this.sprite.rotation/2
        }
        if(keyIsDown(65)){
            move(this.sprite,-5*DELTA, this.sprite.rotation+90)-this.sprite.rotation/2
        }
        /*this.sprite.collide(level.level)
        switch(debugMode){
            case 'false':
                this.sprite.debug=0
                break
            case 'true':
                this.sprite.debug=1
                break
        }   */
    }
    initalizeRaycaster(){
        DIR=this.sprite.rotation
        DV=200/(Math.tan(FOV/2))
        drawDist=[9999]
        drawType=[,]
        drawX=[,]
        Draw_IDX=1
    }
}