function missingLetter(charArray) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const firstChar = charArray[0].toLowerCase();
    const startIndex = alphabet.indexOf(firstChar);
    for (let i = 0; i < charArray.length; i++) {
        const currentChar = charArray[i].toLowerCase();
        if (currentChar !== alphabet[startIndex + i]) {
            if (charArray[i] === charArray[i].toUpperCase()) {
                return alphabet[startIndex + i].toUpperCase();
            } else {
                return alphabet[startIndex + i];
            }
        }
    }
    return null;
}

console.log(missingLetter(["a", "b", "c", "E", "f", "g"]));
console.log(missingLetter(["O", "Q", "R", "S"])); 
console.log(missingLetter(["t", "u", "v", "w", "x", "z"])); 
console.log(missingLetter(["m", "O"])); 
console.log(missingLetter(["A", "B", "d", "E", "F"])); 
