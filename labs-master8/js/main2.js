var trigger=0, name, age, sex, education, mathematic, asu, cutting, programming, famil; // обьявляем переменные которые понадобятся в ходе работы
	document.getElementById("createfamil").addEventListener("click", createf)
	function createf()
	{
		famil = prompt("Новая фамилия");
		$("#famil").val(famil)
		$("#famil").focus();
	}