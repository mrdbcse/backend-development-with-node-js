const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) throw new Error("Divide by zero is not allowed");
  return a / b;
};

module.exports = {
  add,
  substract,
  multiply,
  divide,
};
