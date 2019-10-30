import { View_horizontal } from "./view_horizontal";
import { View_vertical } from "./view_vertical";
import { Model } from "./model";
import { Controller } from "./controller";
console.log("Запись 1. Импорты прошли");
// import { Control_panel } from "./control_panel";
type obj_fixed_values = {
	sign: object,
	type_view: object,
	slider_type: object,
	tooltip: object,
	value_field: object
}

let obj_fixed_values = {
	sign: {
		title: "Sign",
		description: "Валюта",
		key_word: "sign",
		value: ["$", "₽"],
		function_name: "_sign"
	},
	type_view: {
		title: "Type",
		description: "Тип слайдера - одинарный или двойной",
		key_word: "slider_view",
		value: ["single", "duble"],
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
	value_field: {
		title: "Value_field",
		description: "Поле вывода валюты",
		key_word: "value_field",
		value: ["on", "off"],
		function_name: "value_field"
	}
};

let obj_changeable_values = {
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
		function_name: "_min_start_slider"
	},
	max_start_slider: {
		title: "Max_slider",
		description: "Максимальное значение шкалы слайдера",
		key_word: "max_start_slider",
		type: "number",
		function_name: "_max_start_slider"
	},
	min_slider_value: {
		title: "Min_slider",
		description: "Начальное значение шкалы слайдера",
		key_word: "min_slider_value",
		type: "number",
		function_name: "_min_slider_value"
	},
}


let settings: any = {
	_element_id: "ias-slider",
	_sign: "₽",
	_min_start_slider: 0,
	_max_start_slider: 1000,
	_min_slider_value: 200,
	_max_slider_value: 800,
	_slider_type: "duble",
	_type_view: "horizontal",
	_step: 50,
	tooltip: "on",
	value_field: "on"
};


for (let key_one in obj_fixed_values) {
	let select = document.createElement("select");
	let key = obj_fixed_values[key_one];
	let title: string = obj_fixed_values[key_one].description;
	let text_node_title = document.createTextNode(title);
	let div = document.createElement("div");
	let span = document.createElement("span");
	span.appendChild(text_node_title);
	div.appendChild(span);
	// console.log(a);

	select.id = obj_fixed_values[key_one].key_word;

	for (let b in obj_fixed_values[key_one].value) {

		let stuff = document.createElement("option");

		let value = obj_fixed_values[key_one].value[b];
		stuff.value = value;

		let text_node = document.createTextNode(value);
		stuff.appendChild(text_node);
		select.appendChild(stuff);

	}

	document.getElementById("doc_panel").appendChild(div).appendChild(select);

	let vb = document.getElementById("doc_panel");
	let vv = vb.querySelector("#" + obj_fixed_values[key_one].key_word) as HTMLElement;

	vv.onchange = function () {

		console.log("до изменения : " + settings[obj_fixed_values[key_one].function_name]);

		settings[obj_fixed_values[key_one].function_name] = this.value;
		console.log("после изменения : " + settings[obj_fixed_values[key_one].function_name]);


		change_string(key_one, settings[obj_fixed_values[key_one].function_name]);
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

	div.id = "ias-slider__" + obj_changeable_values[key_one].key_word;

	document.getElementById("doc_panel").appendChild(div);

	let vb = document.getElementById("doc_panel");

	let vv = vb.querySelector("#ias-slider__" + obj_changeable_values[key_one].key_word) as HTMLElement;
	let f_name = obj_changeable_values[key_one].function_name;

	vv.oninput = function () {

		console.log("до изменения в динамичном слайдере : " + f_name);
		console.log("this.value : " + input.value);

		settings[f_name] = input.value;

		console.log("после изменения в динамичном слайдере : " + settings[f_name]);

		slider_refresh();
	};
};





function change_string(n: string, x: string) {

	document.getElementById("settings").innerText = n + ": " + x;
	slider_refresh();
};



//ПОСТРОЕНИЕ СЛАЙДЕРА ПРИ ПЕРВОМ ЗАПУСКЕ
let view;

if (settings._type_view == "vertical") {
	view = new View_vertical(settings);

} else if (settings._type_view == "horizontal") {
	view = new View_horizontal(settings);

}
let model = new Model(settings);
let controller = new Controller(view, model, settings);
console.log("Запись 2. Копии классов созданы")

controller.create_slider();

function slider_refresh() {
	let view;

	if (settings._type_view == "vertical") {
		view = new View_vertical(settings);

	} else if (settings._type_view == "horizontal") {
		view = new View_horizontal(settings);

	}
	let model = new Model(settings);
	let controller = new Controller(view, model, settings);
	controller.create_slider();
}
// передаю контролеру созданные view и model;
