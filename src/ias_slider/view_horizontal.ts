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
	tooltip?: string;
	value_field?: string
};

class View_horizontal {

	constructor(param: View_horizontal) {
		this._element_id = param._element_id;
		this._elem = document.getElementById(param._element_id);
		this._sign = param._sign || "₽";
		this._min_start_slider = Number(param._min_start_slider) || 0;
		this._max_start_slider = Number(param._max_start_slider) || 1000;
		this._min_slider_value = Number(param._min_slider_value) || 200;
		this._max_slider_value = Number(param._max_slider_value) || 800;
		this._slider_type = param._slider_type || "single";
		this._step = param._step || 2;
		this.tooltip = param.tooltip || "on";
		this.value_field = param.value_field || "on"

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
					'<div id= "ias-container">' +
					'<div id="ias-slider__duble_fly-value-1"  class="tooltip"></div>' +
					'<div id="ias-slider__duble_1_horizontal" class="drag"></div>' +
					'<div id="ias-slider__duble_fly-value-2" class="tooltip"></div>' +
					'<div id="ias-slider__duble_2_horizontal" class="drag"></div>' +
					'<div id="color-bar_horizontal"></div>' +
					'</div>';

				this.create_ribon();

			} else if (this._slider_type == "single") {
				this._elem.innerHTML = '<div id="value-field">' +
					'<span id="value_field_single"></span>' +
					'</div>' +
					'<div id= "ias-container">' +
					'<div id="color-bar_horizontal"></div>' +
					'<div id="ias-slider__single_fly-value" class="tooltip"></div>' +
					'<div id="ias-slider__single" class="drag"></div>' +
					'</div>';

				this.create_ribon();
			} else {
				throw console.error("Неправильно задан параметр для _slider_type");
			}
		} else {
			throw console.error("На странице не существует указанного _element_id для создания слайдера или он просто не указан");
		};
		this.set_visible_text_field();
		this._create_listeners();
	};

	set_visible_text_field = () => {
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

		let a = this._min_start_slider;
		let b = this._max_start_slider;
		let c = this._min_slider_value;
		let d = this._max_slider_value;
		console.log("до  этого момента ок")
		if (this._slider_type == "duble" && a < b && c < b && c < d && d <= b && c - a >= 0) {

			let value_field_1 = parent_element.querySelector("#value_field_1-field") as HTMLElement;
			let value_field_2 = parent_element.querySelector("#value_field_2-field") as HTMLElement;
			let value_field_1_fly = parent_element.querySelector("#ias-slider__duble_fly-value-1") as HTMLElement;
			let value_field_2_fly = parent_element.querySelector("#ias-slider__duble_fly-value-2") as HTMLElement;

			value_field_1.innerText = c + " " + this._sign;
			value_field_2.innerText = d + " " + this._sign;

			value_field_1_fly.innerText = c + " " + this._sign;
			value_field_2_fly.innerText = d + " " + this._sign;

			this.move_sliders_on_inizialization();

		}
		if (this._slider_type == "single" && a < b && c - a >= 0) {
			let value_field_single = parent_element.querySelector("#value_field_single") as HTMLElement;
			value_field_single.innerText = c + " " + this._sign;
			this.move_single_slider_on_inizialization()
		}



		if (this.tooltip == "off") {
			let tooltip = parent_element.getElementsByClassName("tooltip");
			for (let a of tooltip) {
				a.style.display = "none";
			}
		};

		if (this.value_field == "off") {
			let value_field = parent_element.querySelector("#value-field") as HTMLElement;
			value_field.style.display = "none";
		};

	};

	move_sliders_on_inizialization() {
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента

		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;

		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;

		let value_field_1 = parent_element.querySelector("#ias-slider__duble_fly-value-1") as HTMLElement;

		let value_field_2 = parent_element.querySelector("#ias-slider__duble_fly-value-2") as HTMLElement;


		let steps = (this._max_start_slider - this._min_start_slider) / this._step; // количество шагов
		let pixel_step = parent_width / steps; // размер шага в пикселях
		let first_slider_position = pixel_step * ((this._min_slider_value - this._min_start_slider) / this._step);
		console.log("view -first_slider_position  " + first_slider_position)
		let second_slider_position = pixel_step * ((this._max_slider_value - this._min_start_slider) / this._step);

		slider_1.style.left = first_slider_position + "px";
		slider_2.style.left = second_slider_position + "px";

		value_field_1.style.left = first_slider_position + "px";
		value_field_2.style.left = second_slider_position + "px";

		this.create_ribon();
	};

	move_single_slider_on_inizialization = () => {
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента

		let slider_single = parent_element.querySelector("#ias-slider__single") as HTMLElement;

		let value_field_single = parent_element.querySelector("#ias-slider__single_fly-value") as HTMLElement;

		let steps = (this._max_start_slider - this._min_start_slider) / this._step; // количество шагов

		let pixel_step = parent_width / steps; // размер шага в пикселях

		let first_slider_position = pixel_step * ((this._min_slider_value - this._min_start_slider) / this._step);

		slider_single.style.left = first_slider_position + "px";
		value_field_single.style.left = first_slider_position + "px";

		this.create_ribon();
	}

	create_ribon() {

		if (this._slider_type == "duble") {
			let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

			let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;
			let slider_1_width = slider_1.offsetWidth;
			let slider_1_position_left_x_axis = slider_1.offsetLeft;

			let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;
			let slider_2_width = slider_2.offsetWidth;
			let slider_2_position_left_x_axis = slider_2.offsetLeft;

			let ribon = parent_element.querySelector("#color-bar_horizontal") as HTMLElement;

			ribon.style.left = (slider_1_width / 2) + slider_1_position_left_x_axis + "px";
			ribon.style.width = slider_2_position_left_x_axis - slider_1_position_left_x_axis + "px";

		} else if (this._slider_type == "single") {
			let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

			let slider_1 = parent_element.querySelector("#ias-slider__single") as HTMLElement;
			let slider_1_width = slider_1.offsetWidth;
			let slider_1_position_left_x_axis = slider_1.offsetLeft;

			let ribon = parent_element.querySelector("#color-bar_horizontal") as HTMLElement;

			ribon.style.left = "0px";
			ribon.style.width = slider_1_position_left_x_axis + "px";
		}
	};

	_create_listeners() {
		if (this._slider_type == "duble") {
			// console.log("create_listeners рабоатет")
			this._drag_events();
		} else if (this._slider_type == "single") {
			// console.log("создан одиночный слайдер")
			this._drag_event_single();
		}
	};

	_drag_event_single() {
		let el = document.querySelector("#" + this._element_id);
		(el.querySelector("#ias-slider__single") as HTMLElement).onmousedown = this._drag_mouse_down_single;
	};

	_drag_events() {
		// console.log("drag_event работает")
		let el = document.querySelector("#" + this._element_id);
		// console.log("el работает" + el);
		(el.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement).onmousedown = this._drag_mouse_down_1;
		//написать нормальную реализацию чтобы не повторять код
		(el.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement).onmousedown = this._drag_mouse_down_2;
	};

	_drag_mouse_down_single = (e: Event) => {
		e.preventDefault();
		document.onmouseup = this._close_drag_element; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._drag_element_single;
	};

	_drag_element_single = (e: MouseEvent) => {
		// console.log("drag_element_single работает")
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_x = parent_position.left;//размещение контейнера относительно левого края экрана

		let slider_single = parent_element.querySelector("#ias-slider__single") as HTMLElement;
		let slider_1_width = slider_single.offsetWidth;
		let slider_1_position_left_x_axis = slider_single.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя

		let steps_in_money = (this._max_start_slider - this._min_start_slider) / this._step; // количество шагов
		let pixel_step = parent_width / steps_in_money; // размер шага в пикселях

		this._drag_ribon_auto_single(slider_1_position_left_x_axis);

		if (this._step >= slider_1_width) {
			this._step_implementation(e, parent_element, slider_single);; // Рабочая функция
		} else {
			if (e.clientX > parent_width + parent_position_x) {

				slider_single.style.left = (parent_width - (slider_1_width / 2)) + "px"

			} else if (e.clientX < parent_position_x + (slider_1_width / 2)) {

				slider_single.style.left = '0px';

			} else {
				slider_single.style.left = (e.clientX - parent_position_x - (slider_1_width / 2)) + "px";
			};
			this._math__sliders_value_single(pixel_step, e);
		};

	};

	_drag_mouse_down_1 = (e: Event) => {
		// console.log("drag_mouse_down_1 работает")
		e.preventDefault(); // отменили все действия которые происходили раньше
		document.onmouseup = this._close_drag_element; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._drag_element_1; // событие, произойдет если сдвинуть мышу
	};

	_drag_mouse_down_2 = (e: Event) => {
		// console.log("drag_mouse_down_2 работает")
		e.preventDefault(); // отменили все действия которые происходили раньше
		document.onmouseup = this._close_drag_element; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._drag_element_2; // событие, произойдет если сдвинуть мышу
	};

	_drag_element_1 = (e: MouseEvent) => {
		// console.log("drag_element_1 работает")
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_x = parent_position.left;//размещение контейнера относительно левого края экрана


		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;
		let slider_1_width = slider_1.offsetWidth;
		let slider_1_position_left_x_axis = slider_1.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя

		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;
		let slider_2_width = slider_1.offsetWidth;
		let slider_2_position_left_x_axis = slider_2.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя

		let steps_in_money = (this._max_start_slider - this._min_start_slider) / this._step; // количество шагов
		let pixel_step = parent_width / steps_in_money; // размер шага в пикселях

		this._drag_ribon_auto(slider_1_position_left_x_axis, slider_2_position_left_x_axis);

		if (this._step >= slider_1_width) {
			this._step_implementation(e, parent_element, slider_1, slider_2); // Рабочая функция
		} else {
			if (e.clientX > parent_width + parent_position_x) { // РАБОЧАЯ ФУНКЦИЯ

				slider_1.style.left = (parent_width - (slider_1_width / 2)) + "px"

			} else if (e.clientX < parent_position_x) {

				slider_1.style.left = '0px'

			} else {
				slider_1.style.left = (e.clientX - parent_position_x - (slider_1_width / 2)) + "px";
			};

			if (slider_2_position_left_x_axis + parent_position_x < e.clientX + (slider_1_width / 2)) {
				slider_1.style.left = (slider_2_position_left_x_axis - 30) + "px"
			};
			this._math__sliders_value_left(pixel_step, e);
		}
	};

	_drag_element_2 = (e: MouseEvent) => {
		// console.log("drag_element_2 работает")
		// console.log("this._elem_2 работает: " + this._elem)
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;// ширина родительского элемента
		let parent_position = parent_element.getBoundingClientRect();
		let parent_position_x = parent_position.left;//размещение контейнера относительно левого края экрана
		// console.log("parent_element.offsetWidth работает " + parent_element.offsetWidth + "   parent_position_x работает " + parent_position_x + "  ")

		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;
		// console.log("slider_1.offsetWidth работает: " + slider_1.offsetWidth)
		let slider_1_width = slider_1.offsetWidth;
		let slider_1_position_left_x_axis = slider_1.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_1_position_left_x_axis : " + slider_1_position_left_x_axis + " pageXOffset : " + pageXOffset);

		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;
		let slider_2_width = slider_2.offsetWidth;
		let slider_2_position_left_x_axis = slider_2.offsetLeft; // вычисляет верхний левый угол элемента от угла родителя
		// console.log("slider_2_position_left_x_axis : " + slider_2_position_left_x_axis + " pageXOffset : " + pageXOffset);


		let steps_in_money = (this._max_start_slider - this._min_start_slider) / this._step; // количество шагов
		let pixel_step = parent_width / steps_in_money; // размер шага в пикселях

		this._drag_ribon_auto(slider_1_position_left_x_axis, slider_2_position_left_x_axis);

		if (this._step >= slider_2_width) {
			this._step_implementation(e, parent_element, slider_2, slider_1); // Рабочая функция
		} else {
			if (e.clientX > parent_width + parent_position_x) { //если курсор выходит за пределы элемента справа РАБОЧАЯ ФУНКЦИЯ

				slider_2.style.left = (parent_width - (slider_2_width / 2)) + "px"

			} else if (e.clientX < parent_position_x) { //если курсор выходит за пределы элемента слева

				slider_2.style.left = (slider_2_width / (2)) + 'px'

			} else { //если курсор внутри элемента
				slider_2.style.left = (e.clientX - parent_position_x - (slider_2_width / 2)) + "px";
			};

			if (slider_1_position_left_x_axis + parent_position_x >= e.clientX - (slider_2_width * 1.5)) {
				slider_2.style.left = (slider_1_position_left_x_axis + slider_2_width) + "px"
			};
			this._math__sliders_value_right(pixel_step, e);
		}
	};

	_drag_ribon_auto_single(slider_1_position_left_x_axis: number) {
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let ribon = parent_element.querySelector("#color-bar_horizontal") as HTMLElement;
		ribon.style.left = 0 + "px";
		ribon.style.width = slider_1_position_left_x_axis + "px";
	};

	_drag_ribon_auto(slider_1_position_left_x_axis: number, slider_2_position_left_x_axis: number) {
		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let ribon = parent_element.querySelector("#color-bar_horizontal") as HTMLElement;
		ribon.style.left = 15 + slider_1_position_left_x_axis + "px";
		ribon.style.width = slider_2_position_left_x_axis - slider_1_position_left_x_axis + "px";
	};

	_math__sliders_value_single(pixel_step: number, e: MouseEvent) {

		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

		let parent_global = parent_element.getBoundingClientRect(); // указание на контейнер родителя
		let parent_position_x = parent_global.left;

		let slider_single = parent_element.querySelector("#ias-slider__single") as HTMLElement;
		let slider_single_position_left_x_axis = slider_single.offsetLeft;

		let value_field_single = parent_element.querySelector("#ias-slider__single_fly-value") as HTMLElement;
		let value_field_single_static = parent_element.querySelector("#value_field_single") as HTMLElement;
		let parent_width = parent_element.offsetWidth;

		let calculate = (this._max_start_slider - this._min_start_slider) / parent_width;

		let answer = Math.floor(slider_single_position_left_x_axis * calculate);

		if (e.clientX > parent_width + parent_position_x - pixel_step) {
			value_field_single.innerText = parent_width * calculate + this._sign;
			value_field_single_static.innerText = parent_width * calculate + " " + this._sign;
		} else {
			value_field_single.innerText = answer + " " + this._sign;
			value_field_single_static.innerText = answer + " " + this._sign;
		}

		value_field_single.style.left = slider_single_position_left_x_axis + "px";

	};

	_math__sliders_value_left(pixel_step: number, e: MouseEvent) {

		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;
		let parent_global = parent_element.getBoundingClientRect(); // указание на контейнер родителя

		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;
		let slider_1_position_left_x_axis = slider_1.offsetLeft;

		let value_field_1 = parent_element.querySelector("#ias-slider__duble_fly-value-1") as HTMLElement;

		let value_field_1_static = parent_element.querySelector("#value_field_1-field") as HTMLElement;

		let calculate = (this._max_start_slider - this._min_start_slider) / parent_width;

		let answer1 = Math.floor(slider_1_position_left_x_axis * calculate);

		value_field_1.innerText = answer1 + " " + this._sign;

		value_field_1_static.innerText = answer1 + " " + this._sign;

		value_field_1.style.left = slider_1_position_left_x_axis - slider_1.offsetWidth / 2 + "px";

	};
	_math__sliders_value_right(pixel_step: number, e: MouseEvent) {

		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;
		let parent_global = parent_element.getBoundingClientRect(); // указание на контейнер родителя
		let parent_position_x = parent_global.left; // смещение слева от экрана


		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;
		let slider_2_position_left_x_axis = slider_2.offsetLeft;

		let value_field_2 = parent_element.querySelector("#ias-slider__duble_fly-value-2") as HTMLElement;

		let value_field_2_static = parent_element.querySelector("#value_field_2-field") as HTMLElement;

		let calculate = (this._max_start_slider - this._min_start_slider) / parent_width;

		let answer2 = Math.floor(slider_2_position_left_x_axis * calculate);

		if (e.clientX > parent_width + parent_position_x - pixel_step) {
			value_field_2.innerText = this._max_start_slider + " " + this._sign;
			value_field_2_static.innerText = this._max_start_slider + " " + this._sign;
		} else {
			value_field_2.innerText = answer2 + " " + this._sign;
			value_field_2_static.innerText = answer2 + " " + this._sign;
		}

		value_field_2.style.left = slider_2_position_left_x_axis + slider_2.offsetWidth / 2 + "px";

	};

	_math__sliders_value_single_new(steps: number, pixel_step: number, e: MouseEvent) {

		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;

		let parent_global = parent_element.getBoundingClientRect(); // указание на контейнер родителя
		let parent_position_x = parent_global.left;

		let slider_single = parent_element.querySelector("#ias-slider__single") as HTMLElement;
		let slider_single_position_left_x_axis = slider_single.offsetLeft;

		let value_field_single = parent_element.querySelector("#ias-slider__single_fly-value") as HTMLElement;
		let value_field_single_static = parent_element.querySelector("#value_field_single") as HTMLElement;
		let parent_width = parent_element.offsetWidth;

		let calculate = (this._max_start_slider - this._min_start_slider) / parent_width;

		// let answer = Math.floor(slider_single_position_left_x_axis * calculate);
		let answer = this._step * steps + Number(this._min_start_slider);

		// if (e.clientX > parent_width + parent_position_x - pixel_step) {
		// 	value_field_single.innerText = parent_width * calculate + this._sign;
		// 	value_field_single_static.innerText = parent_width * calculate + " " + this._sign;
		// } else {
		// 	value_field_single.innerText = answer + " " + this._sign;
		// 	value_field_single_static.innerText = answer + " " + this._sign;
		// }
		if (e.clientX > parent_position_x && e.clientX + slider_single.offsetWidth < parent_width + parent_position_x) {
			value_field_single.innerText = answer + " " + this._sign;
			value_field_single_static.innerText = answer + " " + this._sign;
		} else if (e.clientX > parent_width + parent_position_x) {
			value_field_single.innerText = this._max_start_slider + " " + this._sign;
			value_field_single_static.innerText = this._max_start_slider + " " + this._sign;
		} else if (e.clientX <= parent_position_x) {
			value_field_single.innerText = this._min_start_slider + " " + this._sign;
			value_field_single_static.innerText = this._min_start_slider + " " + this._sign;
		}

		value_field_single.style.left = slider_single_position_left_x_axis + "px";

	};

	_math__sliders_value_left_new(steps: number, pixel_step: number, e: MouseEvent) {

		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;
		let parent_global = parent_element.getBoundingClientRect(); // указание на контейнер родителя

		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;
		let slider_1_position_left_x_axis = slider_1.offsetLeft;

		let value_field_1 = parent_element.querySelector("#ias-slider__duble_fly-value-1") as HTMLElement;

		let value_field_1_static = parent_element.querySelector("#value_field_1-field") as HTMLElement;

		let value_field_2 = parent_element.querySelector("#ias-slider__duble_fly-value-2") as HTMLElement;

		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;
		let slider_2_position_left_x_axis = slider_2.offsetLeft;

		let answer1 = this._step * steps + Number(this._min_start_slider);

		// let answer1 = Math.floor(slider_1_position_left_x_axis * calculate);
		if (e.clientX <= slider_2_position_left_x_axis + parent_global.left - pixel_step && e.clientX >= parent_global.left) {
			value_field_1.innerText = answer1 + " " + this._sign;

			value_field_1_static.innerText = answer1 + " " + this._sign;

			value_field_1.style.left = pixel_step * steps + "px";
		};
		if (value_field_1.offsetLeft >= value_field_2.offsetLeft - slider_1.offsetWidth) {
			value_field_1.style.left = value_field_2.offsetLeft - slider_1.offsetWidth * 2 + "px"
		}

	};

	_math__sliders_value_right_new(steps: number, pixel_step: number, e: MouseEvent) {

		let parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		let parent_width = parent_element.offsetWidth;
		let parent_global = parent_element.getBoundingClientRect(); // указание на контейнер родителя
		let parent_position_x = parent_global.left; // смещение слева от экрана

		let slider_1 = parent_element.querySelector("#ias-slider__duble_1_horizontal") as HTMLElement;
		let slider_1_position_left_x_axis = slider_1.offsetLeft;

		let slider_2 = parent_element.querySelector("#ias-slider__duble_2_horizontal") as HTMLElement;
		let slider_2_position_left_x_axis = slider_2.offsetLeft;

		let value_field_2 = parent_element.querySelector("#ias-slider__duble_fly-value-2") as HTMLElement;

		let value_field_2_static = parent_element.querySelector("#value_field_2-field") as HTMLElement;

		let answer2 = this._step * steps + Number(this._min_start_slider);

		if (answer2 > this._max_start_slider) {
			answer2 = this._max_start_slider;
			steps -= 1
		}


		if (e.clientX < parent_width + parent_position_x && e.clientX >= slider_1_position_left_x_axis + parent_position_x + pixel_step) {
			value_field_2.innerText = answer2 + " " + this._sign;

			value_field_2_static.innerText = answer2 + " " + this._sign;

			value_field_2.style.left = pixel_step * steps + "px";

		} else if (e.clientX > parent_width + parent_position_x - slider_1.offsetWidth) {

			// let answer = Number(this._min_start_slider) + Number(this._max_start_slider);
			value_field_2.innerText = answer2 + " " + this._sign;
			value_field_2_static.innerText = answer2 + " " + this._sign;
			value_field_2.style.left = pixel_step * steps + "px";
		}

	};

	_step_implementation(e: MouseEvent, parent: HTMLElement, modified_object: HTMLElement, static_object?: HTMLElement) {
		let parent_global = parent.getBoundingClientRect(); // указание на контейнер родителя
		let parent_position_x = parent_global.left; // смещение слева от экрана
		let parent_width = parent.offsetWidth; // ширина контейнера

		let steps_in_money = (this._max_start_slider - this._min_start_slider) / this._step; // количество шагов
		let different = (this._max_start_slider - this._min_start_slider) / parent_width;



		let modified_object_position = modified_object.offsetLeft; //смещение относительно левого верхнего угла родителя по Х
		let modified_object_width = modified_object.offsetWidth; // ширина ползунка
		let pixel_step = (parent_width - modified_object_width) / steps_in_money; // размер шага в пикселях

		if (static_object) {


			let static_object_position = static_object.offsetLeft;//смещение относительно левого верхнего угла родителя по Х
			let step = Math.round((e.clientX - parent_position_x) / pixel_step); // это количество шагов в позиции


			if (modified_object_position < static_object_position) {

				if (e.clientX > static_object_position + parent_position_x && e.clientX > parent_position_x + pixel_step) {
					modified_object.style.left = (static_object_position - pixel_step) + "px";
				} else if (e.clientX < parent_position_x + pixel_step) {
					modified_object.style.left = "0px";
				} else if (e.clientX > parent_position_x && e.clientX <= parent_position_x + static_object_position - pixel_step) {
					modified_object.style.left = (pixel_step * step) + "px";
				}

				this._math__sliders_value_left_new(step, pixel_step, e);

			};

			if (modified_object_position > static_object_position) {

				if (e.clientX > static_object_position + parent_position_x + pixel_step && e.clientX < parent_width + parent_position_x - modified_object_width) {
					modified_object.style.left = pixel_step * step + "px";
				} else if (e.clientX > parent_width + parent_position_x - modified_object_width) {
					modified_object.style.left = parent_width - modified_object_width + "px";
				} else if (e.clientX < parent_position_x + static_object_position + modified_object_width) {
					modified_object.style.left = static_object_position + modified_object_width + "px";
				}

				this._math__sliders_value_right_new(step, pixel_step, e);

				// if (e.clientX - pixel_step < static_object_position + parent_position_x) {
				// 	modified_object.style.left = static_object_position + pixel_step + "px";
				// } else if (e.clientX > parent_position_x + parent_width - modified_object_width) {
				// 	modified_object.style.left = parent_width - modified_object_width / 2 + "px";
				// } else if (parent_position_x + static_object_position < e.clientX && e.clientX < parent_position_x + parent_width) {
				// 	let new_position = Math.floor((e.clientX - parent_position_x) / pixel_step);
				// 	modified_object.style.left = (pixel_step * new_position) + "px";
				// }
				// this._math__sliders_value_right(pixel_step, e);
			};

		} else {
			let step = Math.round((e.clientX - parent_position_x) / pixel_step); // это количество шагов в позиции

			if (e.clientX < parent_position_x) {
				modified_object.style.left = 0 + "px";
			} else if (e.clientX > parent_position_x + parent_width - modified_object_width) {
				modified_object.style.left = parent_width - modified_object_width + "px";
			} else if (e.clientX > parent_position_x && e.clientX < parent_position_x + parent_width) {
				modified_object.style.left = (pixel_step * step) + "px";
			}
			this._math__sliders_value_single_new(step, pixel_step, e);
		}
	};

	_close_drag_element = () => {
		/* stop moving when mouse button is released:*/
		// console.log("close_drag_element работает")
		document.onmouseup = null;
		document.onmousemove = null;
	};
};
export { View_horizontal };
// let param = {};
// let view = new View(param);
// view.view_code_start({ _element_id: "ias-slider_parent", _slider_type: "duble" })