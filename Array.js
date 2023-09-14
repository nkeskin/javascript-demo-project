let arr = [];
let str = "myString";

function printValues() {
    console.log(`arr : ${arr} - len : ${arr.length}`);
    console.log(`str : ${str} - len : ${str.length}`)
}

printValues();

arr.push(1, 2, 3);
str = str.repeat(2);

printValues();

arr.pop();
str = str.padEnd(20, " ");

printValues();

arr.shift();
str = str.padStart(21, "\n");

printValues();

arr.unshift(4, 3);
str = str.trim();

printValues();

for (let entry of arr) {
    console.log(entry);
}

for (let entry of str) {
    console.log(entry);
}

let iterator = arr.entries();
// let res = null;
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
while ((res = iterator.next()).done === false) {
    console.log(res);
}

arr.sort();
printValues();

let arr1 = arr.slice(0);
let arr2 = arr.slice(7);
let arr3 = arr.slice(1,2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr1.concat(arr2).concat(arr3));


function myFunc(...param) {
    for (let elem of param) {
        console.log(elem);
    }
}

myFunc(1);
myFunc(1, 2);

let nums = [1, 2, 3, 4];

myFunc(nums);
myFunc(...nums);

let strs = ["param1", "param2"];
console.log("param0", strs, "param3");
console.log("param0", ...strs, "param3");