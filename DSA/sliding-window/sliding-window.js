let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;


function maxSum(arr,n,k){
    var sum = 0;
    var max = 0;

    //initial sum
    for (let i = 0; i < k; i++) {
        sum += arr[i];
        max = sum;
    }
    console.log(max);
    for (let j = k; j < n; j++) {
        // [1, 4, 2, 10, 2, 3, 1, 0, 20];
        sum += arr[j] - arr[j - k];
        console.log("arr[j]",arr[j],"arr[j-k]",arr[j - k],j,"-",j,"-",k," = ",j-k,arr[j] - arr[j - k])
        console.log("sum",sum)
        if(sum > max){
            console.log("new max arr[j]",arr[j],"arr[j-k]",arr[j - k],j,"-",j,"-",k," = ",j-k,arr[j] - arr[j - k])
            max = sum;
        }
    }
    console.log(max);
}

// maxSum(arr,n,k);

//itration logic for itrating right side
var m = 2;
var s = 0;
for (var o = 0; o < 10; o++) {
    s += o - (o - m)
    console.log(s)
}

//itrating logic fro left side
var m = 2;
var s = 20;
for (let o = 0; o < 10; o++) {
    s -= o - (o - m)
    console.log(s)
}