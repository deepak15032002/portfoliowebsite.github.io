
let lightMode = false;

function slideractive(){
    document.getElementById("menu").style.left = "-10px";
}

function sliderdeactive(){
    let x = document.getElementById('modebtn').src;
    document.getElementById("menu").style.marginTop = "0px";
    document.getElementById("menu").style.left = "0px";
}

function slideractive2(){
    document.getElementById("modebtndiv").style.marginTop = "15px";
}
function sliderdeactive2(){
    document.getElementById("modebtndiv").style.marginTop = "0px";
}




function darkmode(){
    if(lightMode){
        document.getElementById("homepage").style.backgroundColor = "rgb(157, 48, 179)";
        document.getElementById("aboutbody").style.backgroundColor = "green";
        document.getElementById("logodiv").style.backgroundColor = "white";
        document.getElementById("logodiv2").style.backgroundColor = "green";
        document.getElementById("homelft").style.backgroundColor = "white";
        document.getElementById("modebtn").src = "icons8-toggle-off-96.png";
        document.getElementById("modebtn2").src = "icons8-toggle-off-96.png";
        document.getElementById("modebtn3").src = "icons8-toggle-off-96.png";
        document.getElementById("modebtn4").src = "icons8-toggle-off-96.png";
        document.getElementById("light").style.display = "none";
        document.getElementById("light2").style.display = "none";
        document.getElementById("light3").style.display = "none";
        document.getElementById("light4").style.display = "none";
        document.getElementById("resumebody").style.backgroundColor = "rgb(239, 39, 239)";
        document.getElementById("contactbody").style.backgroundColor = "darkorchid";
        document.getElementById("logodiv3").style.backgroundColor = "rgb(239, 39, 239)";
        document.getElementById("logodiv4").style.backgroundColor = "darkorchid";
        // document.getElementById("imgframe").style.backgroundColor = "white";
        lightMode = false;
    }else{
        document.getElementById("homepage").style.backgroundColor = "rgb(57, 26, 123)";  
        document.getElementById("aboutbody").style.backgroundColor = "rgb(9, 1, 45)";
        document.getElementById("logodiv").style.backgroundColor = "black";
        document.getElementById("logodiv2").style.backgroundColor = "rgb(9, 1, 45)";
        document.getElementById("homelft").style.backgroundColor = "black";
        document.getElementById("modebtn").src = "icons8-toggle-on-961.png";
        document.getElementById("modebtn2").src = "icons8-toggle-on-961.png";
        document.getElementById("modebtn3").src = "icons8-toggle-on-961.png";
        document.getElementById("modebtn4").src = "icons8-toggle-on-961.png";
        document.getElementById("light").style.display = "block";
        document.getElementById("light2").style.display = "block";
        document.getElementById("light3").style.display = "block";
        document.getElementById("light4").style.display = "block";
        document.getElementById("resumebody").style.backgroundColor = "rgb(165, 48, 48)";
        document.getElementById("contactbody").style.backgroundColor = "black";
        document.getElementById("logodiv3").style.backgroundColor = "rgb(165, 48, 48)";
        document.getElementById("logodiv4").style.backgroundColor = "black";
        // document.getElementById("imgframe").style.backgroundColor = "";
        lightMode = true;
    }
}

function linkdin(){
    document.getElementById("linkdn").style.backgroundColor = "blue";
}

function linkdinout(){
    document.getElementById("linkdn").style.backgroundColor = "white";
}

function phonein(){
    document.getElementById("phonenumber").style.backgroundColor = "rgb(42, 42, 244)";
}

function phoneout(){
    document.getElementById("phonenumber").style.backgroundColor = "white";
}

function instain(){
    document.getElementById("insta").style.backgroundColor = "rgb(230, 0, 255)";
}
function instaout(){
    document.getElementById("insta").style.backgroundColor = "white";
}

function mailin(){
    document.getElementById("gmail").style.backgroundColor = "orange";
}

function mailout(){
    document.getElementById("gmail").style.backgroundColor = "white";
}