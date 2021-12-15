import Calculator from '../Code/calculator'

test('1 + 1 = 2', () => {
    expect(Calculator.add(1, 1)).toBe(2)
})

test('1 - 1 = 0', () => {
    expect(Calculator.subtract(1, 5)).toBe(-4)
})

test('6 / 3 = 2', () => {
    expect(Calculator.divide(6, 3)).toBe(2)
})

test('3 * 3 = 9', () => {
    expect(Calculator.multiply(3, 3)).toBe(9)
})