#pragma strict
var distHeroi:Vector3;
var distMinima:float;
var normX:float;
var normZ:float;
var textoM: UI.Text;
var m1:UI.Text;

var existeI:boolean;
var contador:int;
static var nome:String;

var maxinim:int;
static var iniMiss:int;
static var liberaS5:boolean;


static var iniciaM:boolean;

function Start () {
distMinima=3;
maxinim=7;
iniMiss=0;
nome="GM4A1";
iniciaM=false;
liberaS5=false;

}

function Update () {
distHeroi=corpo.posicaoHeroi-transform.position;
 normX=distHeroi.x;
 normZ=distHeroi.z;
     if (normX<0) normX=-normX;
    if (normZ<0) normZ=-normZ;
    
    
    //------------------------------verificaçao de lvl a missoes e inicialisaçao---------------
    if((normX<distMinima) && (normZ<distMinima)) {
    if(npc.liberaM3==true){//--------------missao lvl>6
     textoM.text="(Q)contrato +slot";
    
    
    
    if(Input.GetKeyDown("q"))
    {
        iniciaM=true;
    }
    
    }else{
      textoM.text="Conclua o contrato GP90";
     
    }
    
    }else{
    textoM.text="";
    }
    
    if(iniciaM==true){
    m1.text = "Inimigos mortos: ("+iniMiss+"/"+maxinim+")!";
                  if(iniMiss==maxinim)
                         {
                          
                          
                          liberaS5=true;
        corpo.xp+=750;
                                
                                iniciaM=false;
                                iniMiss=0;
                                m1.text= "";
                                
                            }
    }
    
    
    
    
    }
    


