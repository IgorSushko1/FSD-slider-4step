import { View_horizontal } from "./view_horizontal";
// import { View_vertical } from "./view_vertical";
import { View_vertical } from "./view_vertical";
import { Model } from "./model";
import { Controller } from "./controller";
interface Param {
	settings_id?: string;
	_type_view?: string;
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

function is_slider(param: Param) {
	interface obj_fixed_values {
		[a: string]: fixed_values_obj;
	};

	interface fixed_values_obj {
		title: string,
		description: string,
		key_word: string,
		value: any,
		function_name: string
	};

	let obj_fixed_values: obj_fixed_values = {
		sign: {
			title: "Sign",
			description: "Валюта",
			key_word: "sign",
			value: ["₽", "$"],
			function_name: "_sign"
		},
		type_view: {
			title: "Type",
			description: "Тип слайдера - одинарный или двойной",
			key_word: "slider_view",
			value: ["double", "single"],
			function_name: "_slider_type"
		},
		slider_type: {
			title: "Type",
			description: "Тип слайдера - вертикальный или горизонтальный",
			key_word: "slider_type",
			value: ["horizontal", "vertical"],
			function_name: "_type_view"
		},
		tooltip: {
			title: "Tooltip",
			description: "Всплывающая подсказка над ползунком",
			key_word: "tooltip",
			value: ["on", "off"],
			function_name: "tooltip"
		},
		value_field_state: {
			title: "value_field_state",
			description: "Поле вывода валюты",
			key_word: "value_field_state",
			value: ["on", "off"],
			function_name: "value_field_state"
		}
	};

	interface obj_changeable_values {
		[sign: string]: changeable_values_obj;
	};

	interface changeable_values_obj {
		title: string,
		description: string,
		key_word: string,
		type: string,
		function_name: string
	};

	let obj_changeable_values: obj_changeable_values = {
		step: {
			title: "Step",
			description: "Шаг ползунка",
			key_word: "step",
			type: "number",
			function_name: "_step"
		},
		min_start_slider: {
			title: "Min_slider",
			description: "Минимальное значение шкалы слайдера",
			key_word: "min_start_slider",
			type: "number",
			function_name: "_min_value"
		},
		max_start_slider: {
			title: "Max_slider",
			description: "Максимальное значение шкалы слайдера",
			key_word: "max_start_slider",
			type: "number",
			function_name: "_max_value"
		},
		min_slider_value: {
			title: "Min_slider",
			description: "Начальное значение шкалы слайдера - для первого или одиночного ползунка",
			key_word: "min_slider_value",
			type: "number",
			function_name: "_min_slider_value"
		},
		max_slider_value: {
			title: "Max_slider",
			description: "Начальное значение шкалы слайдера - для второго ползунка",
			key_word: "max_slider_value",
			type: "number",
			function_name: "_max_slider_value"
		},
	};

	let settings: any = {
		// _element_id: "ias-slider",
		_element_id: param._element_id || "iss",
		_sign: param._sign || "₽",
		_min_value: param._min_value || 0,
		_max_value: param._max_value || 1000,
		_min_slider_value: param._min_slider_value || 200,
		_max_slider_value: param._max_slider_value || 800,
		_slider_type: param._slider_type || "double",
		_type_view: param._type_view || "horizontal",
		_step: param._step || 50,
		tooltip: param.tooltip || "on",
		value_field_state: param.value_field_state || "on",
		settings_id: param.settings_id || "doc_panel"
	};

	// let key_one:any;
	for (let key_one in obj_fixed_values) {
		let select = document.createElement("select");
		let key = obj_fixed_values[key_one];
		let title: string = obj_fixed_values[key_one].description;
		let text_node_title = document.createTextNode(title);
		let div = document.createElement("div");
		let span = document.createElement("span");
		span.appendChild(text_node_title);
		div.appendChild(span);

		select.id = obj_fixed_values[key_one].key_word;

		for (let b in obj_fixed_values[key_one].value) {

			let stuff = document.createElement("option");

			let value = obj_fixed_values[key_one].value[b];
			stuff.value = value;

			let text_node = document.createTextNode(value);
			stuff.appendChild(text_node);
			select.appendChild(stuff);

		};

		document.getElementById(settings.settings_id).appendChild(div).appendChild(select);

		let parent = document.getElementById(settings.settings_id);

		let element_i_choose = parent.querySelector("#" + obj_fixed_values[key_one].key_word) as HTMLElement;

		element_i_choose.onchange = function () {

			settings[obj_fixed_values[key_one].function_name] = (this as any).value;

			slider_refresh();
		};
	};

	for (let key_one in obj_changeable_values) {
		let description = obj_changeable_values[key_one].description;
		let text_node_title = document.createTextNode(description);

		let div = document.createElement("div");
		let span = document.createElement("span");
		let input = document.createElement("input");
		input.type = "number";

		span.appendChild(text_node_title);
		div.appendChild(span);
		div.appendChild(input);

		div.id = "iss__" + obj_changeable_values[key_one].key_word;

		document.getElementById(settings.settings_id).appendChild(div);

		let parent = document.getElementById(settings.settings_id);

		let element_i_choose = parent.querySelector("#iss__" + obj_changeable_values[key_one].key_word) as HTMLElement;

		let f_name = obj_changeable_values[key_one].function_name;

		element_i_choose.oninput = function () {

			settings[f_name] = input.value;

			slider_refresh();
		};
	};

	function change_string(n: string, x: string) {

		document.getElementById("settings").innerText = n + ": " + x;
		slider_refresh();
	};

	//ПОСТРОЕНИЕ СЛАЙДЕРА ПРИ ПЕРВОМ ЗАПУСКЕ
	let view: any;
	// console.log('settings._type_view  === ' + settings._type_view)
	if (settings._type_view == "vertical") {
		// view = new View_vertical(settings);
		view = new View_vertical();

	} else if (settings._type_view == "horizontal") {

		view = new View_horizontal();

	};

	let model = new Model(settings);

	let controller = new Controller(settings);

	controller._bind_model(model);
	controller._bind_view(view);
	view._bind_controller(controller);

	controller.create_slider();

	function slider_refresh() {
		// let view;

		if (settings._type_view == "vertical") {
			// view = new View_vertical(settings);
			view = new View_vertical();

		} else if (settings._type_view == "horizontal") {

			view = new View_horizontal();

		};
		model = new Model(settings);

		controller = new Controller(settings);

		controller._bind_model(model);
		controller._bind_view(view);
		view._bind_controller(controller);


		controller.create_slider();
	};

};


export { is_slider };