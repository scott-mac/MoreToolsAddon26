import { world } from "@minecraft/server";



world.afterEvents.itemCompleteUse.subscribe((event) => {


    if (event.itemStack.typeId === "sp:baked_iron_sword") {
        event.source.addEffect("nausea", 20*20, { amplifier: 0 , showParticles: true})
	event.source.addEffect("slowness", 20*35, { amplifier: 0 , showParticles: false})
	event.source.addEffect("strength", 20*130, { amplifier: 3 , showParticles: false})
        
    }


    if (event.itemStack.typeId === "sp:beef_iron_sword") {
             event.source.addEffect("nausea", 20*20, { amplifier: 0 , showParticles: true})
	event.source.addEffect("slowness", 20*35, { amplifier: 0 , showParticles: false})
	event.source.addEffect("strength", 20*130, { amplifier: 3 , showParticles: false})
    }

    if (event.itemStack.typeId === "sp:carrot_iron_sword") {
            event.source.addEffect("nausea", 20*20, { amplifier: 0 , showParticles: true})
	event.source.addEffect("slowness", 20*35, { amplifier: 0 , showParticles: false})
	event.source.addEffect("strength", 20*130, { amplifier: 3 , showParticles: false})
    }
    if (event.itemStack.typeId === "sp:cookie_iron_sword") {
             event.source.addEffect("nausea", 20*20, { amplifier: 0 , showParticles: true})
	event.source.addEffect("slowness", 20*35, { amplifier: 0 , showParticles: false})
	event.source.addEffect("strength", 20*130, { amplifier: 3 , showParticles: false})
    }

    if (event.itemStack.typeId === "sp:melon_sword") {
            event.source.addEffect("nausea", 20*20, { amplifier: 0 , showParticles: true})
	event.source.addEffect("slowness", 20*35, { amplifier: 0 , showParticles: false})
	event.source.addEffect("strength", 20*130, { amplifier: 3 , showParticles: false})
    }

    if (event.itemStack.typeId === "sp:potato_iron_sword") {
          event.source.addEffect("nausea", 20*20, { amplifier: 0 , showParticles: true})
	event.source.addEffect("slowness", 20*35, { amplifier: 0 , showParticles: false})
	event.source.addEffect("strength", 20*130, { amplifier: 3 , showParticles: false})
    }
    if (event.itemStack.typeId === "sp:fish_sword") {
          event.source.addEffect("nausea", 20*20, { amplifier: 0 , showParticles: true})
	event.source.addEffect("slowness", 20*35, { amplifier: 0 , showParticles: false})
	event.source.addEffect("strength", 20*130, { amplifier: 3 , showParticles: false})
    }

    if (event.itemStack.typeId === "sp:sweet_iron_sword") {
            event.source.addEffect("nausea", 20*20, { amplifier: 0 , showParticles: true})
	event.source.addEffect("slowness", 20*35, { amplifier: 0 , showParticles: false})
	event.source.addEffect("strength", 20*130, { amplifier: 3 , showParticles: false})
    }


    if (event.itemStack.typeId === "sp:cookedbeed_iron_sword") {
            event.source.addEffect("nausea", 20*20, { amplifier: 0 , showParticles: true})
	event.source.addEffect("slowness", 20*35, { amplifier: 0 , showParticles: false})
	event.source.addEffect("strength", 20*130, { amplifier: 3 , showParticles: false})
    }


    //...


});
