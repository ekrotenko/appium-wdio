const data = require(`${process.cwd()}/data/calculator/operators.data`);
const parser = require('parse-decimal-number');
const Calculator = require(`${process.cwd()}/pages/calculator`);


const calculator = new Calculator();

describe('Test main calculator operators', () => {

  afterEach(() => calculator.clear());

  it(`should return sum of ${data.firstOperand} and ${data.secondOperand}`, () => {
    const actualResult = calculator
      .inputValue(data.firstOperand)
      .add()
      .inputValue(data.secondOperand)
      .clickEqual()
      .getResult();

    expect(parser(actualResult)).toEqual(data.sum());
  });

  it(`should return difference between ${data.firstOperand} and ${data.secondOperand}`, () => {
    const actualResult = calculator
      .inputValue(data.firstOperand)
      .subtract()
      .inputValue(data.secondOperand)
      .clickEqual()
      .getResult();

    expect(parser(actualResult)).toEqual(data.difference());
  });

  it(`should return quotient of ${data.firstOperand} divided by ${data.secondOperand}`, () => {
    const actualResult = calculator
      .inputValue(data.firstOperand)
      .divide()
      .inputValue(data.secondOperand)
      .clickEqual()
      .getResult();

    expect(actualResult).toEqual(data.quotient());
  });

  it(`should return product of ${data.firstOperand} multiplied on ${data.secondOperand}`, () => {
    const actualResult = calculator
      .inputValue(data.firstOperand)
      .multiply()
      .inputValue(data.secondOperand)
      .clickEqual()
      .getResult();

    expect(parser(actualResult)).toEqual(data.product());
  });
});