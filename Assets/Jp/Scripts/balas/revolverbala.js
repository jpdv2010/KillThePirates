#pragma strict
var velocidadeBala:float;


function Start () {
    
    velocidadeBala= 60*Time.deltaTime;
}

function Update () {
    transform.Translate(0,0,velocidadeBala);
}

function OnCollisionEnter(collision : Collision){
    Destroy(gameObject);

}