// Affichage du mode de séléction d'un mood
function listMoodClick() {
    let html = "";

    html += "<h2 class='title'>Liste des humeurs</h2>";
    html += "<div id=\"moodContainer\">";
    // Liste des boutons 
    moodName.forEach(moodText => {
        var text = UpCaseFirstLetter(moodNameFR[moodName.indexOf(moodText)]);
        html += `<button id='btnMoodSelector' onclick='moodSelector("${moodText}")'>${text}</button>`;
    });
    html += "</div>";

    document.getElementById("moodSelection").innerHTML = html;
}

// Affichage du mode ou prendre une photo pour savoir le mood
function pickMoodClick() {
    let html = "";

    html += "<h2 class='title'>Prendre l'humeur</h2>";
    html += "<button id=\"takePicture\" class=\"button\" onclick=\"TakePicture()\" style=\"\">Prendre la photo</button>";
    html += "<img id=\"moodImage\"></img>";

    document.getElementById("moodSelection").innerHTML = html;
}

// Methode des choses a faire lors de la prise de photo
function TakePicture() {
    navigator.vibrate(15);
    getPhoto();
}

// Affichage de la liste des playlists
function moodSelector(moodParams) {
    let playlistsCards = "";
    // Taille des playlists varriable selon le telephone
    var width = 90 * screen.width / 100;

    document.getElementById("moodTitle").innerHTML = "Vous êtes " + UpCaseFirstLetter(moodNameFR[moodName.indexOf(moodParams.toUpperCase())]);
    navigator.vibrate(15);

    var index = 0;
    // Affichage de toute les playlist selon l'humeur
    moodName.forEach(mood => {
        if (mood.toUpperCase() == moodParams.toUpperCase()) {
            moodPlaylists[index].forEach(playlist => {
                playlistsCards += `<iframe id="playlist" title="deezer-widget" src="https://widget.deezer.com/widget/auto/playlist/${playlist}?tracklist=false" width="${width}" height="350" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
            });
        }
        index += 1;
    });

    document.getElementById("playlistContainer").innerHTML = playlistsCards;

    changeVisibility("typeList", true);
}