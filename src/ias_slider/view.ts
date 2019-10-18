interface View {
	_element_id?: string,
	_elem?: HTMLElement,
	_sign?: string,
	_min_limit?: number,
	_max_limit?: number,
	_slider_Start_Position?: number,
	_slider_End_Position?: number,
	_slider_type?: string
}
class View {

	constructor(par: View) {
			this._element_id,
			this._elem,
			this._sign,
			this._min_limit,
			this._max_limit,
			this._slider_Start_Position,
			this._slider_End_Position,
			this._slider_type
	}

	view_fasade(param: View) {
		this._elem = document.getElementById(param._element_id)
		this._sign = param._sign || "₽"
		this._min_limit = param._min_limit || 0
		this._max_limit = param._max_limit  || 1000
		this._slider_Start_Position = param._slider_Start_Position || 200
		this._slider_End_Position = param._slider_End_Position || 800
		this._slider_type = param._slider_type || "none"
		this.create_stuff()
	}
	create_stuff() {
		if (this._elem) {
			if (this._slider_type == "duble") {
			this._elem.innerHTML = '<div id="value-field">'+'<span id="value1-field"></span>'+'-'+
			'<span id="value2-field"></span>'+'</div>'+'<div id="drag2_value"></div>'+
			'<div id="drag2" class="drag"></div>'+'<div id="drag3_value"></div>'+
			'<div id="drag3" class="drag"></div>'+'</div>'+
			'<div id="colorBar"></div>';

		} else if (this._slider_type == "single") {
			this._elem.innerHTML = '<div id="value-field"></div>'+
			'<div id="colorBar"></div>';
		} else {throw console.error("Неправильно задан параметр для _slider_type");
	}
	}
		 else {throw console.error("На странице не существует указанного _element_id для создания слайдера или он просто не указан");
		}
		// this.par.innerHTML = el;
	}

	create_listeners () {
		if (this._slider_type == "duble") {
			this.drag_elements()
		}
	}
	drag_elements() {
		document.getElementById("drag2").onmousedown = dragMouseDown1;//написать нормальную реализацию чтобы не повторять код
		document.getElementById("drag3").onmousedown = dragMouseDown2;
	}
}

let param = {};
let view = new View(param);
view.view_fasade({_element_id:"ias-slider_parent", _slider_type: "duble"})