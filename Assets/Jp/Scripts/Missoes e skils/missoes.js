#pragma strict
var m1:UI.Text;
var maxinim:int;
function Start () {
maxinim=100;
}

function Update () {
m1.text = "Inimigos mortos: ("+inimortos.inimigosmortos+"/"+maxinim+")!";
if(inimortos.inimigosmortos==maxinim){
m1.text= "";
}
}