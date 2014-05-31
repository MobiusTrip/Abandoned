#pragma strict

var sound : AudioClip;

function OnMouseOver(){
	if(Input.GetMouseButtonDown(0)){
		Debug.Log("wat");
		Application.LoadLevel("dungeon");
	}
}

function OnMouseEnter(){
	renderer.material.color = Color.gray;
	audio.PlayOneShot(sound);
}

function OnMouseExit(){
	renderer.material.color = Color.white;
}