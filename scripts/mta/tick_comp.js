import { world, system } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((data) => {
    const { blockComponentRegistry } = data;


    blockComponentRegistry.registerCustomComponent("sp:ticks", {
        onRandomTick: (data) => { 
            const block = data.block;
            const { x, y, z } = block.location; // Get block location
            const dimension = data.dimension;

            const commands = [
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_down/celestite_budding_down0`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_down/celestite_budding_down1`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_down/celestite_budding_down2`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_down/celestite_budding_down3`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_east/celestite_budding_east0`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_east/celestite_budding_east1`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_east/celestite_budding_east2`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_east/celestite_budding_east3`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_north/celestite_budding_north0`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_north/celestite_budding_north1`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_north/celestite_budding_north2`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_north/celestite_budding_north3`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_south/celestite_budding_south0`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_south/celestite_budding_south1`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_south/celestite_budding_south2`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_south/celestite_budding_south3`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_up/celestite_budding_up0`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_up/celestite_budding_up1`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_up/celestite_budding_up2`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_up/celestite_budding_up3`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_west/celestite_budding_west0`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_west/celestite_budding_west1`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_west/celestite_budding_west2`,
                `execute positioned ${x} ${y} ${z} run function celestite_budding/celestite_budding_west/celestite_budding_west3`
            ];


            const shuffledCommands = shuffleArray(commands);


            executeCommandsWithDelay(shuffledCommands, dimension, 10); // 10 ticks delay between commands
        }
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function executeCommandsWithDelay(commands, dimension, tickDelay) {
    let index = 0;

    function executeNextCommand() {
        if (index < commands.length) {
     
            dimension.runCommandAsync(commands[index])
                .then(() => {
                    index++;
                    system.run(executeNextCommand, tickDelay); // Delay between each command
                })
                .catch(err => {
    // Error ignored
});

        }
    }


    executeNextCommand();
}

