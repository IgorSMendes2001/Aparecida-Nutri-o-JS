const main = (num) => {
    let quantDivis=0;
    for (let i = 1; i < 1000; i++)
    if (num % i === 0) {
        quantDivis++;
    }
    if(quantDivis>1){
        return 0;
    }
    if(quantDivis==1){
        return num;
    }
    let sumPrime = 0;
       for(let i=1; i<=1000; i++){
   
           sumPrime = sumPrime + i;
       }
   
       console.log("Sum = " + sumPrime);
   }



main();