#pragma strict
var projetil: GameObject;



//var municao: UI.Text;
static var cartucho:int;
var cd:float;
function Start () {
   
    
    fantasmadourado.danoR=10;
    Inimigo.danoR=10;
    
    cd=1.999999;
}

function Update () {
    //municao.text = "Municao = ("+cartucho+") "+contMunicao3;
    cd+=1.99999*Time.deltaTime;
    if(Input.GetMouseButton(0)){
    if(cd>=1.999999){
            if(cartucho>0) {
        
                Instantiate(projetil,transform.position,transform.rotation);
                cartucho--;
        
                cd=1.65;
            }
        }
       
    }
    //recarga
    if(Input.GetKeyDown("r")){
        if(Inventario.contMunicaoSMG>=30){
                    
            Inventario.contMunicaoSMG-=(30-cartucho);                    
            cartucho+=(30-cartucho);
                    
        }else{
            if(cartucho==0){
                cartucho+=Inventario.contMunicaoSMG;
                    
                Inventario.contMunicaoSMG=0;
            }else{
                if(Inventario.contMunicaoSMG+cartucho>=30){
                    Inventario.contMunicaoSMG=(Inventario.contMunicaoSMG+cartucho)-30;
                    cartucho=30;
                    
                }else{
                    cartucho=cartucho+Inventario.contMunicaoSMG;
                    Inventario.contMunicaoSMG=0;
                }
            }
        }
                
    }
    //fim recarga
}