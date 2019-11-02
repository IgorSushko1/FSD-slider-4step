// import { View } from "./view";
// import { Model } from "./model";

interface Controller {
	_element_id?: string,
	_elem?: any,
	_sign?: string,
	_min_start_slider?: number,
	_max_start_slider?: number,
	_min_slider_value?: number,
	_max_slider_value?: number,
	_slider_type?: string,
	controller?: any;

min_slider_value? : number;
max_slider_value? : number;
_min_start_limit? : number;
_max_start_limit? : number;

model?: any;
view?: any;
}

class Controller {

	constructor(view, model, param) {
		this.view = view;
		this.model = model;
		this.min_slider_value = param.min_slider_value;
		this.max_slider_value = param.max_slider_value;
		this._min_start_limit = param.min_start_limit;
		this._max_start_limit = param.max_start_limit;
	};

	facade_controller_set_from_view(obj) { // done ? передает данные пользователя
		//полученные через пользовательский интерфейс в модель для бизнес-задач
		// for (let a in obj) {
		// 	if (a in this) {
		// 	this[a] = a
		Object.assign(this, obj);
		this.facade_controller_update_model();
		// 	}
		// }
	}

	facade_controller_update_model() { // done ?  переписывает пользовательские данные в модели
		let obj_to_model = {
			min_slider_value : this.min_slider_value,
			max_slider_value : this.max_slider_value
		}
		this.model.facade_model_update(obj_to_model)
	}

	create_slider() {
		this.view.create_stuff()
	}

}
// let view = new View();
// let model = new Model();
// let controller = new Controller(view, model)

// let controller = new Controller(View, Model);
export { Controller }
