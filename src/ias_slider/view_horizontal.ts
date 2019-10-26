interface View_horizontal {
	_element_id?: string,
	_elem?: any,
	_sign?: string,
	_min_start_slider?: number,
	_max_start_slider?: number,
	_min_slider_value?: number,
	_max_slider_value?: number,
	_slider_type?: string,
	_step?: number,
	controller?: any;
};
class View_horizontal {

	constructor(param: View_horizontal) {
		this._element_id = param._element_id;
		this._elem = document.getElementById(param._element_id);
		this._sign = param._sign || "₽";
		this._min_start_slider = param._min_start_slider || 0;
		this._max_start_slider = param._max_start_slider || 1000;
		this._min_slider_value = param._min_slider_value || 200;
		this._max_slider_value = param._max_slider_value || 800;
		this._slider_type = param._slider_type || "single";
		this._step = param._step || 2

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
					'<div id="ias-slider__duble_1_horizontal" class="drag"></div>' +
					'<div id="ias-slider__duble_fly-value-2"></div>' +
					'<div id="ias-slider__duble_2_horizontal" class="drag"></div>' +
					'<div id="color-bar_horizontal"></div>';

				this.create_ribon();

			} else if (this._slider_type == "single") {
				this._elem.innerHTML = '<div id="value-field">' +
					'<span id="value_field_single"></span>' +
					'</div>' +
					'<div id="color-bar_horizontal"></div>' +
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

			let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;
			let slider_1_width = slider_1.offsetWidth;
			let slider_1_position_left_x_axis = slider_1.offsetLeft;

			let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;
			let slider_2_width = slider_2.offsetWidth;
			let slider_2_position_left_x_axis = slider_2.offsetLeft;

			let ribon = document.getElementById("color-bar_horizontal");

			ribon.style.left = (slider_1_width / 2) + slider_1_position_left_x_axis + "px";
			ribon.style.width = slider_2_position_left_x_axis - slider_1_position_left_x_axis + "px";

		} else if (this._slider_type == "single") {
			let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

			let slider_1 = parent_element.querySelector("#ias-slider__single") as HTMLElement;
			let slider_1_width = slider_1.offsetWidth;
			let slider_1_position_left_x_axis = slider_1.offsetLeft;

			let ribon = document.getElementById("color-bar_horizontal");

			ribon.style.left = "0px";
			ribon.style.width = slider_1_position_left_x_axis + "px";
		}
	}

	_create_listeners() {
		if (this._slider_type == "duble") {
			console.log("create_listeners рабоатет")
			this._drag_events();
		} else if (this._slider_type == "single") {
			console.log("создан одиночный слайдер")
			this._drag_event_single();
		}
	}

	_drag_event_single() {
		let el = document.querySelector("#" + this._element_id);
		(el.querySelector("#ias-slider__single") as HTMLElement).onmousedown = this._drag_mouse_down_single;
	};

	_drag_events() {
		console.log("drag_event работает")
		let el = document.querySelector("#" + this._element_id);
		console.log("el работает" + el);
		(el.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement).onmousedown = this._drag_mouse_down_1;
		//написать нормальную реализацию чтобы не повторять код
		(el.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement).onmousedown = this._drag_mouse_down_2;
	};
	_drag_mouse_down_single = (e: Event) => {
		e.preventDefault();
		document.onmouseup = this._close_drag_element; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._drag_element_single;
	}

	_drag_element_single = (e: MouseEvent) => {
		console.log("drag_element_single работает")
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_x = parent_position.left;//размещение контейнера относительно левого края экрана

		let slider_single = parent_element.querySelector("#ias-slider__single") as HTMLElement;
		let slider_1_width = slider_single.offsetWidth;
		let slider_1_position_left_x_axis = slider_single.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя

		this._drag_ribon_auto_single(slider_1_position_left_x_axis);
		this._math__sliders_value_single(parent_width, slider_1_position_left_x_axis);

		if (e.clientX > parent_width + parent_position_x) {

			slider_single.style.left = (parent_width - (slider_1_width / 2)) + "px"

		} else if (e.clientX < parent_position_x) {

			slider_single.style.left = (slider_1_width / (-2)) + 'px'

		} else {
			slider_single.style.left = (e.clientX - parent_position_x - (slider_1_width / 2)) + "px";
		};


	}

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
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_x = parent_position.left;//размещение контейнера относительно левого края экрана


		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;
		let slider_1_width = slider_1.offsetWidth;
		let slider_1_position_left_x_axis = slider_1.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_1_position_left_x_axis : " + slider_1_position_left_x_axis + " pageXOffset : " + pageXOffset);

		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;
		let slider_2_width = slider_1.offsetWidth;
		let slider_2_position_left_x_axis = slider_2.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_2_position_left_x_axis : " + slider_2_position_left_x_axis + " pageXOffset : " + pageXOffset);

		this._drag_ribon_auto(slider_1_position_left_x_axis, slider_2_position_left_x_axis);
		// this._math__sliders_value(parent_width, slider_1_position_left_x_axis, slider_2_position_left_x_axis); // РАБОЧАЯ ФУНКЦИЯ


		// if (e.clientX > parent_width + parent_position_x) { // РАБОЧАЯ ФУНКЦИЯ

		// 	slider_1.style.left = (parent_width - (slider_1_width / 2)) + "px"

		// } else if (e.clientX < parent_position_x) {

		// 	slider_1.style.left = (slider_1_width / (2)) + 'px'

		// } else {
		// 	slider_1.style.left = (e.clientX - parent_position_x - (slider_1_width / 2)) + "px";
		// };

		// if (slider_2_position_left_x_axis + parent_position_x < e.clientX + (slider_1_width / 2)) {
		// 	slider_1.style.left = (slider_2_position_left_x_axis - 30) + "px"
		// }
		// this.facade_view_set_param_controller();
		// this.NEW_math__sliders_value(parent_width, slider_1, slider_2); // ЭКСПЕРИМЕТНАТЛЬНАЯ ФУНКЦИЯ
		this._step_implementation(e, parent_element, slider_1, slider_2); // ЭКСПЕРИМЕТНАТЛЬНАЯ ФУНКЦИЯ
	};

	_drag_element_2 = (e: MouseEvent) => {
		console.log("drag_element_2 работает")
		console.log("this._elem_2 работает: " + this._elem)
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_x = parent_position.left;//размещение контейнера относительно левого края экрана
		console.log("parent_element.offsetWidth работает " + parent_element.offsetWidth + "   parent_position_x работает " + parent_position_x + "  ")

		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;
		console.log("slider_1.offsetWidth работает: " + slider_1.offsetWidth)
		let slider_1_width = slider_1.offsetWidth;
		let slider_1_position_left_x_axis = slider_1.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_1_position_left_x_axis : " + slider_1_position_left_x_axis + " pageXOffset : " + pageXOffset);

		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;
		let slider_2_width = slider_2.offsetWidth;
		let slider_2_position_left_x_axis = slider_2.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_2_position_left_x_axis : " + slider_2_position_left_x_axis + " pageXOffset : " + pageXOffset);

		this._drag_ribon_auto(slider_1_position_left_x_axis, slider_2_position_left_x_axis);
		// this._math__sliders_value(parent_width, slider_1_position_left_x_axis, slider_2_position_left_x_axis); // РАБОЧАЯ ФУНКЦИЯ


		// if (e.clientX > parent_width + parent_position_x) { //если курсор выходит за пределы элемента справа РАБОЧАЯ ФУНКЦИЯ

		// 	slider_2.style.left = (parent_width - (slider_2_width / 2)) + "px"

		// } else if (e.clientX < parent_position_x) { //если курсор выходит за пределы элемента слева

		// 	slider_2.style.left = (slider_2_width / (2)) + 'px'

		// } else { //если курсор внутри элемента
		// 	slider_2.style.left = (e.clientX - parent_position_x - (slider_2_width / 2)) + "px";
		// };

		// if (slider_1_position_left_x_axis + parent_position_x >= e.clientX - (slider_2_width * 1.5)) {
		// 	slider_2.style.left = (slider_1_position_left_x_axis + slider_2_width) + "px"
		// }
		// this.facade_view_set_param_controller();

		// this.NEW_math__sliders_value(parent_width, slider_1, slider_2); // ЭКСПЕРИМЕТНАТЛЬНАЯ ФУНКЦИЯ
		this._step_implementation(e, parent_element, slider_2, slider_1); // ЭКСПЕРИМЕТНАТЛЬНАЯ ФУНКЦИЯ
	};

	_drag_ribon_auto_single(slider_1_position_left_x_axis: number) {

		let ribon = document.getElementById("color-bar_horizontal");
		ribon.style.left = 0 + "px";
		ribon.style.width = slider_1_position_left_x_axis + "px";

	};

	_drag_ribon_auto(slider_1_position_left_x_axis: number, slider_2_position_left_x_axis: number) {

		let ribon = document.getElementById("color-bar_horizontal");
		ribon.style.left = 15 + slider_1_position_left_x_axis + "px";
		ribon.style.width = slider_2_position_left_x_axis - slider_1_position_left_x_axis + "px";

	};

	_math__sliders_value_single(give_parent_width: number, slider_1_position_left_x_axis: number) {


		let minLimit = this._min_start_slider;
		let maxLimit = this._max_start_slider;
		let parent_width = give_parent_width;
		let calculate = (maxLimit - minLimit) / parent_width;


		let value_field_1 = document.getElementById("ias-slider__single_fly-value");

		value_field_1.innerText = Math.floor((slider_1_position_left_x_axis + 15) * calculate) + " " + this._sign;

		value_field_1.style.left = slider_1_position_left_x_axis + 7.5 + "px";

		let value_field_single_static = document.getElementById("value_field_single");

		value_field_single_static.innerText = Math.floor((slider_1_position_left_x_axis + 15) * calculate) + " " + this._sign;

	};

	_math__sliders_value(give_parent_width: number, slider_1_position_left_x_axis: number, slider_2_position_left_x_axis: number) {
		// give_parent_width - ширина поля слайдера
		// parent_position_x  - отступ поля слайдера от края экрана по оси X
		// slider_1_position_left_x_axis - позиция слайдера №1
		// slider_2_position_left_x_axis - позиция слайдера №2

		// необходимо реализовать перемещение поля вслед за ползунком

		let minLimit = this._min_start_slider;
		let maxLimit = this._max_start_slider;
		let parent_width = give_parent_width;
		let calculate = (maxLimit - minLimit) / parent_width;


		let value_field_1 = document.getElementById("ias-slider__duble_fly-value-1");
		let value_field_2 = document.getElementById("ias-slider__duble_fly-value-2");

		value_field_1.innerText = Math.floor((slider_1_position_left_x_axis + 15) * calculate) + " " + this._sign;
		value_field_2.innerText = Math.ceil((slider_2_position_left_x_axis + 15) * calculate) + " " + this._sign;

		value_field_1.style.left = slider_1_position_left_x_axis + 7.5 + "px";
		value_field_2.style.left = slider_2_position_left_x_axis + 7.5 + "px";

		let value_field_1_static = document.getElementById("value_field_1-field");
		let value_field_2_static = document.getElementById("value_field_2-field");

		value_field_1_static.innerText = Math.floor((slider_1_position_left_x_axis + 15) * calculate) + " " + this._sign;
		value_field_2_static.innerText = Math.ceil((slider_2_position_left_x_axis + 15) * calculate) + " " + this._sign;
	};

	NEW_math__sliders_value(give_parent_width: number, slider_1: HTMLElement, slider_2: HTMLElement) {
		// give_parent_width - ширина поля слайдера
		// parent_position_x  - отступ поля слайдера от края экрана по оси X
		// slider_1_position_left_x_axis - позиция слайдера №1
		// slider_2_position_left_x_axis - позиция слайдера №2

		// необходимо реализовать перемещение поля вслед за ползунком

		let slider_1_width = slider_1.offsetWidth;
		let slider_1_position_left_x_axis = slider_1.offsetLeft;


		let slider_2_width = slider_2.offsetWidth;
		let slider_2_position_left_x_axis = slider_2.offsetLeft;

		let minLimit = this._min_start_slider;
		let maxLimit = this._max_start_slider;
		let parent_width = give_parent_width;
		let calculate = (maxLimit - minLimit) / parent_width;

		let slider_1_math_value = Math.floor((slider_1_position_left_x_axis + (slider_1_width / 2)) * calculate);
		let residue_slider_1 = slider_1_math_value % this._step;

		if (residue_slider_1 != 0 && residue_slider_1 >= this._step / 2) {
			slider_1_math_value += residue_slider_1
		} else if (residue_slider_1 != 0 && residue_slider_1 < this._step / 2) {
			slider_1_math_value -= residue_slider_1
		} else if (residue_slider_1 == 0) {
			slider_1_math_value = slider_1_math_value
		}

		let slider_2_math_value = Math.ceil((slider_2_position_left_x_axis + (slider_2_width / 2)) * calculate);
		let residue_slider_2 = slider_2_math_value % this._step;

		if (residue_slider_2 != 0 && residue_slider_2 >= this._step / 2) {
			slider_2_math_value += residue_slider_2
		} else if (residue_slider_2 != 0 && residue_slider_2 < this._step / 2) {
			slider_2_math_value -= residue_slider_2
		} else if (residue_slider_1 == 0) {
			slider_2_math_value = slider_2_math_value
		}

		let value_field_1 = document.getElementById("ias-slider__duble_fly-value-1");
		let value_field_2 = document.getElementById("ias-slider__duble_fly-value-2");

		console.log("slider_1_math_value : " + slider_1_math_value)
		value_field_1.innerText = slider_1_math_value + " " + this._sign;
		console.log("slider_2_math_value : " + slider_2_math_value)
		value_field_2.innerText = slider_2_math_value + " " + this._sign;

		value_field_1.style.left = slider_1_position_left_x_axis + (slider_1_width / 2) + "px";
		value_field_2.style.left = slider_2_position_left_x_axis + (slider_2_width / 2) + "px";

		let value_field_1_static = document.getElementById("value_field_1-field");
		let value_field_2_static = document.getElementById("value_field_2-field");

		value_field_1_static.innerText = Math.floor((slider_1_position_left_x_axis + 15) * calculate) + " " + this._sign;
		value_field_2_static.innerText = Math.ceil((slider_2_position_left_x_axis + 15) * calculate) + " " + this._sign;
	};

	_step_implementation(e: MouseEvent, parent: HTMLElement, modified_object: HTMLElement, static_object?: HTMLElement) {
		if (static_object) {
			let parent_global = parent.getBoundingClientRect(); // указание на контейнер родителя
			let parent_position_x = parent_global.left; // смещение слева от экрана
			let parent_width = parent.offsetWidth; // ширина контейнера

			let different = (this._max_start_slider - this._min_start_slider)/parent_width; // кратная разница между размером поля и денежными рамками

			let pixel_step = parent_width / (this._step/different); // количество шагов

			let modified_object_position = modified_object.offsetLeft; //смещение относительно левого верхнего угла родителя по Х
			let modified_object_width = modified_object.offsetWidth; // ширина ползунка

			let static_object_position = static_object.offsetLeft; //смещение относительно левого верхнего угла родителя по Х

			if (modified_object_position < static_object_position) {
				// console.log("MODULO :" + modulo)
				// console.log("modified_object_position ДО :" + modified_object_position)
				if (e.clientX > static_object_position + parent_position_x - modified_object_width || static_object_position - modified_object_position < pixel_step) { //если курсор наводится на элемент справа
					modified_object.style.left = static_object_position - pixel_step + "px";
					// console.log("modified_object_position ПОСЛЕ :" + modified_object_position)
				} else if (e.clientX < parent_position_x) {
					modified_object.style.left = "0px";
					// console.log("modified_object_position ПОСЛЕ :" + modified_object_position)
				} else if (e.clientX > parent_position_x && e.clientX < static_object_position + parent_position_x - pixel_step) {
					let new_position = Math.floor((e.clientX - parent_position_x)/pixel_step);
					modified_object.style.left = (pixel_step * new_position) + "px";
					// console.log("modified_object_position ПОСЛЕ :" + modified_object_position)
					// console.log("new_position : " + new_position)
					// console.log("pixel_step : " + pixel_step)
				}
			};

			if (modified_object_position > static_object_position) {
				if (e.clientX - pixel_step < static_object_position + parent_position_x) {
					modified_object.style.left = static_object_position + pixel_step + "px";
				} else if (e.clientX - pixel_step > parent_position_x + parent_width - pixel_step) {
					modified_object.style.left = parent_width + "px";
				} else if (parent_position_x + static_object_position < e.clientX && e.clientX < parent_position_x + parent_width) {
					let new_position = Math.floor((e.clientX - parent_position_x)/pixel_step);
					modified_object.style.left = (pixel_step * new_position) + "px";
				}
			};

		} else {
			console.error("Что-то пошло не так...")
		}
	}

	_close_drag_element = () => {
		/* stop moving when mouse button is released:*/
		console.log("close_drag_element работает")
		document.onmouseup = null;
		document.onmousemove = null;
	};
};
export { View_horizontal };
// let param = {};
// let view = new View(param);
// view.view_code_start({ _element_id: "ias-slider_parent", _slider_type: "duble" })