ServerEvents.recipes((event) => {
  event.recipes.create.filling("exposed_copper", [
    Fluid.water(250),
    "copper_block",
  ]);
  event.recipes.create.filling("weathered_copper", [
    Fluid.water(250),
    "exposed_copper",
  ]);
  event.recipes.create.filling("oxidized_copper", [
    Fluid.water(250),
    "weathered_copper",
  ]);
});
