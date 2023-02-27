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
$("button").html("<em>Hey</em>");

// showing the proprty of its class
$("img").attr("src");

// manipulate the content
$("img").attr("href", "https://www.yahoo.com");

// eventListener when Click
$("h1").click(function() {
	$("h1").css("color", "purple")
});

// eventListener when keypressed
// asumsi ada free-text input field di HTML.
$("input").keypress(function(event) {
	console.log(event.key);
});

// challenge: H1 jadinya punya behaviour untuk menampilkan H1 dengan ketikan kita.
$(document).keypress(function(event) {
    console.log($("h1").text(event.key))
})

//  using  .On() -- mouseover
$("h1").on("mouseover", function() {
	$("h1").css("color", "purple");
})

// using .On() -- click
$("h1").on("click", function() {
	$("h1").css("color", "purple");
})

// adding elements -- before
$("h1").before("<button>New</button>");

// adding elements -- after
$("h1").after("<button>New</button>");

// adding elements -- prepend
$("h1").prepend("<button>New</button>");

// adding elements -- append
$("h1").append("<button>New</button>");

// erasing all elements
$("button").remove();

// website animations -- hide
$("button").on("click", function() {
	$("h1").hide();
});

// website animations -- show
$("button").on("click", function() {
	$("h1").show();
});

// website animations -- toggle
$("button").on("click", function() {
	$("h1").toggle();
});

// website animations -- fadeOut
$("button").on("click", function() {
	$("h1").fadeOut();
});

// website animations -- fadeIn
$("button").on("click", function() {
	$("h1").fadeIn();
});

// website animations -- fadeToggle
$("button").on("click", function() {
	$("h1").fadeToggle();
});

// website animations -- slideUp
$("button").on("click", function() {
	$("h1").slideUp();
});

// website animations -- slideDown
$("button").on("click", function() {
	$("h1").slideDown();
});

// website animations -- slideToggle
$("button").on("click", function() {
	$("h1").slideToggle();
});

// website animations -- animate with CSS style
$("button").on("click", function() {
	$("h1").animate({opacity: 0.5});
});

// website animations -- animate with CSS style -- in case the value uses percentage
$("button").on("click", function() {
	$("h1").animate({margin: "20%"});
});

// chaining the animation
$("button").on("click", function() {
	$("h1").slideUp().slideDown().animate({margin: "20%"});
});
