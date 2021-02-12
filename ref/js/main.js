$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

// close button cookie pop up
$(".close").click(function() {
	$(".cookie-banner").css("display","none");
})

function cookietimer(){
	$(".cookie-banner").css("display","none");
	localStorage.setItem("cookieSeen","sim")
}
