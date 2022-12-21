document.write(`
<div class="topnav">
    <a href="#home" class="active">MoodMusic</a>
    <!-- Navigation -->
    <div id="sousMenu">
        <a href="index.html#listMood" onclick="listMoodClick()">List of mood</a>
        <a href="index.html#pickMood" onclick="pickMoodClick()">Pick your mood</a>
        <a href="documentation.html">?</a>
    </div>
    <!-- Menu hamburger / icon-->
    <div class="hamburgerMenu" onclick="menuClick(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
</div>
`);