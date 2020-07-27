
/*document.getElementById("image").style.backgroundImage = "url('"+ previewPic.src + "')";*/
if(screen.width < 800){
    document.getElementById("ul").style.visibility = "hidden";
}

function appear(){
    var menu = document.getElementById("nav");
    if (menu.classList.contains("active") ){
        menu.classList.remove("active");
        document.getElementById("ul").style.visibility = "hidden";
        
    }
    else {
        menu.classList.add("active");
        document.getElementById("ul").style.visibility = "visible";
    }
};

