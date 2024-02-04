// Write a function to count the number of vowels in a string.
function countVowels(sentence) {
    const vowels=["a","e","i","o","u"];
    let countVowelsNumber='';
    for (let i = 0; i <sentence.length; i++) {
        const element =sentence[i];
        // console.log(element);
        if (vowels.includes(element)) {
            // console.log(element);
            countVowelsNumber+=element;
            
        }
    }
    const vowelscount=countVowelsNumber.length;
    return ` this ${sentence} sentence has ${vowelscount} vowels and the vowel  is ----------- ${countVowelsNumber}`
    
}
console.log(countVowels("count how many vowels  number in a string"));