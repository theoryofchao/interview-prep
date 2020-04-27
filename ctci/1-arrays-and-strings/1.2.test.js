const {
    isPermutationByHashMap,
    isPermutationBySorting,
} = require('./1.2');

describe("isPermutationBySorting", () => {
    test("Different Length Inputs", () => {
        expect(isPermutationBySorting("abcdef", "abcdefg")).toBe(false);
    });

    test("Same Length Not Permutations", () => {
        expect(isPermutationBySorting("abcde", "vwxyz")).toBe(false);
    });

    test("Are Permutations of Each Other", () => {
        expect(isPermutationBySorting("racecar", "aaccerr")).toBe(true);
    });
});

describe("isPermutationByHashMap", () => {
    test("Different Length Inputs", () => {
        expect(isPermutationByHashMap("abcdef", "abcdefg")).toBe(false);
    });

    test("Same Length Not Permutations", () => {
        expect(isPermutationByHashMap("abcde", "vwxyz")).toBe(false);
    });

    test("Are Permutations of Each Other", () => {
        expect(isPermutationByHashMap("racecar", "aaccerr")).toBe(true);
    });
});