interface View {
	_element_id?: string,
	_elem?: any,
	_sign?: string,
	_min_limit?: number,
	_max_limit?: number,
	_slider_Start_Position?: number,
	_slider_End_Position?: number,
	_slider_type?: string
}
class View {

	constructor(par: View) {
		this._element_id,
		this._elem,
		this._sign,
		this._min_limit,
		this._max_limit,
		this._slider_Start_Position,
		this._slider_End_Position,
		this._slider_type
	}

	view_fasade(param: View) {
		this._element_id = param._element_id
		this._elem = document.getElementById(param._element_id)
		this._sign = param._sign || "₽"
		this._min_limit = param._min_limit || 0
		this._max_limit = param._max_limit  || 1000
		this._slider_Start_Position = param._slider_Start_Position || 200
		this._slider_End_Position = param._slider_End_Position || 800
		this._slider_type = param._slider_type || "none"
		this.create_stuff()
	}
	create_stuff() {
		if (this._elem) {
			if (this._slider_type == "duble") {
			this._elem.innerHTML = '<div id="value-field">'+'<span id="value1-field"></span>'+'-'+
			'<span id="value2-field"></span>'+'</div>'+'<div id="drag2_value"></div>'+
			'<div id="ias-slider-drag2" class="drag"></div>'+'<div id="drag3_value"></div>'+
			'<div id="ias-slider-drag3" class="drag"></div>'+'</div>'+
			'<div id="colorBar"></div>';


		} else if (this._slider_type == "single") {
			this._elem.innerHTML = '<div id="value-field"></div>'+
			'<div id="colorBar"></div>';
		} else {throw console.error("Неправильно задан параметр для _slider_type");
	}
	}
		 else {throw console.error("На странице не существует указанного _element_id для создания слайдера или он просто не указан");
		}
		// this.par.innerHTML = el;
	this.create_listeners();
	}

	create_listeners () {
		if (this._slider_type == "duble") {
			console.log("create_listeners рабоатет")
			this.drag_elements();
		}
	}
	drag_elements() {
		console.log("drag_elements работает")
		let el = document.querySelector("#" + this._element_id);
		console.log("el работает" + el);
		(el.querySelector("#ias-slider-drag2")  as HTMLElement).onmousedown= this.drag_mouse_down_1;
		//написать нормальную реализацию чтобы не повторять код
		(el.querySelector("#ias-slider-drag3") as HTMLElement).onmousedown = this.drag_mouse_down_2;
	}

	drag_mouse_down_1 = (e:Event) => {
		console.log("drag_mouse_down_1 работает")
		e.preventDefault(); // отменили все действия которые происходили раньше
		document.onmouseup = this.close_drag_element; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this.manipulate__element_drag_1; // событие, произойдет если сдвинуть мышу
	}
	drag_mouse_down_2 = (e:Event) => {
		console.log("drag_mouse_down_2 работает")
		e.preventDefault(); // отменили все действия которые происходили раньше
		document.onmouseup = this.close_drag_element; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this.manipulate__element_drag_2; // событие, произойдет если сдвинуть мышу
	}

