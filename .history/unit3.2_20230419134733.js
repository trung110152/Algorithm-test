 let a;
 let b;
 let arr=[]
 function checkNumbered(a,b) {
    for(var i = a;i<=b;i++) {
      if(i %3 === 0)
      {arr.push(1);}
    }
    console.log(arr);
 }

 checkNumbered(1,9);