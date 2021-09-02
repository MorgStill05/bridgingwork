function menubar(){
	
	//var codeBlock = '<div class="jumbotron jumbotron-fluid">'+'<div class="container">'+'<ul id="menu">'+'<li><a href="Home.html">Home</a></li>'+'<li><a href="GreatPyramidofGiza.html">About</a></li>'+'<li><button onclick="location.href=\'../Views/home.html\'" type="button">Home</button></li>'+'<li><button onclick="location.href='../Views/about.html'" type="button">About</button></li>'+'</ul>'+'</div>'+'</div> ';
	
	var codeBlock = `
		<div class="jumbotron jumbotron-fluid menubar" id="menubar">
			<div class="container">     
			<div>
				<ul id="menu">
					<li><img onclick="location.href='../Views/index.html'" class="menubarbox" src="../Assets/unicef.png" alt="Unicef Logo" style="width:30px;height:30px;"></img></li>
					<li><button class="menubarbox" onclick="location.href='../Views/index.html'" type="button">Home</button></li>
					<li><button class="menubarbox" onclick="location.href='../Views/about.html'" type="button">About</button></li> 
					<li><button class="menubarbox" onclick="location.href='../Views/colesseum.html'" type="button">The Colesseum</button></li> 
					<li><button class="menubarbox" onclick="location.href='../Views/tajmahal.html'" type="button">Taj Mahal</button></li> 
					
				</ul>
				</div>
			</div>
		</div> 
		<h1>SEVEN WONDERS OF THE ANCIENT WORLD</hi>
	`
	var footerBlock = `	
	<div>
		<hr>
		
		<div class="jumbotron footer">
			<textarea class="footer" id="Names" name="Names" rows="1" cols="20" placeholder="Enter your name here"></textarea>
			<textarea class="footer" id="FeedbackTable" name="Feedback" rows="4" cols="50" placeholder="Enter the date of your visit and your experiences here..."></textarea>
			<Button class="footer" onclick="feedbackFunc()">Save</button>
			
		</div>
		
		<div class="jumbotron footer">
			<p class="references"> 
				References
				<br>
				Images:
				<br>
				Wikimedia Commons - Colesseum <a class="references" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FColosseum&psig=AOvVaw2y6hgmkVvub-sUNLeSUZz_&ust=1630592502720000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPi86sr83fICFQAAAAAdAAAAABAD">Source</a>, Taj Mahal <a class="references" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTaj_Mahal&psig=AOvVaw3meUPMc5F3D4DQzX2Mbjm3&ust=1630592944383000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiqt5z-3fICFQAAAAAdAAAAABAD">Source</a>
				<br>
				Licensing - <a class="references" href="https://en.wikipedia.org/wiki/File:Colosseo_2020.jpg#Licensing">Colesseum</a> - <a class="references" href="https://commons.wikimedia.org/wiki/File:Taj_Mahal_in_India_-_Kristian_Bertel.jpg#Licensing">Taj Mahal</a>
				<br>
				Twitter - Greenhead Logo <a class="references" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fgreenheadcol%2Fstatus%2F1296084848734613506%3Flang%3Dde&psig=AOvVaw3q0dJDHnfd4xQpn6_397-c&ust=1630590171087000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMj0jPLz3fICFQAAAAAdAAAAABAK">Source</a>
			</p>
		</div>
	</div>
	`

	// Inserting the code block to wrapper element
	document.getElementById("wrapper").innerHTML = codeBlock
	document.getElementById("footer").innerHTML = footerBlock
	document.getElementById("sendButton").style.visibility = "hidden";

}
