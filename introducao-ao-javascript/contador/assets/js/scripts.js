let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

const botaoSubtrair = document.querySelector("#subtrair");
const botaoAdicionar = document.querySelector("#adicionar");

botaoSubtrair.addEventListener('click', () => {
	count--;
	document.getElementById("adicionar").disabled = false;

	if(count === -10) {
		document.getElementById("subtrair").disabled = true;
	}

	if(count < 0 ) {
		document.getElementById("currentNumber").style["color"] = "red";
	}

	CURRENT_NUMBER.innerHTML = count;
});

botaoAdicionar.addEventListener('click', () => {
	count++;
	document.getElementById("subtrair").disabled = false;

	if(count === 10) {
		document.getElementById("adicionar").disabled = true;
	}


	if(count >= 0 ) {
		document.getElementById("currentNumber").style["color"] = "inherit";
	}
	
	CURRENT_NUMBER.innerHTML = count;
});
