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

(() => {
    console.log('I am an IIFE');
})();