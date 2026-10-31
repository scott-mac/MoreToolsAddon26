import { world, system, Player, GameMode } from "@minecraft/server";

world.beforeEvents.itemUseOn.subscribe((event) => {
    const player = event.source;
    if (!(player instanceof Player)) return;

    const item = event.itemStack;
    if (!item || !item.typeId.startsWith("sp:") || !item.typeId.endsWith("_hammer")) return;

    console.warn(`Hammer used: ${item.typeId}`);

    system.run(() => {
        damageHammer(player, item);
    });
});

function damageHammer(player, item, damage = 25) {
    console.warn(`Attempting to damage hammer for player: ${player.name}`);

    if (player.getGameMode() === GameMode.creative) {
        console.warn("Player is in creative mode, skipping damage");
        return;
    }

    const durability = item.getComponent('durability');
    if (!durability) {
        console.warn("No durability component found on item");
        return;
    }

    console.warn(`Current durability: ${durability.damage}/${durability.maxDurability}`);

    const enchantable = item.getComponent('enchantable');
    const unbreakingLevel = enchantable?.getEnchantment('unbreaking')?.level ?? 0;
    console.warn(`Unbreaking level: ${unbreakingLevel}`);

    let shouldBreak = false;

    if (Math.random() * 100 <= (100 / (unbreakingLevel + 1))) {
        if (durability.damage + damage >= durability.maxDurability) {
            shouldBreak = true;
        } else {
            durability.damage += damage;
        }
        console.warn(`Durability increased to: ${durability.damage}`);
    } else {
        console.warn("Unbreaking prevented damage");
    }

    const inventory = player.getComponent("inventory");
    if (!inventory) {
        console.warn("No inventory component found on player");
        return;
    }

    // Search for the hammer in the player's inventory
    let hammerSlot = -1;
    for (let i = 0; i < inventory.container.size; i++) {
        const slotItem = inventory.container.getItem(i);
        if (slotItem && slotItem.typeId === item.typeId) {
            hammerSlot = i;
            break;
        }
    }

    console.warn(`Hammer found in slot: ${hammerSlot}`);

    if (hammerSlot === -1) {
        console.warn("Couldn't find the hammer in the player's inventory");
        return;
    }

    if (shouldBreak) {
        try {
            // Remove the item from the inventory
            inventory.container.setItem(hammerSlot, undefined);
            
            // Play breaking sound
            player.runCommand("playsound random.break @a[r=5]");
            
            console.warn("Item broken and removed from player's inventory");
        } catch (error) {
            console.warn(`Error removing broken item: ${error}`);
        }
    } else {
        try {
            inventory.container.setItem(hammerSlot, item);
            console.warn("Updated item in player's inventory");
        } catch (error) {
            console.warn(`Error updating item: ${error}`);
        }
    }
}