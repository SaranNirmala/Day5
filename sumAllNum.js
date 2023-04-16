// Anonymous Function
let numArray=[8,9,5,6,2,1,4,6];
let sum=0;
let sumOfArray =function (){
     
     for(let i=0;i<=numArray.length-1;i++)       // Local Scope
     {
        sum=sum+numArray[i];
     }
} 
sumOfArray();
console.log(sum);



// immeidate invoked function Expression
let sum1=0;
(function (){
     
     for(let i=0;i<=numArray.length-1;i++)       // Local Scope
     {
        sum1=sum1+numArray[i];
     }
} )();

console.log(sum1);