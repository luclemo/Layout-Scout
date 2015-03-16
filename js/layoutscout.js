/*!
 * @preserve
 * Layout Scout - v1.0 - 2015-03-03
 * https://github.com/luclemo/layout-scout
 * Made by Lucas Lemonnier
 * Let me know what you think! => @luclemo
 */

$.fn.layoutScout = function(options){
	var settings = $.extend({
		color: 'lightColours'
	},options)
	

	// LAYERSCOUT ON -----------------------------------------
	
	var blocks = ('div, section, header, nav, main, article, footer, aside');

	var layoutScoutOn = function(colours) {

		$('*').filter(blocks).each(function() {
			
			// element class names
			var elementClass = $(this).attr('class');
			// sibling elements
			var sibling = $(this).siblings().filter(blocks);
			//WordPress admin bar
			var wordPressAdminBar = $(this).attr('id'); 
			// random colour from the array of colours
			var i = Math.floor(Math.random() * colours.length);
			
			
			var similar = colours[i];
			var different = "";
			// making sure that "different" colours will never bet returned as the same index from the array
			if (i === 0 || i <= colours.length ) {
				different = i++;
			} else if (i === colours.length) {
				different = i--;
			}

			// If an element has a sibling with a shared class...
			if (sibling.attr('class') === elementClass) {
				// apply the same bg colour
				$(this).css( 'background-color', similar );
				sibling.css( 'background-color', similar );
				// if the shared class name is "clearfix"...
			} else if (elementClass === '.clearfix') {
				// assign different colours
				$(this).css('background-color', colours[different]);
				// if the div is the wp admin bar
			} else if (wordPressAdminBar === 'wpadminbar') {
				// apply black background
				$(this).css('background-color', 'black');
				// otherwise, if they don't share a class...
			} else {
				// give them different colours
				$(this).css('background-color', colours[different]);
			}
		});
	 }; //End layoutScoutOn();

	
	// LAYERSCOUT OFF ------------------------------------------

	var layoutScoutOff = function() {
		$('*').filter(blocks).css('background-color', "");
	} // End layoutScoutOff();
	

	// SWITCHER ------------------------------------------------

	// Switcher styling
	var buttonStyles = {
		fontFamily: 'Helvetica Neue\' Helvetica Arial sans-serif',
		textTransform: 'uppercase',
		fontSize: '12px',
		letterSpacing: '1px',
		textDecoration: 'none',
		color: '#fff',
		backgroundImage: 'linear-gradient(140deg, #f97a7a 0%, #a357af 100%)',
		border: '1px solid #a357af',
		boxShadow: 'inset 1px 1px 0 #f97a7a',
		padding: '5px 10px',
		borderRadius: '3px',
		position: 'absolute',
		top: '40px',
		right: '5px'
	};

	// Boolean value to see what state to turn on or off
	var switcher = true;
	
	$('body').append('<a class="scoutbtn" href="#">ls</a>'); // Add the button to page
	$('.scoutbtn').css(buttonStyles); // Style the button
	
	$('.scoutbtn').on('click', function(){
		if(switcher){
			layoutScoutOn(colourOptions[settings.color]);
			switcher = false;
		} else{
			layoutScoutOff();
			switcher = true;
		}
	}); // End switcher

	// COLORS --------------------------------------------------

	var colourOptions = {

		lightColours : ['rgba(255,228,181,0.9)',
											'rgba(176,224,230,0.8)',
											'rgba(143,188,143,0.7)',
											'rgba(255,160,122,0.6)',
											'rgba(216,191,216,0.5)',
											'rgba(255,222,173,0.4)',
											'rgba(224,255,255,0.3)',
											'rgba(102,205,170,0.8)',
											'rgba(240,230,140,0.7)'],

		darkColours : ['rgba(218,165,32,0.9)',
										 'rgba(70,130,180,0.8)',
										 'rgba(85,107,47,0.7)',
										 'rgba(255,99,71,0.6)',
										 'rgba(72,61,139,0.5)',
										 'rgba(160,82,45,0.8)',
										 'rgba(47,79,79,0.3)',
										 'rgba(25,25,112,0.3)',
										 'rgba(128,0,0,0.3)'],

	  lightMono : [	'rgba(0,0,0,0.02)',
										'rgba(0,0,0,0.08)',
										'rgba(0,0,0,0.10)',
										'rgba(0,0,0,0.13)',
										'rgba(0,0,0,0.16)',
										'rgba(0,0,0,0.18)',
										'rgba(0,0,0,0.20)'],

		darkMono : [	'rgba(0,0,0,0.3)',
										'rgba(0,0,0,0.35)',
										'rgba(0,0,0,0.4)',
										'rgba(0,0,0,0.45)',
										'rgba(0,0,0,0.5)',
										'rgba(0,0,0,0.55)',
										'rgba(0,0,0,0.6)']
	}
}