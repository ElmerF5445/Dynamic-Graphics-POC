var Screen;
function Screen_OpenPopup(URL){
    Screen = window.open(URL, 'popUpWindow', 'width=1280, height=720, resizable=yes, scrollbars=no, toolbar=no, menubar=no, location=no, status=yes');
}

function Screen_ToggleAnimationState(){
    if(Screen){
        Screen.Animation_TogglePlayState();
    }
}

function Slides_SwitchToSlide(Input){
    if(Screen){
        Screen.Slides_SwitchToSlide(Input);
    }
}