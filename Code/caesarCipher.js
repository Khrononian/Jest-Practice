function caesarCipher (string) {
    const regex = /[a-zA-Z' ]+|[,.?;:]/ig;

    const words = /[a-zA-Z]/gi
    let convertedWord = ''

    function findCases(insertedString) {
        for (let i = 0; i < insertedString.length; i++) {
            let lowerCaseLetters = insertedString[i].charCodeAt(0) - 96;
            const lowerWord = String.fromCharCode(97 + lowerCaseLetters);
            
            if (insertedString[i].charCodeAt(0) == 122) convertedWord += 'a'
            else if (insertedString[i].charCodeAt(0) == 90) convertedWord += 'A'

            if (!insertedString[i].match(words)) convertedWord += `${insertedString[i].match(regex)}`
            
            convertedWord += lowerWord
            console.log('First test', convertedWord)
        }
    }
    
    findCases(string)


    return convertedWord.match(regex).join('')
}






let n = 'abcDeX'
let convertedWord = ''
for (let i = 0; i < n.length; i++) {
    let lowerCaseLetters = n[i].charCodeAt(0) - 96;
    let upperCaseLetters = n[i].charCodeAt(0) - 64;
    const chr = String.fromCharCode(97 + lowerCaseLetters)
    

    convertedWord += chr
    console.log('Test', convertedWord)
    if (n[i] == n[i].toUpperCase()) console.log('Its upper', n[i])
    console.log(chr, n[i], n[i].charCodeAt(0))
    console.log('Z test', 'Z'.charCodeAt(0))
    
}

console.log(caesarCipher('abcDeXz wiw. a bea'), 'Final test')

export default caesarCipher
