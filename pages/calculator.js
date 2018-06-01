const {by} = require('../helpers/web.element.helpers');
const resourceIdNamespace = 'com.kodaikamata.simplecalculator:id/';

class Calculator {
  constructor() {
    this.addButtonSelector = by.resourceId(`${resourceIdNamespace}buttonPlus`);
    this.minusButtonSelector = by.resourceId(`${resourceIdNamespace}buttonMinus`);
    this.multiplyButton = by.resourceId(`${resourceIdNamespace}buttonMultiply`);
    this.divideButtonSelector = by.resourceId(`${resourceIdNamespace}buttonDivide`);
    this.equalsButtonSelector = by.resourceId(`${resourceIdNamespace}buttonEqual`);
    this.displaySelector = by.resourceId(`${resourceIdNamespace}display`);
    this.allClearButtonSelector = by.resourceId(`${resourceIdNamespace}buttonAc`);
  };

  add() {
    $(this.addButtonSelector).click();

    return this;
  }

  subtract() {
    $(this.minusButtonSelector).click();

    return this;
  }

  multiply() {
    $(this.multiplyButton).click();

    return this;
  }

  divide() {
    $(this.divideButtonSelector).click();

    return this;
  }

  inputValue(value) {
    `${value}`.split('').forEach(digit => {
      this.clickButton(digit);
    });

    return this;
  }

  clickButton(buttonText) {
    const digitButtonSelector = by.text(buttonText);
    $(digitButtonSelector).click();
  }

  clickEqual() {
    $(this.equalsButtonSelector).click();

    return this;
  }

  getResult() {
    return browser.getText(this.displaySelector);
  }

  clear() {
    $(this.allClearButtonSelector).click();

    return this;
  }

}

module.exports = Calculator;