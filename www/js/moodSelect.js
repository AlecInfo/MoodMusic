// Affichage du mode de séléction d'un mood
function listMoodClick() {
    let html = "";

    html += "<h2>Choose your mood</h2>";
    html += "<div id=\"moodContainer\">";
    moodName.forEach(moodText => {
        var text = UpCaseFirstLetter(moodText);
        html += `<button id='btnMoodSelector' onclick='moodSelector("${moodText}")'>${text}</button>`;
    });
    html += "</div>";

    document.getElementById("moodSelection").innerHTML = html;
}

// Affichage du mode ou prendre un photo pour savoir le mood
function pickMoodClick() {
    let html = "";

    html += "<h2>Pick your mood</h2>";
    html += "<img id=\"moodImage\"></img>";
    html += "<button id=\"takePicture\" class=\"button\" onclick=\"TakePicture()\" style=\"\">Take picture</button>";

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

    document.getElementById("moodTitle").innerHTML = "You're " + UpCaseFirstLetter(moodParams);
    navigator.vibrate(15);

    var index = 0;
    moodName.forEach(mood => {
        if (mood.toUpperCase() == moodParams.toUpperCase()) {
            moodPlaylists[index].forEach(playlist => {
                playlistsCards += '<iframe id="playlist" title="deezer-widget" src="https://widget.deezer.com/widget/auto/playlist/' + playlist + '?tracklist=false" width="300" height="350" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>';
            });
        }
        index += 1;
    });

    document.getElementById("playlistContainer").innerHTML = playlistsCards;

    changeVisibility("typeList", true);
}