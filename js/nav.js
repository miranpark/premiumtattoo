// JavaScript Document
$(function() {

	// grab the initial top offset of the navigation 
	var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
	
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	var sticky_navigation = function(){
		var scroll_top = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll_top > sticky_navigation_offset_top) { 
			$('#sticky_navigation').css({ 'position': 'fixed', 'top':0, 'left':0 });
			$('#sticky_navlogo').show();
		} else {
			$('#sticky_navigation').css({ 'position': 'relative' });
			$('#sticky_navlogo').hide(); 
		}   
	};
	
	// run our function on load
	sticky_navigation();
	
	// and run it again every time you scroll
	$(window).scroll(function() {
		 sticky_navigation();
	});
	
	// NOT required:
	// for this demo disable all links that point to "#"
	$('a[href="#"]').click(function(event){ 
		event.preventDefault(); 
	});


	$('article.qna h3').on('click', function() {
    var fa = $(".fa", this);
    var p = $(this).next();
    if (p.is(":visible")) {
    	p.hide();
      fa.addClass('fa-sort-desc');
      fa.removeClass('fa-sort-asc');
    } else {
    	p.show();
      fa.removeClass('fa-sort-desc');
      fa.addClass('fa-sort-asc');
    }
	});

  $('article.qna p').on('click', function() {
    $(this).prev('h3').click();
  });

	//$('article.gna h3').first().find('h3 i').removeClass('.fa-sort-desc').addClass('.fa-sort-asc');
	//$('.qna h3').on('toggled', function (event, accordion) {
   //$('article.qna h3').first().find('h3 i').removeClass('.fa-sort-asc').addClass('.fa-sort-desc');
    //if ($('article.qna h3').hasClass('active')) {
    //$('article.qna h3.active h3 i').removeClass('.fa-sort-desc').addClass('.fa-sort-asc');
  	//} else {
    //$('article.qna h3.active h3 i').removeClass('.fa-sort-asc').addClass('.fa-sort-desc');
  	//}
  //});
	
});

$(document).on("pagecreate", function() {
  console.log('pagecreate');
  $(document).on(custom_event, "article.qna h3", function(e) {
    var p = $(this).next();
    if (p.is(":visible")) {
      p.hide();
    } else {
      p.show();
    }    
 });
});
    

