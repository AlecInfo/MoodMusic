// Liste de playlists
let HAPPY = [
    1479458365,
    1276787711,
    8788949122,
    8873745702
];

let SAD = [
    1910358422, 
    8584980222,
    8616373542,
    7389978484
];

var moodName = ["HAPPY", "SAD"];
var moodPlaylists = [HAPPY, SAD];

// Affichage du mode de séléction d'un mood
function listMoodClick() {
    let html = "";

    html += "<h2>Choose your mood</h2>";
    html += "<div id=\"moodContainer\">";
    html += "<button id=\"btnMoodSelector\" onclick=\"moodSelector('HAPPY')\">HAPPY</button>";
    html += "<button id=\"btnMoodSelector\" onclick=\"moodSelector('SAD')\">SAD</button>";
    html += "<button id=\"btnMoodSelector\" onclick=\"moodSelector('LAZY')\">LAZY</button>";
    html += "<button id=\"btnMoodSelector\" onclick=\"moodSelector('...')\">...</button>";
    html += "<button id=\"btnMoodSelector\" onclick=\"moodSelector('...')\">...</button>";
    html += "<button id=\"btnMoodSelector\" onclick=\"moodSelector('...')\">...</button>";
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
   
    //location.href = "./takePhoto.html";
}

// Affichage de la liste des playlists
function moodSelector(moodParams) {
    alert(UpCaseFirstLetter(moodParams));

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