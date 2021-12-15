import caesarCipher from '../Code/caesarCipher'

test('abc > bcd', () => {
    expect(caesarCipher('abc')).toBe('bcd')
})

test('Shift sentence up one', () => {
    expect(caesarCipher('Defense is important, now defend.')).toBe('Efgfotf jt jnqpsubou, opx efgfoe.')
})