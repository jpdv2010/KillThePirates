#pragma strict
var posicaocam: int;

function Start () {
    posicaocam = 0;
}

function Update () {
    if(Input.GetKeyDown("v")){
        if(posicaocam == 0){
            transform.Translate(0,0,-10);
            posicaocam = 1;
        }else{
            transform.Translate(0,0,10);
            posicaocam = 0;
        }
    }

}