#pragma strict
var controlePause:boolean;

function Start () {
    controlePause=false;
}

function Update () {
    if(Input.GetKeyDown(KeyCode.Escape)){
        
        if(controlePause){
            Time.timeScale=0;     
            controlePause=false;
        }else{
            Time.timeScale=1;
            controlePause=true;
        
        }

    }


        
}