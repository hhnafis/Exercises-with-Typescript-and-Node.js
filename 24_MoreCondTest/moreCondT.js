//Tests for equality and inequality with strings
var firstName = 'Hamza';
var secondName = 'Hanif';
var ifTrue = "I've same no. of characters in my fist and second name.";
var ifFalse = "I'v different no. of characters in my fist and second name.";
console.log(firstName.length == secondName.length ? ifTrue : ifFalse);
//Tests using the lower case function
var userName = 'Zeeshan';
var correctName = 'zeeshan';
console.log(userName.toLowerCase() == correctName ? 'You can submit' : 'You cannot submit');
//Numerical tests
var a = 6;
var b = 7;
console.log(a == b ? true : false);
console.log(a != b ? true : false);
console.log(a > b ? true : false);
console.log(a < b ? true : false);
console.log(a <= b ? true : false);
console.log(a >= b ? true : false);
//Tests using "and" and "or" operators
var c = 8;
var d = 9;
var myStr = 'hello';
console.log(c > d && myStr == 'world' ? true : false);
console.log(c < d && myStr == 'world' ? true : false);
console.log(c < d && myStr == 'hello' ? true : false);
console.log(c > d || myStr == 'world' ? true : false);
console.log(c < d || myStr == 'world' ? true : false);
console.log(c < d || myStr == 'hello' ? true : false);
var numArray = ['hamza', 'hanif'];
//Test whether an item is in a array
console.log(numArray.indexOf('hamza') > -1 ? "True" : 'False');
//Test whether an item is in a array
console.log(numArray.indexOf('ali') > -1 ? 'True' : 'False');
