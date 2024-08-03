/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let arr = points.sort((a,b) => a[0] - b[0]);
    let v = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let cal = arr[i+1][0] - arr[i][0]
        if(v < cal){
            v = cal;
        }
    }
    return v;
};

console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]))