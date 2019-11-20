interface View_horizontal {
	_element_id?: string,
	_elem?: any,
	_sign?: string,
	_min_value?: number,
	_max_value?: number,
	_min_slider_value?: number,
	_max_slider_value?: number,
	_slider_type?: string,
	_step?: number,
	controller?: any;
	tooltip?: string;
	value_field_state?: string
};

interface Obj_from_controller {
	[a: string]: number
}
class View_horizontal {

	parent_element: HTMLElement;
	parent_width: number;
	parent_position: ClientRect | DOMRect;
	parent_position_x: number;

	value_field: HTMLElement;

	value_field_1: HTMLElement;
	value_field_2: HTMLElement;

	value_field_single_static: HTMLElement;
	value_field_1_fly: HTMLElement;
	value_field_2_fly: HTMLElement;
	value_field_single: HTMLElement;

	slider_1: HTMLElement;
	slider_1_width: number;
	slider_1_position_left_x_axis: number;

	slider_2: HTMLElement;
	slider_2_width: number;
	slider_2_position_left_x_axis: number;

	slider_single: HTMLElement;
	_slider_single_position_left_x_axis: number;

	ribon: HTMLElement;

	steps: number;
	pixel_step: number;
	slider_single_width: any;
	multiplier: number;

	constructor() {
		// this._element_id = param._element_id;
		// this._elem = document.getElementById(param._element_id);
		// this._sign = param._sign || "₽";
		// this._min_value = Number(param._min_value) || 0;
		// this._max_value = Number(param._max_value) || 1000;
		// this._min_slider_value = Number(param._min_slider_value) || 200;
		// this._max_slider_value = Number(param._max_slider_value) || 800;
		// this._slider_type = param._slider_type || "single";
		// this._step = param._step || 2;
		// this.tooltip = param.tooltip || "on";
		// this.value_field_state = param.value_field_state || "on"

		// this.controller = controller;
		// this.view_code_start = this.view_code_start.bind(this);
	};

	a = 5;//for first test
	b = 60;//for first test
	// c = this._elem;//for first test

	view_code_bind_controller(controller: any) {
		this.controller = controller
	};

	_set_for_view(obj_from_controller: View_horizontal) { // done ? принимает данные из контроллера и перестраивает view

		this._element_id = obj_from_controller._element_id;
		this._elem = document.getElementById(obj_from_controller._element_id);
		this._sign = obj_from_controller._sign || "₽";
		this._min_value = Number(obj_from_controller._min_value) || 0;
		this._max_value = Number(obj_from_controller._max_value) || 1000;
		this._min_slider_value = Number(obj_from_controller._min_slider_value) || 200;
		this._max_slider_value = Number(obj_from_controller._max_slider_value) || 800;
		this._slider_type = obj_from_controller._slider_type || "single";
		this._step = obj_from_controller._step || 2;
		this.tooltip = obj_from_controller.tooltip || "on";
		this.value_field_state = obj_from_controller.value_field_state || "on"
		console.log("Создаю горизонтальный вид")
		this.create_stuff();
	};

	_get_view() {
		return {
			_element_id: this._element_id,
			_sign: this._sign,
			_min_value: this._min_value,
			_max_value: this._max_value,
			_min_slider_value: this._min_slider_value,
			_max_slider_value: this._max_slider_value,
			_slider_type: this._slider_type,
			_step: this._step,
			tooltip: this.tooltip,
			value_field_state: this.value_field_state
		};
	};

	_set_controller() { // done ? передает данные в фасад контроллера
		let obj = {
			_min_value: this._min_value,
			_max_value: this._max_value,
		};
		this.controller._get_view(obj);
	};

	create_stuff() {
		if (this._elem) {
			if (this._slider_type == "duble") {
				this._elem.innerHTML =
					'<div id="iss_value-field">' +
					'<span id="iss_value_field_1-field"></span>' + '-' +
					'<span id="iss_value_field_2-field"></span>' +
					'</div>' +
					'<div id= "iss-container">' +
					'<div id="iss__duble_fly-value-1"  class="iss_tooltip"></div>' +
					'<div id="iss__duble_1_horizontal" class="iss_drag"></div>' +
					'<div id="iss__duble_fly-value-2" class="iss_tooltip"></div>' +
					'<div id="iss__duble_2_horizontal" class="iss_drag"></div>' +
					'<div id="iss__color-bar_horizontal"></div>' +
					'</div>';

				this.create_this_sliders_elements();
				this.move_ribon();

			} else if (this._slider_type == "single") {

				this._elem.innerHTML =
					'<div id="iss_value-field">' +
					'<span id="value_field_single"></span>' +
					'</div>' +
					'<div id= "iss-container">' +
					'<div id="iss__color-bar_horizontal"></div>' +
					'<div id="iss__single_fly-value" class="iss_tooltip"></div>' +
					'<div id="iss__single" class="iss_drag"></div>' +
					'</div>';

				this.create_this_sliders_elements();
				this.move_ribon();
			} else {
				throw console.error("Неправильно задан параметр для _slider_type");
			}
		} else {
			throw console.error("На странице не существует указанного _element_id для создания слайдера или он просто не указан");
		};
		this.set_visible_text_field();
		this._create_listeners();
	};

