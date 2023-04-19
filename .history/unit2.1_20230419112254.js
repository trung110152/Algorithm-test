// in số lẻ

function findOddNumbers(...numbers) {

const a = numbers.filter(number => number%2 === 1);
console.log(a);
}

findOddNumbers(1,2,3,4,5,6,78,9)