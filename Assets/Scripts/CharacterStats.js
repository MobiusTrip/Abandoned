#pragma strict

//Public Health : double = 100;
public var Oxygen : double = 100;
public var DepleteRate = 10;
public var MaxOxygen : double;
private var OxygenPercent : double;
//var Style : GUIStyle;

function Start () {
	MaxOxygen = 100;
	OxygenPercent = Oxygen/MaxOxygen*100;
	DepleteOxy();
//	Style = Style.normal.textColor = Color.blue;
}

function Update () {
	
}

function DepleteOxy(){
	while(true){
		if(Oxygen > 0){
			Oxygen -= 1;
			OxygenPercent = Oxygen/MaxOxygen*100;
			yield WaitForSeconds(DepleteRate);
		} 
		else{
			Dead();
			yield;
		}
	}
}

function OnGUI(){
	//GUI.color.a = .5;
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
	Debug.Log("RIP");
	
	//insert death stuff here
}