// Custom JavaScript for my personal website.

// Marissa Tavano
// Created in 2017
// Updated: 2019





// Reset page to top when the page is refreshed.
$(document).ready(function(){
	$('html').animate({scrollTop:0}, 1);
	$('body').animate({scrollTop:0}, 1);
});




// General ScrollReveal settings.
window.sr = ScrollReveal({ 
	reset: false,
	mobile: false 
});


// Custom ScrollReveal settings.
sr.reveal(".section", {
	duration: 1000 
});

sr.reveal(".skills", {
	duration: 1000 
});

sr.reveal(".skills_title", {
	duration: 1000 
});

sr.reveal(".middle-button", {
	duration: 1000 
});

sr.reveal(".experience", {
	duration: 1000 
});

sr.reveal(".projects-button", {
	duration: 1000 
});

sr.reveal(".projects", {
	duration: 1000 
});





// Button that takes you to the top of the "skills" section.
$(function() {
	$('#down-button').click(function() {
		$('html, body').animate({
			scrollTop: $("#skills_section").offset().top - 100
		}, 'slow');
	});
});


// Button that takes you to the top of the "experience" section.
$(function() {
	$('#middle-button').click(function() {
		$('html, body').animate({
			scrollTop: $("#experience_section").offset().top - 70
		}, 'slow');
	});
});


// Button that takes you to the top of the "projects" section.
$(function() {
	$('#projects-button').click(function() {
		$('html, body').animate({
			scrollTop: $("#projects_section").offset().top - 100
		}, 'slow');
	});
});


// Button that scrolls back to the top of the page.
$(function() {
	const r = document.querySelector("#header_top").offsetHeight,
			a = document.getElementById("top-button"),
			d = $("#top-button");
			
	window.addEventListener("scroll", function() {
		window.scrollY > r ? d.fadeIn() : d.fadeOut(400)
	}, !1), a.addEventListener("click", function() {
		$("html, body").animate({
			scrollTop: 0
		}, 'slow')
	});
	
	
});




// Day/Night toggle & Star Wars toggle.
$(function() {
	const t = new Date,
		o = t.getHours(),
		n = o >= 19 || o <= 7,
		c = document.querySelector("body"),
		s = document.getElementById("toggle"),
		i = document.getElementById("switch");
	n && (i.checked = !0, c.classList.remove("night")), s.addEventListener("click", function() {
		const e = i.checked;
		e ? c.classList.add("night") : c.classList.remove("night")
	});
	
	$(".starwars-toggle").click(function() {
		$('#nav-container').toggleClass("pushed");
	});
});









