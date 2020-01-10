interface View_vertical {
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
class View_vertical {

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

	ribbon: HTMLElement;

	steps: number;
	pixel_step: number;
	slider_single_width: any;
	multiplier: number;

	constructor() {
	};

	_bind_controller(controller: any) {
		this.controller = controller
	};

	_set_for_view(obj_from_controller: View_vertical) {

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

	_set_controller() {
		let obj = {
			_min_value: this._min_value,
			_max_value: this._max_value,
		};
		this.controller._get_view(obj);
	};

	create_stuff() {
		if (this._elem) {
			if (this._slider_type == "double") {
				this._elem.innerHTML =
					'<div id="iss_value-field">' +
					'<span id="iss_value_field_1-field"></span>' + '-' +
					'<span id="iss_value_field_2-field"></span>' +
					'</div>' +
					'<div id= "iss-container_vertical">' +
					'<div id="iss__double_fly-value-1_vertical"  class="iss_tooltip"></div>' +
					'<div id="iss__double_1_vertical" class="iss_drag"></div>' +
					'<div id="iss__double_fly-value-2_vertical" class="iss_tooltip"></div>' +
					'<div id="iss__double_2_vertical" class="iss_drag"></div>' +
					'<div id="iss_color-bar_vertical"></div>' +
					'</div>';

				this.create_this_sliders_elements();
				this.move_ribbon();

			} else if (this._slider_type == "single") {
				this._elem.innerHTML = '<div id="iss_value-field">' +
					'<span id="iss_value_field_single"></span>' +
					'</div>' +
					'<div id= "iss-container_vertical">' +
					'<div id="iss_color-bar_vertical"></div>' +
					'<div id="iss__single_fly-value" class="iss_tooltip"></div>' +
					'<div id="iss__single" class="iss_drag"></div>' +
					'</div>';

				this.create_this_sliders_elements();
				this.move_ribbon();
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
		this.parent_width = this.parent_element.offsetHeight;
		this.parent_position = this.parent_element.getBoundingClientRect();
		this.parent_position_x = this.parent_position.top;

		this.value_field = this.parent_element.querySelector("#iss_value-field") as HTMLElement;

		this.ribbon = this.parent_element.querySelector("#iss_color-bar_vertical") as HTMLElement;

		this.steps = (this._max_value - this._min_value) / this._step;
		this.pixel_step = this.parent_width / this.steps;
		this.multiplier = (this._max_value - this._min_value) / this.parent_width;

		if (this._slider_type == "double") {

			this.value_field_1 = this.parent_element.querySelector("#iss_value_field_1-field") as HTMLElement;
			this.value_field_2 = this.parent_element.querySelector("#iss_value_field_2-field") as HTMLElement;
			this.value_field_1_fly = this.parent_element.querySelector("#iss__double_fly-value-1_vertical") as HTMLElement;
			this.value_field_2_fly = this.parent_element.querySelector("#iss__double_fly-value-2_vertical") as HTMLElement;

			this.slider_1 = this.parent_element.querySelector("#iss__double_1_vertical") as HTMLElement;
			this.slider_1_width = this.slider_1.offsetHeight;

			this.slider_2 = this.parent_element.querySelector("#iss__double_2_vertical") as HTMLElement;
			this.slider_2_width = this.slider_2.offsetHeight;

			this.slider_1_position_left_x_axis = this.slider_1.offsetTop;
			this.slider_2_position_left_x_axis = this.slider_2.offsetTop;

		};

		if (this._slider_type == "single") {

			this.value_field_single = this.parent_element.querySelector("#iss__single_fly-value") as HTMLElement;
			this.value_field_single_static = this.parent_element.querySelector("#iss_value_field_single") as HTMLElement;

			this.slider_single = this.parent_element.querySelector("#iss__single") as HTMLElement;
			this.slider_single_width = this.slider_single.offsetHeight;

			this._slider_single_position_left_x_axis = this.slider_single.offsetTop;
		};
	};

	refresh_positions = () => {
		this.parent_position = this.parent_element.getBoundingClientRect();
		this.parent_position_x = this.parent_position.top;
		if (this._slider_type == "double") {
			this.slider_1_position_left_x_axis = this.slider_1.offsetTop;
			this.slider_2_position_left_x_axis = this.slider_2.offsetTop;
		};
		if (this._slider_type == "single") {
			this._slider_single_position_left_x_axis = this.slider_single.offsetTop;
		};
	}

	set_visible_text_field = () => {

		let a = this._min_value;
		let b = this._max_value;
		let c = this._min_slider_value;
		let d = this._max_slider_value;
		if (this._slider_type == "double" && a < b && c < b && c < d && d <= b && c - a >= 0) {

			this.value_field_1.innerText = c + " " + this._sign;
			this.value_field_2.innerText = d + " " + this._sign;

			this.value_field_1_fly.innerText = c + " " + this._sign;
			this.value_field_2_fly.innerText = d + " " + this._sign;

			this.move_sliders_on_initialization();
		};

		if (this._slider_type == "single" && a < b && c - a >= 0) {

			this.value_field_single_static.innerText = c + " " + this._sign;
			this.value_field_single.innerText = c + " " + this._sign;

			this.move_single_slider_on_initialization();

		};

		if (this.tooltip == "off") {
			let tooltip = this.parent_element.getElementsByClassName("iss_tooltip") as any;
			for (let a of tooltip) {
				a.style.display = "none";
			}
		};

		if (this.value_field_state == "off") {
			this.value_field.style.display = "none";
		};

	};

	move_sliders_on_initialization() {

		let first_slider_position = this.pixel_step * ((this._min_slider_value - this._min_value) / this._step);

		let second_slider_position = this.pixel_step * ((this._max_slider_value - this._min_value) / this._step);

		this.slider_1.style.top = first_slider_position + "px";
		this.slider_2.style.top = second_slider_position + "px";

		this.value_field_1_fly.style.top = first_slider_position + "px";
		this.value_field_2_fly.style.top = second_slider_position + "px";
		this.refresh_positions();

		this.move_ribbon();
	};

	move_single_slider_on_initialization = () => {

		let first_slider_position = this.pixel_step * ((this._min_slider_value - this._min_value) / this._step);

		this.slider_single.style.top = first_slider_position + "px";
		this.value_field_single.style.top = first_slider_position + "px";
		this.refresh_positions();
		this.move_ribbon();
	};

	move_ribbon() {
		this.refresh_positions();
		if (this._slider_type == "double") {

			this.ribbon.style.top = (this.slider_1_width / 2) + this.slider_1_position_left_x_axis + "px";
			this.ribbon.style.height = this.slider_2_position_left_x_axis - this.slider_1_position_left_x_axis + "px";

		} else if (this._slider_type == "single") {

			this.ribbon.style.top = "0px";
			this.ribbon.style.height = this._slider_single_position_left_x_axis + "px";
		}
	};

	_create_listeners() {
		if (this._slider_type == "double") {
			this.slider_1.onmousedown = this._mouse_down_first_slider;
			this.slider_2.onmousedown = this._mouse_down_second_slider;
		} else if (this._slider_type == "single") {
			this.slider_single.onmousedown = this._mouse_down_single;
		};
	};

	_mouse_down_single = (e: Event) => {
		e.preventDefault();
		document.onmouseup = this._cancel_move_events;
		document.onmousemove = this._move_element_single;
	};

	_move_element_single = (e: MouseEvent) => {
		if (this._step >= 2) {
			this._step_implementation(e, this.slider_single);
		} else {
			if (e.clientY > this.parent_width + this.parent_position_x) {

				this.slider_single.style.top = (this.parent_width - (this.slider_1_width / 2)) + "px"

			} else if (e.clientY < this.parent_position_x + (this.slider_1_width / 2)) {

				this.slider_single.style.top = '0px';

			} else {
				this.slider_single.style.top = (e.clientY - this.parent_position_x - (this.slider_1_width / 2)) + "px";
			};
			this.refresh_positions();

			this._math__sliders_value_single(this.pixel_step, e);
		};
		this.move_ribbon();
	};

	_mouse_down_first_slider = (e: Event) => {
		e.preventDefault();
		document.onmouseup = this._cancel_move_events;
		document.onmousemove = this._move_element_1;
	};

	_mouse_down_second_slider = (e: Event) => {
		e.preventDefault();
		document.onmouseup = this._cancel_move_events;
		document.onmousemove = this._move_element_2;у
	};

	_move_element_1 = (e: MouseEvent) => {
		this.refresh_positions();

		if (this._step >= 2) {
			this._step_implementation(e, this.slider_1, this.slider_2);
		} else {
			if (e.clientY > this.parent_width + this.parent_position_x) {

				this.slider_1.style.top = (this.parent_width - (this.slider_1_width / 2)) + "px"

			} else if (e.clientY < this.parent_position_x) {

				this.slider_1.style.top = '0px'

			} else {
				this.slider_1.style.top = (e.clientY - this.parent_position_x - (this.slider_1_width / 2)) + "px";
			};

			if (this.slider_2_position_left_x_axis + this.parent_position_x < e.clientY + (this.slider_1_width / 2)) {
				this.slider_1.style.top = (this.slider_2_position_left_x_axis - 30) + "px"
			};
			this.refresh_positions();
			this._math__sliders_value_left();
		}
		this.move_ribbon();
	};

	_move_element_2 = (e: MouseEvent) => {
		this.refresh_positions();

		if (this._step >= 2) {
			this._step_implementation(e, this.slider_2, this.slider_1);
		} else {
			if (e.clientY > this.parent_width + this.parent_position_x) {

				this.slider_2.style.top = (this.parent_width - (this.slider_2_width / 2)) + "px"

			} else if (e.clientY < this.parent_position_x) {

				this.slider_2.style.top = (this.slider_2_width / (2)) + 'px'

			} else {
				this.slider_2.style.top = (e.clientY - this.parent_position_x - (this.slider_2_width / 2)) + "px";
			};

			if (this.slider_1_position_left_x_axis + this.parent_position_x >= e.clientY - (this.slider_2_width * 1.5)) {
				this.slider_2.style.top = (this.slider_1_position_left_x_axis + this.slider_2_width) + "px"
			};
			this.refresh_positions();
			this._math__sliders_value_right(e);
		};

		this.move_ribbon();
	};

	_math__sliders_value_single(pixel_step: number, e: MouseEvent) {

		let answer = Math.floor(this._slider_single_position_left_x_axis * this.multiplier);

		if (e.clientY > this.parent_width + this.parent_position_x - pixel_step) {
			this.value_field_single.innerText = this.parent_width * this.multiplier + this._sign;
			this.value_field_single_static.innerText = this.parent_width * this.multiplier + " " + this._sign;
		} else {
			this.value_field_single.innerText = answer + " " + this._sign;
			this.value_field_single_static.innerText = answer + " " + this._sign;
		}

		this.value_field_single.style.top = this._slider_single_position_left_x_axis + "px";

	};

	_math__sliders_value_left() {

		let answer1 = Math.floor(this.slider_1_position_left_x_axis * this.multiplier) + this._min_value;

		this.value_field_1.innerText = answer1 + " " + this._sign;

		this.value_field_1_fly.innerText = answer1 + " " + this._sign;

		this.value_field_1_fly.style.top = this.slider_1_position_left_x_axis - this.slider_1.offsetHeight / 2 + "px";


	};

	_math__sliders_value_right(e: MouseEvent) {

		let answer2 = Math.floor(this.slider_2_position_left_x_axis * this.multiplier) + this._min_value;

		if (e.clientY > this.parent_width + this.parent_position_x - this.pixel_step) {
			this.value_field_2_fly.innerText = this._max_value + " " + this._sign;
			this.value_field_2.innerText = this._max_value + " " + this._sign;
		} else {
			this.value_field_2_fly.innerText = answer2 + " " + this._sign;
			this.value_field_2.innerText = answer2 + " " + this._sign;
		}

		this.value_field_2_fly.style.top = this.slider_2_position_left_x_axis + this.slider_2.offsetHeight / 2 + "px";
	};

	_math__sliders_value_single_step(steps: number, e: MouseEvent) {

		let answer = this._step * steps + Number(this._min_value);

		if (e.clientY > this.parent_position_x && e.clientY + this.slider_single_width < this.parent_width + this.parent_position_x) {
			this.value_field_single.innerText = answer + " " + this._sign;
			this.value_field_single_static.innerText = answer + " " + this._sign;
		} else if (e.clientY > this.parent_width + this.parent_position_x) {
			this.value_field_single.innerText = this._max_value + " " + this._sign;
			this.value_field_single_static.innerText = this._max_value + " " + this._sign;
		} else if (e.clientY <= this.parent_position_x) {
			this.value_field_single.innerText = this._min_value + " " + this._sign;
			this.value_field_single_static.innerText = this._min_value + " " + this._sign;
		};

		this.value_field_single.style.top = this._slider_single_position_left_x_axis + "px";

	};

	_math__sliders_value_left_step(steps: number, pixel_step: number, e: MouseEvent) {
		let answer1 = this._step * steps + Number(this._min_value);

		if (e.clientY <= this.slider_2_position_left_x_axis + this.parent_position.top - pixel_step && e.clientY >= this.parent_position.top) {
			this.value_field_1_fly.innerText = answer1 + " " + this._sign;

			this.value_field_1.innerText = answer1 + " " + this._sign;
    };
    
		if (e.clientX <= this.parent_position_x) {
			this.value_field_1_fly.innerText = this._min_value + " " + this._sign;
			this.value_field_1.innerText = this._min_value + " " + this._sign;
		};

		this.value_field_1_fly.style.top = this.slider_1_position_left_x_axis - this.slider_1_width/4 + "px";
	};

	_math__sliders_value_right_step(steps: number, pixel_step: number, e: MouseEvent) {
		let answer2 = this._step * steps + Number(this._min_value);

		if (answer2 > this._max_value) {
			answer2 = this._max_value;
			steps -= 1;
		};

		if (e.clientY < this.parent_width + this.parent_position_x
			&& e.clientY >= this.slider_1_position_left_x_axis + this.parent_position_x + pixel_step) {
			this.value_field_2_fly.innerText = answer2 + " " + this._sign;

			this.value_field_2.innerText = answer2 + " " + this._sign;

			this.value_field_2_fly.style.top = pixel_step * steps + "px";

		} else if (e.clientY > this.parent_width + this.parent_position_x - this.slider_2_width) {

			this.value_field_2_fly.innerText = answer2 + " " + this._sign;
			this.value_field_2.innerText = answer2 + " " + this._sign;
			this.value_field_2_fly.style.top = this.slider_2_position_left_x_axis + "px";
		};

		if (this.value_field_2_fly.offsetTop <= this.value_field_1_fly.offsetTop + this.slider_2.offsetHeight) {

			this.value_field_2_fly.style.top = this.value_field_1_fly.offsetTop + this.slider_2.offsetHeight * 2 + "px"

		};

	};

	_step_implementation(e: MouseEvent, modified_object: HTMLElement, static_object?: HTMLElement) {

		this.refresh_positions();

		let modified_object_position = modified_object.offsetTop;
		let modified_object_width = modified_object.offsetHeight;
		let pixel_step = (this.parent_width - modified_object_width) / this.steps;

		if (static_object) {

			let static_object_position = static_object.offsetTop;
			let step = Math.round((e.clientY - this.parent_position_x) / pixel_step);

			if (modified_object_position < static_object_position) {

				if (e.clientY > static_object_position + this.parent_position_x && e.clientY > this.parent_position_x + pixel_step) {
					modified_object.style.top = (static_object_position - pixel_step) + "px";
				} else if (e.clientY < this.parent_position_x + pixel_step) {
					modified_object.style.top = "0px";
				} else if (e.clientY > this.parent_position_x && e.clientY <= this.parent_position_x + static_object_position - pixel_step) {
					modified_object.style.top = (pixel_step * step) + "px";
				};

				this.refresh_positions();

				if (modified_object_position + modified_object_width >= static_object_position) {
					modified_object.style.zIndex = "2";
					static_object.style.zIndex = "1";
				} else {
					modified_object.style.zIndex = "1";
					static_object.style.zIndex = "2";
				};

				this._math__sliders_value_left_step(step, pixel_step, e);

			};

			if (modified_object_position > static_object_position) {

				if (e.clientY > static_object_position + this.parent_position_x + pixel_step && e.clientY < this.parent_width + this.parent_position_x - modified_object_width) {
					modified_object.style.top = pixel_step * step + "px";
				} else if (e.clientY > this.parent_width + this.parent_position_x - modified_object_width) {
					modified_object.style.top = this.parent_width - modified_object_width + "px";
				} else if (e.clientY < this.parent_position_x + static_object_position + modified_object_width) {
					modified_object.style.top = static_object_position + modified_object_width + "px";
				};

				this.refresh_positions();

				if (modified_object_position - modified_object_width <= static_object_position) {
					modified_object.style.zIndex = "2";
					static_object.style.zIndex = "1";
				} else {
					modified_object.style.zIndex = "1";
					static_object.style.zIndex = "2";
				};

				this._math__sliders_value_right_step(step, pixel_step, e);

			};

		} else {
			let step = Math.round((e.clientY - this.parent_position_x) / pixel_step);

			if (e.clientY < this.parent_position_x) {
				modified_object.style.top = 0 + "px";
			} else if (e.clientY > this.parent_position_x + this.parent_width - modified_object_width) {
				modified_object.style.top = this.parent_width - modified_object_width + "px";
			} else if (e.clientY > this.parent_position_x && e.clientY < this.parent_position_x + this.parent_width) {
				modified_object.style.top = (pixel_step * step) + "px";
			};
			this.refresh_positions();
			this._math__sliders_value_single_step(step, e);
		}
	};

	_cancel_move_events = () => {
		document.onmouseup = null;
		document.onmousemove = null;
	};

};
export { View_vertical };