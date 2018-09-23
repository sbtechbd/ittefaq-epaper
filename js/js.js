/*======================================================FOR MENU DISPLAY==========================================================*/
$(document).ready(function(){

	
	$(".mainnav li").hover(
						  function(){$(this).find('ul').stop(true, true).slideDown();},
						  function (){$(this).find('ul').slideUp();}
						  );

	var a = 0;
	$('.startimg').hover(function(){
		if(a==1)
		{
			$('#foo').animate({left: '+=385'}, 300);
			a=0;
		}
	});
	$('.endimg').hover(function(){
		if(a==0)
		{
			$('#foo').animate({left: '-=385'}, 300);
			a=1;
		}
	});
	$("#slider1").easySlider({
			auto: true,
			continuous: true 
		});
 });
 
 /*======================================================FOR all page DISPLAY==========================================================*/
 $(document).ready(function() {
	 var a=0;
	 $('.allPage').click(function(){
		// $('.sideNav').toggle();
		 if(a==0)
		 {
			 a=1;
		 $('.sideNav').slideDown('700');
		 }
		 else
		 {
			 a=0;
			 $('.sideNav').slideUp('700');
			}
		 });
    
});


 /*======================================================FOR archive DISPLAY==========================================================*/
 $(document).ready(function() {
	 var a=0;
	 $('.archive').click(function(){
		 if(a==0)
		 {
			 a=1;
		 $('.calender').slideDown('700');
		 }
		 else
		 {
			 a=0;
			 $('.calender').slideUp('700');
			}
		 });
    
});