// global function for counting questions		

$(document).ready( function() {
    
	$('#myslider').bxSlider({
	  slideMargin: 5,
	  autoReload: true,
	  breaks:  [,{screen:460, slides:3},{screen:768, slides:5}]
	});

$('#log-btn').click(function () {
	// console.log('correct');
	$('.log-pop').fadeIn();	
	});
$('.log-pop').click(function (e) {
			e.startPropagation();
		});
$('.log-pop .close').click(function () {
		// console.log('correct');
		$('.log-pop').fadeOut();	
		});
$('#reg-btn').click(function () {
			// console.log('correct');
			$('.reg-pop').fadeIn();	
			});
$('.reg-pop .close').click(function () {
				// console.log('correct');
				$('.reg-pop').fadeOut();	
				});

//for deleting the item from the basket
$('.course-basket .delete').click(function () {
					console.log('correct');
					$(this).parent().fadeOut();	
					});			
$(".courses-section .row .list-unstyled li").click(function(){
							console.log('clicked');
					$(this).addClass('active').siblings().removeClass('active');
						console.log($(this).data('class'));
					$($(this).data('class')).removeClass('d-none').fadeIn("slow").siblings().addClass('d-none');
			   console.log($(this).data('class'));
				})
// for team work section
$(".team-work ul li").on('click', function(){
	console.log($(this).data('class'));
	$(this).addClass('active').siblings().removeClass('active');
	if($(this).data('class') === 'all'){
		$(".team-work .row > div").css('opacity' , 1);
	}else{
		$(".team-work .row > div").css('opacity' , 0.3);
		$($(this).data('class')).css('opacity',1);
	}
});	
// parent settings taps
$(".parent-setting .row .inside .taps ul li").on('click', function(){
	console.log($(this).data('class'));
	$(this).addClass('active').siblings().removeClass('active');
	$($(this).data('class')).removeClass('d-none').fadeIn().siblings().addClass('d-none');
	console.log($(this).data('class'));
});	
// Parent settings select options
for( var i = 1960 ; i <= 2020 ; i++)
{
	$("<option>" , {value: i, text: i}).appendTo($("#year"))
}	
for( var i = 1 ; i <= 12 ; i++)
{
	$("<option>" , {value: i, text: i}).appendTo($("#month"))
}	
for( var i = 1 ; i <= 31 ; i++)
{
	$("<option>" , {value: i, text: i}).appendTo($("#day"))
}	

});
