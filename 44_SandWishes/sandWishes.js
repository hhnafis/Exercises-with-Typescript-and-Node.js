var sandWishes = [];
function enterSandWish(name) {
    for (var i = 0; i < name.length; i++) {
        console.log("".concat(name[i], " sandwish is being order."));
    }
}
enterSandWish(['bread']);
enterSandWish(['cheese']);
enterSandWish(['honey']);
