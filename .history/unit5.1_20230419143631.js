let S = 0 ;
function sum(n) {
    for(var i=0; i<=n; i++){
        S += (i*(i+1))
    }
    console.log(S);
}

sum(2)