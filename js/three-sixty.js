(function ( $ ) {

$.fn.threeSixty = function(options) {

j$ = jQuery.noConflict();

    var defaults = {
        background: 'transparent',
		addPointers: 'false',
		pointers: {	
			background: '#3DADFF',
			width: '25px',
			height: '25px',
		}
    };
	
	var e = j$.extend(true, defaults, options);
 
	var wr = '<div id="three-sixty-wrapper"></div>';
	var wrs = '<div id="three-sixty-slider"></div>';
	var wli = '<a class="pointer-circle"></a>';
	var ts = j$('.three-sixty');
	var tr = j$('#three-sixty-range');	
	var pt = j$('.pointer');
	var ptli = j$('.pointer li');
		
	ts.wrapAll(wr);	
	tr.wrapInner(wrs);
	ptli.wrap(wli);
	
    var imgs = j$('#three-sixty-wrapper img');
	var imgCount = imgs.length;
	var imgSlide = j$('#three-sixty-slider');			
	var imgHeight = imgs.height();
	var imgWidth = imgs.width();
	var pCir = j$('.pointer-circle');
	var pDivID = 0;
	var pliDivID = 0;
	
	$(window).on("load", function() {	
		ts.css({'display':'none'});
		
		pt.each(function(){
			$(this).attr('id', pDivID);			
			pDivID++;
		});
		
		
		j$('.three-sixty:first').css({'display':'block'});
		pCir.css({'display':'none'});
		ptli.css({'display':'none'});
		j$('#0').find('a').css({'display':'block'});
	});

    j$('#three-sixty-range').css({'top':imgHeight});
	
	pCir.hover(function(){ 
		j$(this).find('li').show(); 
	}, function(){
		j$(this).find('li').hide(); 
	});
		
	imgSlide.css({'width':imgWidth});

	imgSlide.slider({
	  min: 0,
	  max: imgCount - 1,
	  value: 0,
	  slide: function( event, ui ) {
		ts.css({'display':'none'});
        j$('.three-sixty:eq(' + ui.value + ')').css({'display':'block'});
		pCir.css({'display':'none'});	
		j$('#' + ui.value + '').find('a').css({'display':'block'});
	  }
	});
    
    return this.each(function() {
		j$('#three-sixty-wrapper').css({background: e.background});
		pointers(e);
	});

function pointers(x){
	if(x.pointers.addPointers === 'false'){
		pCir.css({'display':'none'});
	}
	if(x.pointers.addPointers === 'true'){
		pCir.css({background: x.pointers.background});
		pCir.css({width: x.pointers.width});
		pCir.css({height: x.pointers.height});
		
		var i = 0;				
		var counter = -1;
		
		for (i in options.pointers) {
			j$('.pointer-circle:eq(' + counter + ')').css({
				top : options.pointers[i].top,
				left : options.pointers[i].left
			});
			counter++; 
		}
	}
};

};
}( jQuery ));
