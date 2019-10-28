interface View_vertical {
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
					'<div id="ias-slider__duble_1_vertical" class="drag"></div>' +
					'<div id="ias-slider__duble_fly-value-2"></div>' +
					'<div id="ias-slider__duble_2_vertical" class="drag"></div>' +
					'<div id="color-bar_vertical"></div>';

				this.create_ribon();

			} else if (this._slider_type == "single") {
				this._elem.innerHTML = this._elem.innerHTML =
					'<div id="value-field">' +
					'<span id="value_field_single"></span>' +
					'</div>' +
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

			ribon.style.top = (slider_1_height / 2) + slider_1_position_top_y_axis + "px";
			ribon.style.height = slider_2_position_top_y_axis - slider_1_position_top_y_axis + "px";

		} else if (this._slider_type == "single") {
			let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

			let slider_1 = parent_element.querySelector("#ias-slider__single") as HTMLElement;
			let slider_1_height = slider_1.offsetHeight;
			let slider_1_position_top_y_axis = slider_1.offsetTop;

			let ribon = document.getElementById("color-bar_vertical");

			ribon.style.top = slider_1_position_top_y_axis + "px";
			ribon.style.height = slider_1_position_top_y_axis + "px";
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
	};

	_drag_event_single() {
		let el = document.querySelector("#" + this._element_id);
		(el.querySelector("#ias-slider__single") as HTMLElement).onmousedown = this._drag_mouse_down_single;
	};

	_drag_events() {
		console.log("drag_event работает")
		let el = document.querySelector("#" + this._element_id);
		console.log("el работает" + el);
		(el.querySelector("#ias-slider__duble_1_vertical") as HTMLElement).onmousedown = this._drag_mouse_down_1;
		//написать нормальную реализацию чтобы не повторять код
		(el.querySelector("#ias-slider__duble_2_vertical") as HTMLElement).onmousedown = this._drag_mouse_down_2;
	};

	_drag_mouse_down_single = (e: Event) => {
		e.preventDefault();
		document.onmouseup = this._close_drag_element; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._drag_element_single;
	}

	_drag_element_single = (e: MouseEvent) => {
		console.log("drag_element_single работает")
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_height = parent_element.offsetHeight;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_y = parent_position.top;//размещение контейнера относительно левого края экрана

		let slider_single = parent_element.querySelector("#ias-slider__single") as HTMLElement;
		let slider_single_height = slider_single.offsetHeight;
		let slider_single_position_top_y_axis = slider_single.offsetTop; // вычисляет верхний левый угол элемента от угла родителя

		let steps_in_money = (this._max_start_slider - this._min_start_slider) / this._step; // количество шагов
		let pixel_step = parent_height / steps_in_money; // размер шага в пикселях

		this._drag_ribon_auto_single(slider_single_position_top_y_axis);

		if (this._step >= slider_single_height) {
			this._step_implementation(e, parent_element, slider_single);; // Рабочая функция
		} else {
			if (e.clientY > parent_height + parent_position_y) {

				slider_single.style.top = (parent_height - (slider_single_height / 2)) + "px"

			} else if (e.clientY < parent_position_y + (slider_single_height / 2)) {

				slider_single.style.top =  '0px';

			} else {
				slider_single.style.top = (e.clientY - parent_position_y - (slider_single_height / 2)) + "px";
			};
			this._math__sliders_value_single(pixel_step, e);
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

		let steps_in_money = (this._max_start_slider - this._min_start_slider) / this._step; // размер шага в деньгах
		let pixel_step = parent_height / steps_in_money; // размер шага в пикселях


		this._drag_ribon_auto(slider_1_position_top_y_axis, slider_2_position_top_y_axis);

		if (this._step >= slider_1_height) {
			this._step_implementation(e, parent_element, slider_1, slider_2); // Рабочая функция
		} else {
			if (e.clientY > parent_height + parent_position_y) { // РАБОЧАЯ ФУНКЦИЯ

				slider_1.style.top = (parent_height - (slider_1_height / 2)) + "px"

			} else if (e.clientY < parent_position_y + (slider_1_height/ 2) ) {

				slider_1.style.top = '0px'

			} else {
				slider_1.style.top = (e.clientY - parent_position_y - (slider_1_height / 2)) + "px";
			};

			if (slider_2_position_top_y_axis + parent_position_y < e.clientY + (slider_1_height / 2)) {
				slider_1.style.top = (slider_2_position_top_y_axis - 30) + "px"
			};
			this._math__sliders_value_left(pixel_step, e);
		}

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


		let steps_in_money = (this._max_start_slider - this._min_start_slider) / this._step; // размер шага в деньгах
		let pixel_step = parent_height / steps_in_money; // размер шага в пикселях

		this._drag_ribon_auto(slider_1_position_top_y_axis, slider_2_position_top_y_axis);


		if (this._step >= slider_2_height) {
			this._step_implementation(e, parent_element, slider_2, slider_1); // Рабочая функция
		} else {
			if (e.clientY > parent_height + parent_position_y) { //если курсор выходит за пределы элемента справа РАБОЧАЯ ФУНКЦИЯ

				slider_2.style.top = (parent_height - (slider_2_height / 2)) + "px"

			} else if (e.clientY < parent_position_y) { //если курсор выходит за пределы элемента слева

				slider_2.style.top = (slider_2_height / (2)) + 'px'

			} else { //если курсор внутри элемента
				slider_2.style.top = (e.clientY - parent_position_y - (slider_2_height / 2)) + "px";
			};

			if (slider_1_position_top_y_axis + parent_position_y >= e.clientY - (slider_2_height * 1.5)) {
				slider_2.style.top = (slider_1_position_top_y_axis + slider_2_height) + "px"
			};
			this._math__sliders_value_right(pixel_step, e);
		}

	};

	_drag_ribon_auto_single(slider_single_position_top_y_axis: number) {

		let ribon = document.getElementById("color-bar_vertical");
		ribon.style.top = 0 + "px";
		ribon.style.height = slider_single_position_top_y_axis + "px";

	};

	_drag_ribon_auto(slider_1_position_top_y_axis: number, slider_2_position_top_y_axis: number) {

		let ribon = document.getElementById("color-bar_vertical");
		ribon.style.top = 15 + slider_1_position_top_y_axis + "px";
		ribon.style.height = slider_2_position_top_y_axis - slider_1_position_top_y_axis + "px";

	};

	_math__sliders_value_single(pixel_step: number, e: MouseEvent) {

		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

		let parent_global = parent_element.getBoundingClientRect(); // указание на контейнер родителя
		let parent_position_y = parent_global.top;

		let slider_single = parent_element.querySelector("#ias-slider__single") as HTMLElement;
		let slider_single_position_top_y_axis = slider_single.offsetTop;

		let value_field_single = parent_element.querySelector("#ias-slider__single_fly-value") as HTMLElement;
		let value_field_single_static = parent_element.querySelector("#value_field_single") as HTMLElement;
		let parent_height = parent_element.offsetHeight;

		let calculate = (this._max_start_slider - this._min_start_slider) / parent_height;

		let answer = Math.floor(slider_single_position_top_y_axis * calculate);


		if (e.clientY > parent_height + parent_position_y - pixel_step) {
			value_field_single.innerText = parent_height * calculate + this._sign;
			value_field_single_static.innerText = parent_height * calculate + " " + this._sign;
		} else {
			value_field_single.innerText = answer + " " + this._sign;
			value_field_single_static.innerText = answer + " " + this._sign;
		}

		value_field_single.style.top = slider_single_position_top_y_axis + "px";

	};

	_math__sliders_value_left(pixel_step: number, e: MouseEvent) {

		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_height = parent_element.offsetHeight;
		let parent_global = parent_element.getBoundingClientRect(); // указание на контейнер родителя

		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_vertical") as HTMLElement;
		let slider_1_position_top_y_axis = slider_1.offsetTop;

		let value_field_1 = parent_element.querySelector("#ias-slider__duble_fly-value-1") as HTMLElement;

		let value_field_1_static = parent_element.querySelector("#value_field_1-field") as HTMLElement;

		let calculate = (this._max_start_slider - this._min_start_slider) / parent_height;

		let answer1 = Math.floor(slider_1_position_top_y_axis * calculate);

		value_field_1.innerText = answer1 + " " + this._sign;

		value_field_1_static.innerText = answer1 + " " + this._sign;

		value_field_1.style.top = slider_1_position_top_y_axis - slider_1.offsetHeight / 2 + "px";

	};
	_math__sliders_value_right(pixel_step: number, e: MouseEvent) {

		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_height = parent_element.offsetHeight;
		let parent_global = parent_element.getBoundingClientRect(); // указание на контейнер родителя
		let parent_position_y = parent_global.top; // смещение слева от экрана


		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_vertical") as HTMLElement;
		let slider_2_position_top_y_axis = slider_2.offsetTop;

		let value_field_2 = parent_element.querySelector("#ias-slider__duble_fly-value-2") as HTMLElement;

		let value_field_2_static = parent_element.querySelector("#value_field_2-field") as HTMLElement;

		let calculate = (this._max_start_slider - this._min_start_slider) / parent_height;

		let answer2 = Math.floor(slider_2_position_top_y_axis * calculate);

		if (e.clientY > parent_height + parent_position_y - pixel_step) {
			value_field_2.innerText = this._max_start_slider + " " + this._sign;
			value_field_2_static.innerText = this._max_start_slider + " " + this._sign;
		} else {
			value_field_2.innerText = answer2 + " " + this._sign;
			value_field_2_static.innerText = answer2 + " " + this._sign;
		}

		value_field_2.style.top = slider_2_position_top_y_axis + slider_2.offsetHeight / 2 + "px";

	};

	_step_implementation(e: MouseEvent, parent: HTMLElement, modified_object: HTMLElement, static_object?: HTMLElement) {
		let parent_global = parent.getBoundingClientRect(); // указание на контейнер родителя
		let parent_position_y = parent_global.top; // смещение слева от экрана
		let parent_height = parent.offsetHeight; // ширина контейнера

		let steps_in_money = (this._max_start_slider - this._min_start_slider) / this._step; // количество шагов
		let different = (this._max_start_slider - this._min_start_slider) / parent_height;

		let pixel_step = parent_height / steps_in_money; // размер шага в пикселях

		let modified_object_position = modified_object.offsetTop; //смещение относительно левого верхнего угла родителя по Х
		let modified_object_width = modified_object.offsetHeight; // ширина ползунка


		if (static_object) {

			let static_object_position = static_object.offsetTop
;//смещение относительно левого верхнего угла родителя по Х

			if (modified_object_position < static_object_position) {

				if (e.clientY > static_object_position + parent_position_y - modified_object_width || static_object_position - modified_object_position < pixel_step) { //если курсор наводится на элемент справа
					modified_object.style.top = static_object_position - pixel_step + "px";

				} else if (e.clientY < parent_position_y) {
					modified_object.style.top = "0px";

				} else if (e.clientY > parent_position_y && e.clientY < static_object_position + parent_position_y - pixel_step) {
					let new_position = Math.floor((e.clientY - parent_position_y) / pixel_step);
					modified_object.style.top = (pixel_step * new_position) + "px";

				}
				this._math__sliders_value_left(pixel_step, e);

			};

			if (modified_object_position > static_object_position) {

				if (e.clientY - pixel_step < static_object_position + parent_position_y) {
					modified_object.style.top = static_object_position + pixel_step + "px";
				} else if (e.clientY > parent_position_y + parent_height - modified_object_width) {
					modified_object.style.top = parent_height - modified_object_width / 2 + "px";
				} else if (parent_position_y + static_object_position < e.clientY && e.clientY < parent_position_y + parent_height) {
					let new_position = Math.floor((e.clientY - parent_position_y) / pixel_step);
					modified_object.style.top = (pixel_step * new_position) + "px";
				}
				this._math__sliders_value_right(pixel_step, e);
			};

		} else {

			if (e.clientY < parent_position_y) {
				modified_object.style.top = 0 + "px";
			} else if (e.clientY > parent_position_y + parent_height - modified_object_width) {
				modified_object.style.top = parent_height - modified_object_width / 2 + "px";
			} else if (e.clientY > parent_position_y && e.clientY < parent_position_y + parent_height) {
				let new_position = Math.floor((e.clientY - parent_position_y) / pixel_step);
				modified_object.style.top = (pixel_step * new_position) + "px";
			}
			this._math__sliders_value_single(pixel_step, e);
		}



	}

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