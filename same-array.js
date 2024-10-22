// Two arrays will be passed in as arguments and return true 
// if after multiplication of each item of first array, then in second array's element will be found of same value
// else return false

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    if (!arr1 instanceof Array || !arr2 instanceof Array) {
        return false
    }

    for (let index = 0; index < arr1.length; index++) {
        const elementAfterSquare = arr1[index] * arr1[index];
        const currentIndex = arr2.indexOf(elementAfterSquare);
        
        if (arr2.indexOf(elementAfterSquare) === -1) {
            return false
        }

        arr2.splice(currentIndex, 1)
    }

    return true
}

console.log(same([2, 3, 6], [4, 9, 36]));