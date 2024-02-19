// Function called whenever user tab on any box 
function myfunc() { 

	// Setting DOM to all boxes or input field 
	var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
	b1 = document.getElementById("b1").value; 
	b2 = document.getElementById("b2").value; 
	b3 = document.getElementById("b3").value; 
	b4 = document.getElementById("b4").value; 
	b5 = document.getElementById("b5").value; 
	b6 = document.getElementById("b6").value; 
	b7 = document.getElementById("b7").value; 
	b8 = document.getElementById("b8").value; 
	b9 = document.getElementById("b9").value; 

	var b1btn, b2btn, b3btn, b4btn, b5btn, 
		b6btn, b7btn, b8btn, b9btn; 
		
	b1btn = document.getElementById("b1"); 
	b2btn = document.getElementById("b2"); 
	b3btn = document.getElementById("b3"); 
	b4btn = document.getElementById("b4"); 
	b5btn = document.getElementById("b5"); 
	b6btn = document.getElementById("b6"); 
	b7btn = document.getElementById("b7"); 
	b8btn = document.getElementById("b8"); 
	b9btn = document.getElementById("b9"); 

	// Checking if Player X won or not and after 
	// that disabled all the other fields 
	if ((b1 == '×' || b1 == '×') && (b2 == '×' || 
		b2 == '×') && (b3 == '×' || b3 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	else if ((b1 == '×' || b1 == '×') && (b4 == '×' || 
		b4 == '×') && (b7 == '×' || b7 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == '×' || b7 == '×') && (b8 == '×' || 
		b8 == '×') && (b9 == '×' || b9 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '×' || b3 == '×') && (b6 == '×' || 
		b6 == '×') && (b9 == '×' || b9 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 

		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == '×' || b1 == '×') && (b5 == '×' || 
		b5 == '×') && (b9 == '×' || b9 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == '×' || b3 == '×') && (b5 == '×' || 
		b5 == '×') && (b7 == '×' || b7 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == '×' || b2 == '×') && (b5 == '×' || 
		b5 == '×') && (b8 == '×' || b8 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == '×' || b4 == '×') && (b5 == '×' || 
		b5 == '×') && (b6 == '×' || b6 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player X won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
	} 

	// Checking of Player X finish 
	// Checking for Player 0 starts, Is player 0 won or 
	// not and after that disabled all the other fields 
	else if ((b1 == 'o' || b1 == 'o') && (b2 == 'o' || 
		b2 == 'o') && (b3 == 'o' || b3 == 'o')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b2btn.style.color = "red"; 
		b3btn.style.color = "red"; 
	} 
	else if ((b1 == 'o' || b1 == 'o') && (b4 == 'o' || 
		b4 == 'o') && (b7 == 'o' || b7 == 'o')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b1btn.style.color = "red"; 
		b4btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b7 == 'o' || b7 == 'o') && (b8 == 'o' || 
		b8 == 'o') && (b9 == 'o' || b9 == 'o')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b6btn.disabled = true; 

		b7btn.style.color = "red"; 
		b8btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'o' || b3 == 'o') && (b6 == 'o' || 
		b6 == 'o') && (b9 == 'o' || b9 == 'o')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b5btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b3btn.style.color = "red"; 
		b6btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b1 == 'o' || b1 == 'o') && (b5 == 'o' || 
		b5 == 'o') && (b9 == 'o' || b9 == 'o')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 

		b1btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b9btn.style.color = "red"; 
	} 
	else if ((b3 == 'o' || b3 == 'o') && (b5 == 'o' || 
		b5 == 'o') && (b7 == 'o' || b7 == 'o')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b3btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b7btn.style.color = "red"; 
	} 
	else if ((b2 == '×' || b2 == '×') && (b5 == '×' || 
		b5 == '×') && (b8 == '×' || b8 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b3btn.disabled = true; 
		b4btn.disabled = true; 
		b6btn.disabled = true; 
		b7btn.disabled = true; 
		b9btn.disabled = true; 

		b2btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b8btn.style.color = "red"; 
	} 
	else if ((b4 == '×' || b4 == '×') && (b5 == '×' || 
		b5 == '×') && (b6 == '×' || b6 == '×')) { 
		document.getElementById('print') 
			.innerHTML = "Player 0 won"; 
		b1btn.disabled = true; 
		b2btn.disabled = true; 
		b3btn.disabled = true; 
		b7btn.disabled = true; 
		b8btn.disabled = true; 
		b9btn.disabled = true; 

		b4btn.style.color = "red"; 
		b5btn.style.color = "red"; 
		b6btn.style.color = "red"; 
	} 

	// Checking of Player 0 finish 
	// Here, Checking about Tie 
	else if ((b1 == '×' || b1 == 'o') && (b2 == '×'
		|| b2 == 'o') && (b3 == '×' || b3 == 'o') && 
		(b4 == '×' || b4 == 'o') && (b5 == '×' || 
			b5 == 'o') && (b6 == '×' || b6 == 'o') && 
		(b7 == '×' || b7 == 'o') && (b8 == '×' || 
			b8 == 'o') && (b9 == '×' || b9 == 'o')) { 
		document.getElementById('print') 
			.innerHTML = "Match Tie"; 
	} 
	else { 

		// Here, Printing Result 
		if (flag == 1) { 
			document.getElementById('print') 
				.innerHTML = "Player X Turn"; 
		} 
		else { 
			document.getElementById('print') 
				.innerHTML = "Player 0 Turn"; 
		} 
	} 
} 

// Function to reset game 
function myfunc_2() { 
	location.reload(); 
	b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 

// Here onwards, functions check turn of the player 
// and put accordingly value X or 0 
flag = 1; 
function myfunc_3() { 
	if (flag == 1) { 
		document.getElementById("b1").value = "×"; 
		document.getElementById("b1").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b1").value = "o"; 
		document.getElementById("b1").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_4() { 
	if (flag == 1) { 
		document.getElementById("b2").value = "×"; 
		document.getElementById("b2").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b2").value = "o"; 
		document.getElementById("b2").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_5() { 
	if (flag == 1) { 
		document.getElementById("b3").value = "×"; 
		document.getElementById("b3").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b3").value = "o"; 
		document.getElementById("b3").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_6() { 
	if (flag == 1) { 
		document.getElementById("b4").value = "×"; 
		document.getElementById("b4").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b4").value = "o"; 
		document.getElementById("b4").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_7() { 
	if (flag == 1) { 
		document.getElementById("b5").value = "×"; 
		document.getElementById("b5").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b5").value = "o"; 
		document.getElementById("b5").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_8() { 
	if (flag == 1) { 
		document.getElementById("b6").value = "×"; 
		document.getElementById("b6").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b6").value = "o"; 
		document.getElementById("b6").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_9() { 
	if (flag == 1) { 
		document.getElementById("b7").value = "×"; 
		document.getElementById("b7").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b7").value = "o"; 
		document.getElementById("b7").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_10() { 
	if (flag == 1) { 
		document.getElementById("b8").value = "×"; 
		document.getElementById("b8").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b8").value = "o"; 
		document.getElementById("b8").disabled = true; 
		flag = 1; 
	} 
} 

function myfunc_11() { 
	if (flag == 1) { 
		document.getElementById("b9").value = "×"; 
		document.getElementById("b9").disabled = true; 
		flag = 0; 
	} 
	else { 
		document.getElementById("b9").value = "o"; 
		document.getElementById("b9").disabled = true; 
		flag = 1; 
	} 
} 
