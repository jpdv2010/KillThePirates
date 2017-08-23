#pragma strict
static var inimigosmortos:int;
static var lvlFinal:int;
static var xptotal:int;
var textini:UI.Text;
var txtl:UI.Text;
var txtxp:UI.Text;

function Start () {
 
}

function Update () {
    textini.text="Inimigos mortos="+inimigosmortos;
    txtl.text="Level final="+lvlFinal;
    txtxp.text="Xp Alcancado="+xptotal;
}