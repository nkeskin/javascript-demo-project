class List {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
    toString() {
        let temp = this;
        while (temp) {
            console.log(this.val);
            temp = temp.next;
        }
    }
}

let myList = new List(1, null);
myList.next = new List(2, null);
myList.next.next = new List(3, null);

// console.log(myList);

function toArray(list) {
    let arr = []
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

let res = toArray(myList);

console.log(res);