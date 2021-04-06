import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  let result = total;
  let nextNumber = next;
  if (buttonName === '+/-') {
    nextNumber *= -1;
    result += -1;
    return { result, nextNumber };
  }
  result = operate(result, nextNumber, operation);
  return { result, nextNumber };
};

export default calculate;
