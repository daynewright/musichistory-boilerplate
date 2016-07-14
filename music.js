var artist = document.getElementsByTagName('select')[0];
var albumHTML = '';

function getArtist() {
    console.log(artist.value);
    albumHTML = '<option value="" disabled selected>Options</option>';
    switch(artist.value) {
        case 'Gregory Alan Isakov':
            albumHTML += '<option value="The Weatherman">The Weatherman</option> <option value="This Empty Northern Hemisphere"> This Empty Northern Hemisphere </option> <option value="That Sea, The Gambler"> That Sea, The Gambler </option> <option value="Songs for October"> Songs for October </option>';
            break;
        case 'Dan Wilson':
            albumHTML += '<option value="Love Without Fear">Love Without Fear</option> <option value="Live At the Pantages">Live At the Pantages</option> <option value="Free Life">Free Life</option> <option value="Disappearing">Disappearing</option> <option value="Be Free EP"> Damien Jurado </option>';
            break;
        case 'Emerson Hart':
            albumHTML += '<option value="Beauty in Disrepair">Beauty in Disrepair</option> <option value="Cigarettes and Gasoline">Cigarettes and Gasoline</option>';
            break;
        case 'Willy Tea Taylor':
            albumHTML += '<option value="Knuckleball Prime">Knuckleball Prime</option> <option value="Color This Album">Color This Album</option> <option value="4 Strings">4 Strings</option>';
            break;
        case 'Damien Jurado':
            albumHTML += '<option value="Visions of Us on the Land">Visions of Us on the Land</option> <option value="Brothers and Sisters of the External Son">Brothers and Sisters of the External Son </option> <option value="Maraqopa">Maraqopa</option> <option value="Live at Landlocked">Live at Landlocked</option> <option value="Saint Barlett">Saint Barlett</option>';
            break;
    }
    document.getElementsByTagName('select')[1].innerHTML = albumHTML;
}
artist.addEventListener('change', getArtist);
