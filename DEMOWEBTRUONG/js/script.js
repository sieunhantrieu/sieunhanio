$(".sidebar-dropdown > a").click(function () {
	$(".sidebar-submenu").slideUp(200);
	if (
		$(this)
		.parent()
		.hasClass("active")
	) {
		$(".sidebar-dropdown").removeClass("active");
		$(this)
			.parent()
			.removeClass("active");
	} else {
		$(".sidebar-dropdown").removeClass("active");
		$(this)
			.next(".sidebar-submenu")
			.slideDown(200);
		$(this)
			.parent()
			.addClass("active");
	}
});

$("#close-sidebar").click(function () {
	$(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function () {
	$(".page-wrapper").addClass("toggled");
});
$(".sidebar-menu ul li").click(function () {
	$(".page-wrapper").removeClass("toggled");
});
// Fixed header menu top
$(window).scroll(function () {
	if ($(window).scrollTop() >= 200) {
		$('#site_head').addClass('fixed-header');
		$('#site_head').addClass('visible-title');
		$('#site_head .site-title').addClass('opacity-title');
	} else {
		$('#site_head').removeClass('fixed-header');
		$('#site_head').removeClass('visible-title');
		$('#site_head .site-title').removeClass('opacity-title');
	}
});

// scroll to top		  
$(document).ready(function () {
	// Show or hide the sticky footer button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$(".go-top").fadeIn(200);
		} else {
			$(".go-top").fadeOut(200);
		}
	});

	// Animate the scroll to top
	$(".go-top").click(function (event) {
		event.preventDefault();

		$("html, body").animate({
			scrollTop: 0
		}, 300);
	})
});
// Click to scroll
$(".link1").on("click", function () {
	$("html, body").animate({
		scrollTop: $("#tuyensinh").offset().top - 100
	}, "slow");
});

$(".link2").on("click", function () {
	$("html, body").animate({
		scrollTop: $("#truonghoc").offset().top - 100
	}, "slow");
});

$(".link3").on("click", function () {
	$("html, body").animate({
		scrollTop: $("#landing").offset().top - 100
	}, "slow");
});

$(".link4").on("click", function () {
	$("html, body").animate({
		scrollTop: $("#otherlink").offset().top - 100
	}, "slow");
});

$(".link5").on("click", function () {
	$("html, body").animate({
		scrollTop: $("#lienhe").offset().top
	}, "slow");
});
// Count ID number
		var x1 = document.querySelectorAll(".school").length;
		var x2 = document.querySelectorAll(".tuyensinh2").length;
		var x3 = document.querySelectorAll(".company").length;
		var x4 = document.querySelectorAll(".landing").length;

	document.getElementById("allview-b").innerHTML = x1 + x2 + x3 + x4;
	document.getElementById("school-b").innerHTML = document.querySelectorAll(".school").length;
	document.getElementById("tuyensinh-b").innerHTML = document.querySelectorAll(".tuyensinh2").length;
	document.getElementById("company-b").innerHTML = document.querySelectorAll(".company").length;
	document.getElementById("landing-b").innerHTML = document.querySelectorAll(".landing").length;
	
	$(function() {
		
	  if (x1 == "0") {
		$("#school-b").hide();
	  }
	  if (x2 == "0") {
		$("#tuyensinh-b").hide();
	  }
	  if (x3 == "0") {
		$("#company-b").hide();
	  }
	  if (x4 == "0") {
		$("#landing-b").hide();
	  }
	  
});