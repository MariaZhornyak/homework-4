//1
'use strict';
function copyArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    } return newArr;
} console.log(copyArr([3,7,8,15,78]));

//2
'use strict';
let arr = prompt('Введите массив');
let str = '';
for (let i = 0; i < arr.length; i++) {
    str += arr[i];
}
alert(str.split(' ').join(','));

//3
'use strict';
let arr = [];
let value = 'x';
for (let i = 0; i < 10; i++) {
    arr.push(value);
} console.log(arr);

//4
'use strict';
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
} console.log(arr);

//5
'use strict';
let arr = [];
for (let i = 1; i < 11; i++) {
    arr.push(Math.random().toFixed(2));
} console.log(arr);

//6
'use strict';
let arr = [];
for (let i = 0; i <=10; i++) {
    arr.push(Math.floor(Math.random()*10) + 1);
}
console.log(arr);


//7
'use strict';
let arr = [-9, 5, -12, 13, 58, 39, 20, 94, 7, 3, 11];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

//8
'use strict';
let arr = [13, 78, 45, 62, 58, 137, 4, -21, 18];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        console.log('Есть');
        break;
    }   
}

//9
'use strict';
let arr = [5, 20, 10, 15];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
} console.log(sum);

//10
'use strict';
let arr = [2, 3, 4];
let sumSquares = 0;
for (let i = 0; i < arr.length; i++) {
    sumSquares += arr[i]**2;
} console.log(sumSquares);



