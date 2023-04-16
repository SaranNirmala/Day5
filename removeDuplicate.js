let array=[1,5,1,2,5, 8, 5, 8];
let withoutDuplicate=[];
let arr= function(){
    for(let item of array)
    { 
        if(!withoutDuplicate.includes(item))
        {
            withoutDuplicate.push(item);
        }
        
    }
}

arr();
console.log(withoutDuplicate);



// IIFE
let pureArray=[];
(function(){
    for(let item of array)
    {
        if(!pureArray.includes(item))
        {
            pureArray.push(item);
        }
    }
})();
console.log(pureArray);