import operate from './operate';

export default function Calculate(calcObj, btnName) {
  let { total, next, operation } = calcObj;
  switch (btnName) {
    case 'X':
    case '-':
    case '÷':
    case '+':
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
      total = operate(next, -1, 'X');
      next = '';
      break;
    case '.':
      if (total.includes('.')) {
        break;
      }
      total += '.';
      break;
    case '%':
      operation = btnName;
      total = operate(next, total, operation);
      next = '';
      operation = '';
      break;
    default:
      next += btnName;
      break;
  }
  return { next, total, operation };
}
