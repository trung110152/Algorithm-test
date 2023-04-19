let numberMax = 0;
function checkNumber(...rest) {
for (var i = 0; i < rest.length; i++) {
    if(rest[i] > numberMax) 
    numberMax = rest[i]; 
}
console.log(numberMax);
}
checkNumber(1,5,3,4)