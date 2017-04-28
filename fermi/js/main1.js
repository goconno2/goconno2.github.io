$(document).ready(function() {
		// initialize qwertyhancock with #keyboard
		// var keyboard = new QwertyHancock({
	 //        id: 'keyboard',
	 //    });
		// red is x
    	$(this).keydown(function (e) {
    		e.preventDefault();
    		console.log('down');
	  		if (e.keyCode == 88) {
	  			$('.one img.red').addClass('show');
	       		$('.two img.red').addClass('show');
	       		$('.three img.red').addClass('show');
				$('.four img.red').addClass('show');
				$('.five img.red').addClass('show');
				$('.six img.red').addClass('show');
				$('.seven img.red').addClass('show');
				$('.eight img.red').addClass('show');
			}
			if (e.keyCode == 65) {
	  			$('.one img.green').addClass('show');
	       		$('.two img.green').addClass('show');
	       		$('.three img.green').addClass('show');
				$('.four img.green').addClass('show');
				$('.five img.green').addClass('show');
				$('.six img.green').addClass('show');
				$('.seven img.green').addClass('show');
				$('.eight img.green').addClass('show');
			}
			if (e.keyCode == 70) {
	  			$('.one img.blue').addClass('show');
       			$('.two img.blue').addClass('show');
       			$('.three img.blue').addClass('show');
				$('.four img.blue').addClass('show');
				$('.five img.blue').addClass('show');
				$('.six img.blue').addClass('show');
				$('.seven img.blue').addClass('show');
				$('.eight img.blue').addClass('show');
			}
			if (e.keyCode == 74) {
			  	$('.one img.purple').addClass('show');
	       		$('.two img.purple').addClass('show');
	       		$('.three img.purple').addClass('show');
				$('.four img.purple').addClass('show');
				$('.five img.purple').addClass('show');
				$('.six img.purple').addClass('show');
				$('.seven img.purple').addClass('show');
				$('.eight img.purple').addClass('show');
			}
			if (e.keyCode == 75) {
			  	$('.one img.yellow').addClass('show');
	       		$('.two img.yellow').addClass('show');
	       		$('.three img.yellow').addClass('show');
				$('.four img.yellow').addClass('show');
				$('.five img.yellow').addClass('show');
				$('.six img.yellow').addClass('show');
				$('.seven img.yellow').addClass('show');
				$('.eight img.yellow').addClass('show');
			}
			if (e.keyCode == 76) {
			  	$('.one img.white').addClass('show');
	       		$('.two img.white').addClass('show');
	       		$('.three img.white').addClass('show');
				$('.four img.white').addClass('show');
				$('.five img.white').addClass('show');
				$('.six img.white').addClass('show');
				$('.seven img.white').addClass('show');
				$('.eight img.white').addClass('show');
			}
		});
    	$(this).keyup(function (e) {
    		e.preventDefault();
    		console.log('up');
	        if (e.keyCode == 88) {
	  			$('.one img.red').removeClass('show');
	       		$('.two img.red').removeClass('show');
	       		$('.three img.red').removeClass('show');
				$('.four img.red').removeClass('show');
				$('.five img.red').removeClass('show');
				$('.six img.red').removeClass('show');
				$('.seven img.red').removeClass('show');
				$('.eight img.red').removeClass('show');
			}
			if (e.keyCode == 65) {
	  			$('.one img.green').removeClass('show');
	       		$('.two img.green').removeClass('show');
	       		$('.three img.green').removeClass('show');
				$('.four img.green').removeClass('show');
				$('.five img.green').removeClass('show');
				$('.six img.green').removeClass('show');
				$('.seven img.green').removeClass('show');
				$('.eight img.green').removeClass('show');
			}
			if (e.keyCode == 70) {
	  			$('.one img.blue').removeClass('show');
       			$('.two img.blue').removeClass('show');
       			$('.three img.blue').removeClass('show');
				$('.four img.blue').removeClass('show');
				$('.five img.blue').removeClass('show');
				$('.six img.blue').removeClass('show');
				$('.seven img.blue').removeClass('show');
				$('.eight img.blue').removeClass('show');
			}
			if (e.keyCode == 74) {
			  	$('.one img.purple').removeClass('show');
	       		$('.two img.purple').removeClass('show');
	       		$('.three img.purple').removeClass('show');
				$('.four img.purple').removeClass('show');
				$('.five img.purple').removeClass('show');
				$('.six img.purple').removeClass('show');
				$('.seven img.purple').removeClass('show');
				$('.eight img.purple').removeClass('show');
			}
			if (e.keyCode == 75) {
			  	$('.one img.yellow').removeClass('show');
	       		$('.two img.yellow').removeClass('show');
	       		$('.three img.yellow').removeClass('show');
				$('.four img.yellow').removeClass('show');
				$('.five img.yellow').removeClass('show');
				$('.six img.yellow').removeClass('show');
				$('.seven img.yellow').removeClass('show');
				$('.eight img.yellow').removeClass('show');
			}
			if (e.keyCode == 76) {
			  	$('.one img.white').removeClass('show');
	       		$('.two img.white').removeClass('show');
	       		$('.three img.white').removeClass('show');
				$('.four img.white').removeClass('show');
				$('.five img.white').removeClass('show');
				$('.six img.white').removeClass('show');
				$('.seven img.white').removeClass('show');
				$('.eight img.white').removeClass('show');
			}
		});
});

