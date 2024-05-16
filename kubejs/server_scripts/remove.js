import { badItemList } from '../constants'

const tool_materials = [
  'wooden',
  'stone',
  'iron',
  'golden',
  'diamond',
  'netherite'
]
const tools = ['shovel', 'pickaxe', 'axe', 'hoe', 'sword']
const raw_ores = ['iron', 'gold', 'copper', 'zinc', 'magnetite']

ServerEvents.tags('worldgen/biome', event => {
  // Remove villagers and pillagers
  event.get('has_structure/village_desert').removeAll()
  event.get('has_structure/village_plains').removeAll()
  event.get('has_structure/village_savanna').removeAll()
  event.get('has_structure/village_snowy').removeAll()
  event.get('has_structure/village_taiga').removeAll()

  event.get('has_structure/pillager_outpost').removeAll()

  // Remove strongholds
  event.get('has_structure/stronghold').removeAll()

  // Remove ruined portals
  event.get('has_structure/ruined_portal_standard').removeAll()
  event.get('has_structure/ruined_portal_swamp').removeAll()
  event.get('has_structure/ruined_portal_mountain').removeAll()
  event.get('has_structure/ruined_portal_jungle').removeAll()
  event.get('has_structure/ruined_portal_desert').removeAll()
  event.get('has_structure/ruined_portal_ocean').removeAll()
})

ServerEvents.tags('item', event => {
  ;['crimson', 'warped'].forEach(wood => {
    event.removeAllTagsFrom([
      `${wood}_stem`,
      `stripped_${wood}_stem`,
      `${wood}_hyphae`,
      `stripped_${wood}_hyphae`,
      `${wood}_planks`,
      `${wood}_stairs`,
      `${wood}_slab`,
      `${wood}_fence`,
      `${wood}_fence_gate`,
      `${wood}_door`,
      `${wood}_trapdoor`,
      `${wood}_pressure_plate`,
      `${wood}_button`,
      `nomansland:trimmed_${wood}_planks`,
      `${wood}_nylium`,
      `${wood}_fungus`,
      `${wood}_roots`,
      `${wood}_sign`,
      `${wood}_hanging_sign`,
      `supplementaries:sign_post_${wood}`,
      `suppsquared:item_shelf_${wood}`,
      `nomansland:${wood}_bookshelf`,
      `farmersdelight:${wood}_cabinet`,
      `create:${wood}_window`,
      `create:${wood}_window_pane`
    ])
  })
  event.removeAllTagsFrom([
    'nether_wart_block',
    'warped_wart_block',

    'netherrack',
    'nether_brick',
    'nether_bricks',
    'cracked_nether_bricks',
    'nether_brick_stairs',
    'nether_brick_slab',
    'nether_brick_fence',
    'chiseled_nether_bricks',
    'red_nether_bricks',
    'red_nether_brick_stairs',
    'red_nether_brick_slab',
    'red_nether_brick_wall',

    'netherite_block',
    'netherite_ingot',
    'supplementaries:netherite_door',
    'supplementaries:netherite_trapdoor',

    'nether_gold_ore',
    'nether_quartz_ore',
    'nether_sprouts',
    'nether_wart',

    'farmersdelight:netherite_knife',

    'etcetera:bismuth_block',
    'etcetera:bimsuth_bars',
    'etcetera:iridescent_wool',
    'etcetera:iridescent_terracotta',
    'etcetera:iridescent_concrete',
    'etcetera:iridescent_glazed_terracotta',
    'etcetera:iridescent_glass',
    'etcetera:iridescent_glass_pane',
    'etcetera:iridescent_lantern',
    'etcetera:nether_bismuth_ore',
    'etcetera:raw_bismuth_block',
    'etcetera:raw_bismuth',
    'etcetera:bismuth_ingot',
    'etcetera:dice',

    'supplementaries:rope_arrow'
  ])

  // event.remove('non_flammable_wood')

  tool_materials.map(material =>
    tools.map(tool => event.removeAllTagsFrom(`${material}_${tool}`))
  )
})

