function higherAndLower(arr) {

    let higher = arr[0];

    let lower = arr[0];

    for (let index = 0; index < arr.length; index++) {

        if (typeof arr[index] !== 'number') {
            continue;
        }
        
        if (higher < arr[index]) {
            higher = arr[index];
        }

        if (lower > arr[index]) {
            lower = arr[index];
        }
    }

    console.log(higher, lower);
}

higherAndLower([1, -2, 3, 4, 5]);