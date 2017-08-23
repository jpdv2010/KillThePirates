#pragma strict
static var contMaxInimigo:int;
var inimigoResp1:GameObject;
var inimigoResp2:GameObject;
var posicaoInimigo:Vector3;
var qualInimigo:int;
var tempo:float;
static var contInimigo:int;
var posicao:Vector3;

function Start () {
    contMaxInimigo=0;
    
    tempo=0;
}

function Update () {
    posicao=transform.position;
    tempo+=1*Time.deltaTime;;
    if((contMaxInimigo<10) && (tempo>5)){
        if(Random.value>0.5){
            posicaoInimigo.x=posicao.x+(Random.value*10);
        }else{
            posicaoInimigo.x=posicao.x-(Random.value*10);
        }

        if(Random.value>0.5){
            posicaoInimigo.z=posicao.z+(Random.value*10);
        }
        else{
            posicaoInimigo.z=posicao.z-(Random.value*10);
        }
        
        posicaoInimigo.y=posicao.y+10;
        qualInimigo=Random.value*100;
        if(corpo.lvl<10){
        if(qualInimigo<90){
            Instantiate(inimigoResp1,posicaoInimigo,transform.rotation);
            contInimigo++;
        }
        else{
            Instantiate(inimigoResp2,posicaoInimigo,transform.rotation);
            contInimigo++;
        }
        }else{
        if(qualInimigo<50){
            Instantiate(inimigoResp1,posicaoInimigo,transform.rotation);
            contInimigo++;
        }
        else{
            Instantiate(inimigoResp2,posicaoInimigo,transform.rotation);
            contInimigo++;
        }
        
        }
        
        
       
        contMaxInimigo++;
        tempo=0;
    }
}