ServerEvents.recipes(event => {
  tool_materials.map(material =>
    tools.map(tool => event.remove({ output: `${material}_${tool}` }))
  )

  raw_ores.map(ore => {
    event.remove({ id: `spelunkery:raw_${ore}` })
    event.remove({ id: `spelunkery:raw_${ore}_nugget` })
  })

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
    'nether_wart_block',
    'warped_wart_block',

    'netherrack',
    'nether_brick',
    'nether_bricks',
    'cracked_nether_bricks',
    'nether_brick_stairs',
    'nether_brick_slab',
    'nether_brick_fence',
    'chiseled_nether_bricks',
    'red_nether_bricks',
    'red_nether_brick_stairs',
    'red_nether_brick_slab',
    'red_nether_brick_wall',

    'netherite_block',
    'netherite_ingot',
    'supplementaries:netherite_door',
    'supplementaries:netherite_trapdoor',

    'nether_gold_ore',
    'nether_quartz_ore',
    'nether_sprouts',
    'nether_wart',

    'farmersdelight:netherite_knife',

    'etcetera:bismuth_block',
    'etcetera:bimsuth_bars',
    'etcetera:iridescent_wool',
    'etcetera:iridescent_terracotta',
    'etcetera:iridescent_concrete',
    'etcetera:iridescent_glazed_terracotta',
    'etcetera:iridescent_glass',
    'etcetera:iridescent_glass_pane',
    'etcetera:iridescent_lantern',
    'etcetera:nether_bismuth_ore',
    'etcetera:raw_bismuth_block',
    'etcetera:raw_bismuth',
    'etcetera:bismuth_ingot',
    'etcetera:dice',

    'supplementaries:rope_arrow'

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
  let woods = ['crimson', 'warped']
  woods.forEach(wood => {
    inputAndOutputRemovals.push([
      `${wood}_stem`,
      `stripped_${wood}_stem`,
      `${wood}_hyphae`,
      `stripped_${wood}_hyphae`,
      `${wood}_planks`,
      `${wood}_stairs`,
      `${wood}_slab`,
      `${wood}_fence`,
      `${wood}_fence_gate`,
      `${wood}_door`,
      `${wood}_trapdoor`,
      `${wood}_pressure_plate`,
      `${wood}_button`,
      `nomansland:trimmed_${wood}_planks`,
      `${wood}_nylium`,
      `${wood}_fungus`,
      `${wood}_roots`,
      `${wood}_sign`,
      `${wood}_hanging_sign`,
      `supplementaries:sign_post_${wood}`,
      `suppsquared:item_shelf_${wood}`,
      `nomansland:${wood}_bookshelf`,
      `farmersdelight:${wood}_cabinet`,
      `create:${wood}_window`,
      `create:${wood}_window_pane`
    ])
  })

  // Recipe ID removals
  const idRemovals = [
    // Earlygame tools
    'clash:spear_temporary',

    // 'oak_planks',
    // 'birch_planks',
    // 'spruce_planks',
    // 'mangrove_planks',
    // 'jungle_planks',
    // 'acacia_planks',
    // 'cherry_planks',
    // 'dark_oak_planks',
    // 'bamboo_planks',

    'spelunkery:magnetic_compass',

    'create:crafting/appliances/slime_ball',

    'spelunkery:raw_magnetite_from_nuggets',

    'spelunkery:rope_ladder',
    'supplementaries:rope',

    'torch',

    'golden_apple',
    'golden_carrot',

    'supplementaries:wrench',
    'create:crafting/kinetics/wrench',
    'create:crafting/kinetics/fluid_pipe',
    'create:crafting/kinetics/fluid_pipe_vertical',
    'sleep_tight:sleeping_bag',

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

    'spelunkery:portal_fluid_bucket',
    'spelunkery:coal_from_lump',

    'create:crafting/kinetics/stressometerfrom_conversion',
    'create:crafting/kinetics/speedometerfrom_conversion',
    'create:crafting/kinetics/speedometer',

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
