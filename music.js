
var Music = (function(music){
  var artist = document.getElementsByTagName('select')[0];
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
  artist.addEventListener('change', getArtist);

  //option helper function
  function addOptions(valueArray){
    var holder = '';
      valueArray.forEach(function(e){
          holder += `<option value="${e}">${e}</option>`;
      });
    return holder;
  }

})(Music || {})
