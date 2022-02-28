// Calculate the number of inversions in array
function countInversions(array) {
    let counter = 0;
    let initial = array;
    if (array.length == 0) return 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                console.log(
                    "i: " + i,
                    "j: " + j,
                    "step " + counter,
                    "a: " + array[i] + " b: " + array[j],
                    "after swapped: " + array
                );
                counter++;
            }
        }
    }
    return counter;
}
// console.log(countInversions([]));
// console.log(countInversions([1, 2, 3]));
// console.log(countInversions([2, 1, 3]));
// console.log(countInversions([6, 5, 4, 3, 2, 1]));
// console.log;
console.log(countInversions([6, 5, 4, 3, 3, 3, 3, 2, 1]));
// console.log(countInversions([4, 3, 2, 1]));
