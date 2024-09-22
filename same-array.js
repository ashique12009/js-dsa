// Two arrays will be passed in as arguments and return true 
// if after multiplication of each item of first array, then in second array's element will be found of same value
// else return false

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let index = 0; index < arr1.length; index++) {
        const elementAfterSquare = arr1[index] * arr1[index];
        
        if (arr2.indexOf(elementAfterSquare) === -1) {
            return false
        }
    }

    return true
}

console.log(same([1, 2, 3], [1, 4, 9]))