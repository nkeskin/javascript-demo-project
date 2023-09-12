let size = 8;

for (let i = 0; i < size; i++) {
    let str = "";
    for (let j = 0; j < size/2; j++) {
        if (i % 2 === 0) {
            str += " #";
        } else {
            str += "# ";
        }
    }
    console.log(str);
}