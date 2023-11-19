function make_album(artistName:string,album:string,noOfTrack?:number) {
    const myAlbum:{artistName:string,Album:string, noOfTrack}={
        artistName: artistName,
        Album:album,
        noOfTrack:noOfTrack
    }
    return console.log(myAlbum) 
}
make_album("atif aslam", "Adat")
make_album("Johny Division", "Unknown Pleasure")
make_album("Mickel jackson", "Thriller")
make_album("Junkook", "Golden",9)