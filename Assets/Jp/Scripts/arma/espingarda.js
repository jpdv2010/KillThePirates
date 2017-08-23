#pragma strict
var projetil: GameObject;
static var contMunicao2: int;
//var municao: UI.Text;
static var chanceCritico:int;
static var cartucho:int;
var cd:float;

function Start () {
    
    fantasmadourado.danoR=40;
    Inimigo.danoR=40;
    
    cd=2;
}

function Update () {
    
    
    chanceCritico=100*Random.value;
    
    if(chanceCritico<10){
        fantasmadourado.danoR+=20;
        Inimigo.danoR+=20;
    }else{
        fantasmadourado.danoR=40;
        Inimigo.danoR=40;    
    }

    //municao.text = "Municao = ("+cartucho+") "+contMunicao2;
    cd+=1.8*Time.deltaTime;
    if(Input.GetKeyDown("i")){
        if(cd>=2){
            if(cartucho>0) {
        
                Instantiate(projetil,transform.position,transform.rotation);
                cartucho--;
        
                cd=0;
            }
        }
    }
    //sistema de recarregar arma
            if(Input.GetKeyDown("r")){
                if(contMunicao2>=12){
                    
                    contMunicao2-=(12-cartucho);                    
                    cartucho+=(12-cartucho);
                    
                }else{
                    if(cartucho==0){
                        cartucho+=contMunicao2;
                    
                        contMunicao2=0;
                    }else{
                        if(contMunicao2+cartucho>=12){
                            cartucho=12;
                            contMunicao2=(contMunicao2+cartucho)-12;
                        }else{
                            cartucho=cartucho+contMunicao2;
                            contMunicao2=0;
                        }
                    }
                }
                
            }
    //fim sistema de recarregar arma
       
}
    
    
        
    
