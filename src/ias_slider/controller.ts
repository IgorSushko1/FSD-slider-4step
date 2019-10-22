import { View } from "./view";

interface Controller {
model: any;
view: any;
min_slider_value : number;
max_slider_value : number;
}

class Controller {
	constructor(view, model) {
		this.view = view;
		this.model = model;
		this.min_slider_value;
		this.max_slider_value;
	}

	facade_set_from_view(obj) {
		// for (let a in obj) {
		// 	if (a in this) {
		Object.assign(this, obj);
		let refresh_model = this.obj_to_model();
		this.facade_set_model(refresh_model);
			// }
		// }
	}
	obj_to_model() {
		let obj_to_model = {
			min_slider_value : this.min_slider_value,
			max_slider_value : this.max_slider_value
		}
		return obj_to_model;
	}

	facade_set_model(obj) {
		this.model.set_model(obj);
	}

	initialize() {
		this.create_slider()
	}

	create_slider() {
		this.view.create_stuff()
	}

	// check_param_in_model = () => {//проверяет соответствие значений в модели и значений во вью
	// 	let model = this.facade_model(); // получил данные из модели
	// 	let model_keys = Object.keys(model); // получил ключи  из обхекта

	// 	let view = this.facade_view; // получил данные из интерфейса

	// 	for (let key in view) {
	// 		// сравнил значения в модели и во вью
	// 		let a = view.hasOwnProperty(key)
	// 		if (view.a && view.key != model.key) {
	// 			this.status = "refresh" // если хоть одно не совпало то обновляются все данные в моделе и перестраивается вью
	// 		} else {
	// 			this.status = "okey" // если все совпало то ничего не перестраивается
	// 		}
	// 	}
	// }

	// refresh = () => {
	// 	// вызывается метод майн функции, который перестраивает вью сообщая ему новые данные.
	// 	// и снова идет проверка 
	// 	this.check_param_in_model;
	// }

	// facade_model = () => {
	// 	return {
	// 		// возвращает массив значений из модели
	// 	}
	// }

	// facade_view = () => {
	// 	return {
	// 		// возвращает массив значений из вью
	// 	}
	// }

}

let controller = new Controller({ view: new View() })

// let controller = new Controller(View, Model);
export { Controller }
