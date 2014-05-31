#pragma strict

private var IsClicked = false;
var sound : AudioClip;

function OnMouseOver(){
	if(Input.GetMouseButtonDown(0)){
		Debug.Log("Options plox");
		IsClicked = true;

	}
}

function OnMouseEnter(){
	renderer.material.color = Color.gray;
	audio.PlayOneShot(sound);
}

function OnMouseExit(){
	renderer.material.color = Color.white;
}

function OnGUI(){
	if(IsClicked==true){
		//do stuff
	}
}