function range(start, end, step = 1) {
    let arr = [];
    if (step === 0) {
        step = 1;
    }
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }

    return arr;
}

function sum(arr) {
    let total = 0;
    for (let elem of arr) {
        total += elem;
    }
    return total;
}

let arr = range(3, 8);
console.log(arr);
console.log(sum(arr));

let arr2 = range(3, 8, 2);
console.log(arr2);
console.log(sum(arr2));

let arr3 = range(5, 2, -1);
console.log(arr3);
console.log(sum(arr3));

let arr4 = range(5, 7, -1);
console.log(arr4);
console.log(sum(arr4));

console.log();
console.log("/////////////////////////////////////////////////////////////////");
console.log();

function reverse(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

console.log(reverse([1, 2, 3, 4, 5]))

function reverseInPlace(arr) {
    for (let i = 0; i < arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
}

let myArr = [3, 4, 5, 6, 7];
console.log(myArr);
reverseInPlace(myArr);
console.log(myArr);

console.log();
console.log("/////////////////////////////////////////////////////////////////");
console.log();


let obj = {param1 : "test"};
console.log(obj);

function temp(o) {
    o.param1 = "not";
}

temp(obj);

console.log(obj);