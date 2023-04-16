let number=[1,6,8,4,2,5,6,7,9,13,11,19,17,31,21];

let primeNumber=[];
// Anonymous Function
let primeNum= function (){ 
   for(var item of number)
   {  var factor=0;
      for(let i=0; i<=item; i++)
      {
         if((item % i) === 0)
         {
          factor++;
         }
      } 

      if(factor === 2)
      {
         primeNumber.push(item);
      }   
      
   }
}
primeNum(number);
console.log(primeNumber.join(','));

// IIFE

(function(){
   for(var item of number)
   { var factor=0;
      for(let i=1; i<=item ; i++)
      {
         if((item % i) ===0)
         {
            factor++;
         }
      }

  if(factor === 2)
  {
   console.log(item);
  }
   }
})();


