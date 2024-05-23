ServerEvents.loaded((event) => {
  if (event.server.persistentData.gameRules) return;
  event.server.gameRules.set("reducedDebugInfo", true);

  // TODO: decide on villagers & pillagers
  // event.server.gameRules.set("doPatrolSpawning", false);
  // event.server.gameRules.set("doTraderSpawning", false);

  event.server.persistentData.gameRules = true;
});
