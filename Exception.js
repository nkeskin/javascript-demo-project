function exception(param) {
    if (param === undefined) {
        throw new Error("param is undefined");
    }
    console.log(`param : ${param}`);
}

let param = undefined;

try {
    exception(param);
} catch (error) {
    console.log(error);
} finally {
    param = 1;
}

exception(param);

class MyError extends Error{}

function throwMyError() {
    throw new MyError("My error is thrown");
}

try {
    throwMyError();
} catch (error) {
    console.log(error)

}