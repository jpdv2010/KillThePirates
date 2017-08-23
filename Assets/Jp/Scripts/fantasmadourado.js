#pragma strict
var vidaInimigo:int;
var itemcaido: GameObject;
var itemcaido2: GameObject;
var itemcaido3: GameObject;
var itemcaido4: GameObject;
var itemcaido5: GameObject;
var itemcaido6: GameObject;

var distHeroi:Vector3;
var distMinima:float;
var normX:float;
var normZ:float;
var velocidadeRotacao:float;
var drop:float;
var tempo:float;
var velocidadeMovimentacao:float;
var animacao:Animation;
var estado:int;
static var danoR:int;

function Start () {
    
    vidaInimigo=300;
    distMinima=20;
    velocidadeMovimentacao=5*Time.deltaTime;
    tempo=0;
 
   
}

function Update () {
    estado=0;
    distHeroi=corpo.posicaoHeroi-transform.position;
    normX=distHeroi.x;
    normZ=distHeroi.z;
    if (normX<0) normX=-normX;
    if (normZ<0) normZ=-normZ;
    // se o inimigo ve voce ele te ataca
    if((normX<distMinima) && (normZ<distMinima)) 
    {   
        transform.rotation.y=0;
        if(distHeroi.x>0){ 
            transform.Translate(velocidadeMovimentacao,0,0);
            animacao.Play("andando");
            estado=1;
        }
        else{
            transform.Translate(-velocidadeMovimentacao,0,0);
            animacao.Play("andando");
            estado=1;
        }
        //
        if(distHeroi.z>0){
            transform.Translate(0,0,velocidadeMovimentacao);
            animacao.Play("andando");
            estado=1;
        }
        else{
            transform.Translate(0,0,-velocidadeMovimentacao);
            animacao.Play("andando");
            estado=1;
        }
    } else //se ele nao ve voce ele anda aleatoriamente pelo mapa
    {

        transform.Translate(0,0,velocidadeMovimentacao);
        animacao.Play("andando");
        estado=1;
        
        tempo+=1*Time.deltaTime;
        print(tempo);
        if(tempo>2){
            velocidadeRotacao=360*Random.value;
            transform.Rotate(0,velocidadeRotacao,0);
            tempo=0;
        }

    }
        
    if(estado==0){
        animacao.Play("parado");
    }
}



    



function OnCollisionEnter(collision : Collision){
    if(collision.gameObject.tag=="bala"){
        vidaInimigo-=danoR+(0.5*corpo.dano);
    }
   // if(collision.gameObject.tag=="balaesping"){
   //     vidaInimigo-=espingarda.danoArma+(0.5*corpo.dano);      
 //   }


    if(vidaInimigo<=0){
        respaw.contInimigo--;
        inimortos.inimigosmortos++;
        respaw.contMaxInimigo--;
        Destroy(gameObject);
        drop=Random.value;
        
        if(npc.iniciaM==true)
        {
        npc.iniMiss++;
        }
        if(npc2.iniciaM==true){
        npc2.iniMiss++;
        }
        if(npc3.iniciaM==true){
        npc3.iniMiss++;
        }
        
        if(drop*100<=30){
            Instantiate(itemcaido2,transform.position,transform.rotation);
            Instantiate(itemcaido2,transform.position,transform.rotation);
            Instantiate(itemcaido2,transform.position,transform.rotation);
            Instantiate(itemcaido3,transform.position,transform.rotation);
            Instantiate(itemcaido,transform.position,transform.rotation);
        }
           
        if((drop*100>30) && (drop*100<=60)){
            Instantiate(itemcaido,transform.position,transform.rotation);
            Instantiate(itemcaido,transform.position,transform.rotation);
            Instantiate(itemcaido,transform.position,transform.rotation);
            Instantiate(itemcaido3,transform.position,transform.rotation);
            Instantiate(itemcaido2,transform.position,transform.rotation);
        }

        if((drop*100>60) && (drop*100<=80)){
            Instantiate(itemcaido3,transform.position,transform.rotation);
            Instantiate(itemcaido3,transform.position,transform.rotation);
            Instantiate(itemcaido3,transform.position,transform.rotation);
            Instantiate(itemcaido,transform.position,transform.rotation);
            Instantiate(itemcaido2,transform.position,transform.rotation);
        }

        if((drop*100>80) && (drop*100<=90)){
            Instantiate(itemcaido4,transform.position,transform.rotation);
            Instantiate(itemcaido4,transform.position,transform.rotation);
            Instantiate(itemcaido4,transform.position,transform.rotation);
            Instantiate(itemcaido,transform.position,transform.rotation);
            Instantiate(itemcaido2,transform.position,transform.rotation);
        }
            
        if((drop*100>90)){
            Instantiate(itemcaido5,transform.position,transform.rotation);
        }
        corpo.xp+=100;
        
        
    }
}