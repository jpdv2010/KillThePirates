using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class menu : MonoBehaviour {
    public Canvas jogarMenu;
    public Canvas quitMenu;
	public Canvas NewLoad;
	public Canvas SelectSave;
	public Canvas estatisticas;
    public Button startText;
    public Button exitText;
	public string nome;
	public InputField campoNome;
	// Use this for initialization

	public Text nomeSave1;
	public Text nomeSave2;
	public Text nomeSave3;
	public string nomeJ;
	public float dano;
	public float velocidade;
	public int mortes;
	public int lvl;
	public int xp;
	public int subirLvl;
	public float maximoVida;

	public int playerIndex;

	public Text TXTnomeJ;
	public Text TXTdano;
	public Text TXTvelocidade;
	public Text TXTmortes;
	public Text TXTlvl;



	void Start () {
        jogarMenu = jogarMenu.GetComponent<Canvas>();
        quitMenu = quitMenu.GetComponent<Canvas>();
		NewLoad = NewLoad.GetComponent<Canvas>();
		SelectSave = SelectSave.GetComponent<Canvas>();
		estatisticas = estatisticas.GetComponent<Canvas>();
        startText = startText.GetComponent<Button>();
        exitText = exitText.GetComponent<Button>();
        quitMenu.enabled = false;
        jogarMenu.enabled = false;
		NewLoad.enabled = false;
		SelectSave.enabled = false;
		estatisticas.enabled = false;

		nomeSave1.text = PlayerPrefs.GetString ("Personagem1");
		nomeSave2.text =PlayerPrefs.GetString ("Personagem2");
		nomeSave3.text = PlayerPrefs.GetString ("Personagem3");
    }

	public void StartLevel()
	{
		jogarMenu.enabled = false;
		quitMenu.enabled = false;
		NewLoad.enabled = true;
		SelectSave.enabled = false;
		startText.enabled = true;
		exitText.enabled = true; 
	}

	public void Novo(){
		jogarMenu.enabled = true;
		quitMenu.enabled = false;
		NewLoad.enabled = false;
		SelectSave.enabled = false;
		startText.enabled = true;
		exitText.enabled = true;
	}

	public void Play()
	{
		nome = campoNome.text;
		playerIndex = 1;
		setValues ();
		Application.LoadLevel(1);
	}

	public void Play2()
	{
		nome = campoNome.text;
		playerIndex= 2;
		setValues ();
		Application.LoadLevel(1);
	}

	public void Play3()
	{
		nome = campoNome.text;
		playerIndex = 3;
		setValues ();
		Application.LoadLevel(1);
	}



	public void Carregar(){
		quitMenu.enabled = false;
		startText.enabled = false;
		NewLoad.enabled = false;
		SelectSave.enabled = true;
		exitText.enabled = true;
		jogarMenu.enabled = false;
	}
	public void save1(){

		playerIndex = 1;
		getValues();

		quitMenu.enabled = false;
		startText.enabled = false;
		NewLoad.enabled = false;
		SelectSave.enabled = true;
		exitText.enabled = true;
		jogarMenu.enabled = false;
		estatisticas.enabled = true;


	}


	public void save2(){
		playerIndex = 2;
		getValues();

		quitMenu.enabled = false;
		startText.enabled = false;
		NewLoad.enabled = false;
		SelectSave.enabled = true;
		exitText.enabled = true;
		jogarMenu.enabled = false;
		estatisticas.enabled = true;
	}
	public void save3(){
		playerIndex = 3;
		getValues();


		quitMenu.enabled = false;
		startText.enabled = false;
		NewLoad.enabled = false;
		SelectSave.enabled = true;
		exitText.enabled = true;
		jogarMenu.enabled = false;
		estatisticas.enabled = true;

	}

	private void getValues(){
		string nomeJ = PlayerPrefs.GetString ("Personagem"+playerIndex);
		dano = PlayerPrefs.GetFloat("Dano"+playerIndex);
		velocidade = PlayerPrefs.GetFloat("Velocidade"+playerIndex);
		mortes = PlayerPrefs.GetInt("Mortes"+playerIndex);
		lvl=PlayerPrefs.GetInt("lvl"+playerIndex);
		xp=PlayerPrefs.GetInt("xp"+playerIndex);
		subirLvl=PlayerPrefs.GetInt("subirLvl"+playerIndex);
		maximoVida=PlayerPrefs.GetFloat("maximoVida"+playerIndex);
		PlayerPrefs.SetString ("Personagem",nomeJ);
		PlayerPrefs.SetInt ("ID",playerIndex);

		TXTnomeJ.text=nomeJ;
		TXTdano.text="Dano: "+dano;
		TXTvelocidade.text="Velocidade: "+velocidade;
		TXTmortes.text="Mortes: "+mortes;
		TXTlvl.text="LVL: "+lvl;
	}

	private void setValues(){
		PlayerPrefs.SetString ("Personagem", nome);
		PlayerPrefs.SetFloat("Dano"+playerIndex,2);
		PlayerPrefs.SetFloat("Velocidade"+playerIndex,10);
		PlayerPrefs.SetInt("Mortes"+playerIndex,0);
		PlayerPrefs.SetInt("lvl"+playerIndex,1);
		PlayerPrefs.SetInt("xp"+playerIndex,0);
		PlayerPrefs.SetInt("subirLvl"+playerIndex,100);
		PlayerPrefs.SetFloat("maximoVida"+playerIndex,100);
		PlayerPrefs.SetInt ("ID",playerIndex);
	}

	public void jogar(){
		Application.LoadLevel (1);
	}
    public void ExitPress()
    {
        quitMenu.enabled = true;
        startText.enabled = false;
        exitText.enabled = false;
        jogarMenu.enabled = false;
    }

	public void ExitGame()
	{
		Application.Quit();
	}

    public void NoPress()
    {
        quitMenu.enabled = false;
        startText.enabled = true;
        exitText.enabled = true;
        jogarMenu.enabled = false;
    }


    

   





    public void voltar()
    {
        startText.enabled = true;
        exitText.enabled = true;
		quitMenu.enabled = false;
		jogarMenu.enabled = false;
		NewLoad.enabled = false;
		SelectSave.enabled = false;
		estatisticas.enabled = false;
    }

    


    // Update is called once per frame
    void Update () {
		Cursor.visible = true;
	}
}
