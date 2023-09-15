let obj = [{name: "mike", age: 20}, {name: "emily", age: 30}, {name: "lisa", age: 40}];

let filteredByName = obj.filter(o => o.name === "mike");
let filteredByAge = obj.filter(o => o.age > 20);

console.log(filteredByName);
console.log(filteredByAge);

let mappedByName = obj.map(o => o.name);
let mappedByAge = obj.map(o => o.age);

console.log(mappedByName);
console.log(mappedByAge);

let reducedAge = obj.filter(o => o.age > 20).map(o => o.age).reduce((a, b) => a + b);

console.log(reducedAge);

let reduceAgeWithFunc = obj.filter(filterAge(20)).map(mapAge()).reduce(reduceAge());

function filterAge(age) {
    return obj => obj.age > age;
}

function mapAge() {
    return obj => obj.age;
}

function reduceAge() {
    return (a, b) => a + b;
}

console.log(reduceAgeWithFunc);

let func = mapAge();
console.log(func({age : 60}));

let func2 = filterAge(50);
console.log(func2({age : 58}));
console.log(func2({age : 25}));

let func3 = reduceAge();
console.log(func3(20, 30));