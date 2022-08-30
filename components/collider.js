AFRAME.registerComponent("swimmingfish",{
    init:function(){
        for(var i = 1; i <= 20; i++){
            var id = `fish${i}`;
            var posX = Math.random() * 100 + -50;
            var posY = Math.random() * 1 + 5;
            var posZ = Math.random() * 60 + -40;
            var position = {x:posX,y:posY,z:posZ}
            this.createfish(id,position)
        }
    },
    createfish:function(id,position){
        var terraine1 = document.querySelector("#island")
        var fishe1 = document.createElement("a-entity")
        fishe1.setAttribute("id",id)
        fishe1.setAttribute("position",position)
        fishe1.setAttribute("scale",{x:0.2,y:0.2,z:0.2})
        fishe1.setAttribute("gltf-model","/assets/fish/scene.gltf")
        fishe1.setAttribute("animation-mixer",{})
        fishe1.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:5
        })
        fishe1.setAttribute("game-play",{
            elementId:`#${id}`
        })
        terraine1.appendChild(fishe1)
    }
})