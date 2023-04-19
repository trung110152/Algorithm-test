
 let arr=[]
//  function checkNumbered(a,b) {
//     for(var i = a;i<=b;i++) {
//       if(i %3 === 0)
//       {arr.push(i);}
//     }
//     console.log(arr);
//  }

function checkNumbered(a,b) {
    for(var i = a;i<=b;i++) {
      if(i %5 === 0 && i %3 === 0)
      {arr.push(i);}
    }
    console.log(arr);
 }

 checkNumbered(1,15);