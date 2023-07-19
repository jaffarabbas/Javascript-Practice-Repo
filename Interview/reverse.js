function reverseWords(s)
{
    let ns = s.split('.')
    return ns.reverse().join('.')
}

console.log(reverseWords("i.like.this.program.very.much"))