// Declaring Variables
let bg_black = document.getElementsByClassName("bg")[0];
let sidenav = document.getElementById("mySidenav");
let modal = document.getElementById("myModal");
let config_btn = document.getElementById("Configure-modal");
let span = document.getElementsByClassName("close")[0];
let bottomboxes = document.getElementsByClassName("bottom1");
let tab_selected = document.getElementsByClassName("bg-list");


// (Theres no pause button for the audio)
// Merry Christmas 
var aud = document.getElementById("myAudio"); 

function playAud() { 
  aud.play(); 
} 



// Overview, Access Control and all Tab Selection
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
    sidenav.style.transform = "translateX(0%)";
    // bg_black.classList.add("bg-black");
}

function closeSideNav() {
    sidenav.style.transform = "translateX(100%)";
    // document.getElementsByClassName("bg")[0].style.backgroundColor = "#f5f4f4";
    // bg_black.classList.remove("bg-black");

}

window.onclick = function (event) {
    if (event.target == sidenav) {
        sidenav.style.width = "0";
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


// Large Thumbnail for bottom boxes
function largeThumbnail(){
    document.getElementsByClassName("rectangle-26")[0].style.display="flex";
    for (let i = 0; i < bottomboxes.length; i++) {
        bottomboxes[i].style.display="flex";
    }
}

//List view for bottom boxes
function listView(){
    document.getElementsByClassName("rectangle-26")[0].style.display="block";
    for (let i = 0; i < bottomboxes.length; i++) {
        bottomboxes[i].style.display="block";
    }
}

