//Adding More Guest to my list
//importing guestList from 15
import {guestList} from "../15_ChangeInGuestList/newGList"



//Just find out more space is available on my table
console.log(`\nJust find out that more space is availble at my table.\n`)

//changing my guest list again
//adding one guest at the begining of list
guestList.unshift("Qasim")
guestList.splice(2,0,"Ubaid")
guestList.push("Ameer")


//Printing greeting messages to modified list
console.log(`Hi! ${guestList[0]}, would you like to come at dinner tonight.`)
console.log(`Hi! ${guestList[1]}, would you like to come at dinner tonight.`)
console.log(`Hi! ${guestList[2]}, would you like to come at dinner tonight.`)
console.log(`Hi! ${guestList[3]}, would you like to come at dinner tonight.`)
console.log(`Hi! ${guestList[4]}, would you like to come at dinner tonight.`)
console.log(`Hi! ${guestList[5]}, would you like to come at dinner tonight.`)
console.log(`Hi! ${guestList[6]}, would you like to come at dinner tonight.`)

export {guestList}