	create_this_sliders_elements = () => {
		this.parent_element = document.querySelector("#" + this._element_id) as HTMLElement;
		this.parent_width = this.parent_element.offsetWidth;// ширина родительского элемента
		this.parent_position = this.parent_element.getBoundingClientRect();// родительский контейнер
		this.parent_position_x = this.parent_position.left;//размещение контейнера относительно левого края экрана

		this.value_field = this.parent_element.querySelector("#iss_value-field") as HTMLElement;

		this.ribon = this.parent_element.querySelector("#iss__color-bar_horizontal") as HTMLElement;

		//РАСЧЕТЫ ШАГА
		this.steps = (this._max_value - this._min_value) / this._step; // количество шагов
		this.pixel_step = this.parent_width / this.steps; // размер шага в пикселях
		this.multiplier = (this._max_value - this._min_value) / this.parent_width;

		if (this._slider_type == "duble") {
			
			this.value_field_1 = this.parent_element.querySelector("#iss_value_field_1-field") as HTMLElement;
			this.value_field_2 = this.parent_element.querySelector("#iss_value_field_2-field") as HTMLElement;
			this.value_field_1_fly = this.parent_element.querySelector("#iss__duble_fly-value-1") as HTMLElement;
			this.value_field_2_fly = this.parent_element.querySelector("#iss__duble_fly-value-2") as HTMLElement;

			this.slider_1 = this.parent_element.querySelector("#iss__duble_1_horizontal") as HTMLElement;
			this.slider_1_width = this.slider_1.offsetWidth;

			this.slider_2 = this.parent_element.querySelector("#iss__duble_2_horizontal") as HTMLElement;
			this.slider_2_width = this.slider_2.offsetWidth;

			this.slider_1_position_left_x_axis = this.slider_1.offsetLeft;
			this.slider_2_position_left_x_axis = this.slider_2.offsetLeft;

		};

		if (this._slider_type == "single") {

			this.value_field_single = this.parent_element.querySelector("#iss__single_fly-value") as HTMLElement;
			this.value_field_single_static = this.parent_element.querySelector("#value_field_single") as HTMLElement;

			this.slider_single = this.parent_element.querySelector("#iss__single") as HTMLElement;
			this.slider_single_width = this.slider_single.offsetWidth;

			this._slider_single_position_left_x_axis = this.slider_single.offsetLeft;
		};
	};

	refresh_positions = () => {
		this.parent_position = this.parent_element.getBoundingClientRect();// родительский контейнер, если вдруг поменяется разрешение экрана
		this.parent_position_x = this.parent_position.left;//размещение контейнера относительно левого края экрана
		if (this._slider_type == "duble") {
			this.slider_1_position_left_x_axis = this.slider_1.offsetLeft;
			this.slider_2_position_left_x_axis = this.slider_2.offsetLeft;
		};
		if (this._slider_type == "single") {
			this._slider_single_position_left_x_axis = this.slider_single.offsetLeft;
		};
	}

	set_visible_text_field = () => {

		let a = this._min_value;
		let b = this._max_value;
		let c = this._min_slider_value;
		let d = this._max_slider_value;
		// console.log("до  этого момента ок")
		if (this._slider_type == "duble" && a < b && c < b && c < d && d <= b && c - a >= 0) {

			this.value_field_1.innerText = c + " " + this._sign;
			this.value_field_2.innerText = d + " " + this._sign;

			this.value_field_1_fly.innerText = c + " " + this._sign;
			this.value_field_2_fly.innerText = d + " " + this._sign;

			this.move_sliders_on_inizialization();
		};

		if (this._slider_type == "single" && a < b && c - a >= 0) {

			this.value_field_single_static.innerText = c + " " + this._sign;
			this.value_field_single.innerText = c + " " + this._sign;

			this.move_single_slider_on_inizialization()
		};

		if (this.tooltip == "off") {
			let tooltip = this.parent_element.getElementsByClassName("tooltip") as any;
			for (let a of tooltip) {
				a.style.display = "none";
			}
		};

		if (this.value_field_state == "off") {
			this.value_field.style.display = "none";
		};

	};

