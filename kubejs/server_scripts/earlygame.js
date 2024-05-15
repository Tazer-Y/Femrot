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
