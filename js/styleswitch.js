/* Style Switcher */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();

$(document).ready(function(){ 
				   
var styleswitcherstr = ' \
	<h2>Style Switcher <a href="#"></a></h2> \
    <div class="content"> \
    <div class="clear"></div> \
    <h3>Change Color</h3> \
    <a id="blue" class="styleswitch color"></a> \
    <a id="brown" class="styleswitch color"></a> \
    <a id="lime" class="styleswitch color"></a> \
    <a id="pink" class="styleswitch color"></a> \
    <a id="purple" class="styleswitch color"></a> \
    <a id="red" class="styleswitch color"></a> \
    <a id="teal" class="styleswitch color"></a> \
    <a id="yellow" class="styleswitch color"></a> \
    </div><!-- End switcher-box --> \
    <div class="clear"></div> \
    </div><!-- End content --> \
	';
	
$(".switcher").prepend( styleswitcherstr );

});


/* Skins Style */
$(document).ready(function(){ 

var cookieName = 'blue';

function changeLayout(layout) {
$.cookie(cookieName, layout);
$('head link[name=skins]').attr('href', 'css/skins/' + layout + '.css');
}

if( $.cookie(cookieName)) {
changeLayout($.cookie(cookieName));
}

$("#blue").click( function(){ $
changeLayout('blue');
});

$("#brown").click( function(){ $
changeLayout('brown');
});

$("#lime").click( function(){ $
changeLayout('lime');
});

$("#pink").click( function(){ $
changeLayout('pink');
});

$("#purple").click( function(){ $
changeLayout('purple');
});

$("#red").click( function(){ $
changeLayout('red');
});

$("#teal").click( function(){ $
changeLayout('teal');
});

$("#yellow").click( function(){ $
changeLayout('yellow');
});

});


/* Reset Switcher */
$(document).ready(function(){ 

// Style Switcher	
$('.switcher').animate({
left: '-160px'
});

$('.switcher h2 a').click(function(e){
e.preventDefault();
var div = $('.switcher');
console.log(div.css('left'));
if (div.css('left') === '-160px') {
$('.switcher').animate({
  left: '0px'
}); 
} else {
$('.switcher').animate({
  left: '-160px'
});
}
})


/*$('a.color').click(function(e){
e.preventDefault();
$(this).parent().parent().find('a').removeClass('selected');
$(this).addClass('selected');
})

$('a.pattern').click(function(e){
e.preventDefault();
$(this).parent().parent().find('a').removeClass('selected2');
$(this).addClass('selected2');
})

$('a.layout').click(function(e){
e.preventDefault();
$(this).parent().parent().find('a').removeClass('selected3');
$(this).addClass('selected3');
})*/

		 
});						   

