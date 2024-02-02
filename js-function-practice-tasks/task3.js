// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function sumOfArray(numbers) {
    let sum=0;
   for (let i = 0; i <numbers.length; i++) {
    const element =numbers[i];
    sum+=element;
   }
   return sum;
}
console.log(sumOfArray([1,2,5,6,5,4,5,10]));
