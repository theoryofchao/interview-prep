/**
 * Initial Checks:
 * -Check input is actually a string
 */

/**
 * -Utilize Hash Table or similar to check whether character already exists
 * -Only needs to iterate through each character once
 * 
 * O(n) runtime, O(n) space
 */
const isUniqueString = input => {
    if (input.length < 2) return true;
    const set = new Set();
    for (let c of input) {
        if (set.has(c)) {
            return false;
        }
        set.add(c);
    }
    return true;
};

/**
 * -Use double for loops to iterate through all characters against each other
 * -Check all remaining characters for duplicates
 * 
 * O(n^2) runtime, O(1) space
 */
const isUniqueStringNoDS = input => {
    for (let i = 0; i < input.length; i++) {
        for (j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) return false;
        }
    }
    return true;
};

module.exports = {
    isUniqueString,
    isUniqueStringNoDS,
};