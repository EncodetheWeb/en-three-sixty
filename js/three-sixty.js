(function ( $ ) {

$.fn.threeSixty = function(options) {

j$ = jQuery.noConflict();

    var defaults = {
        background: 'transparent',
		pointers: {
			addPointers: 'false',
			background: '#3DADFF',
			width: '25px',
			height: '25px',
			pointerZeroOne:	{
				top:	'0px',
				left:	'75px',
			},
			pointerZeroTwo:	{
				top:	'310px',
				left:	'170px',
			},
			pointerZeroThree:	{
				top: 	'50px',
				left: 	'80px'
			},
			pointerOneOne:	{
				top:	'0px',
				left:	'130px',
			},
			pointerOneTwo:	{
				top:	'310px',
				left:	'205px',
			},
			pointerOneThree:	{
				top: 	'50px',
				left: 	'90px'
			}
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
		
		pliDivID = $(".pointer>a").length
		
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
		j$('.pointer-circle:eq(0)').css({top: x.pointers.pointerZeroOne.top});
		j$('.pointer-circle:eq(0)').css({left: x.pointers.pointerZeroOne.left});
		j$('.pointer-circle:eq(1)').css({top: x.pointers.pointerZeroTwo.top});
		j$('.pointer-circle:eq(1)').css({left: x.pointers.pointerZeroTwo.left});
		j$('.pointer-circle:eq(2)').css({top: x.pointers.pointerZeroThree.top});
		j$('.pointer-circle:eq(2)').css({left: x.pointers.pointerZeroThree.left});
		j$('.pointer-circle:eq(3)').css({top: x.pointers.pointerOneOne.top});
		j$('.pointer-circle:eq(3)').css({left: x.pointers.pointerOneOne.left});
		j$('.pointer-circle:eq(4)').css({top: x.pointers.pointerOneTwo.top});
		j$('.pointer-circle:eq(4)').css({left: x.pointers.pointerOneTwo.left});
		j$('.pointer-circle:eq(5)').css({top: x.pointers.pointerOneThree.top});
		j$('.pointer-circle:eq(5)').css({left: x.pointers.pointerOneThree.left});
		
	}
};

};
}( jQuery ));
