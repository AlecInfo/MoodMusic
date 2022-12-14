    /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
    function menuClick() {
        var x = document.getElementById("sousMenu");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }