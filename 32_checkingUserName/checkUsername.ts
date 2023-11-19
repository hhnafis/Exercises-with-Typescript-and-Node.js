let userName:string[]=['ali','hamza','hanif','hassan']
let newUser:string[]=['hammad','ali','hamza','hussain']
for (let i = 0; i < newUser.length; i++) {
    if(userName.includes(newUser[i])){
        console.log(`${newUser[i]} is already existed.`)
    }else{
        console.log(`${newUser[i]} is availble as a new user`)
    }
    
}