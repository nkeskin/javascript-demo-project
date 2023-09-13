function multiplier(factor) {
    return number => number * factor;
}

let three = multiplier(3);
let four = multiplier(4);

console.log(three(5));
console.log(four(5));