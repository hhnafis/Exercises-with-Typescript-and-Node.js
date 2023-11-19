// let userNames:string[]=['hamza','ali','admin','nafees']
let userNames:string[]=[]
if (userNames.length==0) {
    console.log('We need some more users.')
}else{
    for (let i = 0; i < userNames.length; i++) {
        if (userNames[i]==='admin') {
            console.log('Hello admin, would you like to see a status report?')
        }else{
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
            
        }
        
    }
}