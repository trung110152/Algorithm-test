let arr=[];
function checkNumbered(a,b){
    for(var i=a;i<=b;i++){
       const y = Math.sqrt(i);
    if (y %1 === 0)
        arr.push(y);
    }
    console.log(arr);
}

checkNumbered(1, 16);