const arr = [1,2,3,4,5]

arr.reduce((acc, curr) => {
    console.log(acc, curr)
    return acc + curr
});

console.log(arr)