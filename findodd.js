//Print ODD numbers in an ARRAY using Anonymous and  IIFE


let numbers=[1,2,3,4,5,6,7,8,11,18,19];
let numOdd=[];

let findOdd= function()
{
    for(let i=0; i<=numbers.length-1; i++)
    {                                            // Local Scope
      if(numbers[i]%2 !=0)
      {               
        numOdd.push(numbers[i]);
      }
    }
}

findOdd(numbers);
console.log(numOdd.join(', '));



//IIFE - Immediately Invoked Function Expression
// ADDED 2 different ways for immediate invoke function
let num=[];  
(function (){
    for (let i=0;i<=numbers.length-1; i++)
    {
        if(numbers[i] % 2 !=0)                     // Local Scope
        {
            num.push(numbers[i]);    
        }
    }
})();    

console.log(num.join(', '));


// we can directly insert the number array in the () (function end statement)

let arrayNum1=[];
(function(numArray){
  for (var i=0;i<=numArray.length-1; i++)
  {
      if(numArray[i] % 2 !=0)                     // Local Scope
      {
          arrayNum1.push(numArray[i]);    
      }
  }
})([1,2,5,8,9,6,4,7,63,5]);                       // we can use numbers in the () (array can be directly declared in side the () )

console.log(arrayNum1.join(', '));



//  we can give the numbers(name of Array)
let arrayNum=[];
(function (){
  for (let i=0;i<=numbers.length-1; i++)
  {
      if(numbers[i] % 2 !=0)                     // Local Scope
      {
          arrayNum.push(numbers[i]);    
      }
  }
})(numbers);                       // we can use the numbers in the () 

console.log(num.join(', '));



