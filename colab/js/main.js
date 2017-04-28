$(document).ready(function() {
    $('.section#income .wing').hover( function() {
    	$('#background').css('background', 'lime');
    	$('#background p.secret').text('5 Bleecker St. May 2017');
    }, function() {
    	$('#background').css('background', 'white');
    	$('#background p.secret').empty();
    });
    $('.section#manifesto .wing').hover( function() {
    	$('#background').css('background', 'red');
    	$('#background p.secret').text('5 Bleecker St. Jan-Feb 2017');
    }, function() {
    	$('#background').css('background', 'white');
    	$('#background p.secret').empty();
    });
    $('.section#realestate .wing').hover( function() {
    	$('#background').css('background', 'blue');
    	$('#background p.secret').text('123 Delancy St. Dec 31 2017-Jan 02 2018');
    }, function() {
    	$('#background').css('background', 'white');
    	$('#background p.secret').empty();
    });
    $('.section#timessquare .wing').hover( function() {
    	$('#background').css('background', 'magenta');
    	$('#background p.secret').text('201 W 41st St. June 2018');
    }, function() {
    	$('#background').css('background', 'white');
    	$('#background p.secret').empty();
    });
});