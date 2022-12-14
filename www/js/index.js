// Visibilité des éléments au départ
changeVisibility("typeList");
// Appliquer le mode de départ
pickMoodClick();

// Methode qui change la visibilité d'un objet
function changeVisibility(id, persist) {
    var x = document.getElementById(id);

    if (x.style.visibility === 'hidden' || persist) {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}

function UpCaseFirstLetter(text){
    const str = text.toLowerCase();
    const strConvert = str.charAt(0).toUpperCase() + str.slice(1);
    return strConvert
}
