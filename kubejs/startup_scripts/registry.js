ItemEvents.toolTierRegistry(event => {
  event.add('antler', tier => {
    tier.uses = 120
    tier.speed = 2
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 1 // TODO: maybe change  this?
    tier.repairIngredient = 'naturalist:antler'
  })

  event.add('bone', tier => {
    tier.uses = 120
    tier.speed = 2
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 1 // TODO: maybe change  this?
    tier.repairIngredient = 'bone'
  })
})

StartupEvents.registry('item', event => {
  event.create('antler_pickaxe', 'pickaxe').tier('antler')
  event.create('bone_pickaxe', 'pickaxe').tier('bone')

  event.create('mud_ball')
  event.create('mud_brick')

  event.create('unfired_bowl')
})

StartupEvents.registry('block', event => {
  event
    .create('blank_table', 'basic')
    .material('wood')
    .textureAll('minecraft:block/beehive_side')
    .textureSide('down', 'minecraft:block/beehive_end')
    .textureSide('up', 'minecraft:block/beehive_end')
})
