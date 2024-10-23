function check_permutation_palindrome(str) {
	// Step 1: Normalize string, as if string has space or special characters then remove them
	let strAfterNormalize = ""
	for (let char of str) {
		if (char != " ") {
			strAfterNormalize = strAfterNormalize + char
		}
	}

	strAfterNormalize = strAfterNormalize.toLowerCase()
	
	// Step 2: Create a frequency map (count characters)
	const charCount = {}

	for (let char of strAfterNormalize) {
		// Increment the character count
		charCount[char] = (charCount[char] || 0) + 1
	}
    	
	// Step 3: count odd frequency
	let oddCount = 0
	for (let count of Object.values(charCount)) {
		if (count % 2 != 0) {
			oddCount++
		}
	
		// If odd count > 1, then it is not a permutation of palindrome
		if (oddCount > 1) {
			return false
		}
	}
	
	return true
}

console.log('Output: ', check_permutation_palindrome("Tact Coa"))
