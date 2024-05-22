ServerEvents.recipes((event) => {
  let wrenching = (output, metal) => {
    event
      .shaped(output, ["II ", "IS ", " S "], {
        S: "stick",
        I: `create:${metal}_sheet`,
      })
      .id(`create/${metal}_wrench`);
  };
  wrenching("create:wrench", "golden");
  wrenching("supplementaries:wrench", "copper");
  wrenching("etcetera:wrench", "iron");

  event.shaped("create:fluid_pipe", [" C ", " C ", " C "], {
    C: "create:copper_nugget",
  });
  event.shaped("create:fluid_pipe", ["   ", "CCC"], {
    C: "create:copper_nugget",
  });

  event.replaceInput(
    { id: "create:crafting/logistics/redstone_contact" },
    "cobblestone",
    "copper_ingot"
  );

  event.replaceInput(
    { id: "minecraft:flint_and_steel" },
    "iron_ingot",
    "iron_nugget"
  );

  event.recipes.create.item_application("create:stressometer", [
    "create:andesite_casing",
    "spelunkery:magnetic_compass",
  ]);

  event.recipes.create.item_application("create:speedometer", [
    "create:andesite_casing",
    "clock",
  ]);
});
