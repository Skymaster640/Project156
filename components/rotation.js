AFRAME.registerComponent("terrain-rotation-reader",{
    schema:{
        speedofrotation:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{

            if(e.key === "ArrowRight"){
                if(this.data.speedofrotation<0.1){
                    this.data.speedofrotation += 0.01
                }
            }
            if(e.key === "ArrowLeft"){
                if(this.data.speedofrotation>-0.1){
                    this.data.speedofrotation -= 0.01
                }
            }
        })
    },
    tick:function(){
        var maprotation = this.el.getAttribute("rotation")
        maprotation.y += this.data.speedofrotation
        this.el.setAttribute("rotation",{
            x:maprotation.x,
            y:maprotation.y,
            z:maprotation.z
        })
    }
})
AFRAME.registerComponent("scuba-rotation-reader",{
    schema:{
        speedofrotation:{type:"number",default:0},
        speedofascent:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.speedofrotation = this.el.getAttribute("rotation")
            this.data.speedofascent = this.el.getAttribute("position")
            var scubarotation = this.data.speedofrotation
            var scubaposition = this.data.speedofascent
            if(e.key === "ArrowUp"){
                if(scubarotation.z < 20){
                    scubarotation.z += 0.5
                    this.el.setAttribute("rotation",scubarotation)
                }
                if(scubaposition.y < 2){
                    scubaposition.y += 0.01
                    this.el.setAttribute("position",scubaposition)
                }
            }
            if(e.key === "ArrowDown"){
                if(scubarotation.z > -10){
                    scubarotation.z -= 0.5
                    this.el.setAttribute("rotation",scubarotation)
                }
                if(scubaposition.y > -2){
                    scubaposition.y -= 0.01
                    this.el.setAttribute("position",scubaposition)
                }
            }

        })
    }
})