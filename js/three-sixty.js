(function ( $ ) {

var init = 1;
$.fn.threeSixty = function(options) {

j$ = jQuery.noConflict();

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
	
	var e = j$.extend(true, defaults, options);
 
	var wr = '<div id="three-sixty-wrapper' + init + '"></div>';
	var wrs = '<div class="three-sixty-slider' + init + '"></div>';
	
	var trs = j$('<div class="three-sixty-range' + init + '"></div>');
	
	var wli = '<a class="pointer-circle"></a>';
	var thisDiv = this.selector;
	var ts = j$('' + thisDiv + '');
	var tr = j$('.three-sixty-range' + init);
	var pt = j$('.pointer');
	var ptli = j$('.pointer li');
		
	ts.wrapAll(wr);
	
	trs.insertAfter(j$('#three-sixty-wrapper' + init));
	
	j$('.three-sixty-range' + init).wrapInner('<div class="three-sixty-slider' + init + '"></div>');
	
	if(!ptli.parent().hasClass('pointer-circle')){
		ptli.wrap(wli);	
	}
		
    var imgs = j$('#three-sixty-wrapper' + init + ' img');
	var imgCount = imgs.length;
	var imgSlide = j$('.three-sixty-slider'+ init);			
	var imgHeight = imgs.height();
	var imgWidth = imgs.width();
	var pCir = j$('.pointer-circle');
	var pDivID = 0;
	var pliDivID = 0;
	
	j$(window).on("load", function() {	
		ts.css({'display':'none'});
		
		pt.each(function(){
			$(this).attr('id', pDivID);			
			pDivID++;
		});
		
		
		j$('' + thisDiv + ':first').css({'display':'block'});
		pCir.css({'display':'none'});
		ptli.css({'display':'none'});
		j$('#0').find('a').css({'display':'block'});
	});

	tr.css({'position': 'relative', 'z-index': '1'});
	j$('#three-sixty-wrapper' + init).css({'height' : imgHeight});
	
	pCir.hover(function(){ 
		j$(this).find('li').show(); 
	}, function(){
		j$(this).find('li').hide(); 
	});
		
	imgSlide.css({'width':imgWidth});
	
	
	j$(".three-sixty-range"+init).each(function() {
		
        j$this = j$(this);		
		
        j$('.three-sixty-slider'+ init, j$this).slider({
				min: 0,
				max: imgCount - 1,
				value: 0,
				slide: function( event, ui ) {
					ts.css({'display':'none'});
					j$('' + thisDiv + ':eq(' + ui.value + ')').css({'display':'block'});
					alert(thisDiv);
					pCir.css({'display':'none'});	
					j$('#' + ui.value + '').find('a').css({'display':'block'});
				}
        });
    });
	
	
	//imgSlide.slider({
	//  min: 0,
	//  max: imgCount - 1,
	//  value: 0,
	//  slide: function( event, ui ) {
	//	ts.css({'display':'none'});
    //    j$('' + thisDiv + ':eq(' + ui.value + ')').css({'display':'block'});
	//	pCir.css({'display':'none'});	
	//	j$('#' + ui.value + '').find('a').css({'display':'block'});
	//  }
	//});
    
    return this.each(function() {
		imgs.css({background: e.background});
		pointers(e);
		init++;
	});

function pointers(x){
	if(x.pointers.addPointers === 'false'){
		pCir.css({'display':'none'});
	}
	if(x.pointers.addPointers === 'true'){
		pCir.css({background: x.pointers.background});
		ptli.css({background: x.pointers.detailBackground});
		ptli.css({color: x.pointers.color});
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
