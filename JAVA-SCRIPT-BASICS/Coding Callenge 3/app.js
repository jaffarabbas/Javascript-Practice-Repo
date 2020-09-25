console.log("Challenge 3");

var bill1,bill2,bill3;


bill1 = 124;
bill2 = 48;
bill3 = 268;
var bills = [bill1,bill2,bill3];


function tipCalculator(bills) {
    var percentage;
    if(bills < 50){
        percentage = 0.2;
    }else if(bills >= 50 && bills <= 200){
        percentage = 0.15;
    }else if(bills > 200){
        percentage = 0.1;
    }
    return percentage;
}

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]),tipCalculator(bills[2])];

var finalValues = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log("Tips : "+tips+" Tip + Bill : "+finalValues);


