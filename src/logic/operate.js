import Big from 'big.js';

const operate = (number1, number2, operator) => {
  const bigNumber1 = Big(Number(number1));
  const bigNumber2 = Big(Number(number2));
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
      if (bigNumber1.c[0] !== 0 && bigNumber2.c[0] !== 0) {
        total = bigNumber1.div(bigNumber2);
      } else {
        total = '0 is not divisible';
      }
      break;
    case '%':
      total = bigNumber1.div(100);
      break;
    default:
      return Error;
  }
  return total;
};

export default operate;
