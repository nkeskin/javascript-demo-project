class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(x, y) {
        return new Vec(this.x + x, this.y + y);
    }

    minus(x, y) {
        return new Vec(this.x - x, this.y - y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

}

let vec = new Vec(2, 4);

console.log(vec.length);

vec = vec.plus(3, 5);

console.log(vec.length);

vec = vec.minus(3, 5);

console.log(vec.length);

vec = vec.minus(2, 4);

console.log(vec.length);