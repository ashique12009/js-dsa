function characterCount(str) {
    let charList = {}

    for (let index = 0; index < str.length; index++) {

        let char = str[index]

        if (charList[char]) {
            charList[char]++
        } else {
            charList[char] = 1
        }
    }

    return charList
}

console.log(characterCount("hhllh world"));