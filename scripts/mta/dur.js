import * as mc from '@minecraft/server';

mc.world.beforeEvents.playerBreakBlock.subscribe(event => {
  // Check if the player is in Creative mode
  const gameMode = event.player.getGameMode();
  if (gameMode === "creative") return; // Abort if the player is in Creative mode

  mc.system.run(() => {
    const tool = event.player.getComponent("equippable")?.getEquipment("Mainhand");
    if (!tool?.typeId?.startsWith("sp:")) return; // Check if the tool has a specific type ID prefix
    const level = event.itemStack.getComponent("minecraft:enchantable")?.getEnchantment("unbreaking")?.level;
    let Damage = 1;

    function durability() {
      const durabilityComponent = tool.getComponent("minecraft:durability");
      if (durabilityComponent.maxDurability - durabilityComponent.damage > Damage) {
        // Increase the tool's damage if it's not fully broken
        durabilityComponent.damage += Damage;
        event.player.getComponent("equippable").setEquipment("Mainhand", tool);
      } else {
        // If the tool is broken, replace it with air and play a break sound
        event.player.runCommand("replaceitem entity @s slot.weapon.mainhand 0 air");
        event.player.runCommand("playsound random.break @a[r=4] ~ ~ ~");
      }
    }

    const t = Math.floor(Math.random() * 10);
    // Unbreaking enchantment logic
    if (level === 1 && t > 8) Damage = 0;
    else if (level === 2 && t > 6) Damage = 0;
    else if (level === 3 && t > 4) Damage = 0;
    else durability();
    /*Discord: t17x*/
  });
});
