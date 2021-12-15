function analyzeArray (array) {
    const object = {
        average: Math.round(array.reduce((a, b) => a + b, 0) / array.length),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }

    return object;
}

export default analyzeArray