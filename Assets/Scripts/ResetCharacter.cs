/*
Summary: The ResetCharacter script is constantly being tested for the 'R' key press to reset the character to 
it's original position. This is purely for debugging and the script would be removed upon release of the game
*/

using UnityEngine;
using System.Collections;

public class ResetCharacter : MonoBehaviour {
	// Update is called once per frame
	void Update () {
		if(Input.GetKeyUp(KeyCode.R)) {
			transform.position = new Vector3(0, 2, 0);
		}
		else if(Input.GetKeyUp(KeyCode.Escape)) {
			Application.Quit();
		}
	}
}