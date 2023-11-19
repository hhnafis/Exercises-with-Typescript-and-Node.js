import {guestList} from "../14_GuestList/guestList"//by using export import 
// let guest:string[]=['Nafees','Saeed','Haider','Zeeshan']
// console.log(`Hi! ${guest[0]}, would you like to come at dinner tonight.`)
// console.log(`Hi! ${guest[1]}, would you like to come at dinner tonight.`)
// console.log(`Hi! ${guest[2]}, would you like to come at dinner tonight.`)
// console.log(`Hi! ${guest[3]}, would you like to come at dinner tonight.`)


// //Zeeshan will not come at party.
console.log(`\nSo, Mr. ${guestList[2]} isn't comming tonight.\n`)

// //Modifying my guest list
guestList.splice(2,1,"Ali")
console.log(`Hi! ${guestList[0]}, would you like to come at dinner tonight.`)
console.log(`Hi! ${guestList[1]}, would you like to come at dinner tonight.`)
console.log(`Hi! ${guestList[2]}, would you like to come at dinner tonight.`)
console.log(`Hi! ${guestList[3]}, would you like to come at dinner tonight.`)

export {guestList}

