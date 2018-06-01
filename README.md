Wdio+Appium Test task Project
=================================================

## To start running tests, do the following steps:

0) Ensure that all necessary software is instaleld:
* NPM is installed on your machine. NPM is installed with Node.js. You can download Node.js installer [here](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
Type `npm -v` in console(cmd | PowerShell | Terminal) to verify successful installation. 
* Java Development Kit is installed on your machine. You can download JDK installer [here](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* Android SDK is installed on your machine.  You can download Android SDK installer [here](https://developer.android.com/studio/#downloads)
* Setup drivers for test device or setup Android Virtual Device on your machine

1) Clone the project and navigate to the cloned folder.
2) Run `npm install` to install all required packages.
3) Run `npm run appium-doctor` to verify your environment corresponds all requirements for tests run
4) Open `index.html` in allure-report folder to explore test results report


## Executing tests:
To get help of CLI parameters run command 
```text
npm run help
```

Execute test run following command in terminal:
```text
npm test --avd configured_avd_id -n name_of_device -p android_platform_version
```

## Viewing report
After test run completed you can view html test report with screenshots which is located in allure-report folder

Happy testing!