	move_sliders_on_inizialization() {

		let first_slider_position = this.pixel_step * ((this._min_slider_value - this._min_value) / this._step);

		let second_slider_position = this.pixel_step * ((this._max_slider_value - this._min_value) / this._step);

		this.slider_1.style.left = first_slider_position + "px";
		this.slider_2.style.left = second_slider_position + "px";

		this.value_field_1_fly.style.left = first_slider_position + "px";
		this.value_field_2_fly.style.left = second_slider_position + "px";
		this.refresh_positions();

		this.move_ribon();
	};

	move_single_slider_on_inizialization = () => {

		let first_slider_position = this.pixel_step * ((this._min_slider_value - this._min_value) / this._step);

		this.slider_single.style.left = first_slider_position + "px";
		this.value_field_single.style.left = first_slider_position + "px";
		this.refresh_positions();
		this.move_ribon();
	};

	move_ribon() {
		this.refresh_positions();
		if (this._slider_type == "duble") {

			this.ribon.style.left = (this.slider_1_width / 2) + this.slider_1_position_left_x_axis + "px";
			this.ribon.style.width = this.slider_2_position_left_x_axis - this.slider_1_position_left_x_axis + "px";

		} else if (this._slider_type == "single") {

			this.ribon.style.left = "0px";
			this.ribon.style.width = this._slider_single_position_left_x_axis + "px";
		}
	};

	_create_listeners() {
		if (this._slider_type == "duble") {
			this.slider_1.onmousedown = this._mouse_down_first_slider;
			this.slider_2.onmousedown = this._mouse_down_second_slider;
		} else if (this._slider_type == "single") {
			this.slider_single.onmousedown = this._mouse_down_single;
		};
	};

	_mouse_down_single = (e: Event) => {
		e.preventDefault();
		document.onmouseup = this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._move_element_single;
	};

	_move_element_single = (e: MouseEvent) => {
		if (this._step >= this.slider_single_width) {
			this._step_implementation(e, this.slider_single);; // Рабочая функция
		} else {
			if (e.clientX > this.parent_width + this.parent_position_x) {

				this.slider_single.style.left = (this.parent_width - (this.slider_1_width / 2)) + "px"

			} else if (e.clientX < this.parent_position_x + (this.slider_1_width / 2)) {

				this.slider_single.style.left = '0px';

			} else {
				this.slider_single.style.left = (e.clientX - this.parent_position_x - (this.slider_1_width / 2)) + "px";
			};
			this.refresh_positions();

			this._math__sliders_value_single(this.pixel_step, e);
		};
		this.move_ribon();
	};

	_mouse_down_first_slider = (e: Event) => {
		e.preventDefault(); // отменили все действия которые происходили раньше
		document.onmouseup = this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._move_element_1; // событие, произойдет если сдвинуть мышу
	};

	_mouse_down_second_slider = (e: Event) => {
		e.preventDefault(); // отменили все действия которые происходили раньше
		document.onmouseup = this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
		document.onmousemove = this._move_element_2; // событие, произойдет если сдвинуть мышу
	};

	_move_element_1 = (e: MouseEvent) => {
		this.refresh_positions();

		if (this._step >= this.slider_1_width) {
			this._step_implementation(e, this.slider_1, this.slider_2); // Рабочая функция
		} else {
			if (e.clientX > this.parent_width + this.parent_position_x) { // РАБОЧАЯ ФУНКЦИЯ

				this.slider_1.style.left = (this.parent_width - (this.slider_1_width / 2)) + "px"

			} else if (e.clientX < this.parent_position_x) {

				this.slider_1.style.left = '0px'

			} else {
				this.slider_1.style.left = (e.clientX - this.parent_position_x - (this.slider_1_width / 2)) + "px";
			};

			if (this.slider_2_position_left_x_axis + this.parent_position_x < e.clientX + (this.slider_1_width / 2)) {
				this.slider_1.style.left = (this.slider_2_position_left_x_axis - 30) + "px"
			};
			this.refresh_positions();
			this._math__sliders_value_left();
		}
		this.move_ribon();
	};

