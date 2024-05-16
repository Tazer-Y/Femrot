ServerEvents.recipes(event => {
  event.shaped('stone_axe', ['PS ', 'SB '], {
    S: 'stick',
    B: '#c:binding_materials',
    P: 'nomansland:pebbles'
  }).id('stone_axe')

  event.shaped('clash:spear', [' BF', ' SB', 'S  '], {
    B: '#c:binding_materials',
    S: 'stick',
    F: 'flint'
  })

  event.shaped('kubejs:antler_pickaxe', ['ABA', ' S ', ' S '], {
    A: 'naturalist:antler',
    B: '#c:binding_materials',
    S: 'stick'
  })

  event.shaped('kubejs:bone_pickaxe', ['ABA', ' S ', ' S '], {
    A: 'bone',
    B: '#c:binding_materials',
    S: 'stick'
  })

  event.replaceInput({id: 'minecraft:campfire'}, '#coals', 'farmersdelight:straw')

  event.campfireCooking('charcoal', '#logs').id('charcoal')

  event.shaped('furnace', ['MMM', 'BCB', 'SSS'], {
    M: 'kubejs:mud_brick',
    B: 'mud_bricks',
    S: '#c:stones',
    C: '#coals'
  }).id('furnace')

  event.replaceInput(
    { id: 'supplementaries:sack' },
    'supplementaries:flax',
    'farmersdelight:canvas'
  )

  event.shaped('kubejs:unfired_bowl', ['C C', ' C '], {
    C: 'clay_ball'
  })
  event.campfireCooking('bowl', 'kubejs:unfired_bowl').id('bowl')

  event.shaped('8x torch', [' C ', ' S '], {
    C: '#coals',
    S: 'stick'
  })
  event.shaped('torch', [' C ', ' S '], {
    C: '#c:coal_lumps',
    S: 'stick'
  }).id('torch')

  event.shaped('sleep_tight:night_bag', ['SS ', 'WW ', 'WW '], {
    S: 'string',
    W: '#wool'
  })

  // event.shaped('beansbackpacks:backpack', ['LCL', 'LHL', 'LIL'], {
  //   L: 'leather',
  //   C: 'farmersdelight:canvas',
  //   H: 'chest',
  //   I: 'iron_ingot'
  // })

  event.shaped('farmersdelight:rope', [' S ', ' S ', ' S '], {
    S: 'farmersdelight:straw'
  })
  event.shaped('4x farmersdelight:rope', [' F ', ' F ', ' F '], {
    F: 'supplementaries:flax'
  })
  event.shaped('4x spelunkery:rope_ladder', ['R R', 'SSS', 'R R'], {
    R: 'farmersdelight:rope',
    S: 'stick'
  })
  event.shaped('4x spelunkery:rope_ladder', ['R R', 'SSS', 'R R'], {
    R: 'spelunkery:tangle_roots',
    S: 'stick'
  })

  event.shapeless('moss_block', ['9x vine'])
  event.shapeless('farmersdelight:canvas', [
    'supplementaries:flax',
    '#farmersdelight:straw_harvesters'
  ])
  event.shapeless('kubejs:blank_table', [
    '#forge:stripped_logs',
    '#farmersdelight:straw_harvesters'
  ])

  event.replaceOutput(
    { output: 'compass' },
    'compass',
    'spelunkery:magnetic_compass'
  )

  event.replaceInput(
    { input: 'supplementaries:rope' },
    'supplementaries:rope',
    'farmersdelight:rope'
  )
  event.replaceOutput(
    { output: 'supplementaries:rope' },
    'supplementaries:rope',
    'farmersdelight:rope'
  )

  event.replaceInput(
    { input: 'compass' },
    'compass',
    'spelunkery:magnetic_compass'
  )
  event.replaceInput({ id: 'map' }, 'compass', 'ink_sac')

  event.shaped('etcetera:hammer', ['III', 'ISI', ' S '], {
    I: 'iron_ingot',
    S: 'stick'
  })
  event.shaped('etcetera:chisel', ['  I', ' I ', 'B  '], {
    I: 'iron_ingot',
    B: 'brick'
  })


//   event.shaped(Item.of('wooden_pickaxe').withNBT({Design: {Style:"antler_pickaxe", Id:"femrot:crafting_designs"}, display:{Name:'{"text":"Antler Pickaxe","italic":"false"}'}}), ['ABA', ' S ', ' S '], {
//     A: 'naturalist:antler',
//     B: '#c:binding_materials',
//     S: 'stick'
//   })

//   event.shaped(Item.of('wooden_pickaxe').withNBT({Design: {Style:"bone_pickaxe", Id:"femrot:crafting_designs"}, display:{Name:'{"text":"Bone Pickaxe","italic":"false"}'}}), ['ABA', ' S ', ' S '], {
//     A: 'bone',
//     B: '#c:binding_materials',
//     S: 'stick'
//   })
})
