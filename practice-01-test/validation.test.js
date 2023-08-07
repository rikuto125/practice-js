const { removeAlphabets, removeUpperCases, removeHTMLTagsAndSpaces ,validateEmail, validateURL, removeAllSpaces, removeHTMLTags} = require('../practice-01/validation');


test('removes all alphabets from the string', () => {
    expect(removeAlphabets('123abc456def')).toBe('123456');
    expect(removeAlphabets('Hello, World!')).toBe(', !');
});


test ('removes all upper case alphabets from the string', () => {
    expect(removeUpperCases('Hello, World!')).toBe('ello, orld!');
});

test('removes all HTML tags and spaces from the string', () => {
    expect(removeHTMLTagsAndSpaces('<h1>Hello, World!</h1>')).toBe('Hello,World!');
    expect(removeHTMLTagsAndSpaces('<p>This is a test.</p>')).toBe('Thisisatest.');
});

test('validates email addresses', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid_email')).toBe(false);
});

test('validates URLs', () => {
    expect(validateURL('https://example.com')).toBe(true);
    expect(validateURL('invalid_url')).toBe(false);
});

test('removes all spaces from a string', () => {
    expect(removeAllSpaces('Hello, World!')).toBe('Hello,World!');
    expect(removeAllSpaces('This is a test.')).toBe('Thisisatest.');
});

test('removes all HTML tags from a string', () => {
    expect(removeHTMLTags('<h1>Hello, World!</h1>')).toBe('Hello, World!');
    expect(removeHTMLTags('<p>This is a test.</p>')).toBe('This is a test.');
});