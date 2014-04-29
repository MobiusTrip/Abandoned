using UnityEngine;
using System.Collections;

public class ResetCharacter : MonoBehaviour {

	// Use this for initialization
	void Start () { 
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyUp(KeyCode.R)){
			//Debug.Log ("R");
			transform.position = new Vector3(0, 2, 0);
		}
	}
}