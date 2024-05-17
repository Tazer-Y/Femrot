ServerEvents.recipes(event => {
  // Mud Bricks
  event.campfireCooking('kubejs:mud_brick', 'kubejs:mud_ball')

  event
    .shaped('mud_bricks', ['XX', 'XX'], {
      X: 'kubejs:mud_brick'
    })
    .id('mud_bricks')

  event
    .stonecutting('nomansland:cobblestone_bricks', 'cobblestone')
    .id('nomansland:building/cobblestone_bricks')
  event
    .stonecutting('nomansland:mossy_cobblestone_bricks', 'mossy_cobblestone')
    .id('nomansland:building/mossy_cobblestone_bricks')

  event
    .stonecutting('stone_bricks', 'nomansland:polished_stone')
    .id('bricks/stone_bricks_from_polished_stone')

  event
    .stonecutting('nomansland:faded_stone_bricks', 'stone')
    .id('bricks/faded_stone_bricks_from_stone')
  event
    .stonecutting('nomansland:faded_stone_bricks', 'nomansland:polished_stone')
    .id('bricks/faded_stone_bricks_from_polished_stone')
  event
    .stonecutting('nomansland:faded_stone_bricks', 'stone_bricks')
    .id('bricks/faded_stone_bricks_from_stone_bricks')

  // Prismarine Bricks - unsure what to do on this one - does prismarine still exist
})
