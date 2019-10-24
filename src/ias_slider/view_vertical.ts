interface View_vertical {
	_element_id?: string,
	_elem?: any,
	_sign?: string,
	_min_start_slider?: number,
	_max_start_slider?: number,
	_min_slider_value?: number,
	_max_slider_value?: number,
	_slider_type?: string,
	controller?: any;
};
class View_vertical {

	constructor(param: View_vertical) {
		this._element_id = param._element_id;
		this._elem = document.getElementById(param._element_id);
		this._sign = param._sign || "₽";
		this._min_start_slider = param._min_start_slider || 0;
		this._max_start_slider = param._max_start_slider || 1000;
		this._min_slider_value = param._min_slider_value || 200;
		this._max_slider_value = param._max_slider_value || 800;
		this._slider_type = param._slider_type || "single";

		// this.controller = controller;
	};

	view_code_start(controller: any) { // а оно здесь надо??
		this.controller = controller
	// 	this._element_id = param._element_id
	// 	this._elem = document.getElementById(param._element_id)
	// 	this._sign = param._sign || "₽"
	// 	this._min_start_slider = param._min_start_slider || 0
	// 	this._max_start_slider = param._max_start_slider || 1000
	// 	this._min_slider_value = param._min_slider_value || 200
	// 	this._max_slider_value = param._max_slider_value || 800
	// 	this._slider_type = param._slider_type || "none"
	// 	this.create_stuff()
	};

	facade_view_set_param_view(obj: Object) { // done ? принимает данные из контроллера и перестраивает view
		for (let a in obj) {
			if (a in this) {
				this[a] = obj[a]
			}
		};
		this.create_stuff();
	};

	facade_view_set_param_controller() { // done ? передает данные в фасад контроллера
		let obj = {
			min_limit: this._min_start_slider,
		_max_start_slider: this._max_start_slider,
		};
		this.controller.facade_controller_set_from_view(obj);
	};

	create_stuff() {
		if (this._elem) {
			if (this._slider_type == "duble") {
				this._elem.innerHTML =
					'<div id="value-field">' +
					'<span id="value_field_1-field"></span>' + '-' +
					'<span id="value_field_2-field"></span>' +
					'</div>' +
					'<div id="ias-slider__duble_fly-value-1"></div>' +
					'<div id="ias-slider__duble_1_vertical" class="drag"></div>' +
					'<div id="ias-slider__duble_fly-value-2"></div>' +
					'<div id="ias-slider__duble_2_vertical" class="drag"></div>' +
					'<div id="color-bar_vertical"></div>';

				this.create_ribon();

			} else if (this._slider_type == "single") {
				this._elem.innerHTML = '<div id="value-field"></div>' +
					'<div id="color-bar_vertical"></div>' +
					'<div id="ias-slider__single_fly-value"></div>' +
					'<div id="ias-slider__single" class="drag"></div>';

				this.create_ribon();
			} else {
				throw console.error("Неправильно задан параметр для _slider_type");
			}
		}
		else {
			throw console.error("На странице не существует указанного _element_id для создания слайдера или он просто не указан");
		}

		this._create_listeners();
	};

	create_ribon() {

		if (this._slider_type == "duble") {
			let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

			let slider_1 = parent_element.querySelector("#ias-slider__duble_1_vertical") as HTMLElement;
			let slider_1_height = slider_1.offsetHeight;
			let slider_1_position_top_y_axis = slider_1.offsetTop;

			let slider_2 = parent_element.querySelector("#ias-slider__duble_2_vertical") as HTMLElement;
			let slider_2_height = slider_2.offsetHeight;
			let slider_2_position_top_y_axis = slider_2.offsetTop;

			let ribon = document.getElementById("color-bar_vertical");

			ribon.style.top = (slider_1_height/2) + slider_1_position_top_y_axis + "px";
			ribon.style.height = slider_2_position_top_y_axis - slider_1_position_top_y_axis + "px";

		} else if (this._slider_type == "single") {
			let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

			let slider_1 = parent_element.querySelector("#ias-slider__single") as HTMLElement;
			let slider_1_height = slider_1.offsetHeight;
			let slider_1_position_top_y_axis = slider_1.offsetTop;

			let ribon = document.getElementById("color-bar_vertical");

			ribon.style.top =   slider_1_position_top_y_axis + "px";
			ribon.style.height = slider_1_position_top_y_axis + "px";
		}
	}

