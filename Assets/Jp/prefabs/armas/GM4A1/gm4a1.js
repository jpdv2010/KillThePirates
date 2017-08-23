#pragma strict
var projetil: GameObject;




//var municao: UI.Text;


static var cartucho:int;
var cd:float;
function Start () {
    

    fantasmadourado.danoR=19;
    Inimigo.danoR=19;
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
        
                cd=1.65;
            }
        }
    }
    //recarga
    if(Input.GetKeyDown("r")){
        if(Inventario.contMrifle>=30){
                    
            Inventario.contMrifle-=(30-cartucho);                    
            cartucho+=(30-cartucho);
                    
        }else{
            if(cartucho==0){
                cartucho+=Inventario.contMrifle;
                    
                Inventario.contMrifle=0;
            }else{
                if(Inventario.contMrifle+cartucho>=30){
                    Inventario.contMrifle=(Inventario.contMrifle+cartucho)-30;
                    cartucho=30;
                    
                }else{
                    cartucho=cartucho+Inventario.contMrifle;
                    Inventario.contMrifle=0;
                }
            }
        }
                
    }
    //fim recarga
}