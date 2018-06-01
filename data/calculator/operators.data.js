const faker = require('faker');

module.exports = {
  firstOperand: faker.random.number({min: -10000, max: 10000}),
  secondOperand: faker.random.number({min: -10000, max: 10000}),
  sum() {
    return this.firstOperand + this.secondOperand
  },
  difference() {
    return this.firstOperand - this.secondOperand
  },
  product() {
    return this.firstOperand * this.secondOperand
  },
  quotient() {
    return (this.firstOperand / this.secondOperand).toFixed(7);
  },
};