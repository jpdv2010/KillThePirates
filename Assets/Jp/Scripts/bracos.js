#pragma strict
var cabeca:Camera;
static var comArma:boolean;
function Start () {
comArma=false;
}

function Update () {
if(comArma)setParent();
}

function setParent(){
transform.parent=cabeca.transform;
}