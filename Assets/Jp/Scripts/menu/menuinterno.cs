using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class menuinterno : MonoBehaviour {
    public Canvas quitMenu;
    public Canvas AtribMenu;
	public bool menuAberto = false;
    void Start () {
        quitMenu.enabled = false;
        AtribMenu.enabled = false;
    }
	
	
	void Update () {
		if (Input.GetKeyDown("p")){
			if (menuAberto == false) {
				clicasair ();
			} else {
				clicarnao ();
				Time.timeScale = 1;
			}
		}
		if (menuAberto = true) {
			Cursor.visible = true;
		} else {
			Cursor.visible = false;
		}
	}

    public void clicasair()
    {
		Time.timeScale = 0;
        quitMenu.enabled = true;
		AtribMenu.enabled = false;
		menuAberto = true;
    }
    public void clicaJogador()
    {

        quitMenu.enabled = false;
        AtribMenu.enabled = true;

    }

    public void clicarnao()
    {
        quitMenu.enabled = false;
		AtribMenu.enabled = false;
		Time.timeScale = 1;
		menuAberto = false;

    }
    public void recomecar()
    {
        Application.LoadLevel(1);
    }

    public void menuP()
    {
        Application.LoadLevel(0);
    }

    public void sair()
    {
        Application.Quit();
    }
}
