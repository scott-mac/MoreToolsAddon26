import { world, system} from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((data) => {
    const {itemComponentRegistry, blockComponentRegistry} = data
    blockComponentRegistry.registerCustomComponent("sp:fundercover", {
        onTick: (data) => {
            const block = data.block
            const { x, y, z } = block.location
            const dimension = data.dimension
            system.run(() => {
                block.setType("minecraft:lava");
            })
        }
    })
})