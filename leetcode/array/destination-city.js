/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const outgoing = new Set();
   for (const [cityA, cityB] of paths) {
       outgoing.add(cityA);
   }
   for (const [cityA, cityB] of paths) {
       if (!outgoing.has(cityB)) {
           return cityB;
       }
   }
};