const obj = {
    main:[{
        o:"Jaffar",
    },{
        o:"Zain",
    },{
        o:"Ahmed",
    },{
        o:"Fahad",
    }]
};

const arr = ["Jaffar","Zain"]

const filtered = obj.main.filter((item) => {
    return arr.includes(item.o)
})

function filterObjectWithArray(obj, arr) {
    const filtered = obj.main.filter((item) => {
        return arr.includes(item.o)
    })
    return filtered
}

console.log(filtered)
console.log(filterObjectWithArray(obj, arr))

