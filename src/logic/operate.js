import Big from 'big.js';

const operate = (number1, number2, operator) => {
  const bigNumber1 = Big(number1);
  const bigNumber2 = Big(number2);
  let total = Big();
  switch (operator) {
    case '+':
      total = bigNumber1 + bigNumber2;
      break;
    case '-':
      total = bigNumber1 - bigNumber2;
      break;
    case 'X':
      total = bigNumber1 * bigNumber2;
      break;
    case '÷':
      total = bigNumber1 / bigNumber2;
      break;
    case '%':
      total = Math.floor(bigNumber1 / 100);
      break;
    default:
  }
  return total;
};

export default operate;
