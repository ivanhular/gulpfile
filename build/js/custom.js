
/* rateyo js*/

$(function () {
	$(".rate").rateYo({
		rating: 5,
		starWidth: "15px" ,
		normalFill: "#ffeb12",
		ratedFill : "#ffeb12",
	});

	rate_star('.overall');
	rate_star('.service');
	rate_star('.Industry');
	rate_star('.Prof');	

});

function rate_star(rate_class){

	$(rate_class).rateYo({
		rating: 0,
		fullStar: true,
		starWidth: "30px" ,

	}).on("rateyo.change", function (e, data) {
		var rating = data.rating;
		var rate_name ; 
		if(rating == 1 ) {
			rate_name = "poor"; 
		}else if(rating == 2 ){
			rate_name = "Needs improvement"; 
		}else if(rating == 3){
			rate_name = "Satisfactory"; 
		}else if(rating == 4){
			rate_name = "Very good"; 
		}else if(rating == 5 ){
			rate_name = "excellent"; 
		}else{
		} 
		if(rate_class == ".overall" ){
			$('input[name=Overall_exp]').val(rate_name);
		}	
		else if(rate_class == ".service" ){
			$('input[name=Value_Service]').val(rate_name);
		}	
		else if(rate_class == ".Industry" ){
			$('input[name=Industry_Knowledge]').val(rate_name);
		}
		else if(rate_class == ".Prof" ){
			$('input[name=Professional_Conduct]').val(rate_name);
		}


	});
}

