var Music = (function(music){

  //add selections to sidebar //
  (function(){
    var artist = document.getElementsByTagName('select')[0];
    var button = document.querySelector('.music-form button');
    var albumHTML = '';

    function getArtist() {
        console.log(artist.value);
        albumHTML = '<option value="" disabled selected>Options</option>';
        switch(artist.value) {
            case 'Gregory Alan Isakov':
                albumHTML += addOptions(['The Weatherman','This Empty Northern Hemisphere','That Sea, The Gambler','Songs for October']);
                break;
            case 'Dan Wilson':
                albumHTML += addOptions(['Love Without Fear','Live At the Pantages','Free Life','Disappearing','Be Free EP']);
                break;
            case 'Emerson Hart':
                albumHTML += addOptions(['Beauty in Disrepair','Cigarettes and Gasoline']);
                break;
            case 'Willy Tea Taylor':
                albumHTML += addOptions(['Knuckleball Prime','Color This Album','4 Strings']);
                break;
            case 'Damien Jurado':
                albumHTML += addOptions(['Visions of Us on the Land','Brothers and Sisters of the External Son','Maraqopa','Live at Landlocked','Saint Barlett']);
                break;
        }
        document.getElementsByTagName('select')[1].innerHTML = albumHTML;
    }

    function addAnotherSongClick(){
      var songName = document.querySelector('input[name="song-name"]').value;
      var songArtist = document.querySelector('input[name="artist"]').value;
      var songAlbum = document.querySelector('input[name="album"]').value;
      debugger;
      music.addAnotherSong(songName, songArtist, songAlbum);
    }

    artist.addEventListener('change', getArtist);
    button.addEventListener('click', addAnotherSongClick);

    //option helper function
    function addOptions(valueArray){
      var holder = '';
        valueArray.forEach(function(e){
            holder += `<option value="${e}">${e}</option>`;
        });
      return holder;
    }
  })()
  // END add selections to sidebar //

  var songHolder = document.getElementsByClassName('main')[0].firstElementChild;

  music.addSongsToDOM = function(songs){
      console.log(songs);
      songs.forEach(e => songHolder.innerHTML += `
          <div class="song">
            <h2>${e.song}</h2>
            <button type="button">Delete</button>
            <p>
              <span>${e.artist}</span>|<span>${e.album}</span>|<span>Genre</span>
            </p>
          </div>`);
  }

  return music;

})(Music || {})
