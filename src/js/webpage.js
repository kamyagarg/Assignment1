// Declaring Variables
let bg_black = document.getElementsByClassName("bg")[0];
let sidenav = document.getElementById("mySidenav");
let modal = document.getElementById("myModal");
let config_btn = document.getElementById("Configure-modal");
let span = document.getElementsByClassName("close")[0];
let bottomboxes = document.getElementsByClassName("bottom1");



//Bell Animation 
let bell_not = document.getElementsByClassName("notification")[0];
bell_not.onmouseover = function () { bellAnimation() };
bell_not.onmouseout = function () { bellAnimation_stop() };

function bellAnimation() {
    bell_not.classList.add("bell-animation");
}
function bellAnimation_stop() {
    bell_not.classList.remove("bell-animation");
}

////////////////



// Overview, Access Control and all, Tab Selection
let tab_selected = document.getElementsByClassName("bg-list");
for (let i = 0; i < tab_selected.length; i++) {
    tab_selected[i].addEventListener("click",
        function () {
            let x = document.querySelector(".bg-list-pink");
            if (x) {
                x.classList.remove("bg-list-pink");
            }
            tab_selected[i].classList.add("bg-list-pink");
        });
}

////////////////

// SideNav Open/close using on button
function openSideNav() {
    //Option 1: using .toggle
    sidenav.classList.toggle("open-sidenav");

    //Option2: using conditional statement
    // let status = document.querySelector(".open-sidenav");
    // if(status){
    //     sidenav.classList.remove("open-sidenav");
    // }else{
    //     sidenav.classList.add("open-sidenav");
    // }

}

// You can also close by clicking on the cross button 
function closeSideNav() {
    sidenav.classList.remove("open-sidenav");
}


// window.onclick = function (event){
//     if (event.target !== sidenav && sidenav.classList.contains("open-sidenav")) {
//         sidenav.classList.remove("open-sidenav");
//     }

// }



//////////////////

//Sidenav - selected box

// API Row
let api_box = document.getElementsByClassName("apiOr")[0];
let box_selected = document.getElementsByClassName("small-api");

for (let i = 0; i < box_selected.length; i++) {
    box_selected[i].addEventListener("click",
        function () {
            let x = api_box.querySelector(".active-pink");
            if (x) {
                x.classList.remove("active-pink");

            }
            box_selected[i].classList.add("active-pink");
        });
}

//Language Row
let lang_box = document.getElementsByClassName("language")[0];
let box_selected2 = document.getElementsByClassName("small-lang");

for (let i = 0; i < box_selected2.length; i++) {
    box_selected2[i].addEventListener("click",
        function () {
            let x = lang_box.querySelector(".active-pink");
            if (x) {
                x.classList.remove("active-pink");
            }
            box_selected2[i].classList.add("active-pink");
        });
}

//Git Row
let git_box = document.getElementsByClassName("Gitlab-left")[0];
let box_selected3 = document.getElementsByClassName("small-git");

for (let i = 0; i < box_selected3.length; i++) {
    box_selected3[i].addEventListener("click",
        function () {
            let x = git_box.querySelector(".active-pink");
            if (x) {
                x.classList.remove("active-pink");
            }
            box_selected3[i].classList.add("active-pink");
        });
}



///////////////////

// Configure button Functionality

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
    if ((event.target == sidenav) && (sidenav.classList.contains("open-sidenav"))) {
        sidenav.classList.remove("open-sidenav");
    }
}


///////////////////

// Large Thumbnail for bottom boxes / Hiding the table view
function largeThumbnail() {
    document.getElementsByClassName("table")[0].classList.add("table-hide");
    document.getElementsByClassName("rectangle-26")[0].classList.remove("table-hide");
    document.getElementsByClassName("bottom1")[0].classList.remove("table-hide");
}

//List/Table view for bottom boxes
function listView() {
    document.getElementsByClassName("table")[0].classList.remove("table-hide");
    document.getElementsByClassName("rectangle-26")[0].classList.add("table-hide");
    document.getElementsByClassName("bottom1")[0].classList.add("table-hide");
}


/////////////////////
