#pragma strict
var character:GameObject;
var velocidadeFrente : float;
var stamina : int;
var velocidadeLados:float;
var velocidadeRotacao:float;
static var vidaHeroi:int;
var velocidade:float;
var animacao:Animation;
var estadoanim:int;
var porcUp:int;
static var posicaoHeroi: Vector3;
var pausado:int;

static var xp:int;
static var lvl:int;
var subirLvl: float;
var lvlup:UI.Text;

var spine:GameObject;
var velRotacaoCamera: float;
var rCan:float;
//------------------textos-----
var textoNome:UI.Text;
var textovida:UI.Text;
var textoStamina:UI.Text;
var textoXP:UI.Text;
var textoLVL:UI.Text;
var textoLVL2:UI.Text;
var textoDano:UI.Text;
var textoVelocidade:UI.Text;
var textoIniMortos:UI.Text;
var textoXP2:UI.Text;
var nome:String;
var mortes:int;
var indiceSave:int;
var valoresAtribuidos:boolean;
var tempTXT:float;
//---------------------------------------------------habilidades--------------------------------------------------------
static var maximoVida:int;
static var dano:float;

//------------------------------------------------------------------------------------------------------------------------

function Start () {
	velocidadeFrente = 5*Time.deltaTime;
    velocidadeLados = 4*Time.deltaTime;
    valoresAtribuidos=false;
    stamina=10;
    vidaHeroi=100;
    pausado=0;
    estadoanim=0;
    maximoVida=100;
    tempTXT=0;
}

//FixedUpdate
//LateUpdate

function selectSave(){
indiceSave=PlayerPrefs.GetInt("ID");
}

function atribuiValores(){
        dano=PlayerPrefs.GetFloat("Dano"+indiceSave);
		velocidade=PlayerPrefs.GetFloat("Velocidade"+indiceSave);
		mortes=PlayerPrefs.GetInt("Mortes"+indiceSave);
		lvl=PlayerPrefs.GetInt("lvl"+indiceSave);
		xp=PlayerPrefs.GetInt("xp"+indiceSave);
		subirLvl=PlayerPrefs.GetInt("subirLvl"+indiceSave);
		maximoVida=PlayerPrefs.GetFloat("maximoVida"+indiceSave);

}

