#pragma strict
var velocidadeAtaque: float;
function Start () {
    velocidadeAtaque=5000*Time.deltaTime;
}

function Update () {
    if(Input.GetKeyDown("i")){
        transform.Rotate(velocidadeAtaque,0,0);

    }else{
        if(transform.rotation.x>=0){
            transform.Rotate(-10,0,0);
        }
    }
}