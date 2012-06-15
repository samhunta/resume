jQuery(function () {
	$('.scroll-top').bind('click', function (e) {
		e.preventDefault();

		$(document.body).animate({ scrollTop: 0 }, 500, function () {
		});
	});
});