	_create_listeners() {
		if (this._slider_type == "duble") {
			console.log("create_listeners рабоатет")
			this._drag_events();
		}
	};

	_drag_events() {
		console.log("drag_event работает")
		let el = document.querySelector("#" + this._element_id);
		console.log("el работает" + el);
		(el.querySelector("#ias-slider__duble_1_vertical") as HTMLElement).onmousedown = this._drag_mouse_down_1;
		//написать нормальную реализацию чтобы не повторять код
		(el.querySelector("#ias-slider__duble_2_vertical") as HTMLElement).onmousedown = this._drag_mouse_down_2;
	};

	_drag_mouse_down_1 = (e: Event) => {
		console.log("drag_mouse_down_1 работает")
		e.preventDefault(); // отменили все действия которые происходили раньше
		document.onmouseup = this._close_drag_element; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._drag_element_1; // событие, произойдет если сдвинуть мышу
	};

	_drag_mouse_down_2 = (e: Event) => {
		console.log("drag_mouse_down_2 работает")
		e.preventDefault(); // отменили все действия которые происходили раньше
		document.onmouseup = this._close_drag_element; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._drag_element_2; // событие, произойдет если сдвинуть мышу
	};

	_drag_element_1 = (e: MouseEvent) => {
		console.log("drag_element_1 работает")
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_height = parent_element.offsetHeight;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_y = parent_position.top;//размещение контейнера относительно левого края экрана

		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_vertical") as HTMLElement;
		let slider_1_height = slider_1.offsetHeight;
		let slider_1_position_top_y_axis = slider_1.offsetTop; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_1_position_top_y_axis : " + slider_1_position_top_y_axis + " pageXOffset : " + pageXOffset);

		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_vertical") as HTMLElement;
		let slider_2_height = slider_1.offsetHeight;
		let slider_2_position_top_y_axis = slider_2.offsetTop; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_2_position_top_y_axis : " + slider_2_position_top_y_axis + " pageXOffset : " + pageXOffset);

		this._drag_ribon_auto(slider_1_position_top_y_axis, slider_2_position_top_y_axis);
		this._math__sliders_value(parent_height, slider_1_position_top_y_axis, slider_2_position_top_y_axis);

		if (e.clientY > parent_height + parent_position_y) {

			slider_1.style.top = (parent_height - (slider_1_height / 2)) + "px"

		} else if (e.clientY < parent_position_y) {

			slider_1.style.top = (slider_1_height / (-2)) + 'px'

		} else {
			slider_1.style.top = (e.clientY - parent_position_y - (slider_1_height / 2)) + "px";
		};

		if (slider_2_position_top_y_axis + parent_position_y < e.clientY + (slider_1_height / 2)) {
			slider_1.style.top = (slider_2_position_top_y_axis - 30) + "px"
		}
		// this.facade_view_set_param_controller();
	};

