// JavaScript File

function parallax(){
		// Declarando as var.
		var layer_1 = document.getElementById('clock_1');
		var layer_2 = document.getElementById('clock_2');
		


		// Aplicando a posição
		layer_1.style.top = -(window.pageYOffset / 2) + 'px';
		layer_2.style.top = -(window.pageYOffset / 9) + 'px';
		

	}
	
	window.addEventListener("scroll", parallax, false);