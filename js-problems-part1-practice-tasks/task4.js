// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming
function checkLongestWord(sentence) {
    const splitedSentence=sentence.split(" ");
    // console.log(splitedSentence);
    let lengthCheck='';
    for (let i = 0; i <splitedSentence.length; i++) {
        const element =splitedSentence[i];
        // console.log(element);
        if (element.length>lengthCheck.length) {
            // console.log(element);
            lengthCheck=element;
        }
    }
    return `${lengthCheck} is the largest word of ${sentence} this sentence`;
    
}
console.log(checkLongestWord("I am learning Programming to become a programmer"));