	_drag_element_2 = (e: MouseEvent) => {
		console.log("drag_element_2 работает")
		console.log("this._elem_2 работает: " + this._elem)
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_height = parent_element.offsetHeight;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_y = parent_position.top;//размещение контейнера относительно левого края экрана
		console.log("parent_element.offsetHeight работает " + parent_element.offsetHeight + "   parent_position_y работает " + parent_position_y + "  ")

		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_vertical") as HTMLElement;
		console.log("slider_1.offsetHeight работает: " + slider_1.offsetHeight)
		let slider_1_height = slider_1.offsetHeight;
		let slider_1_position_top_y_axis = slider_1.offsetTop; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_1_position_top_y_axis : " + slider_1_position_top_y_axis + " pageXOffset : " + pageXOffset);

		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_vertical") as HTMLElement;
		let slider_2_height = slider_2.offsetHeight;
		let slider_2_position_top_y_axis = slider_2.offsetTop; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_2_position_top_y_axis : " + slider_2_position_top_y_axis + " pageXOffset : " + pageXOffset);

		this._drag_ribon_auto(slider_1_position_top_y_axis, slider_2_position_top_y_axis);
		this._math__sliders_value(parent_height, slider_1_position_top_y_axis, slider_2_position_top_y_axis);

		if (e.clientY > parent_height + parent_position_y) { //если курсор выходит за пределы элемента справа

			slider_2.style.top = (parent_height - (slider_2_height / 2)) + "px"

		} else if (e.clientY < parent_position_y) { //если курсор выходит за пределы элемента слева

			slider_2.style.top = (slider_2_height / (-2)) + 'px'

		} else { //если курсор внутри элемента
			slider_2.style.top = (e.clientY - parent_position_y - (slider_2_height / 2)) + "px";
		};

		if (slider_1_position_top_y_axis + parent_position_y >= e.clientY - (slider_2_height * 1.5)) {
			slider_2.style.top = (slider_1_position_top_y_axis + slider_2_height) + "px"
		}
		// this.facade_view_set_param_controller();
	};

	_drag_ribon_auto(slider_1_position_top_y_axis: number, slider_2_position_top_y_axis: number) {

		let ribon = document.getElementById("color-bar_vertical");
		ribon.style.top = 15 + slider_1_position_top_y_axis + "px";
		ribon.style.height = slider_2_position_top_y_axis - slider_1_position_top_y_axis + "px";

	};

	_math__sliders_value(give_parent_height: number, slider_1_position_top_y_axis: number, slider_2_position_top_y_axis: number) {
		// give_parent_height - ширина поля слайдера
		// parent_position_y  - отступ поля слайдера от края экрана по оси X
		// slider_1_position_top_y_axis - позиция слайдера №1
		// slider_2_position_top_y_axis - позиция слайдера №2

		// необходимо реализовать перемещение поля вслед за ползунком

		let minLimit = this._min_start_slider;
		let maxLimit = this._max_start_slider;
		let parent_height = give_parent_height;
		let calculate = (maxLimit - minLimit) / parent_height;


		let value_field_1 = document.getElementById("ias-slider__duble_fly-value-1");
		let value_field_2 = document.getElementById("ias-slider__duble_fly-value-2");

		value_field_1.innerText = Math.floor((slider_1_position_top_y_axis + 15) * calculate) + " " + this._sign;
		value_field_2.innerText = Math.ceil((slider_2_position_top_y_axis + 15) * calculate) + " " + this._sign;

		value_field_1.style.top = slider_1_position_top_y_axis + 7.5 + "px";
		value_field_2.style.top = slider_2_position_top_y_axis + 7.5 + "px";

		let value_field_1_static = document.getElementById("value_field_1-field");
		let value_field_2_static = document.getElementById("value_field_2-field");

		value_field_1_static.innerText = Math.floor((slider_1_position_top_y_axis + 15) * calculate) + " " + this._sign;
		value_field_2_static.innerText = Math.ceil((slider_2_position_top_y_axis + 15) * calculate) + " " + this._sign;
	};

	_close_drag_element = () => {
		/* stop moving when mouse button is released:*/
		console.log("close_drag_element работает")
		document.onmouseup = null;
		document.onmousemove = null;
	};
};
export { View_vertical };
// let param = {};
// let view = new View(param);
// view.view_code_start({ _element_id: "ias-slider_parent", _slider_type: "duble" })