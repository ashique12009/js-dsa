function maximum_subarray(inputArray) {
	let currentSum = 0;
	let maximumSum = 0;
	
	for (let i = 0; i <= inputArray.length; i++) {
		currentSum = currentSum + inputArray[i];
		
		if (currentSum > maximumSum) {
			maximumSum = currentSum;
		}
		
		if (currentSum < 0) {
			currentSum = 0;
		}
	}
	
	return maximumSum;
}

let inputArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = maximum_subarray(inputArray);

console.log('Max Sum is: ', maxSum);
