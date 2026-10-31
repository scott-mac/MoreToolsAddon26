import { world } from "@minecraft/server";

/*
function applyItemDamage(itemStack, damageAmount) {
    const durabilityComponent = itemStack.getComponent("minecraft:durability");
    if (durabilityComponent) {
        const currentDamage = durabilityComponent.damage;
        const maxDamage = durabilityComponent.maxDurability;

        // Apply damage
        durabilityComponent.damage += damageAmount;

        // Check if the item is broken
        if (durabilityComponent.damage >= maxDamage) {
            // Clear the item from the player's inventory
            itemStack.amount = 0;
        }
    }
}
*/


world.afterEvents.itemUse.subscribe((event) => {
    if (event.itemStack.typeId === "sp:battle_axe_lightning") {
        event.source.runCommand("execute as @p run function thunder_function_2");
        event.source.runCommand("execute as @p run summon lightning_bolt ^ ^ ^6");
        //event.source.runCommand("execute as @p run animation @s swing");

        event.source.playAnimation("animation.player.attack.positions");

        if(event.source.isSneaking==1){
            event.source.runCommand("execute as @p run function thunder_function_1");
        }        

        //applyItemDamage(event.itemStack, 1);

        /*
        if (event.itemStack.getComponent("minecraft:durability") != 0) {
            event.itemStack.getComponent("minecraft:durability").damage=event.itemStack.getComponent("minecraft:durability").damage+5;
        }
        */

        /*
        if (event.itemStack.getMaxDamage() > 0) {
            event.itemStack.applyDamage(5);
        }*/
        
    }

    if (event.itemStack.typeId === "sp:battle_axe_diamond") {
        event.source.runCommand("execute as @p run function diamond_effects");
    }

    if (event.itemStack.typeId === "sp:slime_hoe") {
        event.source.runCommand("execute as @p run tp @e[type=item,r=25] ~ ~2 ~");
event.source.runCommand("execute as @p run playsound mob.slime.jump @s ~ ~ ~");

    }

    if (event.itemStack.typeId === "sp:slime_pickaxe") {
        event.source.runCommand("execute as @p run tp @e[type=item,r=25] ~ ~2 ~");
event.source.runCommand("execute as @p run playsound mob.slime.jump @s ~ ~ ~");
    }

    if (event.itemStack.typeId === "sp:slime_axe") {
        event.source.runCommand("execute as @p run tp @e[type=item,r=25] ~ ~2 ~");
event.source.runCommand("execute as @p run playsound mob.slime.jump @s ~ ~ ~");
    }

    if (event.itemStack.typeId === "sp:slime_shovel") {
        event.source.runCommand("execute as @p run tp @e[type=item,r=25] ~ ~2 ~");
event.source.runCommand("execute as @p run playsound mob.slime.jump @s ~ ~ ~");
    }

    if (event.itemStack.typeId === "sp:slime_sword") {
        event.source.runCommand("execute as @p run tp @e[type=item,r=25] ~ ~2 ~");
event.source.runCommand("execute as @p run playsound mob.slime.jump @s ~ ~ ~");
    }

    if (event.itemStack.typeId === "sp:battle_axe_emerald") {
        event.source.runCommand("execute as @p run function emerald_effect");
    }

    if (event.itemStack.typeId === "sp:battle_axe_ender") {
        event.source.runCommand("execute as @p run function ender_function_1");
        event.source.runCommand("execute as @p run tag @s remove end");
		if(event.source.isSneaking==1){
			event.source.runCommand("execute as @p run function ender_function_2");
        	event.source.runCommand("execute as @p run tag @s remove end");
		}
    }

    if (event.itemStack.typeId === "sp:battle_axe_fire") {
        event.source.runCommand("execute as @p run function fire_function");
        event.source.addEffect("fire_resistance", 20*5, { amplifier: 1 , showParticles: false})
        event.source.runCommand("execute as @p run tag @s remove fire");
    }

    if (event.itemStack.typeId === "sp:battle_axe_ice") {
        event.source.runCommand("execute as @p run function ice_function");
        event.source.runCommand("execute as @p run tag @s remove ice");

        if(event.source.isSneaking==1){
			event.source.runCommand("execute as @p run function ice_function_1");
		}
    }

    if (event.itemStack.typeId === "sp:battle_axe_iron") {
        event.source.runCommand("execute as @p run function iron_effects");
    }

    if (event.itemStack.typeId === "sp:battle_axe_netherite") {
        event.source.runCommand("execute as @p run function nether_effects");
    }

    if (event.itemStack.typeId === "sp:echo_battleaxe") {
        event.source.runCommand("execute as @p run tag @s add boom");
        event.source.runCommand("execute as @p run summon sp:sonic_boom ~ ~ ~");
    }



});
