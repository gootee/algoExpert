export function caesarCipherEncryptor(string: string, key: number) {
  return  string.split('').map((char) => {
    const newCharCode: number = char.charCodeAt(0) + key % 26
    return String.fromCharCode(newCharCode > 122 ? newCharCode - 26 : newCharCode)
  }).join('')
}

const string: string = 'xyz'
const key: number = 2
const mysteryString = caesarCipherEncryptor(string, key)
console.log('mystery string = ' + mysteryString)

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;