const { by } = require('../helpers/custom.locators');

const resourceIdNamespace = 'com.kodaikamata.simplecalculator:id/';

class Calculator {
  constructor() {
    this.addButtonSelector = by.resourceId(`${resourceIdNamespace}buttonPlus`);
    this.minusButtonSelector = by.resourceId(`${resourceIdNamespace}buttonMinus`);
    this.multiplyButtonSelector = by.resourceId(`${resourceIdNamespace}buttonMultiply`);
    this.divideButtonSelector = by.resourceId(`${resourceIdNamespace}buttonDivide`);
    this.equalsButtonSelector = by.resourceId(`${resourceIdNamespace}buttonEqual`);
    this.displaySelector = by.resourceId(`${resourceIdNamespace}display`);
    this.allClearButtonSelector = by.resourceId(`${resourceIdNamespace}buttonAc`);
  }

  add(...rest) {
    rest.forEach((value) => {
      this.inputValue(value);
      $(this.addButtonSelector).click();
    });

    return this;
  }

  subtract(...rest) {
    rest.forEach((value) => {
      this.inputValue(value);
      $(this.minusButtonSelector).click();
    });

    return this;
  }

  multiply(...rest) {
    rest.forEach((value) => {
      this.inputValue(value);
      $(this.multiplyButtonSelector).click();
    });

    return this;
  }

  divide(...rest) {
    rest.forEach((value) => {
      this.inputValue(value);
      $(this.divideButtonSelector).click();
    });

    return this;
  }

  inputValue(value) {
    `${value}`.split('').forEach((digit) => {
      this._clickButton(digit);
    });

    return this;
  }

  _clickButton(buttonText) {
    const digitButtonSelector = by.text(buttonText);
    $(digitButtonSelector).click();
  }

  clickEqual() {
    $(this.equalsButtonSelector).click();

    return this;
  }

  getDisplayedValue() {
    return browser.getText(this.displaySelector);
  }

  clear() {
    $(this.allClearButtonSelector).click();

    return this;
  }
}

module.exports = Calculator;
