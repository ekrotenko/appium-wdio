const cla = require('command-line-args');

const caps = {
  automationName: 'UIAutomator2',
  //useJSONSource: true,
  maxInstances: 1,
  appiumVersion: '1.7.2',
  deviceName: 'Pixel XL API 27',
  platformVersion: '8.1.0',
  platformName: 'android',
  app: './apps/simplecalculator.apk',
  avd: 'Pixel_XL_API_27'
};

const avd = {
  name: 'avd',
  description: `Id of the AVD`,
  typeLabel: 'String',
  type: String,
};
const deviceName = {
  name: 'deviceName',
  alias: 'n',
  description: `Name of the device where specs are executed`,
  typeLabel: 'String',
  type: String,
};
const platformVersion = {
  name: 'platformVersion',
  alias: 'p',
  description: `Version of the AVD configuration platform`,
  typeLabel: 'String',
  type: String,
};

const optionList = [avd, deviceName, platformVersion];

const cliParams = cla(optionList, {partial: true});

module.exports = {
  cliParams,
  optionList
};