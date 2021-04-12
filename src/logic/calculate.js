import operate from './operate';

export default function Calculate(calcObj, btnName) {
  let { total, next, operation } = calcObj;
  switch (btnName) {
    case '+':
    case '-':
    case '÷':
    case 'X':
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
    case '+/-':
      next = operate(next, 0, 'X');
      break;
    case '%':
      if (next !== '') {
        total = operate(next, 0, '%');
        next = '';
      }
      break;
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    default:
      if (btnName === '.' && next.includes('.')) {
        break;
      }
      next += btnName;
  }
  return { next, total, operation };
}
