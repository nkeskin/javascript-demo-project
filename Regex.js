let reg = new RegExp("abc+");
let reg2 = /[0-9]/;
let reg3 = /[/d+]/;
let reg4 = /[a-z]+/;

console.log(reg.test("abccba"));

console.log(reg2.test("0 to 9"));

console.log(reg2.test("1223"));

console.log(reg2.test("a"));

let match = reg4.exec("ab123");

console.log(match);