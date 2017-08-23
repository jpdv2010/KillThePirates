#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(collision : Collision){

    if(collision.gameObject.tag=="corpo")
    {
        if(corpo.vidaHeroi<corpo.maximoVida){

            if((corpo.maximoVida-corpo.vidaHeroi)<=10)
            {
                corpo.vidaHeroi+=corpo.maximoVida-corpo.vidaHeroi;
            }else{
                corpo.vidaHeroi+=10;
            }

        }
        Destroy(gameObject);
    }

}