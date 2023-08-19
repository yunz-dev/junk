function findFirst(arrayOfChars) {
    history = {}
    for (letter in arrayOfChars) {
        if (!history[arrayOfChars[letter]]) {

            history[arrayOfChars[letter]] = 1;     
        } else {
            return arrayOfChars[letter];
        }
    }
}

console.log(findFirst([1,2,3,1,2,3]));
