var arr = [[1,2,3],[4,5,6],[7,8,9]];


function reverse(martrix){
    let m = martrix.length;
    let n = martrix[0].length;
    let row = 0 , col = 0;
    let curr , prev;
    while (row < m && col < n){
        prev = martrix[row+1][col];
        for (let i = col; i < n; i++) {
            curr = martrix[row][i];
            martrix[row][i] = prev;
            prev = curr;
        }
        row++;
        for (i = 0; i < n; i++) {
            curr = martrix[i][n-1];
            martrix[i][n-1-col] = prev;
            prev = curr;
        }
        col++;
    }
}

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
    console.log("---");
}