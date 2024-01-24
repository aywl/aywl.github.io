//JQuery for hiding navbar at top
$(document).ready(function () {
	// Hide the navbar initially
	$(".navbar").hide();
	// Show/hide the navbar based on scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
		$(".navbar").fadeIn();
		} else {
		$(".navbar").fadeOut();
		}
	});
});