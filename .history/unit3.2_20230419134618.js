 let a;
 let b;
 let arr=[]
 function checkNumbered(a,b) {
    for(var i = a;i<=b;i++) {
      if(i %3 === 0)
      {arr= [...arr,a];}
    }
 }

 checkNumbered(1,9);