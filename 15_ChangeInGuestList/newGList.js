"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
var guestList_1 = require("../14_GuestList/guestList"); //by using export import 
Object.defineProperty(exports, "guestList", { enumerable: true, get: function () { return guestList_1.guestList; } });
// let guest:string[]=['Nafees','Saeed','Haider','Zeeshan']
// console.log(`Hi! ${guest[0]}, would you like to come at dinner tonight.`)
// console.log(`Hi! ${guest[1]}, would you like to come at dinner tonight.`)
// console.log(`Hi! ${guest[2]}, would you like to come at dinner tonight.`)
// console.log(`Hi! ${guest[3]}, would you like to come at dinner tonight.`)
// //Zeeshan will not come at party.
console.log("\nSo, Mr. ".concat(guestList_1.guestList[2], " isn't comming tonight.\n"));
// //Modifying my guest list
guestList_1.guestList.splice(2, 1, "Ali");
console.log("Hi! ".concat(guestList_1.guestList[0], ", would you like to come at dinner tonight."));
console.log("Hi! ".concat(guestList_1.guestList[1], ", would you like to come at dinner tonight."));
console.log("Hi! ".concat(guestList_1.guestList[2], ", would you like to come at dinner tonight."));
console.log("Hi! ".concat(guestList_1.guestList[3], ", would you like to come at dinner tonight."));
