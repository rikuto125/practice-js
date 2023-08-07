import {
    squareNumbersFor,
    squareNumbersForEach,
    squareNumbersMap
} from "../practice-04-for-forEach-map/practioce-04-for-forEach-map";

test('squares all numbers in the array', () => {
    expect(squareNumbersFor([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
});


test('squares all numbers in the array', () => {
    expect(squareNumbersForEach([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
});

test('squares all numbers in the array', () => {
    expect(squareNumbersMap([1, 2, 3, 4])).toEqual([1, 4, 9, 16]);
});
