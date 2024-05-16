ServerEvents.tags('item', event => {
  event.add('c:binding_materials', [
    'farmersdelight:straw',
    'string',
    'supplementaries:flax'
  ])

  event.add('c:coal_lumps', [
    'spelunkery:coal_lump',
    'spelunkery:charcoal_lump'
  ])

  event.add('c:stones', ['stone', 'cobbled_deepslate', 'cobblestone'])

  event.add('supplementaries:throwable_bricks', 'kubejs:mud_brick')
})
