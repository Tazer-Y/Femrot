ServerEvents.recipes(event => {
  event.replaceInput(
    { id: 'create:item_application/brass_casing_from_log' },
    'create:brass_ingot',
    'create:brass_sheet'
  )
  event.replaceInput(
    { id: 'create:item_application/brass_casing_from_wood' },
    'create:brass_ingot',
    'create:brass_sheet'
  )
  event.replaceInput(
    { id: 'create:item_application/brass_casing_from_log_using_deployer' },
    'create:brass_ingot',
    'create:brass_sheet'
  )
  event.replaceInput(
    { id: 'create:item_application/brass_casing_from_wood_using_deployer' },
    'create:brass_ingot',
    'create:brass_sheet'
  )

  event.replaceInput(
    { id: 'create:item_application/copper_casing_from_log' },
    'copper_ingot',
    'create:copper_sheet'
  )
  event.replaceInput(
    { id: 'create:item_application/copper_casing_from_wood' },
    'copper_ingot',
    'create:copper_sheet'
  )
  event.replaceInput(
    { id: 'create:item_application/copper_casing_from_log_using_deployer' },
    'copper_ingot',
    'create:copper_sheet'
  )
  event.replaceInput(
    { id: 'create:item_application/copper_casing_from_wood_using_deployer' },
    'copper_ingot',
    'create:copper_sheet'
  )

  event.replaceInput(
    { id: 'create_dd:item_application/bronze_casing_from_log' },
    'create_dd:bronze_ingot',
    'create_dd:bronze_sheet'
  )
  event.replaceInput(
    { id: 'create_dd:item_application/bronze_casing_from_wood' },
    'create_dd:bronze_ingot',
    'create_dd:bronze_sheet'
  )
  event.replaceInput(
    { id: 'create_dd:item_application/bronze_casing_from_log_using_deployer' },
    'create_dd:bronze_ingot',
    'create_dd:bronze_sheet'
  )
  event.replaceInput(
    { id: 'create_dd:item_application/bronze_casing_from_wood_using_deployer' },
    'create_dd:bronze_ingot',
    'create_dd:bronze_sheet'
  )
})
