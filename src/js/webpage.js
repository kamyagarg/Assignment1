// Declaring Variables
let bg_black = document.getElementsByClassName("bg")[0];
let sidenav = document.getElementById("mySidenav");
let modal = document.getElementById("myModal");
let config_btn = document.getElementById("Configure-modal");
let span = document.getElementsByClassName("close")[0];
let bottomboxes = document.getElementsByClassName("bottom1");
let tab_selected = document.getElementsByClassName("bg-list");
let aud = document.getElementById("myAudio");



//Bell Animation 
 let bell_not = document.getElementsByClassName("notification")[0];
 bell_not.onmouseover = function() {bellAnimation()};
 bell_not.onmouseout = function() {bellAnimation_stop()};

function bellAnimation(){
    bell_not.classList.add("bell-animation");   
}
function bellAnimation_stop(){
    bell_not.classList.remove("bell-animation");   
}



// Overview, Access Control and all, Tab Selection
for (let i = 0; i < tab_selected.length; i++){
    tab_selected[i].addEventListener("click",
    function () {
        let x = document.querySelector(".bg-list-pink");
        if(x){
            x.classList.remove("bg-list-pink");
        }
        tab_selected[i].classList.add("bg-list-pink");
    });
}


// SideNav 
function openSideNav() {
    if (sidenav.style.transform == "translateX(100%)") {
        sidenav.style.transform = "translateX(0%)";
    } else {       
        sidenav.style.transform = "translateX(100%)";
    }
}

function closeSideNav() {
    sidenav.style.transform = "translateX(100%)";
}

window.onclick = function (event) {
    if (event.target == sidenav) {
        sidenav.style.transform = "translateX(100%)";
    }
}


// Configure button Functinality
// When the user clicks the button, open the modal 
config_btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Large Thumbnail for bottom boxes / Hiding the table view
function largeThumbnail(){
    document.getElementsByClassName("table")[0].classList.add("table-hide");
    document.getElementsByClassName("rectangle-26")[0].classList.remove("table-hide");
    document.getElementsByClassName("bottom1")[0].classList.remove("table-hide");
    // document.getElementsByClassName("rectangle-26")[0].style.display="flex";
    // for (let i = 0; i < bottomboxes.length; i++) {
    //     bottomboxes[i].style.display="flex";
    // }
}

//List/Table view for bottom boxes
function listView(){
    document.getElementsByClassName("table")[0].classList.remove("table-hide");
    document.getElementsByClassName("rectangle-26")[0].classList.add("table-hide");
    document.getElementsByClassName("bottom1")[0].classList.add("table-hide");
    // document.getElementsByClassName("rectangle-26")[0].style.display="block";
    // for (let i = 0; i < bottomboxes.length; i++) {
    //     bottomboxes[i].style.display="block";
    // }
}

