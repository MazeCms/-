

$( document ).ready(function() {
    $('.license').click(function(eventObject){
	  var newTotalNumber = ' ' + ( $('input[name=license]:checked').val() * $('#numberOf option:selected').val() );
	  $('span.total-number').text(newTotalNumber);
	});

	$('#numberOf option').click(function(eventObject){
	  var newTotalNumber = ' ' + ( $('input[name=license]:checked').val() * $('#numberOf option:selected').val() );
	  $('span.total-number').text(newTotalNumber);
	});

	$('.circle-wrapper').mousemove(function(a) {

		$('span.Ox').text(a.pageX);
		$('span.Oy').text(a.pageY);
		
		var x1 = 960 - a.pageX;
		var y1 = 888 - a.pageY;
		
		$('span.AB').text(x1);
		$('span.AC').text(y1);
		$('span.K').text( (956 - a.pageX)/(855 - a.pageY) );
		
		var x2 = -x1;
		var y2 = -y1;

		var g = Math.round( Math.sqrt( x2 * x2 + y2 * y2) );
		x2 = Math.round( x2 * 170 /g );
		y2 = Math.round( y2 * 170 /g );

		// ¹ x2= Math.round( Math.sqrt( (170 * 170 ) / 2 * (x1 / y1) * (x1 / y1) ) );

		$('span.AB2').text(x2);
		$('span.AC2').text(y2);
		
		var pos_x2 = 250 - x2;
		var pos_y2 = 230 - y2;

	  $('#circle').css({ "left" :  pos_x2 + "px"});
	  $('#circle').css({ "top" :  pos_y2 + "px"});

	});
});
