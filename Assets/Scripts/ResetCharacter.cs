using UnityEngine;
using System.Collections;

public class ResetCharacter : MonoBehaviour {

	void Update () {
		if(Input.GetKeyUp(KeyCode.R)){
			//Debug.Log ("Reset");

			transform.position = new Vector3(0, 2, 0);
		}
	}
}