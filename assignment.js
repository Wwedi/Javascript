//string manipulation functions
//reverse a string
function reverseword(word){
    return word.split("").reverse().join("");
}
console.log(reverseword("shopping"));
//count characters
function countcharacters(str){
    return str.length;
}
console.log(countcharacters("shopping"));
//capitalize words
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capital = word.charAt(0).toUpperCase() + word.slice(1);
    capitalized.push(capital);
  }

  return capitalized.join(" ");
}
console.log(capitalizeWords("hello world!"));
//Array functions
//max and min
function maxMin(arr){
    let max=arr[0];
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    if(arr[i]<min){
        min=arr[i];
    }
    }
return[max, min];    
}
console.log(maxMin([0,3,9,7,8,6,1]));
//Sum of array
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumArray([9,10,8,7,5,6,4]));
//filtering of an array
    function filterArray(arr){
        let number=[10,15,9,7,20,4,3,2,6];
        let filtered=number.filter(function(value) {
    return value <= 8;
  });
  console.log(filtered);
}

filterArray();
//mathematical operations
//Factorial
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(8));
//Prime numbers
function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        return false;
    }
    }
    return true;
}
console.log(isPrime(10));
console.log(isPrime(5));
console.log(isPrime(13));
//Fibonacci Sequence is a special pattern of numbers where each number is the sum of the two before it.
function fibonacalSequence(n) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    let sequence = [];

    for (let i = 1; i <= n; i++) {
    sequence.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    }
    return sequence;
}
console.log(fibonacalSequence(6));