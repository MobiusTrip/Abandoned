/*
Summary: The CameraController script has the main camera follow the player as he ventures around the playspace
*/

using UnityEngine;
using System.Collections;

public class CameraController : MonoBehaviour {
	public GameObject player; 
	public float offsetX = -5; //The offset of the camera according to the player in the X axis
	public float offsetZ = 0; //The offset of the camera according to the player in the Z axis
	public float maximumDistance = 2; //The maximum distance permitted to the camera to be far from the player, its used to make a smooth movement
	public float playerVelocity = 10; //The velocity of your player, used to determine the speed of the camera
	
	private float movementX;
	private float movementZ;
	
	//executed at the start of the script and is only run once
	void Start () {
		transform.position = new Vector3(player.transform.position.x + offsetX, transform.position.y, player.transform.position.z + offsetZ);
		transform.LookAt(player.transform);
	}
	
	// Update is called once per frame
	void Update () {
		movementX = ((player.transform.position.x + offsetX - this.transform.position.x))/maximumDistance;
		movementZ = ((player.transform.position.z + offsetZ - this.transform.position.z))/maximumDistance;
		this.transform.position += new Vector3((movementX * playerVelocity * Time.deltaTime), 0, (movementZ * playerVelocity * Time.deltaTime));
	}
}