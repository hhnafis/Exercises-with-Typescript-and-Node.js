let magicianNames:string[]=['Jef MecBride','Mat Franco','Justin Willman']

let copyArray:string[]=magicianNames
//console.log(copyArray)
let newArray:string[]=[]
function make_great(name:string[]){
    for (let i = 0; i < name.length; i++) {
        newArray.push(`The Great ${name[i]}`);                
    }
    
}
make_great(copyArray)
//console.log(newArray)

function show_array(arrayName:string[]) {
        console.log(arrayName)       
}
show_array(magicianNames)
show_array(newArray)