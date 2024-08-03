var createCounter = function(n) {
    var count = 0;
    return function() {
        let a = n + count;
        count++;
        return a; 
    };
};

const counter = createCounter(1)

console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3