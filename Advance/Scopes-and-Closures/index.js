//global scope
let a = 4;
let b = 6;

//block scope
{
    let a  = 2;
    let b = 1;
}
// var aa = 4;
function aaa(){
    var aa = 4;
    console.log(aa);
}

aaa();

console.log(aa);