var userName = " I am HaMza hanIf.";
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
//now in title case
function titleCase(str) {
    str = str.trim().toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
    return str;
}
titleCase(userName);
