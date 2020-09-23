//print 

console.log("Hello wolrd");

//variable + datatype

// var name ='jaffar';
// console.log(name);
// console.log(typeof name);

// var age =20;
// console.log(age);
// console.log(typeof age);

// var male = true;
// console.log(male);
// console.log(typeof male);

// var female = false;
// console.log(female);
// console.log(typeof female);

// var family;
// console.log(family);
// console.log(typeof family);

// var salary = null;
// console.log(salary);
// console.log(typeof salary);



// Mutation
/*
name = 'abbas';
console.log(name);

male = 1;
console.log(male);

female = 'female';
console.log(female);*/


//Operaters

var number1,number2,operater;

number1 = prompt("Enter number 1 : ");
number2 = prompt("Enter number 2 : ");
operater = prompt("Enter operater +-*/");

if(operater == '+'){
    var addition = 1*number1+number2*1;
    alert("Addition : "+addition);
}else if(operater == '-'){
    var subtraction = number1 - number2;
    alert("Subtraction : "+subtraction);
}else if(operater == '*'){
    var multiplication = number1 * number2;
    alert("Multiplication : "+multiplication);
}else if(operater == '/'){
    var division = number1 / number2;
    alert("Division : "+division);
}

