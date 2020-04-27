
	var trigger=0, name, age, sex, education, mathematic, asu, cutting, programming, famil; // обьявляем переменные которые понадобятся в ходе работы
		
	document.getElementById("startTest").addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			name = prompt("Введите имя");
			var f = false;
			do {
			age = prompt("Введите возраст");
			if(confirm("Вы уверены что вам " + age))
				f = true;
			else;
			}while(f==false);
				
			sex = prompt("Введите пол");
			education = confirm("У вас есть высше образование?");
			mathematic = confirm("Вы знаете математику?");
			asu = confirm("Вы знаете АСУ ТП?");
			cutting = confirm("Вы знаете теорию резания?");
			programming = confirm("Умеете программировать?");
			writeToPage();
		}
		document.getElementById("calcD").addEventListener("click",calc)
		function calc() {a = prompt("Введите а");
			b=prompt("Введите b");
			if(a<b)
			 alert(a);
			else
				alert(b);
	}	
	document.getElementById("createname").addEventListener("click",crename)
	function crename()
	{
		name = prompt("Введите новое имя");
		age = prompt("Введите возраст");
		sex = prompt("Введите пол");
		$("#name").val(name)
		$("#age").val(age)
		$("#sex").val(sex)
		$("#sex").focus();
		$("#age").focus();
		$("#name").focus();
	}
	
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex)
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("asu").checked = asu;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("programming").checked = programming;
			trigger=1;
			myFunction();
		}
		document.getElementById("createfamil").addEventListener("click", createf)
	function createf()
	{
		famil = prompt("Новая фамилия");
		$("#famil").val(famil)
		$("#famil").focus();
	}
		x.style.display = "none";
		function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
					//образованием".
	    	var x = document.getElementById("div1");
		if (trigger==1) {
		if (document.getElementById("mathematic").checked ==true && document.getElementById("programming").checked ==true)
		{
       		var text ='<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>'
		x.innerHTML = text;
		x.style.display = "block";
		}
		else 	{
        	var text ='<p class="stroke">ВЫ НАМ НЕ НУЖНЫ!</p>'
		x.innerHTML = text;
			}
		}
		}
