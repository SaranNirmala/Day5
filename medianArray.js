let a=[1, 16, 27, 89, 6];
let b=[2, 34, 68, 43, 24];

let c=a.concat(b);


function sorter() {
    c.sort((a,b) => a-b);
} 
sorter(a, b);
console.log(c);

let findMedian = function()
{
    if(c.length % 2 ==0)
    {
         return (c[c.length/2 -1] + c[c.length /2])/2;
    }
    return c[Math.floor(c.length/2)];
 
}
findMedian(c);


console.log(findMedian(c));



//IIFE

(function()
    {
        if(c.length %2 == 0)
        {
           console.log((c[c.length/2-1] + c[c.length/2])/2);
        }
         else{
            console.log(c[Math.floor(c.length/2)]) ;
         }

    }
)(c);

