// TO REMOVE ITEMS FROM EMI/JEI/REI AND CREATIVE TAB
import { badItemList } from '../constants'
JEIEvents.hideItems(event => {
    ['crimson', 'warped'].forEach(wood => {
        event.hide([
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
          `create:${wood}_window_pane`,
        ])
      })
    event.hide([
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

      'supplementaries:rope_arrow',
    ])
})
