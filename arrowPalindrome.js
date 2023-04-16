let stringArray=["katak", "malayalam" , "nithin", "Shiva"];

stringArray.forEach((element) =>{
       let ele= element.split("");
       let eleRev=ele.reverse();
      let palindrome= eleRev.join('');
  if(element == palindrome)
  {
    console.log(element);
  }
});