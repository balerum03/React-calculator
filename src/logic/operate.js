import Big from 'big.js';

const operate = (number1, number2, operator) => {
  const bigNumber1 = Big(Number(number1));
  const bigNumber2 = Big(Number(number2));
  let total = Big();
  switch (operator) {
    case '+':
      total = bigNumber1.plus(bigNumber2);
      return total;
    case '-':
      total = bigNumber1.minus(bigNumber2);
      return total;
    case 'X':
      total = bigNumber1.times(bigNumber2);
      return total;
    case '÷':
      total = bigNumber1.div(bigNumber2);
      return total;
    case '%':
      total = bigNumber1.mod(100);
      return total;
    default:
      return Error;
  }
};

export default operate;
