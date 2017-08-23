#pragma strict
var projetil: GameObject;
static var contMunicao1: int;
var municao: UI.Text;
static var danoArma:int;
var cartucho:int;
var cd:float;
function Start () {
    contMunicao1=40;
    danoArma=10;
    cartucho=10;
    cd=2;
}

function Update () {
    municao.text = "Municao = ("+cartucho+") "+contMunicao1;
    cd+=1.98*Time.deltaTime;
    if(Input.GetKeyDown("i")){
        if(cd>=2){
            if(cartucho>0){
        
                Instantiate(projetil,transform.position,transform.rotation);
                cartucho--;
                cd=0;
            }
        }

    }
//recarga
    if(Input.GetKeyDown("r")){
        if(contMunicao1>=10){
                    
            contMunicao1-=(10-cartucho);                    
            cartucho+=(10-cartucho);
                    
        }else{
            if(cartucho==0){
                cartucho+=contMunicao1;
                    
                contMunicao1=0;
            }else{
                if(contMunicao1+cartucho>=10){
                    cartucho=10;
                    contMunicao1=(contMunicao1+cartucho)-10;
                }else{
                    cartucho=cartucho+contMunicao1;
                    contMunicao1=0;
                }
            }
        }
                
    }
    //fim recarga
}