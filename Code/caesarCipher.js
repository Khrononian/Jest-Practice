function caesarCipher (string) {
    const regex = /[a-zA-Z' ]+|[,.?;:]/ig;
    const words = /[a-zA-Z]/gi
    let convertedWord = ''

    function findCases(insertedString) {
        for (let i = 0; i < insertedString.length; i++) {
            let lowerCaseLetters = insertedString[i].charCodeAt(0) - 96;
            const lowerWord = String.fromCharCode(97 + lowerCaseLetters);
            
            if (!insertedString[i].match(words)) convertedWord += `${insertedString[i].match(regex)}`
            if (insertedString[i].charCodeAt(0) == 122) convertedWord += 'a'
            else if (insertedString[i].charCodeAt(0) == 90) convertedWord += 'A'

            convertedWord += lowerWord
        }
    }
    
    findCases(string)

    return convertedWord.match(regex).join('')
}

export default caesarCipher