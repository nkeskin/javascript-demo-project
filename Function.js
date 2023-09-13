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
console.log(func3(1,4));

function func3(param1, param2, param3 = 2) {
    return param1 * param2 - param3;
}

console.log(func3(1,4, 4));


const func4 = () => {
    console.log("another way")
}

func4();

const func5 = (param1, param2) => {
    return param1 / param2;
}

console.log(func5(1,1))