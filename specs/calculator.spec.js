const data = require(`${process.cwd()}/data/calculator/operators.data`);
const { firstOperand, secondOperand } = data;
const parser = require('parse-decimal-number');

const Calculator = require(`${process.cwd()}/pages/calculator`);
const calculator = new Calculator();

describe('Test main calculator operators', () => {
  afterEach(() => calculator.clear());

  it(`should return sum of ${firstOperand} and ${secondOperand}`, () => {
    const actualResult = calculator
      .add(firstOperand, secondOperand)
      .clickEqual()
      .getDisplayedValue();

    expect(parser(actualResult)).toEqual(data.sum());
  });

  it(`should return difference between ${firstOperand} and ${secondOperand}`, () => {
    const actualResult = calculator
      .subtract(firstOperand, secondOperand)
      .clickEqual()
      .getDisplayedValue();

    expect(parser(actualResult)).toEqual(data.difference());
  });

  it(`should return quotient of ${firstOperand} divided by ${secondOperand}`, () => {
    const actualResult = calculator
      .divide(firstOperand, secondOperand)
      .clickEqual()
      .getDisplayedValue();

    expect(actualResult).toEqual(data.quotient());
  });

  it(`should return product of ${firstOperand} multiplied on ${secondOperand}`, () => {
    const actualResult = calculator
      .multiply(firstOperand, secondOperand)
      .clickEqual()
      .getDisplayedValue();

    expect(parser(actualResult)).toEqual(data.product());
  });
});
