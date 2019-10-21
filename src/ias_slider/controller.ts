interface Controller {

}

class Controller {
	constructor () {
	}

	create__slider(view, model) {
		view.create();
		model.inizializate();
		this.check_param_in_model();
	}

	check_param_in_model = () => {//проверяет соответствие значений в модели и значений во вью
		let model = this.facade_model(); // получил данные из модели
		let model_keys = Object.keys(model); // получил ключи  из обхекта
		
		let view = this.facade_view; // получил данные из интерфейса
		
		for (let key in view) {
		 // сравнил значения в модели и во вью
			let a = view.hasOwnProperty(key)
			if (view.a && view.key != model.key) {
				this.status = "refresh" // если хоть одно не совпало то обновляются все данные в моделе и перестраивается вью
			} else {
				this.status = "okey" // если все совпало то ничего не перестраивается
			}
			}
		}

		refresh = () => {
			// вызывается метод майн функции, который перестраивает вью сообщая ему новые данные.
			// и снова идет проверка 
			this.check_param_in_model;
		}
	

	facade_model = () => {
		return {
			// возвращает массив значений из модели
		}
	}

	facade_view = () => {
		return {
			// возвращает массив значений из вью
		}
	}

}

let controller = new Controller(View, Model);
