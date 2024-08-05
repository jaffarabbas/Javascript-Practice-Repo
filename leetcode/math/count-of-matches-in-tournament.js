/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let match = 0 , team = n,total = 0;
    while(team>1){
        if(team%2 == 0){
            match = team / 2;
            team = team / 2;
        }else{
            match = (team - 1) / 2;
            team = (team - 1) / 2 + 1;
        }
        total += match;
    }
    return total;
};

console.log(numberOfMatches(7))