import operate from '../operate';

describe('User can perform operations', () => {
  test('Division', () => {
    const total = operate('9', '3', '÷');
    expect(total.c).toEqual([3]);
  });
  test('Sum', () => {
    const total = operate('3', '3', '+');
    expect(total.c).toEqual([6]);
  });
  test('Subtraction', () => {
    const total = operate('14', '2', '-');
    expect(total.c).toEqual([1, 2]);
  });
  test('Multiplication', () => {
    const total = operate('2', '2', 'X');
    expect(total.c).toEqual([4]);
  });
});
