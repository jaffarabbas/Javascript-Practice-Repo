const s = "jaffar how are you"

const reverseSentence = (s) => {
    return s.split(" ").map(element => element.split("").reverse().join("")).join(" "); 
}

console.log(reverseSentence(s))