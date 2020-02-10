//11
'use strict';
let arr = [12, 24, 3];
let sum = 0;
for (let i =0; i < arr.length; i++) {
    sum += arr[i];
}
let average = sum/arr.length;
console.log(average);

//12
'use strict';
let num = prompt('Enter a number');
function colonOdd(num) {
    let colon = '';
    for (let i = 0; i < num.length; i++) {
        if ((num[i] % 2 == 1) && (num[i + 1] % 2 == 1)) {
            colon += num[i] + ':';
        } else {
            colon += num[i];
        }
    } return colon;
} console.log(colonOdd(num));

//13
'use strict';
function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    } return newArr;
} console.log(removeDuplicates([3, 3, 7, 11, 4, 7, 8]));

//14
'use strict';
function getFirst(array, n) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
    } return newArray;
} console.log(getFirst([3, 6, 8, 11, 9, 7, 14], 3));

//15
'use strict';
let arr1 = [2, 9, 7, 10];
let arr2 = [5, 8, 6, 3];
let sumArr = [];
for (let i = 0; i < arr1.length, i < arr2.length; i++) {
    sumArr[i] = arr1[i] + arr2[i];
} console.log(sumArr);

//16
'use strict';
function union(arr1, arr2) {
    let arrResult = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arrResult.indexOf(arr1[i]) == -1) {
            arrResult.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arrResult.indexOf(arr2[i]) == -1) {
            arrResult.push(arr2[i]);
        }
    } return arrResult;
} alert(union([3, 7, 11, 8], [5, 7, 9, 11]));

//17
'use strict';
function union(arr1, arr2) {
    let resultArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            resultArr.push(arr1[1]);
        }
    } return resultArr
} alert(union([3, 6, 8, 9], [5, 3, 6, 8, 11]));

//18
'use strict';
function compareNumbers(arr) {
    return arr.sort(function(num1, num2){return num2 - num1} );
}
alert(compareNumbers([5, 8, 4, 6, 1]));

//19
'use strict';
function sumOfSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]**2;
    } return sum;
} alert(sumOfSquares([2, 3, 4]));

//20
'use strict';
function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum;
} console.log(sumOfElements([3, 7, 10]));
function productOfNumbers(arr) {
    let tmp = 1;
    for (let i = 0; i < arr.length; i++) {
        tmp *= arr[i];
    } return tmp;
} alert (productOfNumbers([3, 4, 5])); 
