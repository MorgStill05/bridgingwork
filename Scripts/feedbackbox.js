function feedbackFunc(){
	window.location.href = 'mailto:Idontwantto@putmyrealemailhere.com?subject=Experience at attraction&body=' + document.getElementById("FeedbackTable").value + '--' + document.getElementById("Names").value;
	
	
	
	//alert(feedbackContents)
}