import operate from './operate';

export default function Calculate(calcObj, btnName) {
  let { total, next, operation } = calcObj;
  switch (btnName) {
    case 'X':
    case '-':
    case '÷':
    case '+':
    case '%':
    case '=':
      if (total !== '' && next !== '') {
        total = operate(total, next, operation);
        next = '';
        if (btnName === '=') {
          operation = '';
        } else {
          operation = btnName;
        }
      } else if (total !== '' && next === '') {
        operation = btnName;
      } else {
        total = next;
        next = '';
        operation = btnName;
      }
      break;
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    case '+/-':
      next *= -1;
      total *= -1;
      operation = '';
      break;
    case '.':
      if (total.includes('.')) {
        break;
      }
      total += '.';
      break;
    default:
      return { next, total, operation };
  }
  return { next, total, operation };
}
