var Music = (function(music){

    var songs = [];

    songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
    songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
    songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
    songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
    songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

    songs.push('Secret Smile - by SemiSonic on the album Feeling Strangly Fine');
    songs.unshift('Senisable Heart - by City and Colour on the album Bring Me Your Love');

    //replace unwanted characters
    songs.forEach((e,i) => songs[i] = e.replace(/>/g,'-').replace(/[^\w\s-]/g, '').split('-'));

  //methods on Music {}
  music.allSongs = function(){
    return songs;
  }

  music.addAnotherSong = function(name, artist, album){
    songs.push([[name],[`by ${artist} on the album ${album}`]]);

    document.querySelector('input[name="song-name"]').value = '';
    document.querySelector('input[name="artist"]').value = '';
    document.querySelector('input[name="album"]').value = '';
  }

  return music;

})(Music || {})
