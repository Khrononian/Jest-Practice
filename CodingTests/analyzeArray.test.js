import analyzeArray from '../Code/analyzeArray'

test('Get average, min, max and length of array', () => {
    expect(analyzeArray([1, 28, 34, 99, 59, 182])).toEqual({
            average: 67,
            min: 1,
            max: 182,
            length: 6
        }
    )
})

test('Get average', () => {
    expect(analyzeArray([1, 28, 34, 99, 59, 182]).average).toBe(67)
})

test('Get min', () => {
    expect(analyzeArray([1, 28, 34, 99, 59, 182]).min).toBe(1)
})

test('Get max', () => {
    expect(analyzeArray([1, 28, 34, 99, 59, 182]).max).toBe(182)
})

test('Get length', () => {
    expect(analyzeArray([1, 28, 34, 99, 59, 182]).length).toBe(6)
})