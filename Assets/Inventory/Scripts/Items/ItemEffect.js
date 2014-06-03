#pragma strict

//This script allows you to insert code when the Item is used (clicked on in the inventory).

var deleteOnUse = true;

private var playersInv : Inventory;
private var item : Item;
//private var PlayerObject : GameObject;
//private var StatsScript : GameObject;

@script AddComponentMenu ("Inventory/Items/Item Effect")
@script RequireComponent(Item)

//This is where we find the components we need
function Awake ()
{
	//PlayerObject = GameObject.Find("Main Character");
	//StatsScript = PlayerObject.GetComponent("Character Stats");
	//StatsScript.test();
	playersInv = FindObjectOfType(Inventory); //finding the players inv.
	if (playersInv == null)
	{
		Debug.LogWarning("No 'Inventory' found in game. The Item " + transform.name + " has been disabled for pickup (canGet = false).");
	}
	item = GetComponent(Item);
}

//This is called when the object should be used.
function UseEffect () 
{	
	//INSERT CUSTOM CODE HERE!
	var playerObj : GameObject;
	var scoreScript : CharacterStats;
	playerObj = GameObject.Find("Main Character");
	scoreScript = playerObj.GetComponent("CharacterStats");
	if (gameObject.name == "OxygenRefill"){
        scoreScript.Oxygen += 10;
        if (scoreScript.Oxygen > scoreScript.MaxOxygen){
        	scoreScript.Oxygen = scoreScript.Oxygen - (scoreScript.Oxygen - scoreScript.MaxOxygen);
        	}
        else {}
		}
	else if (gameObject.name == "OxygenUpgrade"){
        scoreScript.MaxOxygen += 50;
		}
	
	//Play a sound
	playersInv.gameObject.SendMessage("PlayDropItemSound", SendMessageOptions.DontRequireReceiver);
	
	//This will delete the item on use or remove 1 from the stack (if stackable).
	if (deleteOnUse == true)
	{
		DeleteUsedItem();
	}
}

//This takes care of deletion
function DeleteUsedItem()
{
	if (item.stack == 1) //Remove item
	{
		playersInv.RemoveItem(this.gameObject.transform);
	}
	else //Remove from stack
	{
		item.stack -= 1;
	}
	Debug.Log(item.name + " has been deleted on use");
}