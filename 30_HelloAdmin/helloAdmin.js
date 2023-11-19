var userNames = ['hamza', 'ali', 'admin', 'nafees'];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(userNames[i], ", thank you for logging in again."));
    }
}
