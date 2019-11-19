// import { View } from "./view";
// import { Model } from "./model";

interface Controller {
	_element_id?: string,
	_elem?: any,
	_sign?: string,
	_min_value?: number,
	_max_value?: number,
	_min_slider_value?: number,
	_max_slider_value?: number,
	_slider_type?: string,
	_step?: number,
	tooltip?: string;
	value_field_state?: string,
	model?: any;
	view?: any;
}

class Controller {

	constructor(view: any, model: any, param: any) {
		this.view = view;
		this.model = model;
		// this._min_slider_value = param._min_slider_value;
		// this._max_slider_value = param._max_slider_value;
		// this._min_value = param._min_value;
		// this._max_value = param._max_value;
		this._element_id = param._element_id;
		this._sign = param._sign || "₽";
		this._slider_type = param._slider_type || "single";
		this._step = param._step || 2;
		this.tooltip = param.tooltip || "on";
		this.value_field_state = param.value_field_state || "on"
	};

	_get_model() {

	};

	_set_model() {

	};


	_get_view() {

	};

	_set_view() {

	};

	_get_controller() {
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
		}
	};

	_set_controller() {
		let obj_from_model = this.model._get_model();
		this._min_slider_value = obj_from_model._min_slider_value;
		this._max_slider_value = obj_from_model._max_slider_value;
		this._min_value = obj_from_model._min_value;
		this._max_value = obj_from_model._max_value;
	};

	create_slider() {
		this._set_controller();
		this.view.create_stuff()
	}

}
// let view = new View();
// let model = new Model();
// let controller = new Controller(view, model)

// let controller = new Controller(View, Model);
export { Controller }
