import { Player, world } from "@minecraft/server";




world.afterEvents.entityHurt.subscribe((event) => {



	if (event.damageSource.damagingEntity?.getTags().includes("is_holding_battle_axe_lightning")){
		event.hurtEntity.runCommand("function thunder_function");
		event.hurtEntity.runCommand("tag @s remove thunder");
		event.damageSource.damagingEntity.addEffect("fire_resistance", 20*8, { amplifier: 1 , showParticles: false})
		event.damageSource.damagingEntity.addEffect("resistance", 20*8, { amplifier: 4 , showParticles: false})
		event.hurtEntity.runCommand("function thunder_function_2");


}

	if (event.damageSource.damagingEntity?.getTags().includes("is_holding_battle_axe_ice")){
		event.hurtEntity.addEffect("slowness", 20*15, { amplifier: 5 , showParticles: false})
		event.hurtEntity.runCommand("function ice_function_2");

}

	if (event.damageSource.damagingEntity?.getTags().includes("is_holding_battle_axe_ender")){
		event.hurtEntity.runCommand("function ender_function_2");
		event.hurtEntity.runCommand("tag @s remove end");

}

	if (event.damageSource.damagingEntity?.getTags().includes("is_holding_battle_axe_fire")){
		event.hurtEntity.runCommand("function fire_function_1");

}
    
});
