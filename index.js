const canvas=document.querySelector('canvas')
    const c= canvas.getContext('2d')

    canvas.width=1024
    canvas.height=576


   

const parsedCollisions = collisionsLevel1.parse2D()
const collisionBlocks=parsedCollisions.createObjectsFrom2D()


const player = new Player({collisionBlocks,
    imageSrc:'./img/king/idle.png',
    frameRate:11,
    animations:{
        idleRight:{
            frameRate:11,
            frameBugffer:2,
            loop:true,
            imageSrc:'./img/king/idle.png'
        },
        idleLeft:{
            frameRate:11,
            frameBugffer:2,
            loop:true,
            imageSrc:'./img/king/idleLeft.png'
        },
        runRight:{
            frameRate:8,
            frameBugffer:2,
            loop:true,
            imageSrc:'./img/king/runRight.png'
        },
        runLeft:{
            frameRate:8,
            frameBugffer:2,
            loop:true,
            imageSrc:'./img/king/runLeft.png'
        },
    }
})

    const backgroundLevel1=new Sprite({
        position:{
            x:0,
            y:0

        },
        imgSrc:'./img/backgroundLevel1.png'
    })


    function animate(){

        backgroundLevel1.draw()
        collisionBlocks.forEach(collisionBlocks=>{
            collisionBlocks.draw()
        })

        player.velocity.x=0
        if(keys.a.pressed) player.velocity.x=-5
         else if(keys.d.pressed) player.velocity.x=5
        
        window.requestAnimationFrame(animate)



        player.draw()
        player.update()   
        
    }

    const keys={
        w:{
            pressed:false
        },
        a:{
            pressed:false
        },
        d:{
            pressed:false
        }
    }

    animate()