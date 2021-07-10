//const var
const var1 = 44

function change() {
    console.log(var1);
}

change()

var var2 = 66
console.log("var varibale without let : ", var2);

function change2() {
    let var2 = 99
    console.log("var varibale with let : ", var2);
}

change2()

var lordify = function (firstName, land) {
    return `${firstName} of ${land}`
}
// New
var lordify = (firstName, land) => `${firstName} of ${land}`
console.log(lordify("Dale", "Maryland")) // Dale of Maryland
console.log(lordify("Daryle", "Culpeper")) // Daryle of Culpeper