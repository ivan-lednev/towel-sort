// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length === 0 || matrix.length === 0) {
        return [];
    }
    function reverse(arr) {
        return arr.slice().sort((l, r) => r - l);
    }
    return matrix.map((arr, i) => (i % 2 === 0 ? arr : reverse(arr))).flat();
};
