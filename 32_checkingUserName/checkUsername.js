var userName = ['ali', 'hamza', 'hanif', 'hassan'];
var newUser = ['hammad', 'ali', 'hamza', 'hussain'];
for (var i = 0; i < newUser.length; i++) {
    if (userName.includes(newUser[i])) {
        console.log("".concat(newUser[i], " is already existed."));
    }
    else {
        console.log("".concat(newUser[i], " is availble as a new user"));
    }
}
