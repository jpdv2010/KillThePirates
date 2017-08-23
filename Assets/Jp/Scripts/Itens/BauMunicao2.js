#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision:Collision){
   
    if(collision.gameObject.tag=="corpo"){
        espingarda.contMunicao2+=20;
        Destroy(gameObject);
    }

}