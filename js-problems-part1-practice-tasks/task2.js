// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input: 

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function findMultipleNumbers(numbers,findNumber) {
    let findMaxNumber=[];
    // const maxOcc=[0];
    for (let i =0; i<numbers.length; i++) {
        const element =numbers[i];
        // console.log(element);
        if (element===findNumber) {
            // console.log(element);
            findMaxNumber.push(element);
        }
    }
    const len=findMaxNumber.length;
    return `find Number is:${findNumber} times occure:${len}`
}
console.log(findMultipleNumbers([10,20,30,40,10,20,20],10));