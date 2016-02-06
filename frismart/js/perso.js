$( document ).ready(function() {
    

	$('#search_bar').bind('inview',function(event, isInView, visiblePartX, visiblePartY){
	  			
		if (isInView) {
			$("#inview_search").animate({
				    top: "-60px"
				  }, {
				    duration: 500,
				    specialEasing: {
				      marginLeft: "swing"
				    },
				    complete: function() {
				    }
			});
		}
		else
		{
			$("#inview_search").animate({
				    top: "0px"
				  }, {
				    duration: 500,
				    specialEasing: {
				      marginLeft: "swing"
				    },
				    complete: function() {
				    }
			});
		}
	});
	
	$('#modalMeteo .close-button').click(function() {
	  $('#modalMeteo').foundation('reveal', 'close');
	});
	
	$('.scrollTo').click( function() {
		var page = $(this).attr('href');
		var speed = 750;
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed, function(){

			$(page).addClass('blink').delay(500).queue(function(){
			    $(this).removeClass("blink").dequeue();
			}).delay(500).queue(function(){
			    $(this).addClass("blink").dequeue();
			}).delay(500).queue(function(){
			    $(this).removeClass("blink").dequeue();
			}).delay(500).queue(function(){
			    $(this).addClass("blink").dequeue();
			}).delay(500).queue(function(){
			    $(this).removeClass("blink").dequeue();
			});

		} ); // Go
		return false;
	});



	/*$('#header_page').bind('inview',function(event, isInView, visiblePartX, visiblePartY){
	  			
		if (isInView) {
			$("#inview_search").animate({
				    top: "-60px"
				  }, {
				    duration: 500,
				    specialEasing: {
				      marginLeft: "swing"
				    },
				    complete: function() {
				    }
			});
		}
		else
		{
			$("#inview_search").animate({
				    top: "0px"
				  }, {
				    duration: 500,
				    specialEasing: {
				      marginLeft: "swing"
				    },
				    complete: function() {
				    }
			});
		}
	});*/

	$('#etab').bind('inview',function(event, isInView, visiblePartX, visiblePartY){
	  			
		if (isInView) {
			$("#inview_search").animate({
				    top: "-60px"
				  }, {
				    duration: 500,
				    specialEasing: {
				      marginLeft: "swing"
				    },
				    complete: function() {
				    }
			});
		}
		else
		{
			$("#inview_search").animate({
				    top: "0px"
				  }, {
				    duration: 500,
				    specialEasing: {
				      marginLeft: "swing"
				    },
				    complete: function() {
				    }
			});
		}
	});


	$('#animation1').bind('inview',function(event, isInView, visiblePartX, visiblePartY){
	  			
		if (isInView) {
			$("#anim_loupe").addClass("anim_loupe");
			$("#anim_resto").addClass("anim_resto");
			$("#anim_banque").addClass("anim_banque");
			$("#anim_commerce").addClass("anim_commerce");
			$("#anim_divertissement").addClass("anim_divertissement");
			$("#titre_anim1").addClass("titre_anim");
			$("#desc_anim1").addClass("desc_anim");

			
		}
		else
		{
			$("#anim_loupe").removeClass("anim_loupe");
			$("#anim_resto").removeClass("anim_resto");
			$("#anim_banque").removeClass("anim_banque");
			$("#anim_commerce").removeClass("anim_commerce");
			$("#anim_divertissement").removeClass("anim_divertissement");
			$("#titre_anim1").removeClass("titre_anim");
			$("#desc_anim1").removeClass("desc_anim");
		}
	});

	$('#animation2').bind('inview',function(event, isInView, visiblePartX, visiblePartY){
	  			
		if (isInView) {
			$("#titre_anim2").addClass("titre_anim");
			$("#anim_ampoule").addClass("anim_ampoule");
			$("#anim_rayon1").addClass("anim_rayon1");
			$("#anim_rayon2").addClass("anim_rayon2");
			$("#anim_rayon3").addClass("anim_rayon3");
			$("#anim_rayon4").addClass("anim_rayon4");
			$("#anim_rayon5").addClass("anim_rayon5");
			$("#anim_rayon6").addClass("anim_rayon6");
			$("#anim_rayon7").addClass("anim_rayon7");
			$("#anim_rayon8").addClass("anim_rayon8");
			$("#anim_rayon9").addClass("anim_rayon9");
			$("#anim_gear").addClass("anim_gear");
			$("#desc_anim2").addClass("desc_anim");

			
		}
		else
		{
			$("#titre_anim2").removeClass("titre_anim");
			$("#anim_ampoule").removeClass("anim_ampoule");
			$("#anim_rayon1").removeClass("anim_rayon1");
			$("#anim_rayon2").removeClass("anim_rayon2");
			$("#anim_rayon3").removeClass("anim_rayon3");
			$("#anim_rayon4").removeClass("anim_rayon4");
			$("#anim_rayon5").removeClass("anim_rayon5");
			$("#anim_rayon6").removeClass("anim_rayon6");
			$("#anim_rayon7").removeClass("anim_rayon7");
			$("#anim_rayon8").removeClass("anim_rayon8");
			$("#anim_rayon9").removeClass("anim_rayon9");
			$("#anim_gear").removeClass("anim_gear");
			$("#desc_anim2").removeClass("desc_anim");
		}
	});

	$('#animation3').bind('inview',function(event, isInView, visiblePartX, visiblePartY){
		  			
		if (isInView) {
			$("#titre_anim3").addClass("titre_anim");
			$("#anim_body").addClass("anim_body");
			$("#anim_drink").addClass("anim_drink");
			$("#anim_smile").addClass("anim_smile");
			$("#desc_anim3").addClass("desc_anim");

			
		}
		else
		{
			$("#titre_anim3").removeClass("titre_anim");
			$("#anim_body").removeClass("anim_body");
			$("#anim_drink").removeClass("anim_drink");
			$("#anim_smile").removeClass("anim_smile");
			$("#desc_anim3").removeClass("desc_anim");
		}
	});

	$("#dropmeteocity li span").bind("click", function(event){
		var nomVille = $(this).html();
		$("#champ_meteo_city").val(nomVille);
	});


	/*$("#dropville_search li span").bind("click", function(event){
		var nomVille = $(this).html();
		$("#champ_ville").val(nomVille);
		$("#champ_ville_inview").val(nomVille);
	});

	$("#dropville_page li span").bind("click", function(event){
		var nomVille = $(this).html();
		$("#champ_ville_page").val(nomVille);
		$("#champ_ville_inview").val(nomVille);
	});

	$("#dropville_inview li span").bind("click", function(event){
		var nomVille = $(this).html();
		$("#champ_ville").val(nomVille);
		$("#champ_ville_inview").val(nomVille);

	});*/

	$("#bt_menu").click(function() {
		
		$("#content").animate({
			    marginLeft: "25%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "swing"
			    },
			    complete: function() {
			    }
		});
		
		$("#page-content").animate({
			    marginLeft: "25%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "swing"
			    },
			    complete: function() {
			    }
		});

		$("#menu_lateral").animate({
			    left: "0%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      left: "swing"
			    },
			    complete: function() {
			    }
		});

		$("#calque").css("visibility", "visible");
	});

	$("#bt_menu_inview").click(function() {
		
		$("#content").animate({
			    marginLeft: "25%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "swing"
			    },
			    complete: function() {
			    }
		});
		
		$("#page-content").animate({
			    marginLeft: "25%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "swing"
			    },
			    complete: function() {
			    }
		});

		$("#menu_lateral").animate({
			    left: "0%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      left: "swing"
			    },
			    complete: function() {
			    }
		});

		$("#calque").css("visibility", "visible");
	});

	$("#bt_menu_page").click(function() {
		
		$("#content").animate({
			    marginLeft: "25%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "swing"
			    },
			    complete: function() {
			    }
		});
		
		$("#page-content").animate({
			    marginLeft: "25%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "swing"
			    },
			    complete: function() {
			    }
		});

		$("#menu_lateral").animate({
			    left: "0%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      left: "swing"
			    },
			    complete: function() {
			    }
		});

		$("#calque").css("visibility", "visible");
	});

	$("#calque").click(function() {
		
		$("#content").animate({
			    marginLeft: "0%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "easeInSine"
			    },
			    complete: function() {
			    }
		});
		
		$("#page-content").animate({
			    marginLeft: "0%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "swing"
			    },
			    complete: function() {
			    }
		});

		$("#menu_lateral").animate({
			    left: "-85%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      left: "easeInSine"
			    },
			    complete: function() {
			    }
		});

		$("#calque").css("visibility", "hidden");
	});

	$("#bt_close").click(function() {
		
		$("#content").animate({
			    marginLeft: "0%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "easeInSine"
			    },
			    complete: function() {
			    }
		});
		
		$("#page-content").animate({
			    marginLeft: "0%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      marginLeft: "easeInSine"
			    },
			    complete: function() {
			    }
		});

		$("#menu_lateral").animate({
			    left: "-85%"
			  }, {
			    duration: 500,
			    specialEasing: {
			      left: "easeInSine"
			    },
			    complete: function() {
			    }
		});

		$("#calque").css("visibility", "hidden");
	});




	$("#bt_home_view").flip({
	  axis: 'y',
	  trigger: 'hover'
	});

	$("#bt_map_view").flip({
	  axis: 'y',
	  trigger: 'hover'
	});

	$("#bt_virtual_view").flip({
	  axis: 'y',
	  trigger: 'hover'
	});

	$("#bt_search_view").flip({
	  axis: 'y',
	  trigger: 'hover'
	});

	/*$("#bt_category_view").flip({
	  axis: 'y',
	  trigger: 'hover'
	});*/

	/*$("#bt_category_view").click(function(){

		if($("#search_bar").css("top") == "80px")
		{

			$("#search_bar").animate({
			    top: "-400px"
			  }, {
			    duration: 500,
			    specialEasing: {
			      top: "easeOutCirc"
			    },
			    complete: function() {
			      
				      $("#hotel_icon").animate({
					    opacity: 1
					  }, {
					    duration: 500,
					    specialEasing: {
					      opacity: "easeOutCirc"
					    },
					    complete: function() {

					    	$("#resto_icon").animate({
							    opacity: 1
							  }, {
							    duration: 500,
							    specialEasing: {
							      opacity: "easeOutCirc"
							    },
							    complete: function() {

							    	$("#bank_icon").animate({
									    opacity: 1
									  }, {
									    duration: 500,
									    specialEasing: {
									      opacity: "easeOutCirc"
									    },
									    complete: function() {

									    	$("#commerce_icon").animate({
											    opacity: 1
											  }, {
											    duration: 500,
											    specialEasing: {
											      opacity: "easeOutCirc"
											    },
											    complete: function() {

											    	$("#divertissement_icon").animate({
													    opacity: 1
													  }, {
													    duration: 500,
													    specialEasing: {
													      opacity: "easeOutCirc"
													    },
													    complete: function() {

													    }
													  });

											    }
											  });

									    }
									  });

							    }
							  });

					    }
					  });

			    }
			  });
			}

	});*/

	$("#bt_search_view").click(function(){

		if($("#search_bar").css("top") == "-400px")
		{

			$("#category_bar div").animate({
			    opacity: 0
			  }, {
			    duration: 500,
			    specialEasing: {
			      opacity: "easeOutCirc"
			    },
			    complete: function() {

			    	$("#search_bar").animate({
					    top: "80px"
					  }, {
					    duration: 500,
					    specialEasing: {
					      top: "easeOutCirc"
					    }
					});
					
					$("#inview_search").animate({
							top: "-60px"
						  }, {
							duration: 500,
							specialEasing: {
							  marginLeft: "swing"
							},
							complete: function() {
							}
					});

			    }
			});
			
			
		}
		else
		{
			$("#search_bar").animate({
			    top: "-400px"
			  }, {
			    duration: 500,
			    specialEasing: {
			      top: "easeOutCirc"
			    },
			    complete: function() {
			      
				      $("#hotel_icon").animate({
					    opacity: 1
					  }, {
					    duration: 500,
					    specialEasing: {
					      opacity: "easeOutCirc"
					    },
					    complete: function() {

					    	$("#resto_icon").animate({
							    opacity: 1
							  }, {
							    duration: 500,
							    specialEasing: {
							      opacity: "easeOutCirc"
							    },
							    complete: function() {

							    	$("#bank_icon").animate({
									    opacity: 1
									  }, {
									    duration: 500,
									    specialEasing: {
									      opacity: "easeOutCirc"
									    },
									    complete: function() {

									    	$("#commerce_icon").animate({
											    opacity: 1
											  }, {
											    duration: 500,
											    specialEasing: {
											      opacity: "easeOutCirc"
											    },
											    complete: function() {

											    	$("#divertissement_icon").animate({
													    opacity: 1
													  }, {
													    duration: 500,
													    specialEasing: {
													      opacity: "easeOutCirc"
													    },
													    complete: function() {
															
															$("#inview_search").animate({
																	top: "0px"
																  }, {
																	duration: 500,
																	specialEasing: {
																	  marginLeft: "swing"
																	},
																	complete: function() {
																	}
															});

													    }
													  });
													  

											    }
											  });

									    }
									  });

							    }
							  });

					    }
					  });

			    }
			  });
		}



	});

	$("#bt_home_view").click(function(){

		$("#cover_etab").animate({
		    left: "0%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});

		$("#map_etab").animate({
		    left: "100%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});

		$("#virtual_etab").animate({
		    left: "200%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});

	});

	$("#bt_map_view").click(function(){

		$("#cover_etab").animate({
		    left: "-100%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});

		$("#map_etab").animate({
		    left: "0%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});

		$("#virtual_etab").animate({
		    left: "100%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});


	});

	$("#bt_virtual_view").click(function(){
			
		$("#cover_etab").animate({
		    left: "-200%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});

		$("#map_etab").animate({
		    left: "-100%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});

		$("#virtual_etab").animate({
		    left: "0%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});


	});

	$(".itineraire").click(function(){

		$("#cover_etab").animate({
		    left: "-100%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});

		$("#map_etab").animate({
		    left: "0%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});

		$("#virtual_etab").animate({
		    left: "100%"
		  }, {
		    duration: 500,
		    specialEasing: {
		      opacity: "easeOutCirc"
		    }
		});


	});

	jQuery("#gallery").unitegallery({
		gallery_theme: "carousel",
		lightbox_overlay_opacity:0.9,
		lightbox_slider_control_swipe:true,
		lightbox_slider_control_zoom:true,
		theme_navigation_position: "left",
		carousel_space_between_tiles: 30,			
	});

	$('.vote').rating();

	$.cookieBar(); 


	var notes = $('body').find('.slide_stars');

	$(".slide_stars").each(function(index) {
	  
	  var note = $(this);
	  note.html(rate(note.attr("data-note")));

	});

	/*for (each etoile; in notes) 
	{  
	  
	  var note = rate(notes[etoile].dataset.note[0]);
	  console.log(note);
	  var etab = $("#etab"+etoile);
	  console.log(etab);
	  //etab.innerHTML(note);

	}*/


});

$(document).foundation({
  orbit: {
    animation: 'slide',
    pause_on_hover: true,
    animation_speed: 200,
    navigation_arrows: true,
    bullets: false,
    slide_number: false,
    timer: false,
    pause_on_hover: true,
    next_on_click: false
  }
});



function rate(note)
{
	var lanote;
	
	if(note==0)
	{
		lanote = "<img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'>"
	}

	if(note>0 && note<=1)
	{
		lanote = "<img src='/img/blue_star.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'>"
	}

	if(note>1 && note<=1.5)
	{
		lanote = "<img src='/img/blue_star.svg'><img src='/img/blue_star_half.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'>"
	}

	if(note>1.5 && note<=2)
	{
		lanote = "<img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'>"
	}

	if(note>2 && note<=2.5)
	{
		lanote = "<img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star_half.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'>"
	}

	if(note>2.5 && note<=3)
	{
		lanote = "<img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star_border.svg'><img src='/img/blue_star_border.svg'>"
	}

	if(note>3 && note<=3.5)
	{
		lanote = "<img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star_half.svg'><img src='/img/blue_star_border.svg'>"
	}

	if(note>3.5 && note<=4)
	{
		lanote = "<img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star_border.svg'>"
	}

	if(note>4 && note<=4.5)
	{
		lanote = "<img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star_half.svg'>"
	}

	if(note>4.5 && note<=5)
	{
		lanote = "<img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star.svg'><img src='/img/blue_star.svg'>"
	}

	return lanote;
}

$("#autour").click(function(){

	Cookies.set('proximite', $("#autour").is(':checked'));


	if($("#autour").is(':checked') == false)
	{
		$("#champ_ville_inview").prop('disabled', false);
		$("#champ_ville").prop('disabled', false);
		$("#champ_ville_page").prop('disabled', false);
		$("#autour_view").prop('checked', false);
		
	}
	else
	{
		$("#champ_ville_inview").prop('disabled', true);
		$("#champ_ville").prop('disabled', true);
		$("#champ_ville_page").prop('disabled', true);
		$("#champ_ville_inview").val("");
		$("#champ_ville").val("");
		$("#champ_ville_page").val("");
		$("#champ_ville_inview").val(Cookies.set('ville'));
		$("#champ_ville").val(Cookies.set('ville'));
		$("#champ_ville_page").val(Cookies.set('ville'));
		$("#autour_view").prop('checked', true);
	}
});

$("#autour_view").click(function(){

	Cookies.set('proximite', $("#autour_view").is(':checked'));
	
	if($("#autour_view").is(':checked') == false)
	{
		$("#champ_ville_inview").prop('disabled', false);
		$("#champ_ville").prop('disabled', false);
		$("#champ_ville_page").prop('disabled', false);
		$("#autour").prop('checked', false);
		
	}
	else
	{
		$("#champ_ville_inview").prop('disabled', true);
		$("#champ_ville").prop('disabled', true);
		$("#champ_ville_page").prop('disabled', true);
		$("#champ_ville_inview").val("");
		$("#champ_ville").val("");
		$("#champ_ville_page").val("");
		$("#champ_ville_inview").val(Cookies.set('ville'));
		$("#champ_ville").val(Cookies.set('ville'));
		$("#champ_ville_page").val(Cookies.set('ville'));
		$("#autour").prop('checked', true);
	}	

});
