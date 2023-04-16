//  1st Method
let A=[1,3,4,5,6,7];
let K=4;
function solution() {
    if (A.length === K || K === 0) {
        return A;
    }

    for (let i = 0; i < K; i++) {
        A.unshift(A.pop());
        // console.log(A);
    }

    return A;
}
solution(A,K);

console.log(`The Rotate Array is ${A.join(',')}`);


//  Another Method for ROTATE


let array=[1,3,4,5,6,7];
let k=4;
let arr=[];
let arr1=[];


array.reverse(array);

let rotateArray=function(){
    for(let i=0; i<array.length; i++)
{
   if(i<k)
   {
    arr.push(array[i]);
   
   } else{
    arr1.push(array[i]);
   }
}
}
rotateArray(array);
console.log(arr.reverse(arr) +',' + arr1.reverse(arr1) );


// IIFE
let array1=[]; let array2=[];
(function()
{
    for(let i=0; i<array.length; i++)
{
   if(i<k)
   {
    array1.push(array[i]);
   } else{
    array2.push(array[i]);
   }
}
})();
console.log(array1.reverse(array1) +',' + array2.reverse(array2) );