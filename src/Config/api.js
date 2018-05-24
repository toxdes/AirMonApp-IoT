//ubidots api

//objcet of all values
export const values = {
  smoke: 'http://things.ubidots.com/api/v1.6/devices/DEVICE_ID/smoke/values',
  humidity: 'http://things.ubidots.com/api/v1.6/devices/DEVICE_ID/hum/values',
  temperature:
    'http://things.ubidots.com/api/v1.6/devices/DEVICE_ID/tmp/values',
  rain: 'http://things.ubidots.com/api/v1.6/devices/ecfabc13a487/rain/values',
  ldr: 'http://things.ubidots.com/api/v1.6/devices/ecfabc13a487/ldr/values',
};
//for smoke, humidity and temperature
export const smoke =
  'http://things.ubidots.com/api/v1.6/devices/DEVICE_ID/smoke/values';
export const humidity =
  'http://things.ubidots.com/api/v1.6/devices/DEVICE_ID/hum/values';
export const temperature =
  'http://things.ubidots.com/api/v1.6/devices/DEVICE_ID/tmp/values';

//for rain and ldr
export const rain =
  'http://things.ubidots.com/api/v1.6/devices/DEVICE_ID/rain/values';
export const ldr =
  'http://things.ubidots.com/api/v1.6/devices/DEVICE_ID/ldr/values';

//token from ubidots
export const token = 'UBIDOTS_TOKEN';

export default (api = name => {
  if (!name || !values[name]) {
    return new Error('Not A Valid Value to fetch');
  }
  return values[name];
});
