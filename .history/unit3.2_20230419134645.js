 let a;
 let b;
 let arr=[]
 function checkNumbered(a,b) {
    for(var i = a;i<=b;i++) {
      if(i %3 === 0)
      {arr= [...arr,a];}
    }
    console.log(arr);
 }

 checkNumbered(1,9);