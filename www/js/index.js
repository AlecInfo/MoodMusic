changeVisibility("typeList");
    pickMoodClick();

function changeVisibility(id, persist) {
    var x = document.getElementById(id);

    if (x.style.visibility === 'hidden' || persist) {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }
}
