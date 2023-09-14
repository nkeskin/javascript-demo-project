let desc = {
    param1 : false,
    param2 : [1, 2, 3, 4]
};

console.log(desc.param1);
console.log(desc.param2);
desc.param2.push(5, 6);
console.log(desc.param2[5]);
console.log(desc.param3);
desc.param3 = "working";
console.log(desc.param3);
desc.param3 = null;

let desc2= {};
Object.assign(desc2, desc);

console.log(`desc2 : ${Object.keys(desc2)}`)

function checkForParam3() {
    console.log(Object.keys(desc));
    if ("param3" in desc) {
        console.log("desc has param3");
    } else {
        console.log("desc does not have param3");
    }
}

checkForParam3();

delete desc.param3;
console.log("Deleted param3");

checkForParam3();

/////////////////////////////////////////////

let obj1 = {param1 : 1, param2 : "temp"};
let obj2 = obj1;
let obj3 = {param1 : 1, param2 : "temp"};

console.log(obj1 == obj2);
console.log(obj1 == obj3);
obj2.param1 = 15;
console.log(obj1);

////////////////////////////////////////////

const obj4 = {param1 : 1, param2: 2};
console.log(obj4);
obj4.param1 = 10;
console.log(obj4);
// can not mutate constant object
//obj4 = {param1 : 1, param2: 2}; // => Will give TypeError: Assignment to constant variable.