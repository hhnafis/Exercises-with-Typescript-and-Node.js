var magicianNames = ['Jef MecBride', 'Mat Franco', 'Justin Willman'];
function make_great(name) {
    for (var i = 0; i < name.length; i++) {
        console.log("TheGreat ".concat(name[i]));
    }
}
make_great(magicianNames);
