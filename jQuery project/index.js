$("h1").css("color", "red");

// untuk lihat property dari sebuah element di HTMLg
$("h1").css("color");

// pakai ini kalau script JS dan jQuery ada di <head>
$(document).ready(function() {
		$("h1").css("color", "red");
})

// addClass
$("h1").addClass("big-title");
