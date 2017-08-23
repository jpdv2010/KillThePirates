#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision:Collision){
   
    if(collision.gameObject.tag=="corpo"){
        Inventario.contMrifle+=50;
        Destroy(gameObject);
    }

}