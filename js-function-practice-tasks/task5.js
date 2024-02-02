// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
function oddEven(number) {
    let round =parseInt(number);
    if (round%2===0) {
        return "even";
    } else {
        return "odd";
    }    
}
console.log(oddEven(55.224646464));