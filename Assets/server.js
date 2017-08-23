#pragma strict
//variaveis de config server//
var IP:String;
var porta:int;


//variaveis de config jogo//



function Start () {
    //Declara ip do player
    IP=Network.player.ipAddress;
}

function Update () {
  
}

//criar servidor
function IniciaServer(maxPlayes: int,Port:int,UserNat:boolean){
    if(Network.peerType==NetworkPeerType.Disconnected){
        Network.InitializeServer(maxPlayes,Port,UserNat);
    }
}
 //conectar servidor
    function ConnectServer(IP : String,port:int){
        if(Network.peerType==NetworkPeerType.Disconnected){
            Network.Connect(IP,port);
        }
    }

        function OnGUI () {
            // Make a text field that modifies stringToEdit.
            if(Network.peerType == NetworkPeerType.Disconnected){

                IP = GUI.TextField (Rect (10, 10, 200, 20), IP, 25);
                if (GUI.Button(Rect(10, 30, 100, 20),"Iniciar Servidor")) IniciaServer(90,porta,false) ;
                if (GUI.Button(Rect(10, 50,100 , 20),"Conectar")) ConnectServer(IP,porta) ;
            }


            if(Network.peerType==NetworkPeerType.Client ||Network.peerType==NetworkPeerType.Server ){
                GUI.Label (Rect (10, 10, Screen.width, 20), Network.player.ipAddress+" Está conectado em: "+IP);
               
            }
        }

        

    