"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
//Adding More Guest to my list
//importing guestList from 15
var newGList_1 = require("../15_ChangeInGuestList/newGList");
Object.defineProperty(exports, "guestList", { enumerable: true, get: function () { return newGList_1.guestList; } });
//Just find out more space is available on my table
console.log("\nJust find out that more space is availble at my table.\n");
//changing my guest list again
//adding one guest at the begining of list
newGList_1.guestList.unshift("Qasim");
newGList_1.guestList.splice(2, 0, "Ubaid");
newGList_1.guestList.push("Ameer");
//Printing greeting messages to modified list
console.log("Hi! ".concat(newGList_1.guestList[0], ", would you like to come at dinner tonight."));
console.log("Hi! ".concat(newGList_1.guestList[1], ", would you like to come at dinner tonight."));
console.log("Hi! ".concat(newGList_1.guestList[2], ", would you like to come at dinner tonight."));
console.log("Hi! ".concat(newGList_1.guestList[3], ", would you like to come at dinner tonight."));
console.log("Hi! ".concat(newGList_1.guestList[4], ", would you like to come at dinner tonight."));
console.log("Hi! ".concat(newGList_1.guestList[5], ", would you like to come at dinner tonight."));
console.log("Hi! ".concat(newGList_1.guestList[6], ", would you like to come at dinner tonight."));
