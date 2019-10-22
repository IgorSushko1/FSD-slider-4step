import { View } from "./view";
import { Model } from "./model";
import { Controller } from "./controller";
import { Control_panel } from "./control_panel";


// пример передачи параметров, ошибки ушли при передачи всех параметров
let parameters = {
	model: {
		_min_limit: 1000,
		_max_limit: 0,
		min_slider_value: 200, // нужен ли в модели такой параметр? по идее да. он относится к бизнес-логике
		max_slider_value: 400		// тк бизнес-логика это то что существует без программирования, покупатель выбирает свой бюджет - это жизнь
	},
	view: {
		_element_id: "",
		_sign: "",
		_min_limit: 2000,//повтор, этот параметр нужен, он часть вью, но контролёр должен брать и передавать его моделе? 
		_max_limit: 10000,// чтобы потом из модели его брал сервер?
		_min_slider_value: 200,
		_max_slider_value: 9800,
		_slider_type: "duble"
	},
	controller: {

	}
}

class Main {
	view: any;
	controller: any;
	model: any;
	control_panel: any;
	constructor(obj) {
		this.view = obj.view;
		this.controller = obj.controller;
		this.model = obj.model;
		this.control_panel = obj.control_panel
	}
	create_view() {
		this.view.code_start()
	}
}

let main = new Main({ view: new View(parameters["view"]), controller: new Controller(), model: new Model(parameters["model"]), control_panel: new Control_panel() });
main.create_view();

let view = new View(p);
let model = new Model();
let controller = new Controller();
let control_panel = new Control_panel();

// передаю контролеру созданные view и model;

controller.initialize(view, model)