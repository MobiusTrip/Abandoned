/*
Summary: The CharacterStats script controls the player's life using simplistic math (at the moment) and 
tells the game whether it should terminate
*/

#pragma strict

public var Oxygen : double = 100;
public var DepleteRate = 10;
public var MaxOxygen : double;
private var OxygenPercent : double;

//executed at the start of the script and is only run once
function Start () {
	MaxOxygen = 100;
	OxygenPercent = Oxygen/MaxOxygen*100;
	DepleteOxy();
}

function DepleteOxy() {
	while(true) {
		if(Oxygen > 0) {
			Oxygen -= 1;
			OxygenPercent = Oxygen/MaxOxygen*100;
			yield WaitForSeconds(DepleteRate);
		} 
		else {
			Dead();
			yield;
		}
	}
}

function OnGUI(){
	if (Oxygen >= 70 ) {
		GUI.color = Color.green;
	} else if (Oxygen >= 30) {
		GUI.color = Color.yellow;
	} else {
		GUI.color = Color.red;
	}
	GUI.contentColor = Color.blue;
	GUI.Box(Rect(10,Screen.height-Oxygen,25,Oxygen),Mathf.Ceil(OxygenPercent) + "%");
}

function Dead(){
	Debug.Log("RIP"); //insert death stuff here
}