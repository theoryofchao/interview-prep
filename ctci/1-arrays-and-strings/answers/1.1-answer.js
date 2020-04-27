/*
    -O(n) runtime
    -Utilizes Hash Table or similar to check whether character already exists
    -Only needs to iterate through each character once
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

/*
    -O(n^2) runtime
    -Check all remaining characters for duplicates
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
    isUniqueStringNoDS
};