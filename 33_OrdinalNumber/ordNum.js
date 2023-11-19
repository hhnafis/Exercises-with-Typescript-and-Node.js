//Ordinal Number
var ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < ordinalNum.length; i++) {
    if (ordinalNum[i] == 1) {
        console.log("".concat(ordinalNum[i], "st"));
    }
    else if (ordinalNum[i] == 2) {
        console.log("".concat(ordinalNum[i], "nd"));
    }
    else if (ordinalNum[i] == 3) {
        console.log("".concat(ordinalNum[i], "rd"));
    }
    else {
        console.log("".concat(ordinalNum[i], "th"));
    }
}
