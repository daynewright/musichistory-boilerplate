var Music = (function(music){

    var songs = [];

    // Load JSON data on load
    music.loadSongs = (function() {
      var xhr = new XMLHttpRequest()
      xhr.addEventListener("load",function(){
        data = JSON.parse(xhr.responseText);
        music.addSongsToDOM(data);
      })

      xhr.open("GET","songs.json")
      xhr.send()
    })()

    //methods on Music {}
    music.getAllSongs = function(){
      return songs;
    }

    music.addAnotherSong = function(name, artist, album){
      songs.push({ "artist" : artist,
                    "song"   : name,
                    "album"  : album
                  });

      music.addSongsToDOM(music.getAllSongs());

      document.querySelector('input[name="song-name"]').value = '';
      document.querySelector('input[name="artist"]').value = '';
      document.querySelector('input[name="album"]').value = '';
    }

    return music;

})(Music || {})
