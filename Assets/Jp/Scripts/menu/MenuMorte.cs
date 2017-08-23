using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class MenuMorte : MonoBehaviour
{


    void Start()
    {

    }


    void Update()
    {

    }


 


    public void rec()
    {
        Application.LoadLevel(1);
    }

    public void men()
    {
        Application.LoadLevel(0);
    }

    public void sai()
    {
        Application.Quit();
    }
}
