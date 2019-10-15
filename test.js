dragElement(document.getElementById("drag2"));

function dragElement(elmnt) {
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		/* if present, the header is where you move the DIV from:*/
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e;
		e.preventDefault();
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		console.log("pos3 - начало : " + pos3);
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e;
		e.preventDefault();
		// calculate the new cursor position:
		pos1 = 0;
		// pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		// pos4 = e.clientY;
		// set the element's new position:
		// elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		// elmnt.style.left = (elmnt.offsetLeft) + "px";

		// console.log("pos1 : " + pos1);
		// console.log("pos3 : " + pos3);
		// console.log("pos3 - e.clientX : " + pos3 + "  " + e.clientX);
		console.log("e.clientX : " + e.clientX);
		console.log("elmnt.offsetLeft : " + elmnt.offsetLeft);

		function getEl(id) {
			return document.getElementById(id)
		}
		let ribon = getEl("colorBar");

		let answer = document.getElementById("bord2");
		let valueMouseMoveArea = 0;
		// let simsalabim = answer.addEventListener("mousemove", controlArea); //работает
		let offWidth = answer.offsetWidth;
		answer.onmousemove = controlArea(event); //работает

		function controlArea(event) {
			event.preventDefault();
			console.log("answer.offsetX : " + event.offsetX);

			let valueMouseMoveArea = event.offsetX;

			console.log("inner valueMouseMoveArea : " + valueMouseMoveArea)
			console.log("offWidth: " + event.target.offsetWidth);
			if (elmnt.offsetLeft < offWidth && event.target.offsetWidth === offWidth) {
				elmnt.style.left = valueMouseMoveArea + "px";
				ribon.style.width = valueMouseMoveArea + "px";
			} else if (elmnt.offsetLeft < 0 && event.target.offsetWidth === offWidth) {
				elmnt.style.left = 0 + "px"
			} else if (elmnt.offsetLeft >= offWidth && event.target.offsetWidth === offWidth) {
				elmnt.style.left = offWidth - 110 + "px"
			}
		}


		console.log("valueMouseMoveArea : " + valueMouseMoveArea)
		console.log("simsalabim : " + simsalabim)
		// elmnt.style.left = valueMouseMoveArea + "px"
		// // console.log("elmnt.offsetLeft : "+ elmnt.offsetLeft);
		// if (elmnt.offsetLeft < answer.offsetWidth) {
		// 	elmnt.style.left = pos3 + "px"
		// }
		// else if (elmnt.offsetLeft > answer.offsetWidth-50) { elmnt.style.left = answer.offsetWidth-25 + "px"}
		// else if (elmnt.offsetLeft - pos1 >= answer) {
		//          elmnt.style.left =answer+"px"
		//          }
		// else {elmnt.style.left = "0px";}

		// }

	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}