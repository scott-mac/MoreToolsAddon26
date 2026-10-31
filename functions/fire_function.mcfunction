#bridge-file-version: #1
# My Comment
# SorYPMod
tag @s add fire
execute at @e[tag=!fire,type=!item,type=!xp_orb,type=!armor_stand,type=!falling_block,r=15] positioned ~ ~ ~ run structure load fireigloo ~-2 ~ ~-2 0_degrees none true true
fill ~6 ~-1 ~6 ~-6 ~-1 ~-6 obsidian replace lava

setblock ~ ~ ~3 fire
setblock ~-1 ~ ~3 fire
setblock ~1 ~ ~3 fire
setblock ~2 ~ ~2 fire
setblock ~3 ~ ~1 fire
setblock ~3 ~ ~ fire
setblock ~3 ~ ~-1 fire
setblock ~2 ~ ~-2 fire
setblock ~-2 ~ ~2 fire
setblock ~1 ~ ~-3 fire
setblock ~ ~ ~-3 fire
setblock ~-1 ~ ~-3 fire
setblock ~-2 ~ ~-2 fire
setblock ~-3 ~ ~-1 fire
setblock ~-3 ~ ~ fire
setblock ~-3 ~ ~1 fire


particle minecraft:lava_particle ~1 ~ ~
particle minecraft:lava_particle ~ ~ ~1
particle minecraft:lava_particle ~ ~ ~-2
particle minecraft:lava_particle ~-2 ~ ~

particle minecraft:lava_particle ~ ~2 ~
particle minecraft:lava_particle ~1 ~2 ~
particle minecraft:lava_particle ~ ~2 ~1
particle minecraft:lava_particle ~-2 ~2 ~
particle minecraft:lava_particle ~ ~2 ~-2

particle minecraft:lava_particle ~2 ~1 ~
particle minecraft:lava_particle ~ ~1 ~2
particle minecraft:lava_particle ~ ~1 ~-2.5
particle minecraft:lava_particle ~-3 ~1 ~

particle minecraft:lava_particle ~1 ~-1 ~
particle minecraft:lava_particle ~ ~-1 ~1
particle minecraft:lava_particle ~ ~-1 ~-2
particle minecraft:lava_particle ~-2 ~-1 ~

particle minecraft:lava_particle ~-2 ~ ~2
particle minecraft:lava_particle ~-2 ~ ~-2
particle minecraft:lava_particle ~1 ~ ~-1
particle minecraft:lava_particle ~1 ~ ~1

particle minecraft:lava_particle ~-2.5 ~ ~2.5
particle minecraft:lava_particle ~-2.5 ~ ~-2.5
particle minecraft:lava_particle ~1.5 ~ ~-1.5
particle minecraft:lava_particle ~1.5 ~ ~1.5

particle minecraft:lava_particle ~0.5 ~ ~
particle minecraft:lava_particle ~ ~ ~0.5
particle minecraft:lava_particle ~ ~ ~-1.5
particle minecraft:lava_particle ~-1.5 ~ ~

particle minecraft:lava_particle ~1.5 ~0.5 ~
particle minecraft:lava_particle ~ ~0.5 ~1.5
particle minecraft:lava_particle ~ ~0.5 ~-2.5
particle minecraft:lava_particle ~-3 ~0.5 ~

particle minecraft:lava_particle ~0.5 ~-0.5 ~
particle minecraft:lava_particle ~ ~-0.5 ~0.5
particle minecraft:lava_particle ~ ~-0.5 ~-1.5
particle minecraft:lava_particle ~-1.5 ~-0.5 ~