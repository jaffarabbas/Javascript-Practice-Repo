function conceptOfSyncAndAsync(){ 
    console.log("asdasd") // sync
    setTimeout(function() { // asyncronas
        console.log("asdasd1")
    },2000);
    console.log("asdasd2") // sync
}

//callbacks
function conceptOfCallBacks(){
    setTimeout(function() {},2000); // function(){} -> callback function
}

//promises
function conceptOfPromises(){
    //it return 3 states -> pending, resolved, rejected
    var a = new Promise((res,rej)=>{
        if(true){
            return res("ok"); /// return -> resolve
        }else{
            return rej("error"); // return -> reject
        }
    });

    a.then((data)=>{
        console.log(data); // works when resolve
    }).catch((err)=>{
        console.log(err); // works when reject
    });
}

//async await
//normal function with async code

function getData(){
    fetch('https://jsonplaceholder.typicode.com/users/') // fetch -> data from server 
    .then((res) => res.json()) // then when data is fetched then convert it to json becases fetch return raw data
    .then((data) => console.log(data)) // then when data is converted to json then print it
}

// so to avoid .then we use async await
async function getDataAsync(){
    // first await remove first .then
    let raw = await fetch('https://jsonplaceholder.typicode.com/users/') // await -> wait for data to be fetched
    // second await remove second .then
    let data = await raw.json() // await -> wait for data to be converted to json
    console.log(data) // print data it prints when raw is fetched
}

// getData()
// getDataAsync()