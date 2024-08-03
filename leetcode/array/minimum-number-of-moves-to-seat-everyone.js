/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats = seats.sort((a, b) => a - b)
    students = students.sort((a, b) => a - b)
    let total = 0;
    for (let i = 0; i < seats.length; i++) {
        if(students[i] > seats[i]){
            total += students[i] - seats[i]
        }else{
            total += seats[i] - students[i]
        }
    }
    return total;
};

console.log(minMovesToSeat([19,2,17,20,7],[12,14,19,19,12]))