function squareNumbersFor(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * arr[i]);
    }
    return result;
}

function squareNumbersForEach(arr) {
    let result = [];
    arr.forEach(num => {
        result.push(num * num);
    });
    return result;
}

function squareNumbersMap(arr) {
    return arr.map(num => num * num);
}


module.exports = {
    squareNumbersFor,
    squareNumbersForEach,
    squareNumbersMap
}

