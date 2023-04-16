let words=["katak", "hello", "nitin0o", "dad" , "madam", 'saras']; 
let stringnew=''

// Anonymous
let findPalindrome= function(){
    for(let i=0; i<=words.length-1;i++)
{
   let palindrome= words[i].split('');
    let stringRev=palindrome.reverse();
    stringnew=stringRev.join('');
 
     if(words[i] == stringnew)
     {
        console.log(stringnew);
     } 
}
}
findPalindrome();

//IIFE

(function(){
    for(let i=0; i<=words.length-1;i++)
    {
       let palindrome= words[i].split('');
        let stringRev=palindrome.reverse();
        stringnew=stringRev.join('');
     
         if(words[i] == stringnew)
         {
            console.log(stringnew);
         } 
    }
})();
