#pragma strict
var distHeroi:Vector3;
var distMinima:float;
var normX:float;
var normZ:float;
var textoM: UI.Text;
var m1:UI.Text;

var GP90: GameObject;
var existeI:boolean;
var contador:int;
static var nome:String;

var maxinim:int;
static var iniMiss:int;

var maxinim2:int;
static var iniMiss2:int;

static var iniciaM:boolean;
static var iniciaM2:boolean;
var liberaMG:boolean;
static var liberaM3:boolean;

function Start () {
distMinima=3;
maxinim=5;
maxinim2=3;
iniMiss=0;
nome="GP90";
iniciaM=false;
iniciaM2=false;
liberaMG=false;
liberaM3=false;
}

function Update () {
distHeroi=corpo.posicaoHeroi-transform.position;
 normX=distHeroi.x;
 normZ=distHeroi.z;
     if (normX<0) normX=-normX;
    if (normZ<0) normZ=-normZ;
    
    
    //------------------------------verificaçao de lvl a missoes e inicialisaçao---------------
    if((normX<distMinima) && (normZ<distMinima)) 
    {
    
    
            if(liberaMG==false)
               {//----------------missao lvl<6
                 textoM.text="(Q) contrato Inicial!";
      
                     if(Input.GetKeyDown("q"))
                       {
                          iniciaM2=true;
      
                        }
               }
    
           if(liberaMG==true)
           {//--------------missao inicial completa
                textoM.text="(Q)contrato G-P90!";
    
    
    
                  if(Input.GetKeyDown("q"))
                      { 
                           iniciaM=true;
                      }
    
           }
    
    }else{
    textoM.text="";
    }
    
    /*Missao P90*/  if(iniciaM==true){
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
            Inventario.armas[Inventario.indice]=GP90;           
            Inventario.nomeArmas[Inventario.indice]=nome;      
            Inventario.indice++;
            
        }
        corpo.xp+=500;
                                
                                iniciaM=false;
                                iniMiss=0;
                                m1.text= "";
                                liberaM3=true;//libera os contratos slot e GM4A1
                                
                            }
    }
    
/*Missao inicial*/    if(iniciaM2==true){
     m1.text = "Piratas mortos: ("+iniMiss2+"/"+maxinim2+")!";
                  if(iniMiss2==maxinim2)
                         {
                          corpo.xp+=200; 
                          iniciaM2=false;
                          iniMiss2=0;
                           m1.text= "";
                           liberaMG=true;
                         }
        
                                
                                
                                
                       }
    
    
    }
    


