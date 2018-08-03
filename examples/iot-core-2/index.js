'use strict'

const AWSIoT = require('aws-iot-device-sdk');
const ThingName = 'light';
const light = require('./light');

const thingShadow = AWSIoT.thingShadow({
  keyPath: './certs/private.pem.key',
  certPath: './certs/certificate.pem.crt',
  caPath: './certs/ca.pem',
  clientId: ThingName,
  host: 'abty4kifln98q.iot.ap-northeast-1.amazonaws.com'
})

thingShadow.register(ThingName, () => {
  const lightState = {
    state: {
      reported: {
        light: "on"
      },
      desired: {
        light: "off"
      }
    }
  }

  const clientTokenUpdate = thingShadow.update(ThingName, lightState)

  if (clientTokenUpdate === null) {
    console.log('update shadow failed, operation still in progress')
  }
    console.log('what is clienttoken":'+clientTokenUpdate)
  console.log('register thing shadow successfully!')
})

thingShadow.on('delta', (thingName, stateObject) => {
  console.log(stateObject)
  if (stateObject.state && stateObject.state.light) {
    const status = stateObject.state.light
    const newState = {
      state: {
        reported: {
          light: status
        }
      }
    }
    if (status === 'on') {
      light.start().then(() => {
        thingShadow.update(thingName, newState)
      })
    } else if (status === 'off') {
      light.stop().then(() => {
        thingShadow.update(thingName, newState)
      })
    }
  } else {
    console.log('state is same')
  }
})