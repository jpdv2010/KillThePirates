#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision:Collision){
   
    if(collision.gameObject.tag=="corpo"){
        revolver.contMunicao1+=10;
        Destroy(gameObject);
    }

}