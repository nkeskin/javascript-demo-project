const func1 = function (param1, param2) {
    console.log(param1);
    console.log(param2);
};

func1(1, 2);
func1("a", 3);

const func2 = function (param1, param2) {
    return param1 + param2;
};

let res = func2(12, 18);
console.log(res);
console.log(func2(2, "2a"));
console.log(func2("2", 1));

// can call func3 before its implementation
console.log(func3(1, 4));

function func3(param1, param2, param3 = 2) {
    return param1 * param2 - param3;
}

console.log(func3(1, 4, 4));


const func4 = () => {
    console.log("another way")
}

func4();

const func5 = (param1, param2) => {
    return param1 / param2;
}

console.log(func5(1, 1))

function minimum(param1, param2) {
    if (param1 >= param2) {
        return param2;
    }
    return param1;
}

console.log(minimum(1, 6))

function isEven(number) {
    if (number < 0) {
        number = number * -1;
    }
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(-1));
console.log(isEven(50));
console.log(isEven(75));

let str = "test";

console.log(str[1]);

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (char === str[i]) {
            count++
        }
    }
    return count;
}

function countBs(str) {
    return countChar(str, "B");
}

let arg = "BBbb";
console.log(`Number of Bs in ${arg} is : ${countBs(arg)}`);