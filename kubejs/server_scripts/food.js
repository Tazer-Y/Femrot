ServerEvents.recipes((event) => {
  event.replaceInput(
    { id: "pumpkin_pie" },
    "pumpkin",
    "farmersdelight:pumpkin_slice"
  );

  event.recipes.create.filling("golden_apple", [
    Fluid.of("molten_metals:molten_gold", 864),
    "apple",
  ]);
  event.recipes.create.filling("golden_carrot", [
    Fluid.of("molten_metals:molten_gold", 864),
    "carrot",
  ]);
});
