var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Great Places I wanna go there atleast in one time in my life
var greatPlace = ['Makkah', 'NorthPak', 'Bosnia', 'Alaska', 'Turkey'];
console.log(greatPlace);
var sortedPlace = __spreadArray([], greatPlace, true).sort();
console.log(sortedPlace);
console.log(greatPlace); //orignal array
var reversePlaces = __spreadArray([], sortedPlace, true).reverse();
console.log(reversePlaces); //this will our sorted listin reverse order
console.log(greatPlace);
console.log(greatPlace.reverse()); //this will reverse our first most unsorte list
console.log(greatPlace.reverse()); // this will undo the reverse process
console.log(greatPlace.sort());
console.log(greatPlace.reverse());
