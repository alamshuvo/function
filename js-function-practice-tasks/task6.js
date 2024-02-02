//**return all the  even number an array by using a function */
// let evenNumber=[];
// function findEvenNumbers(numbers) {
//     for (let i = 0; i <numbers.length; i++) {
//         const element = numbers[i];
//         if (element%2!==0) {
//             continue;
//         }
//         evenNumber.push(element);
//     }
//     return evenNumber;
// }
// console.log(findEvenNumbers([2,3,6,5,4,8,5,6,9,10]));


//**return sum all the even number */
let evenNumber=[];
function findEvenNumbers(numbers) {
    let sum=0;
    for (let i = 0; i <numbers.length; i++) {
        const element = numbers[i];
        if (element%2===0) {
            evenNumber.push(element);
            sum+=element;
        }
        ;
    }
    console.log(evenNumber);
    // return evenNumber;
    return sum;

}
console.log(findEvenNumbers([2,3,6,5,4,8,5,6,9,10]));