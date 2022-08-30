AFRAME.registerComponent("coins", {
    init:function(){
        for(var i = 1; i <= 10; i++){
            var id = `coin${i}`;

            var posX = Math.random() * 100 + -50;
            var posY = Math.random() * 1 + 5;
            var posZ = Math.random() * 60 + -40;

            var position = {x:posX,y:posY,z:posZ};
            this.createCoins(id,position);
        }
    },
    createCoins:function(id,position){
        var treasureEntity = document.querySelector("#island")
        var coine1 = document.createElement("a-entity")

        coine1.setAttribute("id",id)
        coine1.setAttribute("position",position)
        coine1.setAttribute("material","color","#ff9100")
        coine1.setAttribute("geometry",{primitive: "circle",radius: "1"});

        coine1.setAttribute("animation",{
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: "1000"
        });
        coine1.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:2
        })
        coine1.setAttribute("game-play",{
            elementId:`#${id}`
        })

        treasureEntity.appendChild(coine1)
    }
})