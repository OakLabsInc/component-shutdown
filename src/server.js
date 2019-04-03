
require('dotenv')
const debug = process.env.NODE_ENV !== 'production'
const shutdownTime = process.env.SHUTDOWN_TIME || '0 * * * * *'
const timezone = process.env.TZ || 'America/Los_Angeles'
const { join } = require('path')


var schedule = require('node-schedule');

var moment = require('moment-timezone');
var platform = require(join(__dirname, 'platform'))

var now = moment().tz(timezone).format('H:mm a')
console.log('platform host : ', process.env.PLATFORM_HOST)
console.log('shutdownTime : ', shutdownTime)


schedule.scheduleJob(shutdownTime, function(fireDate){
  console.log('Time for shutdown!', fireDate);
  platform.powerOff(function(err){
    if(err) console.log(err)
  })
});




