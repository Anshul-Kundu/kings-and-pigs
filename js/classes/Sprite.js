class Sprite{
    constructor({position,imgSrc,frameRate=1,animations}){
        this.position=position
        this.image=new Image()
        this.image.onload=()=>{
            this.loaded=true
            this.width=this.image.width/this.frameRate
            this.height=this.image.height
        }
        this.image.src=imgSrc
        this.loaded=false
        this.frameRate=frameRate
        this.currentFrame=0
        this.elapsedFrames=0
        this.frameBuffer=2
        this.animations=animations

        if(this.animations){
            for(let key in this.animations){
                const image=new Image()
                image.src=this.animations[key].imgSrc
                this.animations[key].image=image
            }
            console.log(this.animations)
        }
    }

    draw(){
        if(!this.loaded) return
        const cropbox={
            position:{
                x:this.width*this.currentFrame,
                y:0
            },
            width:this.width,
            height:this.height
        }
        c.drawImage(this.image,cropbox.position.x,cropbox.position.y,cropbox.width,cropbox.height,this.position.x,this.position.y,this.width,this.height)
    this.updateFrames()
    }

    updateFrames(){
        this.elapsedFrames++
        if(this.elapsedFrames%this.frameBuffer===0){
        if(this.currentFrame<this.frameRate-1) this.currentFrame++
        else this.currentFrame=0
    }}
}