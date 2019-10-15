let elements = document.querySelectorAll(".drag");

if (elements.length == 2) {

	dragElements(document.getElementById("drag2"), document.getElementById("drag3"))

} else if (elements.length == 1) {

	dragElement(document.getElementById("drag2"));

}

function dragElement(elmnt) {
	if (document.getElementById(elmnt.id)) {
		document.getElementById(elmnt.id).onmousedown = dragMouseDown;
	} else {
		alert("элемент по такому id не найден")
	}
}

function dragMouseDown(e) {

	e.preventDefault(); // отменили все действия которые происходили раньше
	document.onmouseup = closeDragElement; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
	document.onmousemove = elementDrag; // событие, произойдет если сдвинуть мышу
}

function closeDragElement() {
	/* stop moving when mouse button is released:*/
	document.onmouseup = null;
	document.onmousemove = null;
}

function elementDrag(e) {
	let parentElement = document.getElementById("ias-slider_parent");
	var parentPosition = parentElement.getBoundingClientRect();
	let parentPositionX = parentPosition.left + pageXOffset;
	let parentWidth = parentElement.offsetWidth;

	let sliderElement = document.getElementById("drag2");

	if (e.clientX > parentWidth + parentPosition.left) {
		e.clientX = parentPosition.left + parentWidth;
		sliderElement.style.left = (parentWidth - 15) + "px"
	} else if (e.clientX < parentPosition.left) {
		e.clientX = parentPosition.left;
		sliderElement.style.left = "-15px"
	} else {
		sliderElement.style.left = (e.clientX - parentPositionX - 15) + "px";
	}

}

function dragElements(elmnt1, elmnt2) {
	if (document.getElementById(elmnt1.id) && document.getElementById(elmnt2.id)) {
		document.getElementById(elmnt1.id).onmousedown = dragMouseDown1;
		document.getElementById(elmnt2.id).onmousedown = dragMouseDown2;
	} else {
		alert("элемент по такому id не найден")
	}
}

function dragMouseDown1(e) {

	e.preventDefault(); // отменили все действия которые происходили раньше
	document.onmouseup = closeDragElement; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
	document.onmousemove = elementDrag1; // событие, произойдет если сдвинуть мышу
}

function dragMouseDown2(e) {

	e.preventDefault(); // отменили все действия которые происходили раньше
	document.onmouseup = closeDragElement; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
	document.onmousemove = elementDrag2; // событие, произойдет если сдвинуть мышу
}

function elementDrag1(e) {
	let parentElement = document.getElementById("ias-slider_parent");
	var parentPosition = parentElement.getBoundingClientRect();
	let parentPositionX = parentPosition.left + pageXOffset;
	let parentWidth = parentElement.offsetWidth;

	let sliderElement1 = document.getElementById("drag2");
	let sliderElement1Position = sliderElement1.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
	console.log("sliderElement1Position : " + sliderElement1Position + "pageXOffset : " + pageXOffset);

	let sliderElement2 = document.getElementById("drag3");
	let sliderElement2Position = sliderElement2.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
	console.log("sliderElement2Position : " + sliderElement2Position + "pageXOffset : " + pageXOffset);

	if (e.clientX > parentWidth + parentPosition.left) {
		e.clientX = parentPosition.left + parentWidth;
		sliderElement1.style.left = (parentWidth - 15) + "px"
	} else if (e.clientX < parentPosition.left) {
		e.clientX = parentPosition.left;
		sliderElement1.style.left = "-15px"
	} else {
		sliderElement1.style.left = (e.clientX - parentPositionX - 15) + "px";
	};

	if (sliderElement2Position+parentPositionX < e.clientX+35) {
		e.clientX = sliderElement2Position + "px";
		sliderElement1.style.left = (sliderElement2Position - 30) + "px"
	}
}

function elementDrag2(e) {
	let parentElement = document.getElementById("ias-slider_parent");
	var parentPosition = parentElement.getBoundingClientRect();
	let parentPositionX = parentPosition.left + pageXOffset;
	let parentWidth = parentElement.offsetWidth;

	let sliderElement1 = document.getElementById("drag2");
	let sliderElement1Position = sliderElement1.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
	console.log("sliderElement1Position : " + sliderElement1Position + "pageXOffset : " + pageXOffset);

	let sliderElement2 = document.getElementById("drag3");
	let sliderElement2Position = sliderElement2.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
	console.log("sliderElement2Position : " + sliderElement2Position + "pageXOffset : " + pageXOffset);

	if (e.clientX > parentWidth + parentPosition.left) {
		e.clientX = parentPosition.left + parentWidth;
		sliderElement2.style.left = (parentWidth - 15) + "px"
	} else if (e.clientX < parentPosition.left) {
		e.clientX = parentPosition.left;
		sliderElement2.style.left = "-15px"
	} else {
		sliderElement2.style.left = (e.clientX - parentPositionX - 15) + "px";
	};

	if (sliderElement1Position+parentPositionX > e.clientX-35) {
		e.clientX = sliderElement1Position + "px";
		sliderElement2.style.left = (sliderElement1Position + 30) + "px"
	}
}