	manipulate__element_drag_1 = (e: MouseEvent) => {
		console.log("manipulate__element_drag_1 работает")
		let parent_element = document.querySelector("#"+this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_x = parent_position.left;//размещение контейнера относительно левого края экрана


		let slider_1 = parent_element.querySelector("#ias-slider-drag2") as HTMLElement;
		let slider_1_width = slider_1.offsetWidth;
		let slider_1_position_left_x_axis = slider_1.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_1_position_left_x_axis : " + slider_1_position_left_x_axis + " pageXOffset : " + pageXOffset);

		let slider_2 = parent_element.querySelector("#ias-slider-drag3") as HTMLElement;
		let slider_2_width = slider_1.offsetWidth;
		let slider_2_position_left_x_axis = slider_2.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_2_position_left_x_axis : " + slider_2_position_left_x_axis + " pageXOffset : " + pageXOffset);

		this.manipulate__ribon(slider_1_position_left_x_axis, slider_2_position_left_x_axis);
		this.math__sliders_value(parent_width, slider_1_position_left_x_axis, slider_2_position_left_x_axis);

		if (e.clientX > parent_width + parent_position_x) {

		 slider_1.style.left = (parent_width - (slider_1_width/2)) + "px"

		} else if (e.clientX < parent_position_x) {

		 slider_1.style.left =(slider_1_width/(-2)) +'px'

		} else {
		 slider_1.style.left = (e.clientX - parent_position_x - (slider_1_width/2)) + "px";
		};

		if (slider_2_position_left_x_axis + parent_position_x < e.clientX + (slider_1_width/2)) {
		 slider_1.style.left = (slider_2_position_left_x_axis - 30) + "px"
		}
	}

	manipulate__element_drag_2 = (e: MouseEvent)  => {
		console.log("manipulate__element_drag_2 работает")
		console.log("this._elem_2 работает: "  + this._elem)
		let parent_element = document.querySelector("#"+this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_x = parent_position.left;//размещение контейнера относительно левого края экрана
		console.log("parent_element.offsetWidth работает " + parent_element.offsetWidth + "   parent_position_x работает " + parent_position_x + "  ")

		let slider_1 = parent_element.querySelector("#ias-slider-drag2") as HTMLElement;
		console.log("slider_1.offsetWidth работает: "  + slider_1.offsetWidth)
		let slider_1_width = slider_1.offsetWidth;
		let slider_1_position_left_x_axis = slider_1.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_1_position_left_x_axis : " + slider_1_position_left_x_axis + " pageXOffset : " + pageXOffset);

		let slider_2 = parent_element.querySelector("#ias-slider-drag3") as HTMLElement;
		let slider_2_width = slider_2.offsetWidth;
		let slider_2_position_left_x_axis = slider_2.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_2_position_left_x_axis : " + slider_2_position_left_x_axis + " pageXOffset : " + pageXOffset);

		this.manipulate__ribon(slider_1_position_left_x_axis, slider_2_position_left_x_axis);
		this.math__sliders_value(parent_width, slider_1_position_left_x_axis, slider_2_position_left_x_axis);

		if (e.clientX > parent_width + parent_position_x) { //если курсор выходит за пределы элемента справа

		 slider_2.style.left = (parent_width -(slider_2_width/2)) + "px"

		} else if (e.clientX < parent_position_x) { //если курсор выходит за пределы элемента слева

		 slider_2.style.left =(slider_2_width/(-2)) +'px'

		} else { //если курсор внутри элемента
		 slider_2.style.left = (e.clientX - parent_position_x - (slider_2_width/2)) + "px";
		};

		if (slider_1_position_left_x_axis + parent_position_x >= e.clientX - (slider_2_width*1.5)) {
		 slider_2.style.left = (slider_1_position_left_x_axis + slider_2_width) + "px"
		}
	}

	manipulate__ribon(slider_1_position_left_x_axis: number, slider_2_position_left_x_axis: number) {

		let ribon = document.getElementById("colorBar");
		ribon.style.left = 15 + slider_1_position_left_x_axis + "px";
		ribon.style.width = slider_2_position_left_x_axis - slider_1_position_left_x_axis + "px";

	}

	math__sliders_value(give_parent_width: number, slider_1_position_left_x_axis: number, slider_2_position_left_x_axis: number) {
		// give_parent_width - ширина поля слайдера
		// parent_position_x  - отступ поля слайдера от края экрана по оси X
		// slider_1_position_left_x_axis - позиция слайдера №1
		// slider_2_position_left_x_axis - позиция слайдера №2

		// необходимо реализовать перемещение поля вслед за ползунком

		let minLimit = this._min_limit;
		let maxLimit = this._max_limit;
		let parent_width = give_parent_width;
		let calculate = (maxLimit - minLimit) / parent_width;


		let value1 = document.getElementById("drag2_value");
		let value2 = document.getElementById("drag3_value");


		value1.style.left = slider_1_position_left_x_axis + 7.5 + "px";

		value2.style.left = slider_2_position_left_x_axis + 7.5 + "px";

		value1.innerText = Math.floor((slider_1_position_left_x_axis + 15) * calculate);

		value2.innerText = Math.ceil((slider_2_position_left_x_axis + 15) * calculate);

		let value1Field = document.getElementById("value1-field");

		let value2Field = document.getElementById("value2-field");

		value1Field.innerText = Math.floor((slider_1_position_left_x_axis + 15) * calculate) + " " + this._sign;

		value2Field.innerText = Math.ceil((slider_2_position_left_x_axis + 15) * calculate) + " " + this._sign;
	}

	close_drag_element = () => {
		/* stop moving when mouse button is released:*/
		console.log("close_drag_element работает")
		document.onmouseup = null;
		document.onmousemove = null;
	}
};

let param = {};
let view = new View(param);
view.view_fasade({_element_id:"ias-slider_parent", _slider_type: "duble"})