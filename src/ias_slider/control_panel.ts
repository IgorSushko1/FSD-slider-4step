/*панель для графического управления, облегчающая жизнь программисту */

class Control_panel {
	// 	htmlelent: HTMLElement;
	// 	Create_Element(htmlelent) {
	// 		var element = document.createElement("input");
	// 		//Assign different attributes to the element.  
	// 		element.setAttribute("type", htmlelent);
	// 		element.setAttribute("value", htmlelent);
	// 		element.setAttribute("name", htmlelent);
	// 		element.setAttribute("style", "color:Red");
	// 		document.body.appendChild(element);
	// 	}
	// }

	create_panel() {
		let parent = document.getElementById("ias-slider");
		let doc_panel = parent.querySelector("doc_panel");

		// let sign = (parent.createElement("p"));
	}
}

let obj_fixed_values = {
	sign: { title: "Sign", description: "Валюта", key_word: "sign", value: ["$", "₽"] },
	type_view: { title: "Type", description: "Тип слайдера - вертикальный или горизонтальный", key_word: "slider_view", value: ["single", "duble"] },
	slider_type: { title: "Type", description: "Тип слайдера - двойной или одинарный", key_word: "slider_type", value: ["single", "duble"] },
	tooltip: { title: "Tooltip", description: "Всплывающая подсказка над ползунком", key_word: "tooltip", value: ["$", "₽"] },
	value_field: { title: "Value_field", description: "Валюта", key_word: "sign", value: ["$", "₽"] }
};

let obj_num_values = {
	min_start_slider: { title: "Min_start_slider", description: "Минимальное значение шкалы слайдера", key_word: "min_start_slider", type: "number" },
	max_start_slider: { title: "Max_start_slider", description: "Максимальное значение шкалы слайдера", key_word: "max_start_slider", type: "number" },
	min_slider_value: { title: "Min_slider_value", description: "Значение левого слайдера", key_word: "min_slider_value", type: "number" },
	max_slider_value: { title: "Min_slider_value", description: "Значение правого слайдера", key_word: "max_slider_value", type: "number" },
	single_slider_value: { title: "Single_slider_value", description: "Значение одиночного слайдера", key_word: "single_slider_value", type: "number" }
};


export { Control_panel }