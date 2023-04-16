let number=[2, 6, 1, 3, 9, 5, 6,11, 19, 31, 71, 74];
let prime=1;


number.forEach(element => {
    let factor=0;
    for(let i=0; i<=element; i++)
    {
       if((element%i) ===0)
       {
          factor++;
       }
    }   
    if(factor === 2)
    {
      console.log(element);
    }
 });