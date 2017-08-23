#pragma strict
var velocidade:float;
function Start () {
    velocidade=3*Time.deltaTime;
}

function Update () {
    transform.Translate(velocidade,0,0);
}