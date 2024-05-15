ServerEvents.loaded(event => {
  const { server } = event
  if (server.persistentData.contains('firstload')) {
    server.persistentData.putBoolean('firstload', true)
    console.warn('First server load! Lag may be present for a few minutes.')
  }

  server.runCommand('gamerule playersSleepingPercentage 25')
  server.runCommand('gamerule reducedDebugInfo true')
  server.runCommand('gamerule doPatrolSpawning false')
  server.runCommand('gamerule doTraderSpawning false')
})
