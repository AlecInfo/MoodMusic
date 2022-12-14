    // Methode pour basculer entre l'affichage et le masquage des liens du menu de navigation lorsque l'utilisateur clique sur l'icône du menu hamburger / de la barre
    function menuClick() {
        var x = document.getElementById("sousMenu");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }