var Slides = document.querySelectorAll(".GG_Slide");

function Slides_ResetToDefaultSlide(){
    Slides = document.querySelectorAll(".GG_Slide");
    for (a = 1; a < Slides.length; a++){
        var Animation_MainContainerChildElements = Slides[a].children;
        for (b = 0; b < Animation_MainContainerChildElements.length; b++){
            Animation_MainContainerChildElements[b].setAttribute("Animation_State", "Animation_State_Paused");
        }
        Slides[a].style.opacity = "0%";
    }
    Slides[0].style.opacity = "100%";
    for (c = 0; c < Slides[0].length; c++){
        Slides[0][c].setAttribute("Animation_State", "Animation_State_Playing");
    }
}

function Slides_SwitchToSlide(Slide_Number){
    Slides = document.querySelectorAll(".GG_Slide");
    for (a = 0; a < Slides.length; a++){
        // var Animation_MainContainerChildElements = Slides[a].children;
        // for (b = 0; b < Animation_MainContainerChildElements.length; b++){
        //     Animation_MainContainerChildElements[b].setAttribute("Animation_State", "Animation_State_Paused");
        // }
        Slides[a].style.opacity = "0%";
    }
    Slides[Slide_Number].style.opacity = "100%";
    // for (c = 0; c < Slides[Slide_Number].length; c++){
    //     Slides[Slide_Number][c].setAttribute("Animation_State", "Animation_State_Playing");
    // }
}

var Screen_ActiveSlide = 1;
var Animation_PlayState = "Playing";
function Animation_TogglePlayState(){
    var Animation_MainContainerChildElements = document.getElementById("GG_Slide_" + Screen_ActiveSlide).children;
    if (Animation_PlayState == "Playing"){
        for (a = 0; a < Animation_MainContainerChildElements.length; a++){
            Animation_MainContainerChildElements[a].setAttribute("Animation_State", "Animation_State_Paused");
        }
        Animation_PlayState = "Paused";
    } else if (Animation_PlayState == "Paused") {
        for (a = 0; a < Animation_MainContainerChildElements.length; a++){
            Animation_MainContainerChildElements[a].setAttribute("Animation_State", "Animation_State_Playing");
        }
        Animation_PlayState = "Playing";
    }
}

