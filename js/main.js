// JavaScript File

/*
============================================================================================
Função do Efeito Parallax 
============================================================================================
*/

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
		var layer_11 = document.getElementById('clock_11');
		var layer_12 = document.getElementById('clock_12');
		var layer_13 = document.getElementById('clock_13');
		var layer_14 = document.getElementById('clock_14');
		var layer_15 = document.getElementById('clock_15');
		var layer_16 = document.getElementById('clock_16');
		var layer_17 = document.getElementById('clock_17');
		var layer_18 = document.getElementById('clock_18');
		var layer_19 = document.getElementById('clock_19');
		var layer_20 = document.getElementById('clock_20');
		var layer_21 = document.getElementById('clock_21');
		var layer_22 = document.getElementById('clock_22');
		var layer_23 = document.getElementById('clock_23');
		var layer_24 = document.getElementById('clock_24');
		var layer_25 = document.getElementById('clock_25');
		


		// Aplicando a posição
		layer_1.style.top = -(window.pageYOffset / 3) + 'px';
		layer_2.style.top = -(window.pageYOffset / 9) + 'px';
		layer_3.style.top = -(window.pageYOffset / 10) + 'px';
		layer_4.style.top = -(window.pageYOffset / 9) + 'px';
		layer_5.style.top = -(window.pageYOffset / 1) + 'px';
		layer_6.style.top = -(window.pageYOffset / 7) + 'px';
		layer_7.style.top = -(window.pageYOffset / 10) + 'px';
		layer_8.style.top = -(window.pageYOffset / 5) + 'px';
		layer_9.style.top = -(window.pageYOffset / 4) + 'px';
		layer_10.style.top = -(window.pageYOffset / 9) + 'px';
		layer_11.style.top = -(window.pageYOffset / 3) + 'px';
		layer_12.style.top = -(window.pageYOffset / 9) + 'px';
		layer_13.style.top = -(window.pageYOffset / 10) + 'px';
		layer_14.style.top = -(window.pageYOffset / 9) + 'px';
		layer_15.style.top = -(window.pageYOffset / 1) + 'px';
		layer_16.style.top = -(window.pageYOffset / 7) + 'px';
		layer_17.style.top = -(window.pageYOffset / 10) + 'px';
		layer_18.style.top = -(window.pageYOffset / 5) + 'px';
		layer_19.style.top = -(window.pageYOffset / 4) + 'px';
		layer_20.style.top = -(window.pageYOffset / 9) + 'px';
		layer_21.style.top = -(window.pageYOffset / 7) + 'px';
		layer_21.style.top = -(window.pageYOffset / 10) + 'px';
		layer_23.style.top = -(window.pageYOffset / 5) + 'px';
		layer_24.style.top = -(window.pageYOffset / 4) + 'px';
		layer_25.style.top = -(window.pageYOffset / 9) + 'px';
		
	}
	
	window.addEventListener("scroll", parallax, false);
