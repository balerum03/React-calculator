import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  let result = total;
  let nextNumber = next;

  switch (buttonName) {
    case '+/-':
      nextNumber *= -1;
      result += -1;
      break;
    case 'AC':
      result = null;
      nextNumber = null;
      break;
    case '=':
      break;
    case '.':
      if (result.includes('.')) {
        break;
      }
      result += buttonName;
      break;
    case '+': case '-': case '%': case '÷': case 'X':
      result = operate(result, nextNumber, operation);
      break;
    default:
      return { result, nextNumber };
  }
  return { result, nextNumber };
};

export default calculate;
