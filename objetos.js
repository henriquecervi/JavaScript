
// var album = {
//     title: 'Black Album',
//     released: 1991,
//     showInfo: function() {
//         console.log(`Título do álbum: ${this.title}, Lançado em: ${this.released}`)
//     }
// }

// album.showInfo();

var album = new Object();

album.title = 'Black Album';
album.released = 1991;
album.showInfo = function() {
    console.log(`Título do album é: ${this.title}, lançado em: ${this.released}`)
}

album.showInfo();
console.log(album.title);
console.log(album.released);

album.tracks = ['Enter Sandman', 'The Unforgiven', 'Nothing Else Matters', 'The Strugle Within']

album.showTracks = function () {
    this.tracks.forEach(function(value, key){
        console.log(value)
    })
}

album.showTracks();