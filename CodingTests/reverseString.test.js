import reverseString from '../Code/reverseString'

test('Time to fly. > .ylf ot emiT', () => {
    expect(reverseString('Time to fly.')).toBe('.ylf ot emiT')
})

test('Master Yi', () => {
    expect(reverseString('Master Yi')).toBe('iY retsaM')
})