$(document).ready(function(){


	/************** dynamic mobile menu*****************/

	$('.menu-wrap .nav').children().addClass('primary');

	var menuItems = {}; 
	$('.menu-wrap .nav li.primary').each(function(indx){
		var link = $(this).find('a').attr('href'),
			txt = $(this).children('a').text(),
			cName = $(this).attr('class').replace(/ /g,"");

		if(!(cName.match(/dropdown/g))){
			menuItems[indx] = {
				link:link,
				txt:txt,
			}
		}else{
			var dropdownItems = {};

			$(this).find('.dropdown-menu li').each(function(indx){
				var link = $(this).find('a').attr('href'),
					txt = $(this).find('a').text();
				dropdownItems[indx] = {
					link:link,
					txt:txt,
				}
			});

			menuItems[indx] = {
				link:link,
				txt:txt,
				type:"dropdown",
				dropdown:dropdownItems
			}
		}

	});

	var li = "";
	$.each(menuItems, function(key, value) {

		li += '<li class=mob-menu>';
		li += '<a href='+menuItems[key].link+'>'+menuItems[key].txt+'</a>' ;

		if(!(menuItems[key].type == undefined)){

			var dropdown = menuItems[key].dropdown; 

			li += '<ul class=mob-dropdown>';

			$.each(dropdown, function(key, value) {
				li += '<li class=mob-menu>';
				li += '<a href='+dropdown[key].link+'>'+dropdown[key].txt+'</a>';
				li += '</li>';
			});
			li +='</ul>';
		}

		li += '</li>';

		//$('.mobile_menu ul').append();



	});
	$('.mobile_menu ul').append(li);
	//console.log(li);


	/*----------------------------------*/

	$('#section3 .fc-card').each(function(){
		var src = $(this).find('img').attr('src');

		$(this).find('.img-wrap').css('background','url('+src+')');
		$(this).click(function(){
			var link = $(this).find('a').attr('href');
			window.location.href = link;
		});
	});
	
	$('.cta-item').each(function(){
		$(this).click(function(){
			var link = $(this).find('a').attr('href');
			window.location.href = link;
		});
	});

	$('input[type=text]').each(function(indx){
		var id = $(this).attr('id');
		$(this).attr('id',id+indx)

	});

	$('textarea').each(function(indx){
		var id = $(this).attr('id');
		$(this).attr('id',id+indx)

	});

	var page = $('body').attr('data-page-name'); 

	/* home slider */


	$('#testi, #fam , .featdetail').owlCarousel({
		items:1,
		nav : true, 
		loop:true,
		autoplay:true,
		slideSpeed : 2000,
		paginationSpeed : 400,
		singleItem: true,
		dots: false,
		rewindSpeed: 800,
		pagination: true,
		lazyLoad : true,
		animateOut: 'fadeOut',
		animateIn: 'fadeInUp',
		autoHeight:true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});

	/********/


	/**** IDX TO CAROUSEL ****/
	var count = 0,
		item = 0,
		len = $('.sec-1 #idx-office.idx-results-widget .property').length ;
	wrapper ='';


	function idxToCarousel(_this , indx){

		var curr = indx + 1;

		if(count == 0){

			item++;

			wrapper =$('<div></div>').addClass('wrapper-'+item);

			//console.log(_this);

		}

		if(count <= 3){		

			$(wrapper).append($(_this));
			//$(this).find('.property-item').appendTo('#feat');

			count++;


			//console.log('append item to wrapper '+ item ,indx );
			//console.log(len);
			if( count == 3 ||len == curr  ){

				$(wrapper).appendTo('#feat');

				//console.log('append wrap to feat-container');
				wrapper ='';
				count = 0;

			}
		}
	}


	$('.sec-1 #idx-office.idx-results-widget .property').each(function(indx){

		var _this = $(this),

			w = $(window).width();

		if (! ( w >= 0 && w <= 992 )) {
			idxToCarousel(_this,indx);
		}else{
			$(_this).appendTo('#feat');
		}
	});

	var featured = $('#feat').owlCarousel({
		items:1,
		nav : true, 
		autoplay: true,
		loop:true,
		margin:20,
		slideSpeed : 2000,
		//paginationSpeed : 400,
		dots: false,
		//rewindSpeed: 800,
		lazyLoad : true,
		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],

	});	

	$(featured).on('mouseleave',function(e){
		featured.trigger('play.owl.autoplay');
	})
	$(featured).on('mouseover',function(e){
		featured.trigger('stop.owl.autoplay');
	})

	$(window).resize(function(){

		idxToCarousel();

		featured.trigger('refresh.owl.carousel');
	});

	/********/

	var feat = $('#featured').owlCarousel({
		center:true,
		nav : true, 
		//autoplay: true,
		loop:true,
		//slideSpeed : 2000,
		//paginationSpeed : 400,
		dots: false,
		//rewindSpeed: 800,
		lazyLoad : true,
		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true,
				margin:0,
				nav:false
			},
			992:{
				items:4,
				margin:3
			},
			1200:{
				items:6,
				margin:3
			}
		}

	});	

	function _loadLarge(){
		$('#featured .owl-item.center').prev().prev().addClass('large').siblings().removeClass('large');
		$('#featured .owl-item.center').prev().prev().prev().addClass('left').siblings().removeClass('left');
		$('#featured .owl-item.center').next().next().next().addClass('right').siblings().removeClass('right');
		$('#featured .owl-nav').appendTo(".owl-item.large");
	}
	function _mid(){
		$('#featured .owl-item.center').prev().addClass('large').siblings().removeClass('large');
		$('#featured .owl-item.center').prev().prev().addClass('left').siblings().removeClass('left');
		$('#featured .owl-item.center').next().next().addClass('right').siblings().removeClass('right');
		$('#featured .owl-nav').appendTo(".owl-item.large");
	}
	function _infoLoad(){
		var w = $(window).width();
		if ( w >= 0 && w <= 992) {
			_loadLarge();
			//console.log("s detected");
		}else if(w > 992 && w <= 1200){
			_mid();
			//console.log("M mid");
		}else{
			_loadLarge();
			//console.log("L detected");
		}

	}
	/* bind resize() for responsive */
	$(window).resize(function(){
		_infoLoad();
	});
	/* GESTURES */
	if(page =='index'){
		/*
		var myElement = document.getElementById('featured');
		var mc = new Hammer(myElement);
		mc.on("panleft panright", function(ev) {
			//console.log(ev.type +" gesture detected.");	
			setTimeout(function(){
				_infoLoad();
			},400);
		});*/
	}

	/*******/	
	$('#featured .owl-next').click(function() {
		feat.trigger('next.owl.carousel');
		_infoLoad();
	})
	$('#featured .owl-prev').click(function() {
		feat.trigger('prev.owl.carousel', [300]);
		_infoLoad();
	})


	$('.loginbtn').click(function(){
		$('.loginWidgetLoginButton').trigger('click');
	});


	$('#featured .owl-item , #fam .owl-item').each(function(){
		var src = $(this).find('img').attr('src');
		$(this).find('.img-wrap').css('background','url('+ src + ')');
	});

	setTimeout(function(){
		$('#zipcode0').attr('placeholder','Enter ZIP or Keyword');//Enter an address, city or ZIP code
		$('<span class="s-icon"><i class="fa fa-search" aria-hidden="true"></i></span>').insertBefore('#zipcode0');

		var searchUri = $(".view_all_src").val();

		$('.s-icon').click(function(){
			var zip = $("#zipcode0").val();
			window.location.href = searchUri+ "?zipcode="+zip+"&origin=Search&submit_btn=Search&sort=";
		});
	},400);




	$('<span class="custom_drop"><i class="fa fa-angle-down" aria-hidden="true"></i></span>').insertBefore('#propertyType, #max-price');
	$('.control-group .row').find('.col-xs-12.col-sm-12.col-md-6').attr('class','');
	$('.control-group .row').attr('class','')
	$('#propertyType  option[value="All"]').text('Listing Type');
	$('#max-price  option[value="any"]').text('Any Price');

	/* property link 
	$('.idx-results-widget  .properties-grid .property').each(function(indx ,el){
			var link = $(this).find('.view-details a').attr('href'),
				wrapper = $('<a></a>').attr('href',link);

			//$(this).wrap(wrapper);
	});*/
	$('.social-icon').each(function(){
		var li = $(this).find('li');
		$(li).each(function(indx,el){
			var hash = $(this).find('a').attr('href');
			if(hash == "" || hash =="#"){
				//$(this).css('display','none');
			}
		});

	});

	/*Banner settings*/
	var len = $('.subpage .banner').length ,  
		selected = Math.floor(((Math.random() * len) + 1) -1);
	$('.banner-container.subpage .banner').eq(selected).addClass('selected');	 
	var banner_src = $('.banner-container.subpage').find('.banner.selected img').attr('src');
	$('.banner-container.subpage .banner-img-wrap').css('background','url('+banner_src+')');	

	/* subpage title */
	$('.page-title').appendTo('.custom-title-container');

	/* property IDX to carousel */
	var counter = 0  , 
		slideNo = 1;
	$('#idx-property .properties-grid .property').each(function(indx ,el){
		//alert(indx);
		if(indx > 3){
			if(indx >= 3 && indx <= 12 ){	
				$(this).appendTo('.owl-item-'+ slideNo ).addClass('col-lg-4 item-'+indx).removeClass('col-lg-3');
				counter++; 
			}else{
				return false;
			}

			if(counter == 3){
				slideNo++;
				counter = 0;
			}
		}	
	});

	/* UI tabs */
	var category; 
	$('.ui-tabs-nav li a').on({
		mouseover:function(){
			$(this).parent('li').addClass('ui-state-hover');
		},
		mouseout:function(){
			$(this).parent('li').removeClass('ui-state-hover');
		},
		click:function(){

			var href = $(this).attr('href');

			$(this).parent('li').siblings('li').removeClass('ui-tabs-selected ui-state-active');
			$(this).parent('li').addClass('ui-tabs-selected ui-state-active');


			var call_class = $(this).attr('class');
			category = call_class; 

			/* loadmore and viewall events */
			$('a.view_all').html('Load more').addClass('load_more_btn').removeClass('view_all');
			//$('body').off('click','a.view_all', view_all);
			//$('body').on('click','a.load_more_btn', load_more );

			// cat_click(call_class);

			/* fade containers */
			var find_container = '#' + call_class + ' ' + '.property-container';
			var remove = '#' +  call_class ;
			$(remove).fadeIn(400,function(){
				$(this).siblings('.ui-tabs-panel').fadeOut();
			});

			view_all();


		}
	});

	$('a.lajolla').trigger('click');

	if(page =='listings' || page =='la-jolla'
	   || page =='mission-bay' || page =='del-mar'
	   || page =='point-loma'  || page =='bay-park'
	   || page =='search'){
		$('body').addClass('archive');
	}

	/*dropdown*/
	$('#header-wrapper li.dropdown').hover(function(){
		$(this).find('ul').fadeIn(100);
	}, function(){
		$(this).find('ul').fadeOut(100);
	});

	/* scroll event */
	$( window ).scroll(function() {
		/* fixed menu*/
		if ($(window).width() < 991) {
		} else {
			var height = $(window).scrollTop();
			var header = $('#header-wrapper');	
			if(height  > 100) {
				$(header).addClass('fixed-header'); 
			}else{
				$(header).removeClass('fixed-header'); 
			}
		}


	});
	/* mobile menu */
	var home_link = $('.home_link').val(),
		logo = $(".mobile_logo img").attr("src");
	var menu =	$("#mobile_menu").mmenu({
		offCanvas: {
			position  : "left",
			zposition : "front"
		},
		navbar: {
			title: "<button class='hamburger hamburger--collapse' type='button'><span class='hamburger-box'><span class='hamburger-inner'></span></span></button><a class='mob-logo' href="+ home_link  +"><img src='"+ logo +"'/></a>"
		},
		extensions: [
			"theme-dark",
			"pagedim-black"
		]
	});

	var api =  menu.data( "mmenu" );
	var icon = $('button.hamburger');

	icon.on( "click", function() {
		if($(this).hasClass('is-active')){
			api.close();
		}else{
			api.open();
		}
	});
	$('.loginWidgetLoginButton').click(function(){
		api.close();
	});

	$('.loginbtn').click(function(){
		$('.loginWidgetLoginButton').trigger('click');
	});

	api.bind( "opened", function() {
		setTimeout(function() {
			icon.addClass( "is-active" );
		}, 100);
	});
	api.bind( "closed", function() {
		setTimeout(function() {
			icon.removeClass( "is-active" );
		}, 100);
	});

	setTimeout(function(){
		$('.custom-login').insertAfter('.mob-logo');
	},400);

	/* mobile community dropdown */
	$('select[name=communities_nav]').on('change',function(){

		var call_class = $(this).val();
		category = call_class; 

		/* loadmore and viewall events */
		$('a.view_all').html('Load more').addClass('load_more_btn').removeClass('view_all');

		/* fade containers */
		var find_container = '#' + call_class + ' ' + '.property-container';
		var remove = '#' +  call_class ;
		$(remove).fadeIn(400,function(){
			$(this).siblings('.ui-tabs-panel').fadeOut();
		});

		view_all();

	});


	/*	$('.banner-title').textillate({ 
		in: { effect: 'fadeInLeft',
			 reverse: 	true,
			},
		loop: false,
		callback: function () {
			$('.sub-head').textillate({
				in: { effect: 'fadeIn',
						sequence: 	true,
					}
			});
		}

	});*/

	$('#logo , a.mm-title img').click(function(){	
		var link = $('.home_link').val();
		window.location.href = link;
		console.log('click');
	});
	/* view all */
	function view_all(){			
		var page_cat; 

		if(category == 'lajolla'){
			page_cat = 'la-jolla';
		}else if(category == 'missionbay'){
			page_cat = 'mission-bay';
		}else if(category == 'delmar'){
			page_cat = 'del-mar';
		}else if(category == 'pointloma'){
			page_cat = 'point-loma';
		}else{
			page_cat = 'bay-park';
		}
		var src = $('.view_all_src').val();
		var link = src.replace('search', page_cat);

		$('.view_all_btn_wrap a').attr('href',link);	
	}


	/* modal */
	$('.sec-text').click(function(){
		$('#openhouse').modal({
			keyboard: true,
		});
	});


	$('a#openhousebtn').click(function(){
		$('#openhouse').modal({
			keyboard: true,
		});
	});


	/* smooth a# scrolling */
	$('a[href*=#]').click(function() {
		if (this.hash !== "") {
			//event.preventDefault();

			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		} 	
	}); 

if(page == "kates-open-houses"){
	$('.modal-header').append('<div class="copywrp"><h2>For FREE,&nbsp;Instant Access To&nbsp;View Upcoming Open Houses Sign in using Facebook or Google +</h2></div>');
	setTimeout(function(){
		$('.loginWidgetLoginButton').trigger('click');
	},400);
	
}



});
var lat = '{{custom_field-latitude}}',
	lng = '{{custom_field-longitude}}',
	address = '{{custom_field-map_address}}';

function init() {
	var mapOptions = {
		center: new google.maps.LatLng(33.040409, -117.286012), 
		zoom:15,
		disableDefaultUI: true, 
		draggable: true, 
		scrollwheel: false,
		styles:[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#c0e4f3"},{"visibility":"on"}]}]
	};

	// Get the HTML DOM element that will contain your map 
	var mapElement = document.getElementById('map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	// Let's also add a marker while we're at it
	var icon = {
		url: "https://s3.amazonaws.com/static.organiclead.com/Site-4c8a6925-0071-428f-b6ba-df828f538d47/marker.png",
		scaledSize: new google.maps.Size(39, 60), // scaled size
	};
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(lat, lng),
		map: map,
		title: address,
		icon:icon
	});


}

function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;