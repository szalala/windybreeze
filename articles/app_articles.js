document.addEventListener("DOMContentLoaded", function() {


	let stripeElement = document.querySelectorAll('.item-text');
	console.log(stripeElement);

	for (let i = 0; i < stripeElement.length; i++) { 
		stripeElement[i].addEventListener("mouseover", function() {
		stripeElement[i].style.background = "#9d0e3d";
		stripeElement[i].style.opacity = "0.70";
		stripeElement[i].style.color = "white"
		stripeElement[i].style.transitionDuration = ".5s"

		});
	};
	for (let i =0; i < stripeElement.length; i++) {
		stripeElement[i].addEventListener("mouseout", function() {
		stripeElement[i].style.background = "rgba(255,255,255,0.75)";
		stripeElement[i].style.opacity = "1";
		stripeElement[i].style.color = "#696969"
		stripeElement[i].style.transitionDuration = ".5s"
	});
	};





});