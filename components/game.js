AFRAME.registerComponent("game-play",{
    schema:{
        elementId: {type:"string",default:"#coin1"}
    },
    init:function(){
        var duration = 120
        var timere1 = document.querySelector("#timer")
        this.startTimer(duration,timere1)
    },
    isCollided:function(elementId){
        const element = document.querySelector(elementId)
        element.addEventListener("collide",e=>{
            if(elementId.includes("#coin")){
                this.updateScore()
                this.updateTargets()
                element.setAttribute("visible",false)
            }else if(elementId.includes("#fish")){
                this.gameover()
            }
        })
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },
    startTimer:function(duration,timere1){
        var minutes
        var seconds
        setInterval(()=>{
            if(duration >= 0){
                minutes = parseInt(duration/60)
                seconds = parseInt(duration%60)
                if(minutes <10){
                    minutes = "0"+ minutes
                }
                if(seconds < 10){
                    seconds = "0"+ seconds
                }
                timere1.setAttribute("text",{
                    value:minutes+":"+seconds
                })
                duration-=1
            }else{
                this.gameover()
            }
        }, 1000);
    },
    updateTargets:function(){
        var element = document.querySelector("#targets")
        var count = element.getAttribute("text").value
        var currentTargets = parseInt(count)
        currentTargets -= 1
        element.setAttribute("text",{
            value:currentTargets
        })
    },
    updateScore:function(){
        var element = document.querySelector("#score")
        var count = element.getAttribute("text").value
        var currentscore = parseInt(count)
        currentscore += 50
        element.setAttribute("text",{
            value:currentscore
        })
    },
    gameover:function(){
        var scubae1 = document.querySelector("#scubaguy")
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible",true)
        scubae1.setAttribute("dynamic-body",{
            mass:1
        })
    }
})