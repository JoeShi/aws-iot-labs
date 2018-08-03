'use strict'

const AWSIoT = require('aws-iot-device-sdk');
const ThingName = 'light';
const Gpio = require('onoff').Gpio;
const light = new Gpio(17, 'high'); // BCM number

const device = AWSIoT.device({
  keyPath: './certs/private.pem.key',
  certPath: './certs/certificate.pem.crt',
  caPath: './certs/ca.pem',
  clientId: ThingName,
  host: 'your-endpoint'
})


device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('light_state_change');
    // 设置测试 topic
    device.publish('lights_online', JSON.stringify({ test_data: 'i am coming now'}));
  });

device
  .on('message', function(topic, payload) {
    var status = payload.toString();
    console.log('message', topic, status);
 
      if (status.match("1") != null) {
      console.log('entry if...state === \'1\'');
      light.writeSync(1);
      console.log('light started...');
      } else if (status.match("0") != null) {
      console.log('entry if...state === \'0\'');
      light.writeSync(0);
      console.log('light started...');
      }
      device.publish('lights_state_changed', JSON.stringify({ test_data: 'changeing light state'+ status}));
  });

device
      .on('close', function() {
         console.log('close');
      });
device
      .on('reconnect', function() {
         console.log('reconnect');
      });
device
      .on('offline', function() {
         console.log('offline');
      });
device
      .on('error', function(error) {
         console.log('error', error);
      });