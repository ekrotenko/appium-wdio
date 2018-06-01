const cla = require('command-line-args');

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