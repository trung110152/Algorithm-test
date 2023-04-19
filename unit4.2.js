function sum(a, b) {
    let sum = 0;
    for (var i = a; i <= b; i++){
        if(i%2===0)
           sum += i;  
        }
    console.log(sum);
}

sum(1,10);