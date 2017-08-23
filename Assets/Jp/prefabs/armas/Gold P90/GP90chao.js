#pragma strict
var gp90:GameObject;
var contador:int;
var existeI:boolean;
static var nome:String;

function Start () {
    nome="GP90";
}

function Update () {

}

function OnCollisionEnter(collision:Collision){
    contador=0;
    existeI=false;
   
    if(collision.gameObject.tag=="corpo"){
        while(contador<Inventario.indice){
            if(nome==Inventario.nomeArmas[contador]){
                existeI=true;
                break;
            }
            contador++;
        }
   
        if(existeI==false){
            Inventario.armas[Inventario.indice]=gp90;           
            Inventario.nomeArmas[Inventario.indice]=nome;      
            Inventario.indice++;
            
        }
        Destroy(gameObject);

    }
}