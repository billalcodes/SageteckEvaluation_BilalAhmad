function missingLetter(charArray) {
    const firstChar = charArray[0];
    const isUppercase = firstChar === firstChar.toUpperCase();
    
    const startIndex = firstChar.charCodeAt(0);

    for (let i = 0; i < charArray.length; i++) {
        const expectedChar = String.fromCharCode(startIndex + i);
        if (charArray[i] !== expectedChar) {
            return expectedChar;
        }
    }

    return null;
}

console.log(missingLetter(["a", "b", "c", "e", "f", "g"])); 
console.log(missingLetter(["O", "Q", "R", "S"]));           
console.log(missingLetter(["t", "u", "v", "w", "x", "z"])); 
console.log(missingLetter(["m", "o"])); 