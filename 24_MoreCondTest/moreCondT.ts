
//Tests for equality and inequality with strings
let firstName:string='Hamza'
let secondName:string='Hanif'
let ifTrue:string="I've same no. of characters in my fist and second name."
let ifFalse:string="I'v different no. of characters in my fist and second name."
console.log(firstName.length==secondName.length?ifTrue:ifFalse)

//Tests using the lower case function
let userName:string='Zeeshan'
let correctName:string='zeeshan'
console.log(userName.toLowerCase()==correctName?'You can submit':'You cannot submit');

//Numerical tests
let a:number=6
let b:number=7
console.log(a==b?true:false);
console.log(a!=b?true:false);
console.log(a>b?true:false);
console.log(a<b?true:false);
console.log(a<=b?true:false);
console.log(a>=b?true:false);


//Tests using "and" and "or" operators
let c:number=8;
let d:number=9;
let myStr:string='hello'
console.log(c>d&&myStr=='world'?true:false)
console.log(c<d&&myStr=='world'?true:false)
console.log(c<d&&myStr=='hello'?true:false)

console.log(c>d||myStr=='world'?true:false)
console.log(c<d||myStr=='world'?true:false)
console.log(c<d||myStr=='hello'?true:false)



let numArray:string[]=['hamza','hanif']
//Test whether an item is in a array
console.log(numArray.indexOf('hamza')>-1?"True":'False');
//Test whether an item is in a array
console.log(numArray.indexOf('ali')>-1?'True':'False');


