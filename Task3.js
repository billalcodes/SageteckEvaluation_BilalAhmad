function commentsCorrect(pattern) {
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === '/') {
            if (i + 1 < pattern.length && pattern[i + 1] === '/') {
                i++; 
            } else if (i + 1 < pattern.length && pattern[i + 1] === '*') {
               
                if (i + 3 < pattern.length && pattern[i + 2] === '*' && pattern[i + 3] === '/') {
                    i += 3;
                } else {
                    return false;  
                }
            } else {
                return false; 
            }
        } else if (pattern[i] === '*') {
            return false; 
        }
    }
    return true;
}
console.log(commentsCorrect("//////"));
console.log(commentsCorrect("/**//**////**/"));
console.log(commentsCorrect("///*/**/"));
console.log(commentsCorrect("/////"));
    