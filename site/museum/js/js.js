
/*карусель*/
		$('.owl-car1').owlCarousel({
		    margin:10,
		    nav:true,		    
			items:1,
			onInitialized: counter,
			onTranslated: counter,
		});

	    function counter(event) {
	        var element = event.target;
	        var items = event.item.count;
	        var item = event.item.index + 1;
	        $('.carousel-counter').html(item + "/" + items)
	    }
	
/*карусель*/	
			$('.owl-car2').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        570:{
		            items:2
		        },
		        839:{
		            items:3
		        },
		        1140:{
		            items:4
		        }
		    }
		});

/*карусель*/	
			$('.owl-car3').owlCarousel({
			loop: true,
		    margin:10,
		    nav:true,
		    items: 1
		});


		