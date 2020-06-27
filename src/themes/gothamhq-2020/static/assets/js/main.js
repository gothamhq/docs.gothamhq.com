function newsletterSubmitted(){
	
}

$(document).ready(function(){

	// Toggle main nav
	$( "body > header a.toggle" ).click( function(){
		event.stopPropagation();
		$( "body > header ul.main" ).toggle();
	});

	// Toggle subnavs
	$( "ul.menu li.parent" ).click( function(){
		
		event.stopPropagation();
		$( this ).children( "ul.sub.menu" ).toggle();
		$( "ul.menu li.parent" ).toggleClass( "opened closed" );
	});
	$( "ul.menu li.parent" ).hover( function(){

		if( $( "body > header a.toggle" ).is( ":visible" ) ){ return; }

		$( this ).click();
	});

	$( document ).click( function( event ){

		var menu = $( "body > header ul.main" );

		if( $( "body > header a.toggle" ).is( ":visible" ) && menu.is( ":visible" )){
			$( "body > header ul.main" ).hide();
		}
	});

	// Set a nice message when the newsletter is signed up to
	$( "form.newsletter" ).submit(function( event ){
		
		var $form = $( "form.newsletter" );

		$.ajax({
			type: "GET",
			url: $form.attr( "action" ),
			data: $form.serialize(),
			cache: false,
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			error: function( err ){
				alert( "Failed to sign up. Please try again later." );
			},
			success: function( data ){
				$form.empty();
				$form.append( "<p>All set! You're on the list for The Reserve Force updates.</p>" );
			}
		});

		event.preventDefault();
	});

	if( $( window ).width() > 700 ){

		$( "a[href^='tel']" ).each(function(){

			var phoneNum = $( this ).html();
			$( this ).replaceWith( "<span>" + phoneNum + "</span>");
		});
	}
});
