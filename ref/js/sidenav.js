function toggleNav() {
    mySideNav = document.querySelector('#mySidenav')
    if (mySideNav.style.width == '0px'){
        document.getElementById("mySidenav").style.width = "15%";
        document.querySelector("#rodape").style.marginLeft = "-22%";
        document.querySelector("html").style.marginLeft = "22%";
        document.querySelector('#sidenavToggler').style.marginLeft = "15%";
        document.getElementById("sidenavTogglerIcon").classList.remove("fa-chevron-right");
        document.getElementById("sidenavTogglerIcon").classList.add("fa-chevron-left");
    }
    else{
        document.getElementById("mySidenav").style.width = "0";
        document.querySelector("#rodape").style.marginLeft = "-7%";
        document.querySelector("html").style.marginLeft = "7%";
        document.querySelector('#sidenavToggler').style.marginLeft = "0";
        document.getElementById("sidenavTogglerIcon").classList.remove("fa-chevron-left");
        document.getElementById("sidenavTogglerIcon").classList.add("fa-chevron-right");
    }
    
  }