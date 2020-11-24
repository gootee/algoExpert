function caesarCipherEncryptor(string, key) {
  return  string.split('').map((char) => {
    const newCharCode = char.charCodeAt(0) + key % 26
    return String.fromCharCode(newCharCode > 122 ? newCharCode - 26 : newCharCode)
  }).join('')
}

const string = 'xyz'
const key = 2
const mysteryString = caesarCipherEncryptor(string, key)
console.log('mystery string = ' + mysteryString)

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;