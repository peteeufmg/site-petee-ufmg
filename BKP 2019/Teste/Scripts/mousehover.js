function passou(eve, bot){
	var popup = document.createElement("span");

	if((eve.pageX + 420) < window.innerWidth){
		popup.style.left = eve.pageX + 10 + "px";
	}
	else{
		popup.style.left = eve.pageX - 410 + "px";
	}
	
	popup.innerHTML = window.dicMaterias[bot].nome + "<i>Pré-requisitos: " + window.dicMaterias[bot].requisitos + "</i><BR><BR>" + window.dicMaterias[bot].ementa;
	popup.id = "DESC" + bot;
 	popup.style.width = "400px";
	popup.style.zIndex = "1";
	popup.style.position = "absolute";
	popup.style.color = "white";
	popup.style.borderStyle = "solid";
	popup.style.borderColor = "black";
	popup.style.borderWidth = "4px";
	popup.style.backgroundColor = "#666666";
	popup.style.opacity = "0.85";
	popup.style.filter = "alpha(opacity=85)";
	popup.style.textAlign = "justify";
	popup.style.fontSize = "0.9em"; 
	
	
	
	if((eve.pageY + 200) < window.innerHeight){
		popup.style.top = eve.pageY + 10 + "px";
	}
	else{
		popup.style.top = eve.pageY - 10 - popup.offsetHeight + "px";
	}
	
/* 	document.getElementById(bot).for = bot;
	popup.className = "mdl-tooltip"; */
  
	document.getElementById("corpo").appendChild(popup);
	
	if(window.dicMaterias[bot].requisitos != ""){
		var req = window.dicMaterias[bot].requisitos.substr(0, 6);
		req = req.toLowerCase();
		
		document.getElementById(req).style.backgroundColor = "#708090";
		document.getElementById(req).style.border = "3px solid #708090";
		document.getElementById(req).style.color = "white";
		
		if(window.dicMaterias[bot].requisitos.length > 6){
			req = window.dicMaterias[bot].requisitos.substr(8, 6);
			req = req.toLowerCase();
			
			document.getElementById(req).style.backgroundColor = "#708090";
			document.getElementById(req).style.border = "3px solid #708090";
			document.getElementById(req).style.color = "white";
		}
	}
}

function mexeu(eve, bot){
	var popup = document.getElementById("DESC" + bot);
	
	if(eve.pageX + 420 < window.innerWidth){
		popup.style.left = eve.pageX + 10 + "px";
	}
	else{
		popup.style.left = eve.pageX - 410 + "px";
	}
	
	if((eve.pageY + 200) < window.innerHeight){
		popup.style.top = eve.pageY + 10 + "px";
	}
	else{
		popup.style.top = eve.pageY - 10 - popup.offsetHeight + "px";
	}
}

function saiu(bot){
	var filho = document.getElementById("DESC" + bot);
  
	document.getElementById("corpo").removeChild(filho);
	
	if(window.dicMaterias[bot].requisitos != ""){
		var req = window.dicMaterias[bot].requisitos.substring(0, 6);
		req = req.toLowerCase();
		
		if(window.dicMaterias[req].estado == "nok")
		{
			document.getElementById(req).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored";
			document.getElementById(req).style.backgroundColor = "";
			document.getElementById(req).style.border = "";
			document.getElementById(req).style.color = "";
/* 			document.getElementById(req).style.backgroundColor = "#4DD0E1";
			document.getElementById(req).style.border = "3px solid #4DD0E1";
			document.getElementById(req).style.color = "black"; */
		}
		else
		{
			document.getElementById(req).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
			document.getElementById(req).style.backgroundColor = "";
			document.getElementById(req).style.border = "";
			document.getElementById(req).style.color = "";
/* 			document.getElementById(req).style.border = "3px solid #1E88E5";
			document.getElementById(req).style.backgroundColor = "#1E88E5";
			document.getElementById(req).style.color = "white"; */
		}
		
		
		if(window.dicMaterias[bot].requisitos.length > 6){
			req = window.dicMaterias[bot].requisitos.substring(8);
			req = req.toLowerCase();
			
			if(window.dicMaterias[req].estado == "nok")
			{
				document.getElementById(req).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored";
				document.getElementById(req).style.backgroundColor = "";
				document.getElementById(req).style.border = "";
				document.getElementById(req).style.color = "";
/* 				document.getElementById(req).style.backgroundColor = "#48D1CC";
				document.getElementById(req).style.border = "3px solid #48D1CC";
				document.getElementById(req).style.color = "black"; */
			}
			else
			{
				document.getElementById(req).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
				document.getElementById(req).style.backgroundColor = "";
				document.getElementById(req).style.border = "";
				document.getElementById(req).style.color = "";
/* 				document.getElementById(req).style.border = "3px solid #1E88E5";
				document.getElementById(req).style.backgroundColor = "#1E88E5";
				document.getElementById(req).style.color = "white"; */
			}
		}
	}
}