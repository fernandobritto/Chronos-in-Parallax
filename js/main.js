// JavaScript File

function parallax(){
		// Declarando as var.
		var layer_1 = document.getElementById('clock_1');
		var layer_2 = document.getElementById('clock_2');
		var layer_3 = document.getElementById('clock_3');
		var layer_4 = document.getElementById('clock_4');
		var layer_5 = document.getElementById('clock_5');
		var layer_6 = document.getElementById('clock_6');
		var layer_7 = document.getElementById('clock_7');
		var layer_8 = document.getElementById('clock_8');
		var layer_9 = document.getElementById('clock_9');
		var layer_10 = document.getElementById('clock_10');
		


		// Aplicando a posição
		layer_1.style.top = -(window.pageYOffset / 3) + 'px';
		layer_2.style.top = -(window.pageYOffset / 9) + 'px';
		layer_3.style.top = -(window.pageYOffset / 10) + 'px';
		layer_4.style.top = -(window.pageYOffset / 9) + 'px';
		layer_5.style.top = -(window.pageYOffset / 3) + 'px';
		layer_6.style.top = -(window.pageYOffset / 9) + 'px';
		layer_7.style.top = -(window.pageYOffset / 10) + 'px';
		layer_8.style.top = -(window.pageYOffset / 9) + 'px';
		layer_9.style.top = -(window.pageYOffset / 10) + 'px';
		layer_10.style.top = -(window.pageYOffset / 9) + 'px';
		
		

	}
	
	window.addEventListener("scroll", parallax, false);