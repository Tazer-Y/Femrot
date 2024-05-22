// TO REMOVE ITEMS FROM EMI/JEI/REI AND CREATIVE TAB
let tool_materials = [
  "wooden",
  "stone",
  "iron",
  "golden",
  "diamond",
  "netherite",
];
let tools = ["shovel", "pickaxe", "axe", "hoe", "sword"];
JEIEvents.hideItems((event) => {
  [("crimson", "warped")].forEach((wood) => {
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
    ]);
  });
  event.hide([
    "nether_wart_block",
    "warped_wart_block",

    "netherrack",
    "nether_brick",
    "nether_bricks",
    "cracked_nether_bricks",
    "nether_brick_stairs",
    "nether_brick_slab",
    "nether_brick_fence",
    "chiseled_nether_bricks",
    "red_nether_bricks",
    "red_nether_brick_stairs",
    "red_nether_brick_slab",
    "red_nether_brick_wall",

    "netherite_block",
    "netherite_ingot",
    "architects_palette:netherite_nub",
    "molten_metals:molten_netherite_bucket",
    "molten_metals:molten_netherite_ceramic_ingot_mold",
    "molten_metals:molten_netherite_ingot_mold",
    "netherite_scrap",
    "netherite_upgrade_smithing_template",

    "nether_gold_ore",
    "nether_quartz_ore",
    "nether_sprouts",
    "nether_wart",

    "farmersdelight:netherite_knife",

    "etcetera:bismuth_block",
    "etcetera:bismuth_bars",
    "etcetera:iridescent_wool",
    "etcetera:iridescent_terracotta",
    "etcetera:iridescent_concrete",
    "etcetera:iridescent_glazed_terracotta",
    "etcetera:iridescent_glass",
    "etcetera:iridescent_glass_pane",
    "etcetera:iridescent_lantern",
    "etcetera:nether_bismuth_ore",
    "etcetera:raw_bismuth_block",
    "etcetera:raw_bismuth",
    "etcetera:bismuth_ingot",
    "etcetera:dice",
    "molten_metals:molten_bismuth_ceramic_ingot_mold",
    "molten_metals:molten_bismuth_ingot_mold",
    "molten_metals:molten_bismuth_bucket",

    "supplementaries:rope_arrow",

    "beansbackpacks:metal_backpack",
    "beansbackpacks:winged_backpack",
    "beansbackpacks:ender_backpack",

    "nomansland:sconce_torch",
    "nomansland:sconce_soul_torch",
  ]);

  tool_materials.map((material) =>
    tools.map((tool) => event.hide(`${material}_${tool}`))
  );
});
