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

function pickMoodClick() {
    let html = "";

    html += "<img id=\"myImage\" style=\"float: right;\"></img>";
    html += "<h2>Pick your mood</h2>";
    html += "<button id=\"takePicture\" class=\"button\" onclick=\"TakePicture()\">Take picture</button>";

    document.getElementById("moodSelection").innerHTML = html;
}


function TakePicture() {
    navigator.vibrate(15);

    getPhoto();
   
    //location.href = "./takePhoto.html";
}

function moodSelector(moodParams) {
    let playlistsCards = "";

    document.getElementById("moodTitle").innerHTML = "You're " + moodParams;
    navigator.vibrate(15);

    var index = 0;
    moodName.forEach(mood => {
        if (mood == moodParams) {
            moodPlaylists[index].forEach(playlist => {
                playlistsCards += '<iframe id="playlist" title="deezer-widget" src="https://widget.deezer.com/widget/auto/playlist/' + playlist + '?tracklist=false" width="300" height="350" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>';
            });
        }
        index += 1;
    });

    document.getElementById("playlistContainer").innerHTML = playlistsCards;

    changeVisibility("typeList", true);
}