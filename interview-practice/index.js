//laxial scope

function scopeTest(){
    var t = 0;
    function test(){
        t++;
        console.log(t);
        return t;
    }
    return test;
}

var test = scopeTest();
test(); // 1
test(); // 2
test(); // 3
test(); // 4


//iife
// iife stand for immediately invoked function expression
// it is a function that is executed as soon as it is defined
// it is used to create a new scope and avoid polluting the global scope
// it is also used to create a module pattern
var t = (() => {
    var iifescope = 0;
    return function(){
        iifescope++;
        console.log(iifescope);
        return iifescope;
    }
})();

t(); // 1

