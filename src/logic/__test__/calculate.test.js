import calculate from '../calculate';

describe('User clicls on AC button', () => {
  test('Clears everything', () => {
    expect(calculate({
      total: '2', next: '3', operation: '+',
    }, 'AC')).toEqual({
      total: '', next: '', operation: '',
    });
  });
  test('Clear everything', () => {
    expect(calculate({
      total: '1', next: '23', operation: '-',
    }, 'AC')).not.toEqual({
      total: '1', next: '23', operation: '-',
    });
  });
});

describe('User can enter a number', () => {
  test('Numbers being entered from 0-9', () => {
    let number = '1';
    let result = calculate({
      total: '', next: '', operation: '',
    }, number);
    expect(result.next).toEqual('1');
    number = '2';
    result = calculate(result, number);
    expect(result.next).toEqual('12');
  });
});

describe('User gets the total of an operation', () => {
  test('user clicks on =', () => {
    const result = calculate({
      total: '1', next: '1', operation: '+',
    }, '=');
    expect(result.total.c).toEqual([2]);
  });
});

describe('User can input decimals', () => {
  test('User clicks on (.)', () => {
    let result = calculate({
      total: '', next: '', operation: '',
    }, '2');
    expect(result.next).toEqual('2');
    result = calculate(result, '.');
    result = calculate(result, '3');
    expect(result.next).toEqual('2.3');
  });
});

describe('User can use +/-', () => {
  test('user changes the from negative to positive', () => {
    let result = calculate({
      total: '', next: '', operation: '',
    }, '2');
    expect(result.next).toEqual('2');
    result = calculate(result, '+');
    result = calculate(result, '4');
    result = calculate(result, '=');
    result = calculate(result, '+/-');
    expect(result.total.c).toEqual([6]);
    expect(result.total.s).toEqual(-1);
  });
});

describe('User can use %', () => {
  test('user clicks on % after a number', () => {
    let result = calculate({
      total: '', next: '', operation: '',
    }, '2');
    result = calculate(result, '+');
    result = calculate(result, '4');
    result = calculate(result, '=');
    result = calculate(result, '%');
    expect(result.total.c).toEqual([6]);
    expect(result.total.e).toEqual(-2);
  });
});
