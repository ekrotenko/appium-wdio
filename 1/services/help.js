const commandLineUsage = require('command-line-usage');
const {optionList} = require('./cli.params');

const sections = [
    {
        header: 'appium-wdio-test-task',
    },
    {
        header: 'CLI Options',
        optionList,
    },
];

// tslint:disable:no-console
console.log(commandLineUsage(sections));
