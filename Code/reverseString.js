function reverseString (string) {
    const word = string.split('')
    const reverseWord = word.reverse()
    const afterResult = reverseWord.join('')

    return afterResult;
}

export default reverseString