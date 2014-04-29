using UnityEngine;
using System.Collections;

public class ResetCharacter : MonoBehaviour {

<<<<<<< HEAD
	// Use this for initialization
	void Start () { 
	
	}
	
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyUp(KeyCode.R)){
			//Debug.Log ("R");
=======
	void Update () {
		if(Input.GetKeyUp(KeyCode.R)){
			//Debug.Log ("Reset");
>>>>>>> 14845e6838f691e7d83e8827b731e1eb5dcd0a98
			transform.position = new Vector3(0, 2, 0);
		}
	}
}