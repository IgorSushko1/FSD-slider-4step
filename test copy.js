let brd = document.getElementById("ias-slider_parent");
var br = brd.getBoundingClientRect()
alert("Top:" + (br.top + pageYOffset) + ", Left:" + (br.left + pageXOffset) + ", Right:" + br.right + ", Bottom:" + br.bottom);

let slider = document.getElementById("drag2");
var sld = slider.getBoundingClientRect();

alert("Top:" + (sld.top + pageYOffset) + ", Left:" + (sld.left + pageXOffset) + ", Right:" + sld.right + ", Bottom:" + sld.bottom)



dragElement(document.getElementById("drag2"));

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


	console.log("parentPositionX: " + parentPositionX);
	console.log("parentWidth: " + parentWidth);
	console.log("e.target: " + e.target);
	console.log("e.target.offsetLeft: " + e.target.offsetLeft);
	console.log("sliderElement.style.left: " + sliderElement.style.left);
	console.log("e.clientX: " + e.clientX);

	if (e.clientX > parentWidth + parentPosition.left) {
		e.clientX = parentPosition.left + parentWidth;
		sliderElement.style.left = (parentWidth - 15) + "px"
	} else if (e.clientX < parentPosition.left) {
		e.clientX = parentPosition.left;
		sliderElement.style.left = "-15px"
	} else {
		sliderElement.style.left = (e.clientX - parentPositionX - 15) + "px";
	}

	// if (sliderElement.style.left > parentWidth+"px" ) {
	// 	sliderElement.style.left = (parentWidth-15)+"px"
	// } else {sliderElement.style.left = (e.clientX-parentPositionX-15) + "px";}

	// sliderElement.style.left = (e.clientX-parentPositionX-15) + "px";

	// sliderElement.style.left = e.target.offsetLeft + "px";

	// elmnt.style.left = parentPositionX + "px";
}

// Работающая старая версия
// function dragElement(elmnt) {
// 	var pos1 = 0,
// 		pos2 = 0,
// 		pos3 = 0,
// 		pos4 = 0;
// 	if (document.getElementById(elmnt.id + "header")) {
// 		/* if present, the header is where you move the DIV from:*/
// 		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
// 	} else {
// 		/* otherwise, move the DIV from anywhere inside the DIV:*/
// 		elmnt.onmousedown = dragMouseDown;
// 	}

// 	function dragMouseDown(e) {
// 		e = e;
// 		e.preventDefault();
// 		// get the mouse cursor position at startup:
// 		pos3 = e.clientX;
// 		console.log("pos3 - начало : " + pos3);
// 		pos4 = e.clientY;
// 		document.onmouseup = closeDragElement;
// 		// call a function whenever the cursor moves:
// 		document.onmousemove = elementDrag;
// 	}

// 	function elementDrag(e) {
// 		e = e;
// 		e.preventDefault();

// 		console.log("e.clientX : " + e.clientX);
// 		console.log("elmnt.offsetLeft : " + elmnt.offsetLeft);

// 		function getEl(id) {
// 			return document.getElementById(id)
// 		}
// 		let ribon = getEl("colorBar");

// 		let parent = document.getElementById("bord2");
// 		let valueMouseMoveArea = 0;

// 		let offWidth = parent.offsetWidth;
// 	 parent.onmousemove = controlArea(event); //работает

// 		function controlArea(event) {
// 			event.preventDefault();
// 			console.log(" parent.offsetX : " + event.offsetX);

// 			let valueMouseMoveArea = event.offsetX;

// 			console.log("inner valueMouseMoveArea : " + valueMouseMoveArea)
// 			console.log("offWidth: " + event.target.offsetWidth);
// 			if (elmnt.offsetLeft < offWidth && event.target.offsetWidth === offWidth) {
// 				elmnt.style.left = valueMouseMoveArea + "px";
// 				ribon.style.width = valueMouseMoveArea + "px";
// 			} else if (elmnt.offsetLeft < 0 && event.target.offsetWidth === offWidth) {
// 				elmnt.style.left = 0 + "px"
// 			} else if (elmnt.offsetLeft >= offWidth && event.target.offsetWidth === offWidth) {
// 				elmnt.style.left = offWidth - 110 + "px"
// 			}
// 		}

// 	}

// 	function closeDragElement() {
// 		/* stop moving when mouse button is released:*/
// 		document.onmouseup = null;
// 		document.onmousemove = null;
// 	}
// }