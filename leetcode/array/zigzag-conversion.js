var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let rows = Array.from({length: numRows}, () => []);
    console.log(rows);
    let direction = 1;
    let row = 0;
    for (let i = 0; i < s.length; i++) {
        rows[row].push(s[i]);
        console.log(rows);
        row += direction;
        if (row === numRows - 1) direction = -1;
        if (row === 0) direction = 1;
    }
    return rows.flat().join('');
};

console.log(convert("PAYPALISHIRING", 3)) // "PAHNAPLSIIGYIR"