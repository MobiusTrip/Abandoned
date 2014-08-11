/*
Summary: The CrateOpen script uses triggers that are placed on the crate object in game to allow the player access
to the items within the crate
*/

#pragma strict

var ActionButton : KeyCode = KeyCode.E;
private var CanOpen = false;

function OnTriggerEnter() {
	CanOpen = true;
	Debug.Log("GTFO");
	if(Input.GetKeyDown(ActionButton) && CanOpen == true){
		Debug.Log("Items Spawn"); //Spawn Items Here
	}
}

function OnTriggerExit() {
	CanOpen = false;
}

function OnGUI() {
	if(CanOpen == true) {
		GUI.Label(Rect(Screen.width/2,Screen.height/2,40,20),"Press E to open");
	}
}