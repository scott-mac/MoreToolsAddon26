import { world } from "@minecraft/server";

//  1 up down
// 2 north
// 3 south
// 4 west
// 5 east

world.beforeEvents.itemUseOn.subscribe((event) => {
    if (event.itemStack.typeId === "sp:diamond_flint_and_steel") {
  
        
        //console.warn('Hi '+event.blockFace);

        if(event.blockFace=="Up"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~1 ~-1 fire replace air");                                  
        }      
        
        if(event.blockFace=="Down"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y-2)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~1 ~-1 fire replace air");
        }  
        
        if(event.blockFace=="North"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~ ~ ~-1 ~ ~ ~-1 fire replace air");
        }  

        if(event.blockFace=="South"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~ ~ ~1 ~ ~ ~1 fire replace air");
        }  

        if(event.blockFace=="East"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~ ~ ~1 ~ ~ fire replace air");
        }  

        if(event.blockFace=="West"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~-1 ~ ~ ~-1 ~ ~ fire replace air");
        }  
    }

    if (event.itemStack.typeId === "sp:emerald_flint_and_steel") {
     
        

        if(event.blockFace=="Up"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~ ~-1 ~ ~ fire replace air");                                  
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~ ~1 ~1 ~ ~ ~-1 fire replace air");                                  
        }      
        
        if(event.blockFace=="Down"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y-2)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~ ~-1 ~ ~ fire replace air");
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y-2)+ " "+ event.block.location.z+ " run fill ~ ~1 ~1 ~ ~ ~-1 fire replace air");
        }  
        
        if(event.blockFace=="North"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~-1 ~ ~-1 ~1 ~ ~-1 fire replace air");
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~ ~-1 ~-1 ~ ~1 ~-1 fire replace air");
        }  

        if(event.blockFace=="South"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~-1 ~ ~1 ~1 ~ ~1 fire replace air");
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~ ~-1 ~1 ~ ~1 ~1 fire replace air");
        }  

        if(event.blockFace=="East"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~ ~-1 ~1 ~ ~1 fire replace air");
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~-1 ~ ~1 ~1 ~ fire replace air");
        }  

        if(event.blockFace=="West"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~-1 ~ ~-1 ~-1 ~ ~1 fire replace air");
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~-1 ~-1 ~ ~-1 ~1 ~ fire replace air");
        }  
    }

    if (event.itemStack.typeId === "sp:gold_flint_and_steel") {
      
        

        if(event.blockFace=="Up"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~ ~1 ~ ~ ~ ~ fire replace air");                                  
        }      
        
        if(event.blockFace=="Down"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y-2)+ " "+ event.block.location.z+ " run fill ~ ~1 ~ ~ ~ ~ fire replace air");
        }  
        
        if(event.blockFace=="North"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~ ~ ~-1 ~ ~ ~-1 fire replace air");
        }  

        if(event.blockFace=="South"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~ ~ ~1 ~ ~ ~1 fire replace air");
        }  

        if(event.blockFace=="East"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~ ~ ~1 ~ ~ fire replace air");
        }  

        if(event.blockFace=="West"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~-1 ~ ~ ~-1 ~ ~ fire replace air");
        }  
    }

    if (event.itemStack.typeId === "sp:netherite_flint_and_steel") {
        
        

        if(event.blockFace=="Up"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~2 ~1 ~2 ~-2 ~1 ~-2 fire replace air");                                  
        }      
        
        if(event.blockFace=="Down"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y-2)+ " "+ event.block.location.z+ " run fill ~2 ~1 ~2 ~-2 ~1 ~-2 fire replace air");
        }  
        
        if(event.blockFace=="North"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~2 ~2 ~-1 ~-2 ~-2 ~-1 fire replace air");
        }  

        if(event.blockFace=="South"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~2 ~2 ~1 ~-2 ~-2 ~1 fire replace air");
        }  

        if(event.blockFace=="West"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~-1 ~2 ~2 ~-1 ~-2 ~-2 fire replace air");
        }  

        if(event.blockFace=="East"){
            event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~2 ~2 ~1 ~-2 ~-2 fire replace air");
        }  
    }








    if (event.itemStack.typeId === "sp:silver_hammer") {

        if (event.source.dimension.id=="minecraft:overworld"){
        
            if(event.block.location.y>=-58){
                event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air destroy");                                  
                //event.source.playAnimation("")
            }
        
            if(event.block.location.y<-58){
                event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air replace deepslate");                                  
                event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air replace tuff");                                  
            }
        }

        if(event.source.dimension.id=="minecraft:nether"){
            if(event.block.location.y<=5){
                event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air replace netherrack");
                event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air replace blackstone");                                  
                                  
            }
            if(event.block.location.y>5 && event.block.location.y<123){
                event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air destroy");                                  
            }
            if(event.block.location.y>=123){
                event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air replace netherrack");                                  
                event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air replace blackstone");                                  
            }
        }

        if(event.source.dimension.id=="minecraft:the_end"){
            if(!((event.block.location.x<=4 && event.block.location.x>=-4) && (event.block.location.z<=4 && event.block.location.z>=-4))){
                event.source.runCommandAsync("execute positioned "+ event.block.location.x+ " "+ (event.block.location.y)+ " "+ event.block.location.z+ " run fill ~1 ~1 ~1 ~-1 ~-1 ~-1 air destroy");                                  

            }
        }
        


    }

    

    



    


    

    

   

    


});






