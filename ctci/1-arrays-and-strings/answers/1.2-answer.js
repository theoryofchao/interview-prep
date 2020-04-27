/**
 * Initial Checks:
 * -Check the inputs are the same length (short-circuit)
 */

/**
 * -Sort both strings by characters
 * -If both inputs are the same sorted, then they are permutations of one another
 * 
 * O(nlogn) runtime, O(1) space
 */
const isPermutationBySorting = (input1, input2) => {
    if (input1.length !== input2.length) return false;

    /**
     * 1. Convert to array
     * 2. Sort
     * 3. Join back to String (Primitives compared by value)
     */
    const string1Sorted = input1.split("").sort().join("");
    const string2Sorted = input2.split("").sort().join("");

    return string1Sorted === string2Sorted;
};

/**
 * -Use a HashMap to check if key exists and maintain count (remove key if empty)
 * -If HashMap has no keys at the end, then strings must be the same
 * -Use first string to generate keys, second remove removes items from HashMap
 * 
 * O(n) runtime, O(n) space
 */
const isPermutationByHashMap = (input1, input2) => {
    if (input1.length !== input2.length) return false;

    const map = new Map();

    // Iterate input1, generate keys and count value
    for (let c of input1) {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
            continue;
        } else {
            map.set(c, 1);
        }
    }

    // Iterate input2, decrement count and remove if it hits 0
    for (let c of input2) {
        // If key does not exist, then return false
        if (!map.has(c)) {
            return false;
        }

        // Decrement value, if 0 then remove
        if (map.get(c) - 1 !== 0) {
            map.set(c, map.get(c) - 1);
        } else {
            map.delete(c);
        }
    }

    /**
     * If 0 return true
     * If >= 1 return false
     */
    return !map.size;
};

module.exports = {
    isPermutationByHashMap,
    isPermutationBySorting,
}