function make_shirt(size, message) {
    console.log("Your size is ".concat(size, " and the message you want to print on shirt is '").concat(message, "'"));
}
make_shirt(43, 'Hello World');
//doing this by using Arrow function
var makeShirt = function (size, message) { console.log("Your size is ".concat(size, " and the message you want to print on shirt is '").concat(message, "'")); };
console.log(makeShirt(23, 'Hi'));
