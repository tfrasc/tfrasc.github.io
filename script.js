/*Javascript*/
 //var swag = prompt("What's your name?")
console.log("yo");

/*jQuery*/
$(document).ready(function() {
    $('.top').hover(function() {
/*		$(this).css("fontSize","150%");}
		$(this).css("fontSize","100%");}
*/	});
    
    $('.tab').hover(function() {
        $(this).toggleClass('highlight');
    });
	
    $('.tab').click(function() {
		$('.tab').removeClass('selected');
		$(this).addClass('selected');
		switch( true ){
			case $(this).is('#resume'):
				$('#block').load('resume.html');
				break;
			case $(this).is('#portfolio'):
				$('#block').load('portfolio.html');
				break;
			case $(this).is('#about'):
				$('#block').load('about.html');
				break;
			case $(this).is('#contact'):
				$('#block').load('contact.html');
				break;
			case $(this).is('#page'):
				$('#block').load('page.html');
				break;
		}
    });

});