function countMin(str){
    let s = str.split('');
    let t = '';
    for(let i  = 1; i < s.length; i++){
        t += s[i];
    }
    // return t.split("").reverse().join("")+s.join('');
    return t.length;
}
 console.log(countMin('abcd'))