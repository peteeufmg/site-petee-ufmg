function carregaDados(){
	if(pegaCookie("dcc003") == ""){
		salvaDados();
	}
	else{
		for(var materia in window.dicMaterias){
			window.dicMaterias[materia].estado = pegaCookie(materia);
			carregou(materia);
		}
	}
  
   for(var materia in window.dicMaterias){
    var num = Math.trunc(window.dicMaterias[materia].trava.length / 6);
    
	if(window.dicMaterias[materia].estado == "ok"){
		destrava(materia);
	}
  } 
}

function pegaCookie(nomeCookie) {
    var nome = nomeCookie + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0)==' ') c = c.substring(1);
        if(c.indexOf(nome) == 0) {
            return c.substring(nome.length, c.length);
        }
    }
    return "";
}

function salvaDados(){
	for(var materia in window.dicMaterias){
		document.cookie = materia + "=" + window.dicMaterias[materia].estado;
	}
}

function carregou(bot){
	var qual = window.dicMaterias[bot].estado;
	if(qual == "nok"){
		document.getElementById(bot).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored";
/* 		document.getElementById(bot).style.border = "3px solid #4DD0E1";
		document.getElementById(bot).style.backgroundColor = "#4DD0E1";
		document.getElementById(bot).style.color = "black"; */
	}
	else if(qual == "ok"){
		document.getElementById(bot).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent";
/* 		document.getElementById(bot).style.border = "3px solid #1E88E5";
		document.getElementById(bot).style.backgroundColor = "#1E88E5";
		document.getElementById(bot).style.color = "white"; */
	}
	else{
		window.alert("Erro #2187 - Problemas de cookies.");
	}
}

function destrava(bot){
	var num = Math.trunc(window.dicMaterias[bot].trava.length / 6);
     
	for(var i = 0; i < num; i++){
		var tra = window.dicMaterias[bot].trava.substr(i*6+i, 6);
		tra = tra.toLowerCase();
		
		var flag = true;
    
		var req = window.dicMaterias[tra].requisitos.substring(0, 6);
		req = req.toLowerCase();
	
		if(window.dicMaterias[req].estado == "nok"){
			flag = false;
		}
		
		if(window.dicMaterias[tra].requisitos.length > 6){
			req = window.dicMaterias[tra].requisitos.substring(8);
			req = req.toLowerCase();
			
			if(window.dicMaterias[req].estado == "nok"){
				flag = false;
			}
		}
		
		if(flag){
			document.getElementById(tra).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored";
			document.getElementById(tra).style.opacity = 1;
			/* document.getElementById(tra).className = "mate"; */
			document.getElementById(tra).setAttribute("onclick", "clicou(event, this.id)");
			
			destraPreenc(window.dicMaterias[bot].periodo);
		}
	}
}

function destraPreenc(bot){
	var num = Math.trunc(window.dicPeriodos[bot].materias.length / 6);
	var flag = true;
	
	for(var i = 0; i < num; i++){
		var comp = window.dicPeriodos[bot].materias.substr(i*6+i, 6);
		comp = comp.toLowerCase();
		
		if(window.dicMaterias[comp].estado == "nok")
			flag = false;
	}
	
	if(flag){
		var prox = window.dicPeriodos[bot].trava;
		
		document.getElementById(prox).className = "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect";
		document.getElementById(prox).disabled = false;
	}
}
