function findFirst(arrayOfChars) {
    history = {}
    for (letter in arrayOfChars) {
        if (history[arrayOfChars[letter]]) {
            return arrayOfChars[letter];
        } else {
            history[arrayOfChars[letter]] = 1;     
        }
    }
}

console.log(findFirst([1,2,3,2,1,2,3]));
