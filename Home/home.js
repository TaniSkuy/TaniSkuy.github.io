var condition = "none";

function hamburgerMenu() {

    if (condition != "active") {
        condition = "active";
        document.getElementById("child1").style.transform = "rotate(45deg) translate(-4px, -4px)";
        document.getElementById("child1").style.transformOrigin = 0;
        document.getElementById("child2").style.transform = "scale(0)";
        document.getElementById("child3").style.transform = "rotate(-45deg) translate(0px, 0px)";
        document.getElementById("child3").style.transformOrigin = 0;
        document.getElementById("linklist").style.right = "0%";
        document.getElementById("linklist").style.opacity = "100%"

    } else {
        condition = "none";
        document.getElementById("child1").style.transform = "rotate(0deg) translate(0px, 0px)";
        document.getElementById("child1").style.transformOrigin = 0;
        document.getElementById("child2").style.transform = "scale(1)";
        document.getElementById("child3").style.transform = "rotate(0deg) translate(0px, 0px)";
        document.getElementById("child3").style.transformOrigin = 0;
        document.getElementById("linklist").style.right = "-100%";
        document.getElementById("linklist").style.opacity = "0%";

    }
}