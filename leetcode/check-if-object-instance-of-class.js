var checkIfInstanceOf = function(obj, classFunction) {
    while(obj != null){
        if(obj.constructor === classFunction){
            return true;
        }
        obj = Object.getPrototypeOf(obj)
    }
    return false;
};

// console.log(checkIfInstanceOf(new Date(),Date))
class Animal {}; class Dog extends Animal {};
console.log( checkIfInstanceOf(new Dog(), Animal))