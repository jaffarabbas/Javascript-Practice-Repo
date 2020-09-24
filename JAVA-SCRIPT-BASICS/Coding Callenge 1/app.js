console.log("First Coding callenge");


var john_mass,john_height,mark_mass,mark_height,BMI_JOHN,BMI_MARK,RESULT;

function calculating_BMI(){ 
    john_mass = document.getElementById('john_mass').value;
    john_height = document.getElementById('john_height').value;
    mark_mass = document.getElementById('mark_mass').value;
    mark_height = document.getElementById('mark_height').value;
    console.log("John mass : "+john_mass+" John height : "+john_height);
    BMI_JONN = (john_mass)/(john_height*john_height);
    BMI_MARK = (mark_mass)/(mark_height*mark_height);
    console.log(BMI_JONN);
     //document.getElementById('show').innerHTML = BMI_JONN;
     if(BMI_MARK > BMI_JONN){
         RESULT = true;
     }
     else{
         RESULT = false;
     }
     document.getElementById('show').innerHTML = BMI_JONN.toFixed(2);
     document.getElementById('show2').innerHTML = BMI_MARK.toFixed(2);
     document.getElementById('result').innerHTML = RESULT;
}