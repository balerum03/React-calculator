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
      if (next) {
        total = operate(next, -1, 'X');
        next = '';
      } else if (total) {
        total = operate(total, -1, 'X');
        next = '';
      }
      break;
    case '%':
      operation = btnName;
      if (next) {
        total = operate(next, total, operation);
        next = '';
        operation = '';
      } else if (total) {
        total = operate(total, next, operation);
        operation = '';
      }
      break;
    default:
      if (btnName === '.' && next.includes('.')) {
        break;
      }
      next += btnName;
      break;
  }
  return { next, total, operation };
}
