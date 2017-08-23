#pragma strict
var distHeroi:Vector3;
var distMinima:float;
var normX:float;
var normZ:float;
var textoM: UI.Text;
var m1:UI.Text;

var GM4A1: GameObject;
var existeI:boolean;
var contador:int;
static var nome:String;

var maxinim:int;
static var iniMiss:int;



static var iniciaM:boolean;

function Start () {
distMinima=3;
maxinim=7;
iniMiss=0;
nome="GM4A1";
iniciaM=false;
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
     textoM.text="(Q)contrato G-M4A1!";
    
    
    
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
                           while(contador<Inventario.indice){
                           if(nome==Inventario.nomeArmas[contador])
                          {
                        
                              existeI=true;
                             break;
                          }
                           contador++;
                             }
   
                  if(existeI==false){
            Inventario.armas[Inventario.indice]=GM4A1;           
            Inventario.nomeArmas[Inventario.indice]=nome;      
            Inventario.indice++;
            
        }
        corpo.xp+=750;
                                
                                iniciaM=false;
                                iniMiss=0;
                                m1.text= "";
                                
                            }
    }
    
    
    
    
    }
    


