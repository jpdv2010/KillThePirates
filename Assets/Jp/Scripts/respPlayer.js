#pragma strict
var posicaoRespaw:Vector3;
var posicao:Vector3;
var spawnar:GameObject;
var contHeroi:int;
var cont:int;
function Start () {
    contHeroi=1;
}

function Update () {
    posicao=transform.position;
    if(Random.value>0.5){
        posicaoRespaw.x=posicao.x+(Random.value*10);
    }else{
        posicaoRespaw.x=posicao.x-(Random.value*10);
    }

    if(Random.value>0.5){
        posicaoRespaw.z=posicao.z+(Random.value*10);
    }
    else{
        posicaoRespaw.z=posicao.z-(Random.value*10);
    }
        
    posicaoRespaw.y=posicao.y+10;
    while(contHeroi>0){
        Instantiate(spawnar,posicaoRespaw,transform.rotation);
        cont--;
    }
}