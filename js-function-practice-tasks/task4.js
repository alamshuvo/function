// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function countZero(count) {
    let counts=0;
    for (let i =0; i<count.length-1; i++) {
        const element =count[i];
        if (element!=="0") {
           continue;
        } 
        counts+=element;
    }
    const countsLength=counts.length;
    return countsLength;
}
console.log(countZero("1001110011100"));