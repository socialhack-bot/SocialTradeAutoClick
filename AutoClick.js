// SocialTrade -> frenzzup.com -> ??
var elementList;
var index = 0;
var attempt = 0;
var flag = false;
var myVar;
var tries = 0;
var alreadyClicked = 0;

function myTimer() {
	var element = elementList[index];
	if($(element).hasClass("like_button")) {
		while(true)
		{
			index++;
			element = elementList[index];
			if($(element).hasClass("btn-new"))
			{
				console.log("Found button to click at index: " + (alreadyClicked));
				break;
			}
		}
		return;
	}
	
	if($(element).hasClass("btn-new")) 
	{
		$(element).click();
		console.log("Button Index: " + (alreadyClicked) + ". Link opened: " + $(element).attr("link"));
		flag = true;
		index++;
		alreadyClicked++;
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
		console.log("Waiting on click index: " + (alreadyClicked) + ". Tries: " + tries);
		if(tries == 2)
		{
			// try index again
			console.log("Trying to click index " + n + " again!");
			index--;
			alreadyClicked--;
		}
	}
}

function myFunction() {
	// log start time
	var d = new Date();
	var n = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	console.log("Work started at " + n);
	
	clickedList = $("span.w3-btn");
	alreadyClicked = clickedList.length;
	
	// find each <span>
	elementList = $("[id^='hand_']");
	console.log("element found: " + (elementList.length + alreadyClicked));
	myVar = setInterval(myTimer, 2000);
}
myFunction();
