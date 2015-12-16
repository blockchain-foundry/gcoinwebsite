$('body').removeClass('no-js');

// Close the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});













/* Add the dropdown menu button */
$('.navbar-brand').after('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> 		<i class="fa fa-bars"></i> 	</button> ');

$(document).ready(function(){
	var set_navbar_bg = function() {
		var scroll = $(this).scrollTop();
		scroll = (Math.min(300, scroll) / 300);
		if (open_navbar_menu) {
			scroll = 1;
		}
		$('nav').css({"background-color":"rgba(81, 163, 157, "+scroll+")"});
		$('.current').css({"background-color":"rgba(215, 230, 255, "+0.3*scroll+")"});
	}

	var open_navbar_menu = false;
	$('.navbar-toggle').click(function() {
		open_navbar_menu = !open_navbar_menu;
		if (open_navbar_menu) {
			$('nav').css({"transition":"background-color 0.3s"});
		} else {
			window.setTimeout(function(){
				$('nav').css({"transition":"none"});
			}, 300);
		}
		set_navbar_bg();
	});

	set_navbar_bg();
	$(document).scroll(set_navbar_bg);
});
