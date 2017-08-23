#pragma strict
var projetil: GameObject;
//var municao: UI.Text;


static var cartucho:int;
var cd:float;
function Start () {
    

    fantasmadourado.danoR=13;
    Inimigo.danoR=13;
    cd=1.999999;
}

function Update () {
    //municao.text = "Municao = ("+cartucho+") "+contMunicao4;
    cd+=1.99999*Time.deltaTime;
    if(Input.GetMouseButton(0)){
        if(cd>=1.999999){
            if(cartucho>0) {
        
                Instantiate(projetil,transform.position,transform.rotation);
                cartucho--;
        
                cd=1.90;
            }
        }
    }
    //recarga
    if(Input.GetKeyDown("r")){
        if(Inventario.contMunicaoSMG>=50){
                    
            Inventario.contMunicaoSMG-=(50-cartucho);                    
            cartucho+=(50-cartucho);
                    
        }else{
            if(cartucho==0){
                cartucho+=Inventario.contMunicaoSMG;
                    
                Inventario.contMunicaoSMG=0;
            }else{
                if(Inventario.contMunicaoSMG+cartucho>=50){
                    Inventario.contMunicaoSMG=(Inventario.contMunicaoSMG+cartucho)-50;
                    cartucho=50;
                    
                }else{
                    cartucho=cartucho+Inventario.contMunicaoSMG;
                    Inventario.contMunicaoSMG=0;
                }
            }
        }
                
    }
    //fim recarga
}