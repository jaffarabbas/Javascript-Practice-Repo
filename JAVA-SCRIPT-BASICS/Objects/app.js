//objects


var test = {
    ques : "What is your name ?",
    ans_1:"asdsad",
    ans_2:"dsfdsf",
    ans_3:"eer",
    ans_4:"fdfdeer",
    main : "asdsad"
};

console.log(test.ques);



document.getElementById('question').innerHTML = test.ques;

var q1= document.getElementById('a1').value = test.ans_1;
var q2= document.getElementById('a2').value = test.ans_2;
var q3= document.getElementById('a3').value = test.ans_3;
var q4= document.getElementById('a4').value = test.ans_4;

var check = [q1,q2,q3,q4];
console.log(q1)
var aq1 = document.getElementById('show_answer').innerHTML = q1;
var aq2 = document.getElementById('show_answer2').innerHTML = q2;
var aq3 = document.getElementById('show_answer3').innerHTML = q3;
var aq4 = document.getElementById('show_answer4').innerHTML = q4;


function CheckAnswer(){
   var i=0;
   while(true){
       if(check[i] == test.main){
           var result = document.getElementById('result').innerHTML = test.main;
           break;
       }else{
           console.log("Mo");
           break;
       }
   }
}