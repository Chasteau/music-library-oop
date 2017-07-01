// A Library has a name and a creator (both strings)
// These are the only things required in order to create a music library
// A Library has many playlists (starts as an empty array)
// Playlist objects can be added to an instance of a library
// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks
// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks


// Library prototype function
function Library (name, owner) {
  this.name = name;
  this.owner = owner;
  this.playlist = [];
}

// Playlist prototype function
function Playlist (name) {
  this.name = name;
  this.tracks = [];
  this._overallRating = function(tracks) {
    let overallRating = 0;
    for (var track = 0; track < tracks.length; track++) {
      overallRating += tracks[track].rating;
    }
    return `The overall rating for all ${tracks.length} tracks in ${this.name} playlist is ${Math.round(overallRating / tracks.length)} / 5`;
  }
  this._totalDuration = function(tracks) {
    let totalDuration = 0;
    for (var track = 0; track < tracks.length; track++) {
      totalDuration += tracks[track].length;
    }
    return `The total duration for ${tracks.length} songs in ${this.name} playlist is ${Math.round(totalDuration / 60)} mins`;
  }
}

// Track prototype function
function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length  = length;
}

//Creat new library object using constructor
let dLib = new Library("Study", "David");
// console.log(`Play all from '${dLib.name}' library created by '${dLib.owner}'.`);

// Create new playlist object
let dPlaylist = new Playlist("Cram Study Session");

// Push now playlist to Library
dLib.playlist.push(dPlaylist);
// console.log(dLib.playlist)

//create new tracks
let song1 = new Track  ("Me and Your Mama", 3 , 180);
let song2 = new Track  ("Have Some Love", 1 , 186);
let song3 = new Track  ("Riot", 2 , 280);
let song4 = new Track  ("Zombies", 3 , 230);
let song5 = new Track  ("Have Some Letters", 4 , 169);
let song6 = new Track  ("Redbone", 4 , 290);
let song7 = new Track  ("California", 5 , 193);
let song8 = new Track  ("Boogieman", 1 , 310);
let song9 = new Track  ("Terrified", 5 , 120);

// push socks to tracks list in playlist
dPlaylist.tracks.push(song1, song2, song3, song4, song5, song6, song7, song8, song9);
// console.log(dPlaylist.tracks)
// console.log(dLib.playlist)

console.log(dPlaylist._overallRating(dPlaylist.tracks));
console.log(dPlaylist._totalDuration(dPlaylist.tracks));























