#pragma strict

//Public Health : double = 100;
public var Oxygen : double = 100;
public var DepleteRate = 10;
private var MaxOxygen : double;
private var OxygenPercent : double;
//var Style : GUIStyle;

function Start () {
	MaxOxygen = Oxygen;
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
	GUI.color.a = .5;
	GUI.contentColor = Color.blue;
	GUI.Label(Rect(10,Screen.height-50,30,30),OxygenPercent + "%");
}

function Dead(){
	Debug.Log("RIP");
	
	//insert death stuff here
}