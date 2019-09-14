var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h1 = document.getElementById("header1"); 
var h2 = document.getElementById("header2"); 
var h3 = document.getElementById("header3"); 

function setGradient(){
	body.style.background = "linear-gradient(to right,"
	 + color1.value +
	 ","+color2.value+
	 ")";
	 if (color1.value == "#000000" && color2.value == "#000000")
	 {
	 	h1.style.color = "#ffffff";
	 	h2.style.color = "#ffffff";
	 	h3.style.color = "#ffffff";
	 }
	 else
	 {
	 	h1.style.color = "#000000";
	 	h2.style.color = "#000000";
	 	h3.style.color = "#000000";
	 }
	 css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);