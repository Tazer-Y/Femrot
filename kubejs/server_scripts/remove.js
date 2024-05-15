const tool_materials = [
  'wooden',
  'stone',
  'iron',
  'golden',
  'diamond',
  'netherite'
]
const tools = ['shovel', 'pickaxe', 'axe', 'hoe', 'sword']
// const raw_ores = ['iron', 'gold', 'copper', 'zinc', 'magnetite']

ServerEvents.tags('worldgen/biome', event => {
  // Remove villagers and pillagers
  event.get('minecraft:has_structure/village_desert').removeAll()
  event.get('minecraft:has_structure/village_plains').removeAll()
  event.get('minecraft:has_structure/village_savanna').removeAll()
  event.get('minecraft:has_structure/village_snowy').removeAll()
  event.get('minecraft:has_structure/village_taiga').removeAll()

  event.get('minecraft:has_structure/pillager_outpost').removeAll()

  // Remove strongholds
  event.get('minecraft:has_structure/stronghold').removeAll()

  // Remove ruined portals
  event.get('minecraft:has_structure/ruined_portal_standard').removeAll()
  event.get('minecraft:has_structure/ruined_portal_swamp').removeAll()
  event.get('minecraft:has_structure/ruined_portal_mountain').removeAll()
  event.get('minecraft:has_structure/ruined_portal_jungle').removeAll()
  event.get('minecraft:has_structure/ruined_portal_desert').removeAll()
  event.get('minecraft:has_structure/ruined_portal_ocean').removeAll()
})

ServerEvents.tags('item', event => {
  event.removeAllTagsFrom([
      // Nether stuff
    'crimson_stem',
    'stripped_crimson_stem',
    'crimson_hyphae',
    'stripped_crimson_hyphae',
    'crimson_planks',

    'warped_stem',
    'stripped_warped_stem',
    'warped_hyphae',
    'stripped_warped_hyphae',
    'warped_planks',

    'nether_brick',

    'netherite_ingot',

    // Tools
    'diamond_helmet',
    'diamond_chestplate',
    'diamond_leggings',
    'diamond_boots',
  ])
  
  event.remove('minecraft:non_flammable_wood')

  tool_materials.map(material =>
    tools.map(tool => event.removeAllTagsFrom(`minecraft:${material}_${tool}`))
  )

})

ServerEvents.recipes(event => {

  tool_materials.map(material =>
    tools.map(tool => event.remove({ output: `minecraft:${material}_${tool}` }))
  )

  // raw_ores.map(ore => {
  //   event.remove({ id: `spelunkery:raw_${ore}` })
  //   event.remove({ id: `spelunkery:raw_${ore}_nugget` })
  // })

  // Input removals
  event.remove({ input: ['vine'] })

  // Output removals
  event.remove({
    output: [
      // 'copperative:copper_nugget',
      // 'create_dd:coal_piece'
    ]
  })

  // Both input & output removals
  const inputAndOutputRemovals = [
    // 'etcetera:bismuth_ingot',
    // 'etcetera:raw_bismuth',
    // 'molten_metals:molten_bismuth',

    // 'supplementaries:rope_arrow',

    // Nether Stuff
    'crimson_stem',
    'stripped_crimson_stem',
    'crimson_hyphae',
    'stripped_crimson_hyphae',
    'crimson_planks',
    'crimson_sign',
    'crimson_slab',

    'warped_stem',
    'stripped_warped_stem',
    'warped_hyphae',
    'stripped_warped_hyphae',
    'warped_planks',
    'warped_sign',
    'warped_slab',

    'warped_fungus_on_a_stick',

    'nether_brick',
    'netherite_scrap',
    'netherite_ingot',

    // Tools
    'diamond_helmet',
    'diamond_chestplate',
    'diamond_leggings',
    'diamond_boots',

    // 'beansbackpacks:metal_backpack',
    // 'beansbackpacks:winged_backpack',
    // 'beansbackpacks:ender_backpack',

    // 'create_dd:mithril_ingot',
    // 'create_dd:mithril_sheet',
    // 'create_dd:polished_spectral_ruby',
    // 'create_dd:blueprint_block',
    // 'create_dd:blueprint_carpet',
    // 'create_dd:freezing_sail',
    // 'create_dd:haunting_sail',
    // 'create_dd:smoking_sail',
    // 'create_dd:blasting_sail',
    // 'create_dd:washing_sail',
    // 'create_dd:seething_sail',
    // 'create_dd:chromatic_compound',
    // 'create_dd:deforester_saw',
    // 'create_dd:leather_block',
    // 'create_dd:lapis_alloy',
    // 'create_dd:overburden_casing'
  ]

  // Recipe ID removals
  const idRemovals = [
    // Earlygame tools
    'clash:spear_temporary',

    // 'minecraft:oak_planks',
    // 'minecraft:birch_planks',
    // 'minecraft:spruce_planks',
    // 'minecraft:mangrove_planks',
    // 'minecraft:jungle_planks',
    // 'minecraft:acacia_planks',
    // 'minecraft:cherry_planks',
    // 'minecraft:dark_oak_planks',
    // 'minecraft:bamboo_planks',

    // 'spelunkery:magnetic_compass',

    // 'etcetera:dice',

    // 'create:crafting/appliances/slime_ball',

    // 'spelunkery:raw_magnetite_from_nuggets',

    // 'spelunkery:rope_ladder',
    // 'farmersdelight:rope',
    // 'supplementaries:rope',

    'torch',

    // 'golden_apple',
    // 'golden_carrot',

    // 'supplementaries:wrench',
    // 'create:crafting/kinetics/wrench',
    // 'create:crafting/kinetics/fluid_pipe',
    // 'create:crafting/kinetics/fluid_pipe_vertical',
    // 'sleep_tight:sleeping_bag',

    // Workstations
    'crafting_table',
    'cartography_table',
    'fletching_table',
    'smithing_table',
    'enchanting_table',
    'vanity:styling_table',
    'loom',
    'blast_furnace',
    'smoker',
    // 'clayworks:kiln',

    // Clay stuff
    'bowl',

    // 'spelunkery:portal_fluid_bucket',
    // 'spelunkery:coal_from_lump',

    // 'create:crafting/kinetics/stressometerfrom_conversion',
    // 'create:crafting/kinetics/speedometerfrom_conversion',
    // 'create:crafting/kinetics/speedometer',

    // Bricks
    'stone_bricks',
    'deepslate_bricks',
    'polished_blackstone_bricks',
    'nomansland:building/faded_stone_bricks',

    // Chiseled bricks
    'chiseled_stone_bricks',
    'chiseled_stone_bricks_stone_from_stonecutting',
    'chiseled_stone_bricks_from_stone_bricks_stonecutting'
  ]

  inputAndOutputRemovals.forEach(item => {
    event.remove({ output: item })
    event.remove({ input: item })
  })

  idRemovals.forEach(item => {
    event.remove({ id: item })
  })
})
