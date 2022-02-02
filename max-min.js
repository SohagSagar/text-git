//max-min number//

var a=20;
var b=12;
var c=7;
var d=10;
//find largest number//
if(a>b && a>c && a>d){
    console.log(a, "is the largest number.");
}
else if(b>a && b>c && b>d){
    console.log(b, "is the largest number.");
}
else if(c>a && c>b && c>d){
    console.log(c, "is the largest number.");
}
else{
    console.log(d, "is the largest number.");
}

//find smallest number//

if(a<b && a<c && a<d){
    console.log(a," is smallest number.");
}
else if(b<a && b<c && b<d){
    console.log(b," is the smallest number.");
}
else if(c<a && c<b && c<d){
    console.log(c," is the smallest number.");
}
else{
    console.log(d," is the smallest number");
}

// min-max using function//

function maxNumber(a,b,c){
    if(a>b && a>c && a>d){
        console.log(a, "is the largest number.");
    }
    else if(b>a && b>c && b>d){
        console.log(b, "is the largest number.");
    }
    else if(c>a && c>b && c>d){
        console.log(c, "is the largest number.");
    }
    else{
        console.log(d, "is the largest number.");
    }
    return maxNumber;
}

function minNumber(a,b,c){
    if(a<b && a<c && a<d){
        console.log(a," is smallest number.");
    }
    else if(b<a && b<c && b<d){
        console.log(b," is the smallest number.");
    }
    else if(c<a && c<b && c<d){
        console.log(c," is the smallest number.");
    }
    else{
        console.log(d," is the smallest number");
    }
    return minNumber;
}

var maxNumber=maxNumber(20,50,40);
var minNumber= minNumber(20,50,40);


//min-max number using array//

function largeNumber(number){
    var largeNumber= number[0];
    for (let i =0; i<number.length; i++){
        arrayElement=number[i];
        if(largeNumber<arrayElement){
            largeNumber=arrayElement;
        }
    }
    return largeNumber;
}

function smallNumber(number){
    var largeNumber= number[0];
    for (let i =0; i<number.length; i++){
        arrayElement=number[i];
        if(largeNumber>arrayElement){
            largeNumber=arrayElement;
        }
    }
    return largeNumber;
}

var largeArrayElement= largeNumber([20,44,52,45,80,70,1,25,12]);
console.log('Large elements of the array is ',largeArrayElement);

var largeArrayElement= smallNumber([20,44,52,45,80,-1,70,1,25,12]);
console.log('Small elements of the array is ',largeArrayElement);