function Update () {

        nome=PlayerPrefs.GetString ("Personagem");
        selectSave();
        atribuiValores();


    estadoanim=0;
    velocidadeRotacao=180*Time.deltaTime;
    //---------------rotacao------------

    velocidadeRotacao=Input.GetAxis("Mouse X")*velocidadeRotacao;
    transform.Rotate(0,velocidadeRotacao,0);
    velRotacaoCamera=180*Time.deltaTime;

    rCan=spine.transform.rotation.eulerAngles.y;

velRotacaoCamera=Input.GetAxis("Mouse Y")*velRotacaoCamera;
    //if(rCan>=100)rCan-=360;
   // if(rCan<30 && rCan>-30){
   spine.transform.Rotate(0,-velRotacaoCamera,0);

    
  //  }else{
   //  if(rCan>30){
   //  if(-velRotacaoCamera<0) {
   //  spine.transform.Rotate(0,-velRotacaoCamera,0);
   //  }
  //   }

  //   if(rCan<-30){
  //   if(-velRotacaoCamera>0){
  //    spine.transform.Rotate(0,-velRotacaoCamera,0);
  //    }
  //   }
  //  }
   



    textovida.text = "Vida: "+vidaHeroi;
    textoStamina.text = "Stamina: "+stamina;

//    movimentação ------------------------------------------------------------------
    if(Input.GetKey("w")){

        transform.Translate(0,0,velocidadeFrente);
        if(Inventario.comArma){
            animacao.Play("arma2maoanda"); 
        }else{
            animacao.Play("andar"); 
        }
        estadoanim=1;
    }
    if(Input.GetKey("s")){
        transform.Translate(0,0,-velocidadeFrente);
        if(Inventario.comArma){
            animacao.Play("arma2maoanda"); 
        }else{
            animacao.Play("andar"); 
        } 
        estadoanim=1;
    }

    if(Input.GetKey("d")){
        transform.Translate(velocidadeLados,0,0);
        if(Inventario.comArma){
            animacao.Play("arma2maoanda"); 
        }else{
            animacao.Play("andar"); 
        }        estadoanim=1;
    }
    if(Input.GetKey("a")){
        transform.Translate(-velocidadeLados,0,0);
        if(Inventario.comArma){
            animacao.Play("arma2maoanda"); 
        }else{
            animacao.Play("andar"); 
        }
        estadoanim=1;
    }
    //rotação:
       

    if(estadoanim==0){
        if(Inventario.comArma){
            animacao.Play("arma2mao");
            bracos.comArma=true; 
        }else{
            animacao.Play("parado"); 
        }
        
    }



    if(Input.GetKey(KeyCode.LeftShift)){
        if(stamina>0){
            velocidadeFrente+=1*Time.deltaTime;
        
            stamina=stamina-1;
        }
    }else{
        velocidadeFrente = 5*Time.deltaTime;
        if(stamina<10){
            stamina++;
        }
    }

    //fim movimentação----------------------------------------------------------------------------------
    //--------------------------------------------------posiçaoparainimigos----------------------------
    posicaoHeroi=transform.position;
    //-----------------------------level-------------------------------------------------------------

    if(xp>=subirLvl){
        lvlUP();
    }

    if(Input.GetKey("k")){
        saveGame();
    }

    inimortos.lvlFinal=lvl;


    //----------------------------------atributos------------------------------------------------------------
        porcUp=(xp/subirLvl)*100;
        textoXP.text="EXP= "+xp;
        textoLVL.text="LVL("+lvl+")";
        textoLVL2.text="LVL="+lvl;    
        textoNome.text="Nome: "+nome;
        textoDano.text="Dano= "+dano;
        textoVelocidade.text="Velocidade= "+velocidade;
        textoIniMortos.text="Mortes= "+inimortos.inimigosmortos;
        textoXP2.text="XP="+xp+"("+subirLvl+"):"+porcUp+"%";


                   
   
}

//-----------------------------------------LEVEL UP----------------------------------------------------------------
function lvlUP(){
        inimortos.xptotal+=xp;
        lvl++;
        valoresAtribuidos=false;
        subirLvl+=(0.25)*subirLvl;
        dano+=0.6;
        velocidade+=(0.08)+velocidade*Time.deltaTime;
        maximoVida*=1.05;
        xp=0;
        vidaHeroi=maximoVida;
}

//-----------------------------------------SAVE GAME------------------------------------------------------------
function saveGame(){
		PlayerPrefs.SetString("Personagem"+indiceSave,nome);
        PlayerPrefs.SetFloat("Dano"+indiceSave,dano);
        PlayerPrefs.SetFloat("Velocidade"+indiceSave,velocidade);
        PlayerPrefs.SetInt("Mortes"+indiceSave,inimortos.inimigosmortos);
        PlayerPrefs.SetInt("lvl"+indiceSave,lvl);
        PlayerPrefs.SetInt("xp"+indiceSave,xp);
        PlayerPrefs.SetInt("subirLvl"+indiceSave,subirLvl);
        PlayerPrefs.SetFloat("maximoVida"+indiceSave,maximoVida);
}
//--------------------------------colisao com o inimigo-----------------------------------------
function OnCollisionEnter(collision : Collision){

    if(collision.gameObject.tag=="Inimigo")
    {
            vidaHeroi-=8;//vida diminui 8 ao colidir com o "Inimigo"

    }
    if(collision.gameObject.tag=="fantasmadourado")
    {
        vidaHeroi-=13;//vida diminui 13 ao colidir com o "Inimigo"

    }
    if(vidaHeroi<=0){
        Application.LoadLevel(2);
    }
}





