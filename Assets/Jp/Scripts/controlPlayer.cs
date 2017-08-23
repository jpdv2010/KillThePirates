using UnityEngine;
using System.Collections;
using UnityEngine.Networking;

public class controlPlayer : NetworkBehaviour {
	[SerializeField] Camera FPScam;
	// Use this for initialization
	void Start () {
		if (isLocalPlayer) {
			GameObject.Find ("Scene Camera").SetActive (false);
			FPScam.enabled = true;		
		}

	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
