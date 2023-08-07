const explainSliceAndMap = require('../practice-02-map-slice/sliceAndMap');

test('explainSliceAndMap function works correctly', () => {
    let { slicedArray, mappedArray } = explainSliceAndMap();

    // Test `slice` example
    expect(slicedArray).toEqual(["cherry", "date"]);

    expect(slicedArray).not.toEqual(["apple", "banana", "cherry", "date", "elderberry"]);

    // Test `map` example
    expect(mappedArray).toEqual([1, 2, 3, 4, 5]);
});
