href_back = [ "/img/slide.jpg" , "/img/slide2.jpg" , "/img/slide3.jpg"];
  			var d = document;	
  			var body = d.getElementById("body"),
  					body_elm = body.getElementsByTagName("div"),
  					backshow = d.getElementsByClassName("backshow"),
  			    slides = d.getElementById("slides"),
  			    slides_img = slides.getElementsByTagName("img"),
  			    mr_pic = d.getElementById("mr_pic"),
  			    button = d.getElementsByTagName("button")[0],
  					m = 0,
  					bk = 0,
  					ed = 1;

  					function createElm(){
  			      
  			      slides.innerHTML="";
  			      
  			      for( y = 0; y < href_back.length; y++ ){
  			        body.innerHTML += '<div class="backshow"></div>';
  			        body_elm[y].style.backgroundImage = "url('"+href_back[y]+"')";
  			        body_elm[y].style.backgroundSize = "cover";
  			        body_elm[y].style.backgroundRepeat = "no-repeat";
  			        body_elm[y].style.backgroundPosition = "center center";
  			        body_elm[y].style.maxWidth = "100%";
  			        slides.appendChild(d.createElement("div"));
  			        slides.getElementsByTagName("div")[0].innerHTML +="<div><img src="+href_back[y]+"></div>"
  			      }
  					}

  			    createElm();

  					body_elm[0].classList.add("body_org")
  					slides_img[0].parentElement.classList.add("opacity");

  					var backshow_auto = setInterval(function(){	
  						if( body_elm[m].classList.contains("body_org") ){

  							body_elm[m].classList.remove("body_org");
  			        slides_img[m].parentElement.classList.remove("opacity");

  							if( m == href_back.length-1){
  								body_elm[0].classList.add("body_org");
  			          slides_img[0].parentElement.classList.add("opacity");
  							}else{
  								body_elm[m+1].classList.add("body_org");	
  			          slides_img[m+1].parentElement.classList.add("opacity");				
  							}
  			          
  						}
  			      
  			      if( [m+1] % 3 == 0){
  						  slides.getElementsByTagName("div")[0].scrollTop += slides_img[m].parentElement.offsetTop+24
  			      }
  			      
  			      if( m == href_back.length-1 ){
  			         slides.getElementsByTagName("div")[0].scrollTop = 0
  			      }

  						if( m < href_back.length-1 ){
  							m++
  						}else{
  							m = 0
  						}
  						
  					},8000)
  			    
  			    
  			    button.onclick = function(){
  			     
  			        if ( mr_pic.value !== ""){

  			          if ( mr_pic.style.color !== "green" ){
  			            href_back.push(mr_pic.value);
  			            mr_pic.value = "Added to SlideShow !";
  			            mr_pic.style.color = "green";
  			            mr_pic.style.borderBottomColor = "green";
  			            createElm();
  			          }
  			          
  			        }else{
  			          mr_pic.value = "Please enter pic url !";
  			          mr_pic.style.color = "red";     
  			        }
  			      
  			        setTimeout(function(){
  			          mr_pic.value = "";
  			          mr_pic.style.color = "gray";
  			          mr_pic.style.borderBottomColor = "red";
  			        }, 4000)
  			        
  			    }