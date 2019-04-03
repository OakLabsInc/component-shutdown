const OakPlatform = require('@oaklabs/platform')

async function powerOff (cb = function () {}) {
  let platform = await new OakPlatform({
    host: process.env.PLATFORM_HOST || 'localhost:443'
  })
  let host = await platform.host()

  host.powerOff(undefined, cb)
}

module.exports.powerOff = powerOff

