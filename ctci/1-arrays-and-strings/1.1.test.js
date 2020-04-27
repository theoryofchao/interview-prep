const {
    isUniqueString,
    isUniqueStringNoDS
} = require('./1.1');

describe("isUniqueString", () => {
    test("blah", () => {
        expect(isUniqueString("blah")).toBe(true);
    });
    
    test("test", () => {
        expect(isUniqueString("test")).toBe(false);
    });
    
    test("(Empty String)", () => {
        expect(isUniqueString("")).toBe(true);
    });
});

describe("isUniqueStringNoDS", () => {
    test("blah", () => {
        expect(isUniqueStringNoDS("blah")).toBe(true);
    });
    
    test("test", () => {
        expect(isUniqueStringNoDS("test")).toBe(false);
    });
    
    test("(Empty String)", () => {
        expect(isUniqueStringNoDS("")).toBe(true);
    });
});