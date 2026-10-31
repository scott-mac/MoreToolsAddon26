import { world, system, Player, GameMode } from "@minecraft/server";

const COOLDOWN_TICKS = 8; // Adjust this value to change the cooldown duration (20 ticks = 1 second)
const playerCooldowns = new Map();

world.beforeEvents.itemUseOn.subscribe((event) => {
    const player = event.source;
    if (!(player instanceof Player)) return;

    const item = event.itemStack;
    if (!item || !item.typeId.startsWith("sp:") || !item.typeId.endsWith("_flint_and_steel")) return;

    const currentTick = system.currentTick;

    // Check if the player is on cooldown
    if (playerCooldowns.has(player.id)) {
        const lastUseTick = playerCooldowns.get(player.id);
        if (currentTick - lastUseTick < COOLDOWN_TICKS) {
            return; // Exit early if the player is on cooldown
        }
    }

    // Update the player's last use tick
    playerCooldowns.set(player.id, currentTick);

    system.run(() => {
        damageFlintAndSteel(player, item);
    });
});

function damageFlintAndSteel(player, item, damage = 1) {
    if (player.getGameMode() === GameMode.creative) {
        return; // Skip if the player is in creative mode
    }

    const durability = item.getComponent('durability');
    if (!durability) return;

    const enchantable = item.getComponent('enchantable');
    const unbreakingLevel = enchantable?.getEnchantment('unbreaking')?.level ?? 0;

    let shouldBreak = false;

    if (Math.random() * 100 <= (100 / (unbreakingLevel + 1))) {
        if (durability.damage + damage >= durability.maxDurability) {
            shouldBreak = true;
        } else {
            durability.damage += damage;
        }

        // Play fire.ignite sound when damage is applied
        player.runCommand("execute as @p run playsound fire.ignite @p ~5 ~5 ~5");
    }

    const inventory = player.getComponent("inventory");
    if (!inventory) return;

    // Search for the flint and steel in the player's inventory
    let flintAndSteelSlot = -1;
    for (let i = 0; i < inventory.container.size; i++) {
        const slotItem = inventory.container.getItem(i);
        if (slotItem && slotItem.typeId === item.typeId) {
            flintAndSteelSlot = i;
            break;
        }
    }

    if (flintAndSteelSlot === -1) return;

    if (shouldBreak) {
        try {
            // Remove the item from the inventory
            inventory.container.setItem(flintAndSteelSlot, undefined);
            // Play breaking sound
            player.runCommand("playsound random.break @a[r=5]");
        } catch (error) {
            // Handle error if needed
        }
    } else {
        try {
            inventory.container.setItem(flintAndSteelSlot, item);
        } catch (error) {
            // Handle error if needed
        }
    }
}
