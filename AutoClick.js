var elementList;
var index = 0;
var attempt = 0;
var flag = false;
var myVar;
var tries = 0;

function myTimer() {
	var element = elementList[index];
	if($(element).hasClass("like_button")) {
		while(true)
		{
			index++;
			element = elementList[index];
			if($(element).hasClass("btn-new"))
			{
				console.log("Found button to click at index: " + (index + 1));
				break;
			}
		}
		return;
	}
	
	if($(element).hasClass("btn-new")) 
	{
		$(element).click();
		console.log("Button Index: " + (index + 1) + ". Link opened: " + $(element).attr("link"));
		flag = true;
		index++;
		if(index >= elementList.length)
		{
			clearInterval(myVar);
			console.log("Today you earned: " + (elementList.length * 5) + " RUPEES!!!!");
			// log end time
			var d = new Date();
			var n = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
			console.log("Work ended at " + n);
			return;
		}
	}
	
	if(flag) 
	{
		attempt = 1;
		flag = false;
		tries = 0;
	}
	else
	{
		attempt++;
	}
	if((attempt % 6) == 0)
	{
		tries++;
		console.log("Waiting on click index: " + (index + 1) + ". Tries: " + tries);
	}
}

function myFunction() {
	// log start time
	var d = new Date();
	var n = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	console.log("Work started at " + n);
	
	// find each <span>
	elementList = $("[id^='hand_']");
	console.log("element found: " + elementList.length);
	myVar = setInterval(myTimer, 5000);
}
myFunction();
