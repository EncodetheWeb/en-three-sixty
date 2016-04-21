/*
 * En-Three-Sixty Slider with Pointers
 * With jQuery and jQuery UI
 * Encode Web Projects
 * http://encodetheweb.com/en/encode-projects/
 * Version 1.0.1
 */

(function ( $ ) {

var init = 1;
$.fn.threeSixty = function(options) {
	
	//Default Variables
    var defaults = {
        background: 'transparent',
		addPointers: 'false',
		pointers: {	
			background: '#3DADFF',
			detailBackground: '#292929',
			color: '#fff',
			width: '25px',
			height: '25px'
		}
    };
	
	//Merge Defaults with Options
	var e = $.extend(true, defaults, options);
 
	//Create wrap Divs
	var wr = '<div id="three-sixty-wrapper' + init + '"></div>';
	var wrs = '<div class="three-sixty-slider' + init + '"></div>';
	var trs = $('<div class="three-sixty-range' + init + '"></div>');
	var wli = '<a class="pointer-circle"></a>';
	var thisDiv = this.selector;
	var ts = $('' + thisDiv + '');
	var tr = $('.three-sixty-range' + init);
	var ptli = $('.pointer li');
	
	//Don't duplicate wraps
	ts.parent().each(function(){
		if(!$(this).parent().is('[id*=three-sixty-wrapper]')){
			$(this).next('' + thisDiv + '').andSelf().wrapAll(wr);
		}
	});
	
	trs.insertAfter($('#three-sixty-wrapper' + init));
	
	$('.three-sixty-range' + init).wrapInner('<div class="three-sixty-slider' + init + '"></div>');
	
	//Don't duplicate wraps
	if(!ptli.parent().hasClass('pointer-circle')){
		ptli.wrap(wli);	
	}
	
    var imgs = $('#three-sixty-wrapper' + init + ' img');
	var imgCount = imgs.length;
	var imgSlide = $('.three-sixty-slider'+ init);			
	var imgHeight = imgs.height();
	var imgWidth = imgs.width();
	var pCir = $('.pointer-circle');
	var pDivID = 0;
	var pliDivID = 0;
	
	$(window).on("load", function() {	
		ts.css({'display':'none'});
				
		$('' + thisDiv + ':first').css({'display':'block'});
		ptli.css({'display':'none'});
	});

	//Add incremented IDs
	$('#three-sixty-wrapper' + init + ' .en-wrap ul').each(function(){
		$(this).attr('class', 'pointer' + init);
		$(this).attr('id', pDivID);			
		pDivID++;
	});
		
	tr.css({'position': 'relative', 'z-index': '1'});
	$('#three-sixty-wrapper' + init).css({'height' : imgHeight});	
	$('#three-sixty-wrapper'+ init + ' .en-wrap ul:first a').css({'display':'block'});
	
	//Show pointers on hover
	pCir.hover(function(){ 
		$(this).find('li').show(); 
	}, function(){
		$(this).find('li').hide(); 
	});
		
	imgSlide.css({'width':imgWidth});
		
	//Declares each jQuery UI Slider
	$(".three-sixty-range"+init).each(function() {
		
        $('.three-sixty-slider'+ init, $(this)).slider({
				min: 0,
				max: imgCount - 1,
				value: 0,
				slide: function( event, ui ) {
					//Hide image and show next image
					ts.css({'display':'none'});
					$('' + thisDiv + ':eq(' + ui.value + ')').css({'display':'block'});					
					if(	ui.value === 0 ){
						//Show first Pointer again
						$('' + thisDiv + '').prev().find('a').css({'display':'none'});
						$('' + thisDiv + '').prev('ul#' + ui.value).find('a').css({'display':'block'});
					}
					else{
						//Show next Pointers
						$('' + thisDiv + '').prev().find('a').css({'display':'none'});
						$('' + thisDiv + '').next('ul#' + ui.value).find('a').css({'display':'block'});
					}
				}
        });
    });
	
    return this.each(function() {
		//Return all Defaults and Options
		imgs.css({background: e.background});
		pointers(e);
		init++;
	});

function pointers(x){
	if(x.pointers.addPointers === 'false'){
		pCir.css({'display':'none'});
	}
	if(x.pointers.addPointers === 'true'){
		//Add pointer Options
		$('#three-sixty-wrapper'+ init + ' .en-wrap ul a.pointer-circle').css({background: x.pointers.background});
		$('#three-sixty-wrapper'+ init + ' .en-wrap ul li').css({background: x.pointers.detailBackground});
		$('#three-sixty-wrapper'+ init + ' .en-wrap ul li').css({color: x.pointers.color});
		$('#three-sixty-wrapper'+ init + ' .en-wrap ul a.pointer-circle').css({width: x.pointers.width});
		$('#three-sixty-wrapper'+ init + ' .en-wrap ul a.pointer-circle').css({height: x.pointers.height});
		
		var i = -1;				
		var counter = 0;
		
		//Options are only created by user - there are no Defaults for Pointers!
		for (i in options.pointers) {
			$('#three-sixty-wrapper'+ init + ' .en-wrap ul .pointer-circle:eq(' + counter + ')').css({
				top : options.pointers[i].top,
				left : options.pointers[i].left
			});
			counter++; 
		}
	}
};

};
}( jQuery ));
