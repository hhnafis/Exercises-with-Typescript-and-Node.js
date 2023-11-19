var magicianNames = ['Jef MecBride', 'Mat Franco', 'Justin Willman'];
var copyArray = magicianNames;
//console.log(copyArray)
var newArray = [];
function make_great(name) {
    for (var i = 0; i < name.length; i++) {
        newArray.push("The Great ".concat(name[i]));
    }
}
make_great(copyArray);
//console.log(newArray)
function show_array(arrayName) {
    // for (let j = 0; j < arrayName.length; j++) {
    //     console.log(arrayName[j]);
    // }
    console.log(arrayName);
}
show_array(magicianNames);
show_array(newArray);
