function initialize_projects() {
	$('#navlinks ul li#nav_projects > span.nav-highlight').addClass('nav-highlight-active');
	$('div#content').load('/api/projects/', function(responseText, textStatus, jqXHR) {
		if (textStatus === "error") {
			$("#load-error").show();
		}
		// $('div#content').append('<h1 style="padding-left: 20px; padding-top: 20px;">Projects will be added soon!</h1>');
	});
	clear_filters();

	$('div#content').on('click', 'div.carousel-thumbnail', function() {
		$('div.carousel-thumbnail.active').removeClass('active');
		var img = $(this).css('background-image');
		$(this).closest('div.image_carousel').find('div.image_current').css('background-image', img);
		$(this).addClass('active');
	})
}

function load_project(id) {
	$('div#project_detail').fadeOut('slow').remove();
	$('div#content').append('<div id="project_detail" style="display: none;"></div>');
	$('div#project_detail').load('/api/projects/project/' + id, function(responseText, textStatus, jqXHR) {
		if (textStatus === "error") {
			$("#load-error").show();
		}
		$('div#project_detail').fadeIn('slow');
		$('html, body').animate({
	        scrollTop: $('div#project_detail').offset().top - 60
	    }, 300);
	});
	clear_filters();
}