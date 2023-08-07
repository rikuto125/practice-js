import { processNumbers } from '../practice-03-slice-or-split/sliceOrSplit.js'


test('squares all numbers in the array', () => {
    expect(processNumbers("1.3 4.2 9.7 3.6 7.8")).toEqual("5.5");
});