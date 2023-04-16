let string=["work hard neVEr fail"];
var str='';
let capitalArray=[]
  str=string[0].toLowerCase().split(' ');

str.forEach(element => {
    element= element.charAt(0).toUpperCase()+element.slice(1);
    capitalArray.push(element);
});

console.log(capitalArray.join(' '));


