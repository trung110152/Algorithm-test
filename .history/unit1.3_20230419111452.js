function checkTriangle (a,b,c){
    if (a+b>c && b+c>a && a+c>b){
        if(a===b || b===c || a===c){
            if(a*a === b*b+ c*c || b*b === a*a+ c*c || c*c === b*b+ a*a){
                console.log('tam giác vuông cân')
            }
            else console.log('tam giác cân')
        }
        if(a===b && b===c && a===c){
            console.log('tam giác đều')
        }
        if(a*a === b*b+ c*c || b*b === a*a+ c*c || c*c === b*b+ a*a){
            console.log('tam giác vuông')
        }
        else console.log('tam giác')
    }else console.log('không là tam giác')
}

checkTriangle(1,2,3);
checkTriangle(1,5,3);