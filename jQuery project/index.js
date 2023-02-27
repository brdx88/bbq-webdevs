$("h1").css("color", "red");

// untuk lihat property dari sebuah element di HTMLg
$("h1").css("color");

// pakai ini kalau script JS dan jQuery ada di <head>
$(document).ready(function() {
		$("h1").css("color", "red");
})

// addClass
$("h1").addClass("big-title");

// removeClass
$("h1").removeClass("big-title");

// addClass multiple
$("h1").addClass("big-title margin-50");

// manipulating text
$("h1").text("Bye");

// checking this element has class what we meant or not
$("h1").hasClass("margin-50");

// add text with attributes
$("button").html("<em>Hey</em>")
