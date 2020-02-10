//21
function filterFalse(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == false || arr[i] == null || arr[i] == -0 || arr[i] == NaN || arr[i] == '') {
            delete arr[i];
        } else {
            arr1.push(arr[i]);
        }
    } return arr1;
} console.log(filterFalse(['', 34, null, true, false, 'hello']));

//22
function moveNumber()

//23
'use strict';
function generateNumber(start, len) {
    let arr = [];
    for (let i = 0, j = start; i < len; i++, j++) {
        arr[i] = j;
    } return arr;
}
console.log(generateNumber(4, 5));

//24
'use strict';
let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
    function currentSum(numbers) {
        let result = [];
        for (let i = 0; i < numbers.length; i++) {
            let tmp = numbers.slice(0, i + 1);
            result[i] = tmp.reduce(function(accumulator, currentValue) {
                return accumulator + currentValue;
            })
        } return result;
    }
    alert (currentSum(numbers));



















