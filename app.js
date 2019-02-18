document.addEventListener("DOMContentLoaded", function() { 


	const btnUp = document.querySelector('.btnUp');
	let naturePictures = document.querySelectorAll(".foto-square"); 
	let modal = document.getElementById('myModal');
	let span = document.getElementsByClassName("close")[0];
	let modalImg = document.getElementById("img01");
	let captionText = document.getElementById("caption");


	btnUp.addEventListener('click', function() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
			});
	});


	for (let i =0; i < naturePictures.length; i++) { 
		naturePictures[i].onclick = function() {
			 modal.style.display = "block";
			 modalImg.src = this.src;
			 captionText.innerHTML = this.alt;
			}
	};
		
	span.onclick = function() { 
		  modal.style.display = "none";
		};

	//zamknięcie modal przy kliknięciu gdziekolwiek
		window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	};






});