	_move_element_2 = (e: MouseEvent) => {
		this.refresh_positions();

		if (this._step >= this.slider_2_width) {
			this._step_implementation(e, this.slider_2, this.slider_1); // Рабочая функция
		} else {
			if (e.clientX > this.parent_width + this.parent_position_x) { //если курсор выходит за пределы элемента справа РАБОЧАЯ ФУНКЦИЯ

				this.slider_2.style.left = (this.parent_width - (this.slider_2_width / 2)) + "px"

			} else if (e.clientX < this.parent_position_x) { //если курсор выходит за пределы элемента слева

				this.slider_2.style.left = (this.slider_2_width / (2)) + 'px'

			} else { //если курсор внутри элемента
				this.slider_2.style.left = (e.clientX - this.parent_position_x - (this.slider_2_width / 2)) + "px";
			};

			if (this.slider_1_position_left_x_axis + this.parent_position_x >= e.clientX - (this.slider_2_width * 1.5)) {
				this.slider_2.style.left = (this.slider_1_position_left_x_axis + this.slider_2_width) + "px"
			};
			this.refresh_positions();
			this._math__sliders_value_right(e);
		};

		this.move_ribon();
	};

	_math__sliders_value_single(pixel_step: number, e: MouseEvent) {

		let answer = Math.floor(this._slider_single_position_left_x_axis * this.multiplier);

		if (e.clientX > this.parent_width + this.parent_position_x - pixel_step) {
			this.value_field_single.innerText = this.parent_width * this.multiplier + this._sign;
			this.value_field_single_static.innerText = this.parent_width * this.multiplier + " " + this._sign;
		} else {
			this.value_field_single.innerText = answer + " " + this._sign;
			this.value_field_single_static.innerText = answer + " " + this._sign;
		}

		this.value_field_single.style.left = this._slider_single_position_left_x_axis + "px";

	};

	_math__sliders_value_left() {

		let answer1 = Math.floor(this.slider_1_position_left_x_axis * this.multiplier) + this._min_value;

		this.value_field_1.innerText = answer1 + " " + this._sign;

		this.value_field_1_fly.innerText = answer1 + " " + this._sign;

		this.value_field_1_fly.style.left = this.slider_1_position_left_x_axis - this.slider_1.offsetWidth / 2 + "px";


	};

	_math__sliders_value_right(e: MouseEvent) {

		let answer2 = Math.floor(this.slider_2_position_left_x_axis * this.multiplier) + this._min_value;

		if (e.clientX > this.parent_width + this.parent_position_x - this.pixel_step) {
			this.value_field_2_fly.innerText = this._max_value + " " + this._sign;
			this.value_field_2.innerText = this._max_value + " " + this._sign;
		} else {
			this.value_field_2_fly.innerText = answer2 + " " + this._sign;
			this.value_field_2.innerText = answer2 + " " + this._sign;
		}

		this.value_field_2_fly.style.left = this.slider_2_position_left_x_axis + this.slider_2.offsetWidth / 2 + "px";
	};

	_math__sliders_value_single_step(steps: number, e: MouseEvent) {

		let answer = this._step * steps + Number(this._min_value);

		if (e.clientX > this.parent_position_x && e.clientX + this.slider_single_width < this.parent_width + this.parent_position_x) {
			this.value_field_single.innerText = answer + " " + this._sign;
			this.value_field_single_static.innerText = answer + " " + this._sign;
		} else if (e.clientX > this.parent_width + this.parent_position_x) {
			this.value_field_single.innerText = this._max_value + " " + this._sign;
			this.value_field_single_static.innerText = this._max_value + " " + this._sign;
		} else if (e.clientX <= this.parent_position_x) {
			this.value_field_single.innerText = this._min_value + " " + this._sign;
			this.value_field_single_static.innerText = this._min_value + " " + this._sign;
		};

		this.value_field_single.style.left = this._slider_single_position_left_x_axis + "px";

	};

	_math__sliders_value_left_step(steps: number, pixel_step: number, e: MouseEvent) {
		let answer1 = this._step * steps + Number(this._min_value);

		if (e.clientX <= this.slider_2_position_left_x_axis + this.parent_position.left - pixel_step && e.clientX >= this.parent_position.left) {
			this.value_field_1_fly.innerText = answer1 + " " + this._sign;

			this.value_field_1.innerText = answer1 + " " + this._sign;

			this.value_field_1_fly.style.left = pixel_step * steps + "px";

		};

		if (this.value_field_1_fly.offsetLeft >= this.value_field_2_fly.offsetLeft - this.slider_1.offsetWidth) {

			this.value_field_1_fly.style.left = this.value_field_2_fly.offsetLeft - this.slider_1.offsetWidth * 2 + "px"

		};

	};

