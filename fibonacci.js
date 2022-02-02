var fiboArray=[0,1];
function fibo(number){
    
    for(let i=2; i<=number;i++){
        fiboArray[i]=fiboArray[i-1]+fiboArray[i-2];
    }
    return fiboArray;
}

var fiboSeries=fibo(10);
console.log(fiboSeries);
