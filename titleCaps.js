
// Anonymous Function
let str =["Hello Mom YOU are my WORLD"];

let str1=str[0].toLowerCase().split(' ');

let stringArray = function ()
{
 for(let i=0; i<=str1.length-1; i++)               // Local Scope
 {
    str1[i]= str1[i].charAt(0).toUpperCase()+ str1[i].slice(1);
    
 }
}
stringArray(str1);
console.log(str1.join(' '));



// Immediate invoked function expression
 (function () {
    for (let i = 0; i < str1.length-1; i++) {                 // Local Scope
      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);  
                                                             
    } 
  })();                             // we can use the sentence in the () 

  console.log(str1.join(' '));