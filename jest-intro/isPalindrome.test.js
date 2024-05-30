const isPalindrome = require('./isPalindrome');

test('Tacocat returns true', () => {
    expect(isPalindrome("Tacocat")).toBe(true);
});

test('Hrea returns false', () => {
    expect(isPalindrome("Hrea")).toBe(false);
});

