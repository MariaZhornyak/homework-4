//1
'use strict';
let arr = ['a', 'b', 'c'];
let arr1 = arr.push('1', '2', '3');
console.log(arr);

//2
'use strict';
let arr = [1, 2, 3];
console.log(arr.reverse());

//3
'use strict';
let arr = [1, 2, 3];
let arr1 = arr.unshift(4, 5, 6);
console.log(arr);

//4
'use strict';
let arr = ['js', 'css', 'jq'];
alert(arr[arr.length - 1]);

//5
'use strict';
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice(3, 6);
let arr2 = [];
arr2.push(arr1);
console.log(arr2);

//6
'use strict';
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.splice(1, 2);   
console.log(arr);

//7
'use strict';
let arr = [1, 2, 3, 4, 5];
let newArr = arr.splice(1, 3);
console.log(newArr);

//8
'use strict';
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
alert(arr[1][0]);

//9
'use strict';
let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
console.log(obj.js[0]);

//10
'use strict';
let arr = ['a', 'b', 'c'];
alert(arr);
alert(arr[0]);
alert(arr[1]);
alert(arr[2]);

//11
'use strict';
let arr = ['a', 'b', 'c', 'd'];
alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);

//12
'use strict';
let arr = [2, 5, 3, 9];
let tmp1 = arr[0] * arr[1];
let tmp2 = arr[2] * arr[3];
let result = tmp1 + tmp2;
alert(result);