// change navbar style on scroll


function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue <1){
        navbar.classList.remove('bgColor');
    }
    else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);

       
//  =================Web Popup=====================  

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}


//  =================Android Popup=====================  

let popupApp = document.getElementById("popupApp");

function openPopupApp(){
    popupApp.classList.add("open-popupApp");
}
function closePopupApp(){
    popupApp.classList.remove("open-popupApp");
}


//  =================Software Popup=====================  

let popupSoftware = document.getElementById("popupSoftware");

function openPopupSoftware(){
    popupSoftware.classList.add("open-popupSoftware");
}
function closePopupSoftware(){
    popupSoftware.classList.remove("open-popupSoftware");
}

       
//  =================Graphic Popup=====================  

let popupGraphic = document.getElementById("popupGraphic");

function openPopupGraphic(){
popupGraphic.classList.add("open-popupGraphic");
}
function closePopupGraphic(){
popupGraphic.classList.remove("open-popupGraphic");
}


//  =================Photo Popup=====================  

let popupPhoto = document.getElementById("popupPhoto");

function openPopupPhoto(){
popupPhoto.classList.add("open-popupPhoto");
}
function closePopupPhoto(){
popupPhoto.classList.remove("open-popupPhoto");
}


//  =================Video Popup=====================  

let popupVideo = document.getElementById("popupVideo");

function openPopupVideo(){
popupVideo.classList.add("open-popupVideo");
}
function closePopupVideo(){
popupVideo.classList.remove("open-popupVideo");
}