	_math__sliders_value_right_step(steps: number, pixel_step: number, e: MouseEvent) {
		let answer2 = this._step * steps + Number(this._min_value);

		if (answer2 > this._max_value) {
			answer2 = this._max_value;
			steps -= 1;
		};

		if (e.clientX < this.parent_width + this.parent_position_x
			&& e.clientX >= this.slider_1_position_left_x_axis + this.parent_position_x + pixel_step) {
			this.value_field_2_fly.innerText = answer2 + " " + this._sign;

			this.value_field_2.innerText = answer2 + " " + this._sign;

			this.value_field_2_fly.style.left = pixel_step * steps + "px";

		} else if (e.clientX > this.parent_width + this.parent_position_x - this.slider_2_width) {

			this.value_field_2_fly.innerText = answer2 + " " + this._sign;
			this.value_field_2.innerText = answer2 + " " + this._sign;
			this.value_field_2_fly.style.left = this.slider_2_position_left_x_axis + "px";
		};

		if (this.value_field_2_fly.offsetLeft <= this.value_field_1_fly.offsetLeft + this.slider_2.offsetWidth) {

			this.value_field_2_fly.style.left = this.value_field_1_fly.offsetLeft + this.slider_2.offsetWidth * 2 + "px"

		};

	};

	_step_implementation(e: MouseEvent, modified_object: HTMLElement, static_object?: HTMLElement) {

		this.refresh_positions();

		let modified_object_position = modified_object.offsetLeft; //смещение относительно левого верхнего угла родителя по Х
		let modified_object_width = modified_object.offsetWidth; // ширина ползунка
		let pixel_step = (this.parent_width - modified_object_width) / this.steps; // размер шага в пикселях

		if (static_object) {

			let static_object_position = static_object.offsetLeft;//смещение относительно левого верхнего угла родителя по Х
			let step = Math.round((e.clientX - this.parent_position_x) / pixel_step); // это количество шагов в позиции

			if (modified_object_position < static_object_position) {

				if (e.clientX > static_object_position + this.parent_position_x && e.clientX > this.parent_position_x + pixel_step) {
					modified_object.style.left = (static_object_position - pixel_step) + "px";
				} else if (e.clientX < this.parent_position_x + pixel_step) {
					modified_object.style.left = "0px";
				} else if (e.clientX > this.parent_position_x && e.clientX <= this.parent_position_x + static_object_position - pixel_step) {
					modified_object.style.left = (pixel_step * step) + "px";
				}
				this.refresh_positions();
				this._math__sliders_value_left_step(step, pixel_step, e);

			};

			if (modified_object_position > static_object_position) {

				if (e.clientX > static_object_position + this.parent_position_x + pixel_step && e.clientX < this.parent_width + this.parent_position_x - modified_object_width) {
					modified_object.style.left = pixel_step * step + "px";
				} else if (e.clientX > this.parent_width + this.parent_position_x - modified_object_width) {
					modified_object.style.left = this.parent_width - modified_object_width + "px";
				} else if (e.clientX < this.parent_position_x + static_object_position + modified_object_width) {
					modified_object.style.left = static_object_position + modified_object_width + "px";
				}
				this.refresh_positions();
				this._math__sliders_value_right_step(step, pixel_step, e);

			};

		} else {

			// this.refresh_positions();
			let step = Math.round((e.clientX - this.parent_position_x) / pixel_step); // это количество шагов в позиции

			if (e.clientX < this.parent_position_x) {
				modified_object.style.left = 0 + "px";
			} else if (e.clientX > this.parent_position_x + this.parent_width - modified_object_width) {
				modified_object.style.left = this.parent_width - modified_object_width + "px";
			} else if (e.clientX > this.parent_position_x && e.clientX < this.parent_position_x + this.parent_width) {
				modified_object.style.left = (pixel_step * step) + "px";
			};
			this.refresh_positions();
			this._math__sliders_value_single_step(step, e);
		}
	};

	_cancel_move_events = () => {
		/* stop moving when mouse button is released:*/
		// console.log("close_drag_element работает")
		document.onmouseup = null;
		document.onmousemove = null;
	};

};
export { View_horizontal };
// let param = {};
// let view = new View(param);
// view.view_code_start({ _element_id: "iss_parent", _slider_type: "duble" })