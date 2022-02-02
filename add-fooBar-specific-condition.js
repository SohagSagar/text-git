

for(let i=1;i<=20;i++){
    if(i%3==0 && i%5==0){
        console.log(i, "is divisible by both 3 and 5");

    }
    else if(i%3==0){
        console.log(i, "is divisible by 3");
    }
    else if(i%5==0){
        console.log(i, "is divisible by 5");
    }

    else{
        console.log(i);
    }
    
}