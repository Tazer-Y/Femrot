ServerEvents.recipes(event => {
  // Mold Cooling
  const metals = ['minecraft:copper', 'create_dd:bronze', 'create_dd:tin']

  metals.forEach(metal => {
    // Regular Mold Water
    event.custom({
      type: 'lychee:item_inside',
      item_in: {
        item: `molten_metals:molten_${metal.split(':')[1]}_ingot_mold`
      },
      block_in: {
        blocks: ['water']
      },
      post: [
        {
          type: 'drop_item',
          item: `${metal}_ingot`
        },
        {
          type: 'drop_item',
          item: 'molten_metals:ingot_mold'
        },
        {
          type: 'execute',
          command: 'playsound minecraft:entity.generic.burn block @a ~ ~ ~ 1',
          hide: true
        }
      ]
    })

    // Ceramic Mold Water
    event.custom({
      type: 'lychee:item_inside',
      item_in: {
        item: `molten_metals:molten_${metal.split(':')[1]}_ceramic_ingot_mold`
      },
      block_in: {
        blocks: ['water'],
        state: {
          level: 0
        }
      },
      post: [
        {
          type: 'drop_item',
          item: `${metal}_ingot`
        },
        {
          type: 'drop_item',
          item: 'molten_metals:ceramic_ingot_mold',
          contextual: {
            type: 'chance',
            chance: 0.8
          }
        },
        {
          type: 'execute',
          command: 'playsound minecraft:entity.generic.burn block @a ~ ~ ~ 1',
          hide: true
        }
      ]
    })

    // Regular Mold Cauldron 1
    event.custom({
      type: 'lychee:item_inside',
      item_in: {
        item: `molten_metals:molten_${metal.split(':')[1]}_ingot_mold`
      },
      block_in: {
        blocks: ['water_cauldron'],
        state: {
          level: 1
        }
      },
      post: [
        {
          type: 'drop_item',
          item: `${metal}_ingot`
        },
        {
          type: 'drop_item',
          item: 'molten_metals:ingot_mold'
        },
        {
          type: 'execute',
          command: 'playsound minecraft:entity.generic.burn block @a ~ ~ ~ 1',
          hide: true
        },
        {
          type: 'place',
          block: 'cauldron'
        }
      ]
    })

    // Regular Mold Cauldron 2
    event.custom({
      type: 'lychee:item_inside',
      item_in: {
        item: `molten_metals:molten_${metal.split(':')[1]}_ingot_mold`
      },
      block_in: {
        blocks: ['water_cauldron'],
        state: {
          level: 2
        }
      },
      post: [
        {
          type: 'drop_item',
          item: `${metal}_ingot`
        },
        {
          type: 'drop_item',
          item: 'molten_metals:ingot_mold'
        },
        {
          type: 'execute',
          command: 'playsound minecraft:entity.generic.burn block @a ~ ~ ~ 1',
          hide: true
        },
        {
          type: 'place',
          block: {
            blocks: ['water_cauldron'],
            state: {
              level: 1
            }
          }
        }
      ]
    })

    // Regular Mold Cauldron 3
    event.custom({
      type: 'lychee:item_inside',
      item_in: {
        item: `molten_metals:molten_${metal.split(':')[1]}_ingot_mold`
      },
      block_in: {
        blocks: ['water_cauldron'],
        state: {
          level: 3
        }
      },
      post: [
        {
          type: 'drop_item',
          item: `${metal}_ingot`
        },
        {
          type: 'drop_item',
          item: 'molten_metals:ingot_mold'
        },
        {
          type: 'execute',
          command: 'playsound minecraft:entity.generic.burn block @a ~ ~ ~ 1',
          hide: true
        },
        {
          type: 'place',
          block: {
            blocks: ['water_cauldron'],
            state: {
              level: 2
            }
          }
        }
      ]
    })

    // Ceramic Mold Cauldron 1
    event.custom({
      type: 'lychee:item_inside',
      item_in: {
        item: `molten_metals:molten_${metal.split(':')[1]}_ceramic_ingot_mold`
      },
      block_in: {
        blocks: ['water_cauldron'],
        state: {
          level: 1
        }
      },
      post: [
        {
          type: 'drop_item',
          item: `${metal}_ingot`
        },
        {
          type: 'drop_item',
          item: 'molten_metals:ceramic_ingot_mold',
          contextual: {
            type: 'chance',
            chance: 0.8
          }
        },
        {
          type: 'execute',
          command: 'playsound minecraft:entity.generic.burn block @a ~ ~ ~ 1',
          hide: true
        },
        {
          type: 'place',
          block: 'cauldron'
        }
      ]
    })

    // Ceramic Mold Cauldron 2
    event.custom({
      type: 'lychee:item_inside',
      item_in: {
        item: `molten_metals:molten_${metal.split(':')[1]}_ceramic_ingot_mold`
      },
      block_in: {
        blocks: ['water_cauldron'],
        state: {
          level: 2
        }
      },
      post: [
        {
          type: 'drop_item',
          item: `${metal}_ingot`
        },
        {
          type: 'drop_item',
          item: 'molten_metals:ceramic_ingot_mold',
          contextual: {
            type: 'chance',
            chance: 0.8
          }
        },
        {
          type: 'execute',
          command: 'playsound minecraft:entity.generic.burn block @a ~ ~ ~ 1',
          hide: true
        },
        {
          type: 'place',
          block: {
            blocks: ['water_cauldron'],
            state: {
              level: 1
            }
          }
        }
      ]
    })

    // Ceramic Mold Cauldron 3
    event.custom({
      type: 'lychee:item_inside',
      item_in: {
        item: `molten_metals:molten_${metal.split(':')[1]}_ceramic_ingot_mold`
      },
      block_in: {
        blocks: ['water_cauldron'],
        state: {
          level: 3
        }
      },
      post: [
        {
          type: 'drop_item',
          item: `${metal}_ingot`
        },
        {
          type: 'drop_item',
          item: 'molten_metals:ceramic_ingot_mold',
          contextual: {
            type: 'chance',
            chance: 0.8
          }
        },
        {
          type: 'execute',
          command: 'playsound minecraft:entity.generic.burn block @a ~ ~ ~ 1',
          hide: true
        },
        {
          type: 'place',
          block: {
            blocks: ['water_cauldron'],
            state: {
              level: 2
            }
          }
        }
      ]
    })
  })
})
