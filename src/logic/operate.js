import Big from 'big.js';

const operate = (number1, number2, operator) => {
  const bigNumber1 = Big(number1);
  const bigNumber2 = Big(number2);
  let total = Big();
  switch (operator) {
    case '+':
      total = bigNumber1.plus(bigNumber2);
      break;
    case '-':
      total = bigNumber1.minus(bigNumber2);
      break;
    case 'X':
      total = bigNumber1.times(bigNumber2);
      break;
    case '÷':
      total = bigNumber1.div(bigNumber2);
      break;
    case '%':
      total = bigNumber1.mod(100);
      break;
    default:
  }
  return total;
};

export default operate;
