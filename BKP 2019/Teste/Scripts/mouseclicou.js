function clicou(eve, bot){
	var qual = window.dicMaterias[bot].estado;
  
	if(qual == "nok"){
		document.getElementById(bot).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
/* 		document.getElementById(bot).style.border = "3px solid #1E88E5";
		document.getElementById(bot).style.backgroundColor = "#1E88E5";
		document.getElementById(bot).style.color = "white"; */
		window.dicMaterias[bot].estado = "ok";
    
		destrava(bot);
	}
	else if(qual == "ok"){
		document.getElementById(bot).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored";
/* 		document.getElementById(bot).style.border = "3px solid #4DD0E1";
		document.getElementById(bot).style.backgroundColor = "#4DD0E1";
		document.getElementById(bot).style.color = "black"; */
		window.dicMaterias[bot].estado = "nok";
    
		var num = Math.trunc(window.dicMaterias[bot].trava.length / 6);
      
		for(var i = 0; i < num; i++){
			var tra = window.dicMaterias[bot].trava.substr(i*6+i, 6);
			tra = tra.toLowerCase();
      
			if(window.dicMaterias[tra].estado == "ok"){
				clicou(undefined, tra);
			}
      
			else
			{
				document.getElementById(tra).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored";
/* 				document.getElementById(tra).style.border = "3px solid #4DD0E1";
				document.getElementById(tra).style.backgroundColor = "#4DD0E1";
				document.getElementById(tra).style.color = "black"; */
			}
			document.getElementById(tra).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored";
			document.getElementById(tra).style.opacity = 0.35;
			/* document.getElementById(tra).className = "travada"; */
			document.getElementById(tra).setAttribute("onclick", "");
		}
	}
	else{
		window.alert("Erro #2199 - Problemas no banco de dados.");
	}
}

function complete(eve, bot){
	var tra = window.dicPeriodos[bot].trava.substr();
	tra = tra.toLowerCase();

	var num = Math.trunc(window.dicPeriodos[bot].materias.length / 6);
	for(var i = 0; i < num; i++){

		var comp = window.dicPeriodos[bot].materias.substr(i*6+i, 6);
		comp = comp.toLowerCase();

		window.dicMaterias[comp].estado = "nok";
		clicou(undefined, comp);
	}
	document.getElementById(tra).setAttribute("onclick", "complete(event, this.id)");

}