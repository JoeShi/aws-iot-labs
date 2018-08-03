'use strict'

const Gpio = require('onoff').Gpio;
const light = new Gpio(17, 'high'); // BCM number
let currentStatus = 'off'  // current status of light

module.exports.start = async function() {
  light.writeSync(0)
  console.log('light started...')
  currentStatus = 'on'
}

module.exports.stop = async function () {
  light.writeSync(1)
  console.log('light stopped...')
  currentStatus = 'off'
}

