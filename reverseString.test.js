const reverseString = require("./reverseString")

test('should be defined', () => {
    expect(reverseString).toBeDefined();
});

test('Should return olleh from hello string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('Should return olleh from Hello string with capital letter', () => {
    expect(reverseString('Hello')).toBe('olleh');
});