//Header height
var header = $('#header');var k=0;var titleCourseModules;
var userHeight;
function headerHeight(){
	if ($(window).width()/$(window).height()>1.75) {
		$("#header-video").css("display","block");
		$("#header").css("backgroundImage","none");
		$("#header").css("height",$(window).height());
		userHeight = $("#header-video").css("height");
		
	}
	else{
		$("#header-video").css("display","none");
		$("#header").css("backgroundImage","url(img/Vin.jpg)");	
		var userHeight = $(window).height();
		$("#header").css("height",$(window).height());
		userHeight = $("#header").css("height");
	}
}

//Position myName
var realUserHeight = $(window).height();
function positionMyName(realUserHeight){
	if ($(window).height()>500) {
		$('#myName').css('margin-top',realUserHeight/2-250);	
	}
	else{
		$('#myName').css('margin-top',realUserHeight/2-150);	
	}
	
}

function sizeFourthItem(){
	if($(window).width()<500){
			$(".fourth .col-md-3").removeClass("col-xs-6").addClass("col-xs-12");
	}
	else{
			$(".fourth .col-md-3").removeClass("col-xs-12").addClass("col-xs-6");
	}
}
var bodyTag = document.getElementById("body");
function checkScroll(){
	bodyTag.onscroll=function(){
		// Show and Hide menu
		if(window.pageYOffset>=realUserHeight){
			
			$("#nav").css("display","block");
		}
		else{
			$("#nav").css("display","none");

		};
	};	
};

//Social-network animation
function socialNetworkAnimate(socialId){
	$('#'+socialId).hover(function(){
		$(this).addClass('animated infinite pulse').removeClass('zoomIn').css("display","inline-block");
		$(this).mouseleave(function(){
			$(this).removeClass('infinite pulse');
		})
	});
};


//All function
$(document).ready(function(){
	headerHeight();
	checkScroll();
	sizeFourthItem();
	var realUserHeight = $(window).height();
	positionMyName(realUserHeight);
	socialNetworkAnimate("fa-facebook");
	socialNetworkAnimate("fa-twitter");
	socialNetworkAnimate("fa-google-plus");
	socialNetworkAnimate("fa-linkedin");
	socialNetworkAnimate("fa-instagram");
	socialNetworkAnimate("fa-dribbble");
	socialNetworkAnimate("fa-skype");
	headerLineAnimate();
	headerTextAnimate();
	setTimeout(faFacebook,800);
	setTimeout(faTwitter,1600);
	setTimeout(faGooglePlus,2400);
	setTimeout(faLinkedin,3200);
	setTimeout(faInstagram,4000);
	setTimeout(faDribbble,4800);
	setTimeout(faSkype,5600);
	setTimeout(intitaShowInformation, 6400);
	function headerLineAnimate(){
	$("#header-line").addClass('animated rotateInUpRight');	
	};
	function headerTextAnimate(){
		$('#header-text').addClass('animated fadeIn');
	}
	$('#myName').addClass('animated bounceInLeft');
	$('#mySurName').addClass('animated bounceInRight');
	
	function faFacebook(){
		$('#fa-facebook').addClass('animated zoomIn');
	};
	function faTwitter() {
		$('#fa-twitter').addClass('animated zoomIn');
	}
	function faGooglePlus() {
		$('#fa-google-plus').addClass('animated zoomIn');
	}
	function faLinkedin() {
		$('#fa-linkedin').addClass('animated zoomIn');
	}
	function faInstagram() {
		$('#fa-instagram').addClass('animated zoomIn');
	}
	function faDribbble() {
		$('#fa-dribbble').addClass('animated zoomIn');
	}
	function faSkype() {
		$('#fa-skype').addClass('animated zoomIn');
	}
	function intitaShowInformation() {
		$('#intitaShowInformation').addClass('animated flash');
	}
	// $('#header-text').addClass('animated fadeIn');
	// if ($('#mySurName').addClass('animated bounceInRight')) {
	// 	function headerTextAnimate(){
	// 		$('#header-text').addClass('animated fadeIn');
	// 	}
	// 	if(setTimeout(headerTextAnimate,800)){
	// 		function headerLineAnimate(){
	// 			$("#header-line").addClass('animated rotateInUpRight');	
	// 		};
	// 		if(setTimeout(headerLineAnimate,800)){
	// 			function socialNetworkShow(){
	// 				$('#fa-facebook').addClass('animated zoomIn');
	// 				setTimeout(function(){
	// 					$('#fa-twitter').addClass('animated zoomIn');
	// 					setTimeout(function(){
	// 						$('#fa-google-plus').addClass('animated zoomIn');
	// 						setTimeout(function(){
	// 							$('#fa-linkedin').addClass('animated zoomIn');
	// 							setTimeout(function(){
	// 								$('#fa-instagram').addClass('animated zoomIn');
	// 								setTimeout(function(){
	// 									$('#fa-dribbble').addClass('animated zoomIn');
	// 									setTimeout(function(){
	// 										$('#fa-skype').addClass('animated zoomIn');
	// 										setTimeout(function(){
	// 											$('#intitaShowInformation').addClass('animated flash');
	// 										},800)
	// 									},800)
	// 								},800)
	// 							},800)
	// 						},800)
	// 					},800)
	// 				},800);
	// 			}
	// 			setTimeout(socialNetworkShow,2000);
	// 		}
	// 	}

	// };
	$(function(){
		$(window).resize(function(){
			sizeFourthItem();
			var realUserHeight = $(window).height();
			positionMyName(realUserHeight);
			checkScroll();
			headerHeight();
			
		});
	});
});
// var a = $("#last-video").attr("href","https://www.youtube.com/watch?v=cuOq21X4TUw");
// console.log(a);