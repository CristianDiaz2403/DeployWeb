function toggleMenu() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
    var main = document.getElementById("main");
    if (main.style.marginLeft === "250px") {
        main.style.marginLeft = "0";
    } else {
        main.style.marginLeft = "250px";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
