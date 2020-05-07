function toggleNav() {
    mySideNav = document.querySelector('#mySidenav')
    if (mySideNav.style.width == '0px'){
        document.getElementById("mySidenav").style.width = "25vmax";
        document.querySelector('#sidenavToggler').style.marginLeft = "25vmax";
        document.getElementById("sidenavTogglerIcon").classList.remove("fa-chevron-right");
        document.getElementById("sidenavTogglerIcon").classList.add("fa-chevron-left");
        $('#blackmask').css('display', 'block');
    }
    else{        
        document.getElementById("mySidenav").style.width = "0px";
        document.querySelector('#sidenavToggler').style.marginLeft = "0";
        document.getElementById("sidenavTogglerIcon").classList.remove("fa-chevron-left");
        document.getElementById("sidenavTogglerIcon").classList.add("fa-chevron-right");
        $('#blackmask').css('display', 'none');
    }
    
  }