#pragma strict

var ActionButton : KeyCode = KeyCode.E;
private var CanOpen = false;

function Start () {

}

function Update () {

}

function OnTriggerEnter(){
	CanOpen = true;
	Debug.Log("GTFO");
	if(Input.GetKeyDown(ActionButton) && CanOpen == true){
		//spawn stuff
		Debug.Log("hella$w@q");
	}
}

function OnTriggerExit(){
	CanOpen = false;
}

function OnGUI(){
	if(CanOpen == true){
		GUI.Label(Rect(Screen.width/2,Screen.height/2,40,20),"Press E to open");
	}
}