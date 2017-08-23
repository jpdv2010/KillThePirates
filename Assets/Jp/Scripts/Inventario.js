#pragma strict
static var armas:GameObject[];
static var nomeArmas:String[];

var posicaoarma:Transform;
var armaAtual:GameObject;
var municaoSMG: UI.Text;
var municaoRifle: UI.Text;
var qualArma:int;
static var indice:int;
var cabeca: Camera;
static var contMunicaoSMG:int;
static var contMpistola:int;
static var contMrifle:int;
static var contMsniper:int;

static var comArma:boolean;
function Start () {
    nomeArmas=new String[5];
    armas=new GameObject[5];
    P90.cartucho=50;
    GP90.cartucho=45;
    gm4a1.cartucho=35;
    M4A1.cartucho=30;
    indice=0;


    espingarda.contMunicao2=20;
    espingarda.cartucho=12;

    contMrifle=60;
    contMunicaoSMG=60;
    metralhadora.cartucho=30;
}

function Update () {
    
    if(Input.GetKeyDown("1")){
        
        Destroy(armaAtual);
        armaAtual=Instantiate(armas[0],transform.position+(posicaoarma.position-transform.position),cabeca.transform.rotation);
        armaAtual.transform.parent = cabeca.transform;
        comArma=true;
        qualArma=1;
    }

    if(Input.GetKeyDown("2")){
        
        Destroy(armaAtual);
        armaAtual= Instantiate(armas[1],transform.position+(posicaoarma.position-transform.position),cabeca.transform.rotation);
        armaAtual.transform.parent = cabeca.transform;
        comArma=true;
        qualArma=2;
    }

    if(Input.GetKeyDown("3")){
        
        Destroy(armaAtual);
        armaAtual= Instantiate(armas[2],transform.position+(posicaoarma.position-transform.position),cabeca.transform.rotation);
        armaAtual.transform.parent = cabeca.transform;
        comArma=true;
        qualArma=3;
    }
    if(Input.GetKeyDown("4")){
        
        Destroy(armaAtual);
        armaAtual= Instantiate(armas[3],transform.position+(posicaoarma.position-transform.position),cabeca.transform.rotation);
        armaAtual.transform.parent = cabeca.transform;
        comArma=true;
        qualArma=4;
    }
   if(npc3.liberaS5==true){
     if(Input.GetKeyDown("5")){
        
        Destroy(armaAtual);
        armaAtual= Instantiate(armas[4],transform.position+(posicaoarma.position-transform.position),cabeca.transform.rotation);
        armaAtual.transform.parent = cabeca.transform;
        comArma=true;
        qualArma=5;
    }
    }
    
    if(Input.GetKeyDown("g")){
    Destroy(armaAtual);
    }

    municaoSMG.text="Municao SMG: "+contMunicaoSMG;
    municaoRifle.text="Municao Rifle: "+contMrifle;
}