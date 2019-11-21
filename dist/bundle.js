/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/controller.js":
/*!****************************!*\
  !*** ./dist/controller.js ***!
  \****************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
;
class Controller {
    constructor(param) {
        this._element_id = param._element_id;
        this._sign = param._sign || "₽";
        this._slider_type = param._slider_type || "single";
        this._step = param._step || 2;
        this.tooltip = param.tooltip || "on";
        this.value_field_state = param.value_field_state || "on";
    }
    ;
    _bind_model(model) {
        this.model = model;
    }
    ;
    _bind_view(view) {
        this.view = view;
    }
    _get_model() {
        return this.model._get_model();
    }
    ;
    _set_model() {
        this.model._set_model({
            _min_slider_value: this._min_slider_value,
            _max_slider_value: this._max_slider_value
        });
    }
    ;
    _get_view(obj) {
        if (this._slider_type == "double") {
            this._min_slider_value = obj._min_slider_value;
            this._max_slider_value = obj._max_slider_value;
        }
        ;
        if (this._slider_type == "single") {
            this._min_slider_value = obj._min_slider_value;
        }
        ;
        this._set_model();
    }
    ;
    _set_view() {
        let obj = {
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
        this.view._set_for_view(obj);
    }
    ;
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
        };
    }
    ;
    _set_controller() {
        let obj_from_model = this._get_model();
        this._min_slider_value = obj_from_model._min_slider_value;
        this._max_slider_value = obj_from_model._max_slider_value;
        this._min_value = obj_from_model._min_value;
        this._max_value = obj_from_model._max_value;
        this._sign = obj_from_model._sign;
    }
    ;
    create_slider() {
        this._set_controller();
        this._set_view();
    }
    ;
}
// let view = new View();
// let model = new Model();
// let controller = new Controller(view, model)
// let controller = new Controller(View, Model);

//# sourceMappingURL=controller.js.map

/***/ }),

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_horizontal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is_horizontal.css */ "./is_horizontal.css");
/* harmony import */ var _is_horizontal_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_horizontal_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_vertical_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../is_vertical.css */ "./is_vertical.css");
/* harmony import */ var _is_vertical_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_is_vertical_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _is_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is_slider */ "./dist/is_slider.js");



Object(_is_slider__WEBPACK_IMPORTED_MODULE_2__["is_slider"])({ _element_id: "iss", settings_id: "doc_panel" });
Object(_is_slider__WEBPACK_IMPORTED_MODULE_2__["is_slider"])({ _element_id: "iss_2", settings_id: "doc_panel_2" });
Object(_is_slider__WEBPACK_IMPORTED_MODULE_2__["is_slider"])({
    _element_id: "iss_3",
    settings_id: "doc_panel_3",
    _type_view: "vertical",
    _min_value: 300,
    _max_value: 5000,
    _min_slider_value: 400,
    _max_slider_value: 500
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./dist/is_slider.js":
/*!***************************!*\
  !*** ./dist/is_slider.js ***!
  \***************************/
/*! exports provided: is_slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is_slider", function() { return is_slider; });
/* harmony import */ var _view_horizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view_horizontal */ "./dist/view_horizontal.js");
/* harmony import */ var _view_vertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view_vertical */ "./dist/view_vertical.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./dist/model.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ "./dist/controller.js");

// import { View_vertical } from "./view_vertical";



;
function is_slider(param) {
    ;
    ;
    let obj_fixed_values = {
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
    ;
    ;
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
    let settings = {
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
        let title = obj_fixed_values[key_one].description;
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
        }
        ;
        document.getElementById(settings.settings_id).appendChild(div).appendChild(select);
        let parent = document.getElementById(settings.settings_id);
        let element_i_choose = parent.querySelector("#" + obj_fixed_values[key_one].key_word);
        element_i_choose.onchange = function () {
            settings[obj_fixed_values[key_one].function_name] = this.value;
            slider_refresh();
        };
    }
    ;
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
        let element_i_choose = parent.querySelector("#iss__" + obj_changeable_values[key_one].key_word);
        let f_name = obj_changeable_values[key_one].function_name;
        element_i_choose.oninput = function () {
            settings[f_name] = input.value;
            slider_refresh();
        };
    }
    ;
    function change_string(n, x) {
        document.getElementById("settings").innerText = n + ": " + x;
        slider_refresh();
    }
    ;
    //ПОСТРОЕНИЕ СЛАЙДЕРА ПРИ ПЕРВОМ ЗАПУСКЕ
    let view;
    // console.log('settings._type_view  === ' + settings._type_view)
    if (settings._type_view == "vertical") {
        // view = new View_vertical(settings);
        view = new _view_vertical__WEBPACK_IMPORTED_MODULE_1__["View_vertical"]();
    }
    else if (settings._type_view == "horizontal") {
        view = new _view_horizontal__WEBPACK_IMPORTED_MODULE_0__["View_horizontal"]();
    }
    ;
    let model = new _model__WEBPACK_IMPORTED_MODULE_2__["Model"](settings);
    let controller = new _controller__WEBPACK_IMPORTED_MODULE_3__["Controller"](settings);
    controller._bind_model(model);
    controller._bind_view(view);
    view._bind_controller(controller);
    controller.create_slider();
    function slider_refresh() {
        // let view;
        if (settings._type_view == "vertical") {
            // view = new View_vertical(settings);
            view = new _view_vertical__WEBPACK_IMPORTED_MODULE_1__["View_vertical"]();
        }
        else if (settings._type_view == "horizontal") {
            view = new _view_horizontal__WEBPACK_IMPORTED_MODULE_0__["View_horizontal"]();
        }
        ;
        model = new _model__WEBPACK_IMPORTED_MODULE_2__["Model"](settings);
        controller = new _controller__WEBPACK_IMPORTED_MODULE_3__["Controller"](settings);
        controller._bind_model(model);
        controller._bind_view(view);
        view._bind_controller(controller);
        controller.create_slider();
    }
    ;
}
;

//# sourceMappingURL=is_slider.js.map

/***/ }),

/***/ "./dist/model.js":
/*!***********************!*\
  !*** ./dist/model.js ***!
  \***********************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
;
;
class Model {
    constructor(param) {
        this._min_value = param._min_value || 0;
        this._max_value = param._max_value || 1000;
        this._min_slider_value = param._min_slider_value || 200;
        this._max_slider_value = param._max_slider_value || 800;
        this._sign = param._sign || "₽";
    }
    ;
    _set_model(obj) {
        this._min_slider_value = obj._min_slider_value;
        this._max_slider_value = obj._max_slider_value;
    }
    ;
    _get_model() {
        return {
            _min_value: this._min_value,
            _max_value: this._max_value,
            _min_slider_value: this._min_slider_value,
            _max_slider_value: this._max_slider_value,
            _sign: this._sign
        };
    }
    ;
}
;

//# sourceMappingURL=model.js.map

/***/ }),

/***/ "./dist/view_horizontal.js":
/*!*********************************!*\
  !*** ./dist/view_horizontal.js ***!
  \*********************************/
/*! exports provided: View_horizontal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_horizontal", function() { return View_horizontal; });
;
class View_horizontal {
    constructor() {
        this.create_this_sliders_elements = () => {
            this.parent_element = document.querySelector("#" + this._element_id);
            this.parent_width = this.parent_element.offsetWidth; // ширина родительского элемента
            this.parent_position = this.parent_element.getBoundingClientRect(); // родительский контейнер
            this.parent_position_x = this.parent_position.left; //размещение контейнера относительно левого края экрана
            this.value_field = this.parent_element.querySelector("#iss_value-field");
            this.ribbon = this.parent_element.querySelector("#iss__color-bar_horizontal");
            //РАСЧЕТЫ ШАГА
            this.steps = (this._max_value - this._min_value) / this._step; // количество шагов
            this.pixel_step = this.parent_width / this.steps; // размер шага в пикселях
            this.multiplier = (this._max_value - this._min_value) / this.parent_width;
            if (this._slider_type == "double") {
                this.value_field_1 = this.parent_element.querySelector("#iss_value_field_1-field");
                this.value_field_2 = this.parent_element.querySelector("#iss_value_field_2-field");
                this.value_field_1_fly = this.parent_element.querySelector("#iss__double_fly-value-1");
                this.value_field_2_fly = this.parent_element.querySelector("#iss__double_fly-value-2");
                this.slider_1 = this.parent_element.querySelector("#iss__double_1_horizontal");
                this.slider_1_width = this.slider_1.offsetWidth;
                this.slider_2 = this.parent_element.querySelector("#iss__double_2_horizontal");
                this.slider_2_width = this.slider_2.offsetWidth;
                this.slider_1_position_left_x_axis = this.slider_1.offsetLeft;
                this.slider_2_position_left_x_axis = this.slider_2.offsetLeft;
            }
            ;
            if (this._slider_type == "single") {
                this.value_field_single = this.parent_element.querySelector("#iss__single_fly-value");
                this.value_field_single_static = this.parent_element.querySelector("#value_field_single");
                this.slider_single = this.parent_element.querySelector("#iss__single");
                this.slider_single_width = this.slider_single.offsetWidth;
                this._slider_single_position_left_x_axis = this.slider_single.offsetLeft;
            }
            ;
        };
        this.refresh_positions = () => {
            this.parent_position = this.parent_element.getBoundingClientRect(); // родительский контейнер, если вдруг поменяется разрешение экрана
            this.parent_position_x = this.parent_position.left; //размещение контейнера относительно левого края экрана
            if (this._slider_type == "double") {
                this.slider_1_position_left_x_axis = this.slider_1.offsetLeft;
                this.slider_2_position_left_x_axis = this.slider_2.offsetLeft;
            }
            ;
            if (this._slider_type == "single") {
                this._slider_single_position_left_x_axis = this.slider_single.offsetLeft;
            }
            ;
        };
        this.set_visible_text_field = () => {
            let a = this._min_value;
            let b = this._max_value;
            let c = this._min_slider_value;
            let d = this._max_slider_value;
            // console.log("до  этого момента ок")
            if (this._slider_type == "double" && a < b && c < b && c < d && d <= b && c - a >= 0) {
                this.value_field_1.innerText = c + " " + this._sign;
                this.value_field_2.innerText = d + " " + this._sign;
                this.value_field_1_fly.innerText = c + " " + this._sign;
                this.value_field_2_fly.innerText = d + " " + this._sign;
                this.move_sliders_on_initialization();
            }
            ;
            if (this._slider_type == "single" && a < b && c - a >= 0) {
                this.value_field_single_static.innerText = c + " " + this._sign;
                this.value_field_single.innerText = c + " " + this._sign;
                this.move_single_slider_on_initialization();
            }
            ;
            if (this.tooltip == "off") {
                let tooltip = this.parent_element.getElementsByClassName("tooltip");
                for (let a of tooltip) {
                    a.style.display = "none";
                }
            }
            ;
            if (this.value_field_state == "off") {
                this.value_field.style.display = "none";
            }
            ;
        };
        this.move_single_slider_on_initialization = () => {
            let first_slider_position = this.pixel_step * ((this._min_slider_value - this._min_value) / this._step);
            this.slider_single.style.left = first_slider_position + "px";
            this.value_field_single.style.left = first_slider_position + "px";
            this.refresh_positions();
            this.move_ribbon();
        };
        this._mouse_down_single = (e) => {
            e.preventDefault();
            document.onmouseup = this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
            document.onmousemove = this._move_element_single;
        };
        this._move_element_single = (e) => {
            if (this._step >= 2) {
                this._step_implementation(e, this.slider_single);
                ; // Рабочая функция
            }
            else {
                if (e.clientX > this.parent_width + this.parent_position_x) {
                    this.slider_single.style.left = (this.parent_width - (this.slider_1_width / 2)) + "px";
                }
                else if (e.clientX < this.parent_position_x + (this.slider_1_width / 2)) {
                    this.slider_single.style.left = '0px';
                }
                else {
                    this.slider_single.style.left = (e.clientX - this.parent_position_x - (this.slider_1_width / 2)) + "px";
                }
                ;
                this.refresh_positions();
                this._math__sliders_value_single(this.pixel_step, e);
            }
            ;
            this.move_ribbon();
        };
        this._mouse_down_first_slider = (e) => {
            e.preventDefault(); // отменили все действия которые происходили раньше
            document.onmouseup = this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
            document.onmousemove = this._move_element_1; // событие, произойдет если сдвинуть мышу
        };
        this._mouse_down_second_slider = (e) => {
            e.preventDefault(); // отменили все действия которые происходили раньше
            document.onmouseup = this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
            document.onmousemove = this._move_element_2; // событие, произойдет если сдвинуть мышу
        };
        this._move_element_1 = (e) => {
            this.refresh_positions();
            if (this._step >= 2) {
                this._step_implementation(e, this.slider_1, this.slider_2); // Рабочая функция
            }
            else {
                if (e.clientX > this.parent_width + this.parent_position_x) { // РАБОЧАЯ ФУНКЦИЯ
                    this.slider_1.style.left = (this.parent_width - (this.slider_1_width / 2)) + "px";
                }
                else if (e.clientX < this.parent_position_x) {
                    this.slider_1.style.left = '0px';
                }
                else {
                    this.slider_1.style.left = (e.clientX - this.parent_position_x - (this.slider_1_width / 2)) + "px";
                }
                ;
                if (this.slider_2_position_left_x_axis + this.parent_position_x < e.clientX + (this.slider_1_width / 2)) {
                    this.slider_1.style.left = (this.slider_2_position_left_x_axis - 30) + "px";
                }
                ;
                this.refresh_positions();
                this._math__sliders_value_left();
            }
            this.move_ribbon();
        };
        this._move_element_2 = (e) => {
            this.refresh_positions();
            if (this._step >= 2) {
                this._step_implementation(e, this.slider_2, this.slider_1); // Рабочая функция
            }
            else {
                if (e.clientX > this.parent_width + this.parent_position_x) { //если курсор выходит за пределы элемента справа РАБОЧАЯ ФУНКЦИЯ
                    this.slider_2.style.left = (this.parent_width - (this.slider_2_width / 2)) + "px";
                }
                else if (e.clientX < this.parent_position_x) { //если курсор выходит за пределы элемента слева
                    this.slider_2.style.left = (this.slider_2_width / (2)) + 'px';
                }
                else { //если курсор внутри элемента
                    this.slider_2.style.left = (e.clientX - this.parent_position_x - (this.slider_2_width / 2)) + "px";
                }
                ;
                if (this.slider_1_position_left_x_axis + this.parent_position_x >= e.clientX - (this.slider_2_width * 1.5)) {
                    this.slider_2.style.left = (this.slider_1_position_left_x_axis + this.slider_2_width) + "px";
                }
                ;
                this.refresh_positions();
                this._math__sliders_value_right(e);
            }
            ;
            this.move_ribbon();
        };
        this._cancel_move_events = () => {
            /* stop moving when mouse button is released:*/
            // console.log("close_drag_element работает")
            document.onmouseup = null;
            document.onmousemove = null;
        };
    }
    ;
    _bind_controller(controller) {
        this.controller = controller;
    }
    ;
    _set_for_view(obj_from_controller) {
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
        this.value_field_state = obj_from_controller.value_field_state || "on";
        // console.log("Создаю горизонтальный вид")
        this.create_stuff();
    }
    ;
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
    }
    ;
    _set_controller() {
        let obj = {
            _min_slider_value: this._min_slider_value,
            _max_slider_value: this._max_slider_value,
        };
        this.controller._get_view(obj);
    }
    ;
    create_stuff() {
        if (this._elem) {
            if (this._slider_type == "double") {
                this._elem.innerHTML =
                    '<div id="iss_value-field">' +
                        '<span id="iss_value_field_1-field"></span>' + '-' +
                        '<span id="iss_value_field_2-field"></span>' +
                        '</div>' +
                        '<div id= "iss-container">' +
                        '<div id="iss__double_fly-value-1"  class="iss_tooltip"></div>' +
                        '<div id="iss__double_1_horizontal" class="iss_drag"></div>' +
                        '<div id="iss__double_fly-value-2" class="iss_tooltip"></div>' +
                        '<div id="iss__double_2_horizontal" class="iss_drag"></div>' +
                        '<div id="iss__color-bar_horizontal"></div>' +
                        '</div>';
                this.create_this_sliders_elements();
                this.move_ribbon();
            }
            else if (this._slider_type == "single") {
                this._elem.innerHTML =
                    '<div id="iss_value-field">' +
                        '<span id="value_field_single"></span>' +
                        '</div>' +
                        '<div id= "iss-container">' +
                        '<div id="iss__color-bar_horizontal"></div>' +
                        '<div id="iss__single_fly-value" class="iss_tooltip"></div>' +
                        '<div id="iss__single" class="iss_drag"></div>' +
                        '</div>';
                this.create_this_sliders_elements();
                this.move_ribbon();
            }
            else {
                throw console.error("Неправильно задан параметр для _slider_type");
            }
        }
        else {
            throw console.error("На странице не существует указанного _element_id для создания слайдера или он просто не указан");
        }
        ;
        this.set_visible_text_field();
        this._create_listeners();
    }
    ;
    move_sliders_on_initialization() {
        let first_slider_position = this.pixel_step * ((this._min_slider_value - this._min_value) / this._step);
        let second_slider_position = this.pixel_step * ((this._max_slider_value - this._min_value) / this._step);
        this.slider_1.style.left = first_slider_position + "px";
        this.slider_2.style.left = second_slider_position + "px";
        this.value_field_1_fly.style.left = first_slider_position + "px";
        this.value_field_2_fly.style.left = second_slider_position + "px";
        this.refresh_positions();
        this.move_ribbon();
    }
    ;
    move_ribbon() {
        this.refresh_positions();
        if (this._slider_type == "double") {
            this.ribbon.style.left = (this.slider_1_width / 2) + this.slider_1_position_left_x_axis + "px";
            this.ribbon.style.width = this.slider_2_position_left_x_axis - this.slider_1_position_left_x_axis + "px";
        }
        else if (this._slider_type == "single") {
            this.ribbon.style.left = "0px";
            this.ribbon.style.width = this._slider_single_position_left_x_axis + "px";
        }
    }
    ;
    _create_listeners() {
        if (this._slider_type == "double") {
            this.slider_1.onmousedown = this._mouse_down_first_slider;
            this.slider_2.onmousedown = this._mouse_down_second_slider;
        }
        else if (this._slider_type == "single") {
            this.slider_single.onmousedown = this._mouse_down_single;
        }
        ;
    }
    ;
    _math__sliders_value_single(pixel_step, e) {
        let answer = Math.floor(this._slider_single_position_left_x_axis * this.multiplier);
        if (e.clientX > this.parent_width + this.parent_position_x - pixel_step) {
            this.value_field_single.innerText = this.parent_width * this.multiplier + this._sign;
            this.value_field_single_static.innerText = this.parent_width * this.multiplier + " " + this._sign;
        }
        else {
            this.value_field_single.innerText = answer + " " + this._sign;
            this.value_field_single_static.innerText = answer + " " + this._sign;
        }
        this.value_field_single.style.left = this._slider_single_position_left_x_axis + "px";
    }
    ;
    _math__sliders_value_left() {
        let answer1 = Math.floor(this.slider_1_position_left_x_axis * this.multiplier) + this._min_value;
        this.value_field_1.innerText = answer1 + " " + this._sign;
        this.value_field_1_fly.innerText = answer1 + " " + this._sign;
        this.value_field_1_fly.style.left = this.slider_1_position_left_x_axis - this.slider_1.offsetWidth / 2 + "px";
    }
    ;
    _math__sliders_value_right(e) {
        let answer2 = Math.floor(this.slider_2_position_left_x_axis * this.multiplier) + this._min_value;
        if (e.clientX > this.parent_width + this.parent_position_x - this.pixel_step) {
            this.value_field_2_fly.innerText = this._max_value + " " + this._sign;
            this.value_field_2.innerText = this._max_value + " " + this._sign;
        }
        else {
            this.value_field_2_fly.innerText = answer2 + " " + this._sign;
            this.value_field_2.innerText = answer2 + " " + this._sign;
        }
        this.value_field_2_fly.style.left = this.slider_2_position_left_x_axis + this.slider_2.offsetWidth / 2 + "px";
    }
    ;
    _math__sliders_value_single_step(steps, e) {
        let answer = this._step * steps + Number(this._min_value);
        if (e.clientX > this.parent_position_x && e.clientX + this.slider_single_width < this.parent_width + this.parent_position_x) {
            this.value_field_single.innerText = answer + " " + this._sign;
            this.value_field_single_static.innerText = answer + " " + this._sign;
        }
        else if (e.clientX > this.parent_width + this.parent_position_x) {
            this.value_field_single.innerText = this._max_value + " " + this._sign;
            this.value_field_single_static.innerText = this._max_value + " " + this._sign;
        }
        else if (e.clientX <= this.parent_position_x) {
            this.value_field_single.innerText = this._min_value + " " + this._sign;
            this.value_field_single_static.innerText = this._min_value + " " + this._sign;
        }
        ;
        this.value_field_single.style.left = this._slider_single_position_left_x_axis + "px";
    }
    ;
    _math__sliders_value_left_step(steps, pixel_step, e) {
        let answer1 = this._step * steps + Number(this._min_value);
        if (e.clientX <= this.slider_2_position_left_x_axis + this.parent_position_x - pixel_step && e.clientX >= this.parent_position_x) {
            this.value_field_1_fly.innerText = answer1 + " " + this._sign;
            this.value_field_1.innerText = answer1 + " " + this._sign;
            // this.value_field_1_fly.style.left = pixel_step * steps + "px";
            // this.value_field_1_fly.style.left = this.slider_1_position_left_x_axis + "px";
        }
        ;
        if (e.clientX <= this.parent_position_x) {
            this.value_field_1_fly.innerText = this._min_value + " " + this._sign;
            this.value_field_1.innerText = this._min_value + " " + this._sign;
        }
        ;
        // if (this.value_field_1_fly.offsetLeft >= this.value_field_2_fly.offsetLeft - this.slider_1.offsetWidth) {
        // this.value_field_1_fly.style.left = this.value_field_2_fly.offsetLeft - this.slider_1_width* 2 + "px"
        // };
        this.value_field_1_fly.style.left = this.slider_1_position_left_x_axis - this.slider_1_width / 4 + "px";
    }
    ;
    _math__sliders_value_right_step(steps, pixel_step, e) {
        let answer2 = this._step * steps + Number(this._min_value);
        if (answer2 > this._max_value) {
            answer2 = this._max_value;
            steps -= 1;
        }
        ;
        if (e.clientX < this.parent_width + this.parent_position_x
            && e.clientX >= this.slider_1_position_left_x_axis + this.parent_position_x + pixel_step) {
            this.value_field_2_fly.innerText = answer2 + " " + this._sign;
            this.value_field_2.innerText = answer2 + " " + this._sign;
            this.value_field_2_fly.style.left = pixel_step * steps + "px";
        }
        else if (e.clientX > this.parent_width + this.parent_position_x - this.slider_2_width) {
            this.value_field_2_fly.innerText = answer2 + " " + this._sign;
            this.value_field_2.innerText = answer2 + " " + this._sign;
            this.value_field_2_fly.style.left = this.slider_2_position_left_x_axis + "px";
        }
        ;
        if (this.value_field_2_fly.offsetLeft <= this.value_field_1_fly.offsetLeft + this.slider_2.offsetWidth) {
            this.value_field_2_fly.style.left = this.value_field_1_fly.offsetLeft + this.slider_2.offsetWidth * 2 + "px";
        }
        ;
    }
    ;
    _step_implementation(e, modified_object, static_object) {
        this.refresh_positions();
        let modified_object_position = modified_object.offsetLeft; //смещение относительно левого верхнего угла родителя по Х
        let modified_object_width = modified_object.offsetWidth; // ширина ползунка
        let pixel_step = (this.parent_width - modified_object_width) / this.steps; // размер шага в пикселях
        if (static_object) {
            let static_object_position = static_object.offsetLeft; //смещение относительно левого верхнего угла родителя по Х
            let step = Math.round((e.clientX - this.parent_position_x) / pixel_step); // это количество шагов в позиции
            if (modified_object_position < static_object_position) {
                if (e.clientX > static_object_position + this.parent_position_x && e.clientX > this.parent_position_x + pixel_step) {
                    modified_object.style.left = (static_object_position - pixel_step) + "px";
                }
                else if (e.clientX < this.parent_position_x + pixel_step) {
                    modified_object.style.left = "0px";
                }
                else if (e.clientX > this.parent_position_x && e.clientX <= this.parent_position_x + static_object_position - pixel_step) {
                    modified_object.style.left = (pixel_step * step) + "px";
                }
                ;
                this.refresh_positions();
                if (modified_object_position + modified_object_width >= static_object_position) {
                    modified_object.style.zIndex = "2";
                    static_object.style.zIndex = "1";
                }
                else {
                    modified_object.style.zIndex = "1";
                    static_object.style.zIndex = "2";
                }
                ;
                this._math__sliders_value_left_step(step, pixel_step, e);
            }
            ;
            if (modified_object_position > static_object_position) {
                if (e.clientX > static_object_position + this.parent_position_x + pixel_step && e.clientX < this.parent_width + this.parent_position_x - modified_object_width) {
                    modified_object.style.left = pixel_step * step + "px";
                }
                else if (e.clientX > this.parent_width + this.parent_position_x - modified_object_width) {
                    modified_object.style.left = this.parent_width - modified_object_width + "px";
                }
                else if (e.clientX < this.parent_position_x + static_object_position + modified_object_width) {
                    modified_object.style.left = static_object_position + modified_object_width + "px";
                }
                this.refresh_positions();
                if (modified_object_position - modified_object_width <= static_object_position) {
                    modified_object.style.zIndex = "2";
                    static_object.style.zIndex = "1";
                }
                else {
                    modified_object.style.zIndex = "1";
                    static_object.style.zIndex = "2";
                }
                ;
                this._math__sliders_value_right_step(step, pixel_step, e);
            }
            ;
        }
        else {
            // this.refresh_positions();
            let step = Math.round((e.clientX - this.parent_position_x) / pixel_step); // это количество шагов в позиции
            if (e.clientX < this.parent_position_x) {
                modified_object.style.left = 0 + "px";
            }
            else if (e.clientX > this.parent_position_x + this.parent_width - modified_object_width) {
                modified_object.style.left = this.parent_width - modified_object_width + "px";
            }
            else if (e.clientX > this.parent_position_x && e.clientX < this.parent_position_x + this.parent_width) {
                modified_object.style.left = (pixel_step * step) + "px";
            }
            ;
            this.refresh_positions();
            this._math__sliders_value_single_step(step, e);
        }
    }
    ;
}
;

//# sourceMappingURL=view_horizontal.js.map

/***/ }),

/***/ "./dist/view_vertical.js":
/*!*******************************!*\
  !*** ./dist/view_vertical.js ***!
  \*******************************/
/*! exports provided: View_vertical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_vertical", function() { return View_vertical; });
;
class View_vertical {
    constructor() {
        this.create_this_sliders_elements = () => {
            this.parent_element = document.querySelector("#" + this._element_id);
            this.parent_width = this.parent_element.offsetHeight; // ширина родительского элемента
            this.parent_position = this.parent_element.getBoundingClientRect(); // родительский контейнер
            this.parent_position_x = this.parent_position.top; //размещение контейнера относительно левого края экрана
            this.value_field = this.parent_element.querySelector("#iss_value-field");
            this.ribbon = this.parent_element.querySelector("#iss_color-bar_vertical");
            //РАСЧЕТЫ ШАГА
            this.steps = (this._max_value - this._min_value) / this._step; // количество шагов
            this.pixel_step = this.parent_width / this.steps; // размер шага в пикселях
            this.multiplier = (this._max_value - this._min_value) / this.parent_width;
            if (this._slider_type == "double") {
                this.value_field_1 = this.parent_element.querySelector("#iss_value_field_1-field");
                this.value_field_2 = this.parent_element.querySelector("#iss_value_field_2-field");
                this.value_field_1_fly = this.parent_element.querySelector("#iss__double_fly-value-1_vertical");
                this.value_field_2_fly = this.parent_element.querySelector("#iss__double_fly-value-2_vertical");
                this.slider_1 = this.parent_element.querySelector("#iss__double_1_vertical");
                this.slider_1_width = this.slider_1.offsetHeight;
                this.slider_2 = this.parent_element.querySelector("#iss__double_2_vertical");
                this.slider_2_width = this.slider_2.offsetHeight;
                this.slider_1_position_left_x_axis = this.slider_1.offsetTop;
                this.slider_2_position_left_x_axis = this.slider_2.offsetTop;
            }
            ;
            if (this._slider_type == "single") {
                this.value_field_single = this.parent_element.querySelector("#iss__single_fly-value");
                this.value_field_single_static = this.parent_element.querySelector("#iss_value_field_single");
                this.slider_single = this.parent_element.querySelector("#iss__single");
                this.slider_single_width = this.slider_single.offsetHeight;
                this._slider_single_position_left_x_axis = this.slider_single.offsetTop;
            }
            ;
        };
        this.refresh_positions = () => {
            this.parent_position = this.parent_element.getBoundingClientRect(); // родительский контейнер
            this.parent_position_x = this.parent_position.top; //размещение контейнера относительно левого края экрана
            if (this._slider_type == "double") {
                this.slider_1_position_left_x_axis = this.slider_1.offsetTop;
                this.slider_2_position_left_x_axis = this.slider_2.offsetTop;
            }
            ;
            if (this._slider_type == "single") {
                this._slider_single_position_left_x_axis = this.slider_single.offsetTop;
            }
            ;
        };
        this.set_visible_text_field = () => {
            let a = this._min_value;
            let b = this._max_value;
            let c = this._min_slider_value;
            let d = this._max_slider_value;
            // console.log("до  этого момента ок")
            if (this._slider_type == "double" && a < b && c < b && c < d && d <= b && c - a >= 0) {
                this.value_field_1.innerText = c + " " + this._sign;
                this.value_field_2.innerText = d + " " + this._sign;
                this.value_field_1_fly.innerText = c + " " + this._sign;
                this.value_field_2_fly.innerText = d + " " + this._sign;
                this.move_sliders_on_initialization();
            }
            ;
            if (this._slider_type == "single" && a < b && c - a >= 0) {
                this.value_field_single_static.innerText = c + " " + this._sign;
                this.value_field_single.innerText = c + " " + this._sign;
                this.move_single_slider_on_initialization();
            }
            ;
            if (this.tooltip == "off") {
                let tooltip = this.parent_element.getElementsByClassName("iss_tooltip");
                for (let a of tooltip) {
                    a.style.display = "none";
                }
            }
            ;
            if (this.value_field_state == "off") {
                this.value_field.style.display = "none";
            }
            ;
        };
        this.move_single_slider_on_initialization = () => {
            let first_slider_position = this.pixel_step * ((this._min_slider_value - this._min_value) / this._step);
            this.slider_single.style.top = first_slider_position + "px";
            this.value_field_single.style.top = first_slider_position + "px";
            this.refresh_positions();
            this.move_ribbon();
        };
        this._mouse_down_single = (e) => {
            e.preventDefault();
            document.onmouseup = this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
            document.onmousemove = this._move_element_single;
        };
        this._move_element_single = (e) => {
            if (this._step >= 2) {
                this._step_implementation(e, this.slider_single);
                ; // Рабочая функция
            }
            else {
                if (e.clientY > this.parent_width + this.parent_position_x) {
                    this.slider_single.style.top = (this.parent_width - (this.slider_1_width / 2)) + "px";
                }
                else if (e.clientY < this.parent_position_x + (this.slider_1_width / 2)) {
                    this.slider_single.style.top = '0px';
                }
                else {
                    this.slider_single.style.top = (e.clientY - this.parent_position_x - (this.slider_1_width / 2)) + "px";
                }
                ;
                this.refresh_positions();
                this._math__sliders_value_single(this.pixel_step, e);
            }
            ;
            this.move_ribbon();
        };
        this._mouse_down_first_slider = (e) => {
            e.preventDefault(); // отменили все действия которые происходили раньше
            document.onmouseup = this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
            document.onmousemove = this._move_element_1; // событие, произойдет если сдвинуть мышу
        };
        this._mouse_down_second_slider = (e) => {
            e.preventDefault(); // отменили все действия которые происходили раньше
            document.onmouseup = this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
            document.onmousemove = this._move_element_2; // событие, произойдет если сдвинуть мышу
        };
        this._move_element_1 = (e) => {
            this.refresh_positions();
            if (this._step >= 2) {
                this._step_implementation(e, this.slider_1, this.slider_2); // Рабочая функция
            }
            else {
                if (e.clientY > this.parent_width + this.parent_position_x) { // РАБОЧАЯ ФУНКЦИЯ
                    this.slider_1.style.top = (this.parent_width - (this.slider_1_width / 2)) + "px";
                }
                else if (e.clientY < this.parent_position_x) {
                    this.slider_1.style.top = '0px';
                }
                else {
                    this.slider_1.style.top = (e.clientY - this.parent_position_x - (this.slider_1_width / 2)) + "px";
                }
                ;
                if (this.slider_2_position_left_x_axis + this.parent_position_x < e.clientY + (this.slider_1_width / 2)) {
                    this.slider_1.style.top = (this.slider_2_position_left_x_axis - 30) + "px";
                }
                ;
                this.refresh_positions();
                this._math__sliders_value_left();
            }
            this.move_ribbon();
        };
        this._move_element_2 = (e) => {
            this.refresh_positions();
            if (this._step >= 2) {
                this._step_implementation(e, this.slider_2, this.slider_1); // Рабочая функция
            }
            else {
                if (e.clientY > this.parent_width + this.parent_position_x) { //если курсор выходит за пределы элемента справа РАБОЧАЯ ФУНКЦИЯ
                    this.slider_2.style.top = (this.parent_width - (this.slider_2_width / 2)) + "px";
                }
                else if (e.clientY < this.parent_position_x) { //если курсор выходит за пределы элемента слева
                    this.slider_2.style.top = (this.slider_2_width / (2)) + 'px';
                }
                else { //если курсор внутри элемента
                    this.slider_2.style.top = (e.clientY - this.parent_position_x - (this.slider_2_width / 2)) + "px";
                }
                ;
                if (this.slider_1_position_left_x_axis + this.parent_position_x >= e.clientY - (this.slider_2_width * 1.5)) {
                    this.slider_2.style.top = (this.slider_1_position_left_x_axis + this.slider_2_width) + "px";
                }
                ;
                this.refresh_positions();
                this._math__sliders_value_right(e);
            }
            ;
            this.move_ribbon();
        };
        this._cancel_move_events = () => {
            /* stop moving when mouse button is released:*/
            // console.log("close_drag_element работает")
            document.onmouseup = null;
            document.onmousemove = null;
        };
    }
    ;
    _bind_controller(controller) {
        this.controller = controller;
    }
    ;
    _set_for_view(obj_from_controller) {
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
        this.value_field_state = obj_from_controller.value_field_state || "on";
        // console.log("Создаю вертикальный вид")
        this.create_stuff();
    }
    ;
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
    }
    ;
    _set_controller() {
        let obj = {
            _min_value: this._min_value,
            _max_value: this._max_value,
        };
        this.controller._get_view(obj);
    }
    ;
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
            }
            else if (this._slider_type == "single") {
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
            }
            else {
                throw console.error("Неправильно задан параметр для _slider_type");
            }
        }
        else {
            throw console.error("На странице не существует указанного _element_id для создания слайдера или он просто не указан");
        }
        ;
        this.set_visible_text_field();
        this._create_listeners();
    }
    ;
    move_sliders_on_initialization() {
        let first_slider_position = this.pixel_step * ((this._min_slider_value - this._min_value) / this._step);
        let second_slider_position = this.pixel_step * ((this._max_slider_value - this._min_value) / this._step);
        this.slider_1.style.top = first_slider_position + "px";
        this.slider_2.style.top = second_slider_position + "px";
        this.value_field_1_fly.style.top = first_slider_position + "px";
        this.value_field_2_fly.style.top = second_slider_position + "px";
        this.refresh_positions();
        this.move_ribbon();
    }
    ;
    move_ribbon() {
        this.refresh_positions();
        if (this._slider_type == "double") {
            this.ribbon.style.top = (this.slider_1_width / 2) + this.slider_1_position_left_x_axis + "px";
            this.ribbon.style.height = this.slider_2_position_left_x_axis - this.slider_1_position_left_x_axis + "px";
        }
        else if (this._slider_type == "single") {
            this.ribbon.style.top = "0px";
            this.ribbon.style.height = this._slider_single_position_left_x_axis + "px";
        }
    }
    ;
    _create_listeners() {
        if (this._slider_type == "double") {
            this.slider_1.onmousedown = this._mouse_down_first_slider;
            this.slider_2.onmousedown = this._mouse_down_second_slider;
        }
        else if (this._slider_type == "single") {
            this.slider_single.onmousedown = this._mouse_down_single;
        }
        ;
    }
    ;
    _math__sliders_value_single(pixel_step, e) {
        let answer = Math.floor(this._slider_single_position_left_x_axis * this.multiplier);
        if (e.clientY > this.parent_width + this.parent_position_x - pixel_step) {
            this.value_field_single.innerText = this.parent_width * this.multiplier + this._sign;
            this.value_field_single_static.innerText = this.parent_width * this.multiplier + " " + this._sign;
        }
        else {
            this.value_field_single.innerText = answer + " " + this._sign;
            this.value_field_single_static.innerText = answer + " " + this._sign;
        }
        this.value_field_single.style.top = this._slider_single_position_left_x_axis + "px";
    }
    ;
    _math__sliders_value_left() {
        let answer1 = Math.floor(this.slider_1_position_left_x_axis * this.multiplier) + this._min_value;
        this.value_field_1.innerText = answer1 + " " + this._sign;
        this.value_field_1_fly.innerText = answer1 + " " + this._sign;
        this.value_field_1_fly.style.top = this.slider_1_position_left_x_axis - this.slider_1.offsetHeight / 2 + "px";
    }
    ;
    _math__sliders_value_right(e) {
        let answer2 = Math.floor(this.slider_2_position_left_x_axis * this.multiplier) + this._min_value;
        if (e.clientY > this.parent_width + this.parent_position_x - this.pixel_step) {
            this.value_field_2_fly.innerText = this._max_value + " " + this._sign;
            this.value_field_2.innerText = this._max_value + " " + this._sign;
        }
        else {
            this.value_field_2_fly.innerText = answer2 + " " + this._sign;
            this.value_field_2.innerText = answer2 + " " + this._sign;
        }
        this.value_field_2_fly.style.top = this.slider_2_position_left_x_axis + this.slider_2.offsetHeight / 2 + "px";
    }
    ;
    _math__sliders_value_single_step(steps, e) {
        let answer = this._step * steps + Number(this._min_value);
        if (e.clientY > this.parent_position_x && e.clientY + this.slider_single_width < this.parent_width + this.parent_position_x) {
            this.value_field_single.innerText = answer + " " + this._sign;
            this.value_field_single_static.innerText = answer + " " + this._sign;
        }
        else if (e.clientY > this.parent_width + this.parent_position_x) {
            this.value_field_single.innerText = this._max_value + " " + this._sign;
            this.value_field_single_static.innerText = this._max_value + " " + this._sign;
        }
        else if (e.clientY <= this.parent_position_x) {
            this.value_field_single.innerText = this._min_value + " " + this._sign;
            this.value_field_single_static.innerText = this._min_value + " " + this._sign;
        }
        ;
        this.value_field_single.style.top = this._slider_single_position_left_x_axis + "px";
    }
    ;
    _math__sliders_value_left_step(steps, pixel_step, e) {
        let answer1 = this._step * steps + Number(this._min_value);
        if (e.clientY <= this.slider_2_position_left_x_axis + this.parent_position.top - pixel_step && e.clientY >= this.parent_position.top) {
            this.value_field_1_fly.innerText = answer1 + " " + this._sign;
            this.value_field_1.innerText = answer1 + " " + this._sign;
            // this.value_field_1_fly.style.top = pixel_step * steps + "px";
        }
        ;
        if (e.clientX <= this.parent_position_x) {
            this.value_field_1_fly.innerText = this._min_value + " " + this._sign;
            this.value_field_1.innerText = this._min_value + " " + this._sign;
        }
        ;
        // if (this.value_field_1_fly.offsetTop >= this.value_field_2_fly.offsetTop - this.slider_1.offsetHeight) {
        // 	this.value_field_1_fly.style.top = this.value_field_2_fly.offsetTop - this.slider_1.offsetHeight * 2 + "px"
        // };
        this.value_field_1_fly.style.top = this.slider_1_position_left_x_axis - this.slider_1_width / 4 + "px";
    }
    ;
    _math__sliders_value_right_step(steps, pixel_step, e) {
        let answer2 = this._step * steps + Number(this._min_value);
        if (answer2 > this._max_value) {
            answer2 = this._max_value;
            steps -= 1;
        }
        ;
        if (e.clientY < this.parent_width + this.parent_position_x
            && e.clientY >= this.slider_1_position_left_x_axis + this.parent_position_x + pixel_step) {
            this.value_field_2_fly.innerText = answer2 + " " + this._sign;
            this.value_field_2.innerText = answer2 + " " + this._sign;
            this.value_field_2_fly.style.top = pixel_step * steps + "px";
        }
        else if (e.clientY > this.parent_width + this.parent_position_x - this.slider_2_width) {
            this.value_field_2_fly.innerText = answer2 + " " + this._sign;
            this.value_field_2.innerText = answer2 + " " + this._sign;
            this.value_field_2_fly.style.top = this.slider_2_position_left_x_axis + "px";
        }
        ;
        if (this.value_field_2_fly.offsetTop <= this.value_field_1_fly.offsetTop + this.slider_2.offsetHeight) {
            this.value_field_2_fly.style.top = this.value_field_1_fly.offsetTop + this.slider_2.offsetHeight * 2 + "px";
        }
        ;
    }
    ;
    _step_implementation(e, modified_object, static_object) {
        this.refresh_positions();
        let modified_object_position = modified_object.offsetTop; //смещение относительно левого верхнего угла родителя по Х
        let modified_object_width = modified_object.offsetHeight; // ширина ползунка
        let pixel_step = (this.parent_width - modified_object_width) / this.steps; // размер шага в пикселях
        if (static_object) {
            let static_object_position = static_object.offsetTop; //смещение относительно левого верхнего угла родителя по Х
            let step = Math.round((e.clientY - this.parent_position_x) / pixel_step); // это количество шагов в позиции
            if (modified_object_position < static_object_position) {
                if (e.clientY > static_object_position + this.parent_position_x && e.clientY > this.parent_position_x + pixel_step) {
                    modified_object.style.top = (static_object_position - pixel_step) + "px";
                }
                else if (e.clientY < this.parent_position_x + pixel_step) {
                    modified_object.style.top = "0px";
                }
                else if (e.clientY > this.parent_position_x && e.clientY <= this.parent_position_x + static_object_position - pixel_step) {
                    modified_object.style.top = (pixel_step * step) + "px";
                }
                ;
                this.refresh_positions();
                if (modified_object_position + modified_object_width >= static_object_position) {
                    modified_object.style.zIndex = "2";
                    static_object.style.zIndex = "1";
                }
                else {
                    modified_object.style.zIndex = "1";
                    static_object.style.zIndex = "2";
                }
                ;
                this._math__sliders_value_left_step(step, pixel_step, e);
            }
            ;
            if (modified_object_position > static_object_position) {
                if (e.clientY > static_object_position + this.parent_position_x + pixel_step && e.clientY < this.parent_width + this.parent_position_x - modified_object_width) {
                    modified_object.style.top = pixel_step * step + "px";
                }
                else if (e.clientY > this.parent_width + this.parent_position_x - modified_object_width) {
                    modified_object.style.top = this.parent_width - modified_object_width + "px";
                }
                else if (e.clientY < this.parent_position_x + static_object_position + modified_object_width) {
                    modified_object.style.top = static_object_position + modified_object_width + "px";
                }
                ;
                this.refresh_positions();
                if (modified_object_position - modified_object_width <= static_object_position) {
                    modified_object.style.zIndex = "2";
                    static_object.style.zIndex = "1";
                }
                else {
                    modified_object.style.zIndex = "1";
                    static_object.style.zIndex = "2";
                }
                ;
                this._math__sliders_value_right_step(step, pixel_step, e);
            }
            ;
        }
        else {
            // this.refresh_positions();
            let step = Math.round((e.clientY - this.parent_position_x) / pixel_step); // это количество шагов в позиции
            if (e.clientY < this.parent_position_x) {
                modified_object.style.top = 0 + "px";
            }
            else if (e.clientY > this.parent_position_x + this.parent_width - modified_object_width) {
                modified_object.style.top = this.parent_width - modified_object_width + "px";
            }
            else if (e.clientY > this.parent_position_x && e.clientY < this.parent_position_x + this.parent_width) {
                modified_object.style.top = (pixel_step * step) + "px";
            }
            ;
            this.refresh_positions();
            this._math__sliders_value_single_step(step, e);
        }
    }
    ;
}
;

//# sourceMappingURL=view_vertical.js.map

/***/ }),

/***/ "./is_horizontal.css":
/*!***************************!*\
  !*** ./is_horizontal.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./is_vertical.css":
/*!*************************!*\
  !*** ./is_vertical.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9pc19zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3ZpZXdfaG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly8vLi9kaXN0L3ZpZXdfdmVydGljYWwuanMiLCJ3ZWJwYWNrOi8vLy4vaXNfaG9yaXpvbnRhbC5jc3M/NjMxYyIsIndlYnBhY2s6Ly8vLi9pc192ZXJ0aWNhbC5jc3M/YzJmMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7QUFDdEIsc0M7Ozs7Ozs7Ozs7OztBQzdGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDRjtBQUNZO0FBQ3hDLDREQUFTLEVBQUUsK0NBQStDO0FBQzFELDREQUFTLEVBQUUsbURBQW1EO0FBQzlELDREQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUM7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNwRCxXQUFXLGdCQUFnQjtBQUNxQjtBQUNoQjtBQUNVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNERBQWE7QUFDaEM7QUFDQTtBQUNBLG1CQUFtQixnRUFBZTtBQUNsQztBQUNBO0FBQ0Esb0JBQW9CLDRDQUFLO0FBQ3pCLHlCQUF5QixzREFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDREQUFhO0FBQ3BDO0FBQ0E7QUFDQSx1QkFBdUIsZ0VBQWU7QUFDdEM7QUFDQTtBQUNBLG9CQUFvQiw0Q0FBSztBQUN6Qix5QkFBeUIsc0RBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxQjtBQUNyQixxQzs7Ozs7Ozs7Ozs7O0FDak1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQjtBQUNqQixpQzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFLCtFQUErRTtBQUMvRSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0UsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLDBEQUEwRDtBQUMxRCx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBLCtCQUErQjtBQUMvQiwwREFBMEQ7QUFDMUQsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEUsZ0VBQWdFO0FBQ2hFLGtGQUFrRjtBQUNsRjtBQUNBLGtFQUFrRTtBQUNsRSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQzNCLDJDOzs7Ozs7Ozs7Ozs7QUM3ZEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakUsK0VBQStFO0FBQy9FLDhEQUE4RDtBQUM5RDtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUUsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsMERBQTBEO0FBQzFELHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLDBEQUEwRDtBQUMxRCx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFLGlFQUFpRTtBQUNqRSxrRkFBa0Y7QUFDbEY7QUFDQSxpRUFBaUU7QUFDakUscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3lCO0FBQ3pCLHlDOzs7Ozs7Ozs7OztBQzVkQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Rpc3QvaW5kZXguanNcIik7XG4iLCI7XHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50X2lkID0gcGFyYW0uX2VsZW1lbnRfaWQ7XHJcbiAgICAgICAgdGhpcy5fc2lnbiA9IHBhcmFtLl9zaWduIHx8IFwi4oK9XCI7XHJcbiAgICAgICAgdGhpcy5fc2xpZGVyX3R5cGUgPSBwYXJhbS5fc2xpZGVyX3R5cGUgfHwgXCJzaW5nbGVcIjtcclxuICAgICAgICB0aGlzLl9zdGVwID0gcGFyYW0uX3N0ZXAgfHwgMjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAgPSBwYXJhbS50b29sdGlwIHx8IFwib25cIjtcclxuICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3N0YXRlID0gcGFyYW0udmFsdWVfZmllbGRfc3RhdGUgfHwgXCJvblwiO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX2JpbmRfbW9kZWwobW9kZWwpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfYmluZF92aWV3KHZpZXcpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgfVxyXG4gICAgX2dldF9tb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbC5fZ2V0X21vZGVsKCk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfc2V0X21vZGVsKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuX3NldF9tb2RlbCh7XHJcbiAgICAgICAgICAgIF9taW5fc2xpZGVyX3ZhbHVlOiB0aGlzLl9taW5fc2xpZGVyX3ZhbHVlLFxyXG4gICAgICAgICAgICBfbWF4X3NsaWRlcl92YWx1ZTogdGhpcy5fbWF4X3NsaWRlcl92YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX2dldF92aWV3KG9iaikge1xyXG4gICAgICAgIGlmICh0aGlzLl9zbGlkZXJfdHlwZSA9PSBcImRvdWJsZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21pbl9zbGlkZXJfdmFsdWUgPSBvYmouX21pbl9zbGlkZXJfdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX21heF9zbGlkZXJfdmFsdWUgPSBvYmouX21heF9zbGlkZXJfdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJzaW5nbGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9taW5fc2xpZGVyX3ZhbHVlID0gb2JqLl9taW5fc2xpZGVyX3ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgdGhpcy5fc2V0X21vZGVsKCk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfc2V0X3ZpZXcoKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgX2VsZW1lbnRfaWQ6IHRoaXMuX2VsZW1lbnRfaWQsXHJcbiAgICAgICAgICAgIF9zaWduOiB0aGlzLl9zaWduLFxyXG4gICAgICAgICAgICBfbWluX3ZhbHVlOiB0aGlzLl9taW5fdmFsdWUsXHJcbiAgICAgICAgICAgIF9tYXhfdmFsdWU6IHRoaXMuX21heF92YWx1ZSxcclxuICAgICAgICAgICAgX21pbl9zbGlkZXJfdmFsdWU6IHRoaXMuX21pbl9zbGlkZXJfdmFsdWUsXHJcbiAgICAgICAgICAgIF9tYXhfc2xpZGVyX3ZhbHVlOiB0aGlzLl9tYXhfc2xpZGVyX3ZhbHVlLFxyXG4gICAgICAgICAgICBfc2xpZGVyX3R5cGU6IHRoaXMuX3NsaWRlcl90eXBlLFxyXG4gICAgICAgICAgICBfc3RlcDogdGhpcy5fc3RlcCxcclxuICAgICAgICAgICAgdG9vbHRpcDogdGhpcy50b29sdGlwLFxyXG4gICAgICAgICAgICB2YWx1ZV9maWVsZF9zdGF0ZTogdGhpcy52YWx1ZV9maWVsZF9zdGF0ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy52aWV3Ll9zZXRfZm9yX3ZpZXcob2JqKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9nZXRfY29udHJvbGxlcigpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBfZWxlbWVudF9pZDogdGhpcy5fZWxlbWVudF9pZCxcclxuICAgICAgICAgICAgX3NpZ246IHRoaXMuX3NpZ24sXHJcbiAgICAgICAgICAgIF9taW5fdmFsdWU6IHRoaXMuX21pbl92YWx1ZSxcclxuICAgICAgICAgICAgX21heF92YWx1ZTogdGhpcy5fbWF4X3ZhbHVlLFxyXG4gICAgICAgICAgICBfbWluX3NsaWRlcl92YWx1ZTogdGhpcy5fbWluX3NsaWRlcl92YWx1ZSxcclxuICAgICAgICAgICAgX21heF9zbGlkZXJfdmFsdWU6IHRoaXMuX21heF9zbGlkZXJfdmFsdWUsXHJcbiAgICAgICAgICAgIF9zbGlkZXJfdHlwZTogdGhpcy5fc2xpZGVyX3R5cGUsXHJcbiAgICAgICAgICAgIF9zdGVwOiB0aGlzLl9zdGVwLFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXHJcbiAgICAgICAgICAgIHZhbHVlX2ZpZWxkX3N0YXRlOiB0aGlzLnZhbHVlX2ZpZWxkX3N0YXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9zZXRfY29udHJvbGxlcigpIHtcclxuICAgICAgICBsZXQgb2JqX2Zyb21fbW9kZWwgPSB0aGlzLl9nZXRfbW9kZWwoKTtcclxuICAgICAgICB0aGlzLl9taW5fc2xpZGVyX3ZhbHVlID0gb2JqX2Zyb21fbW9kZWwuX21pbl9zbGlkZXJfdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fbWF4X3NsaWRlcl92YWx1ZSA9IG9ial9mcm9tX21vZGVsLl9tYXhfc2xpZGVyX3ZhbHVlO1xyXG4gICAgICAgIHRoaXMuX21pbl92YWx1ZSA9IG9ial9mcm9tX21vZGVsLl9taW5fdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fbWF4X3ZhbHVlID0gb2JqX2Zyb21fbW9kZWwuX21heF92YWx1ZTtcclxuICAgICAgICB0aGlzLl9zaWduID0gb2JqX2Zyb21fbW9kZWwuX3NpZ247XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBjcmVhdGVfc2xpZGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3NldF9jb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5fc2V0X3ZpZXcoKTtcclxuICAgIH1cclxuICAgIDtcclxufVxyXG4vLyBsZXQgdmlldyA9IG5ldyBWaWV3KCk7XHJcbi8vIGxldCBtb2RlbCA9IG5ldyBNb2RlbCgpO1xyXG4vLyBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHZpZXcsIG1vZGVsKVxyXG4vLyBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKFZpZXcsIE1vZGVsKTtcclxuZXhwb3J0IHsgQ29udHJvbGxlciB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250cm9sbGVyLmpzLm1hcCIsImltcG9ydCBcIi4uL2lzX2hvcml6b250YWwuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2lzX3ZlcnRpY2FsLmNzc1wiO1xyXG5pbXBvcnQgeyBpc19zbGlkZXIgfSBmcm9tIFwiLi9pc19zbGlkZXJcIjtcclxuaXNfc2xpZGVyKHsgX2VsZW1lbnRfaWQ6IFwiaXNzXCIsIHNldHRpbmdzX2lkOiBcImRvY19wYW5lbFwiIH0pO1xyXG5pc19zbGlkZXIoeyBfZWxlbWVudF9pZDogXCJpc3NfMlwiLCBzZXR0aW5nc19pZDogXCJkb2NfcGFuZWxfMlwiIH0pO1xyXG5pc19zbGlkZXIoe1xyXG4gICAgX2VsZW1lbnRfaWQ6IFwiaXNzXzNcIixcclxuICAgIHNldHRpbmdzX2lkOiBcImRvY19wYW5lbF8zXCIsXHJcbiAgICBfdHlwZV92aWV3OiBcInZlcnRpY2FsXCIsXHJcbiAgICBfbWluX3ZhbHVlOiAzMDAsXHJcbiAgICBfbWF4X3ZhbHVlOiA1MDAwLFxyXG4gICAgX21pbl9zbGlkZXJfdmFsdWU6IDQwMCxcclxuICAgIF9tYXhfc2xpZGVyX3ZhbHVlOiA1MDBcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IFZpZXdfaG9yaXpvbnRhbCB9IGZyb20gXCIuL3ZpZXdfaG9yaXpvbnRhbFwiO1xyXG4vLyBpbXBvcnQgeyBWaWV3X3ZlcnRpY2FsIH0gZnJvbSBcIi4vdmlld192ZXJ0aWNhbFwiO1xyXG5pbXBvcnQgeyBWaWV3X3ZlcnRpY2FsIH0gZnJvbSBcIi4vdmlld192ZXJ0aWNhbFwiO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XHJcbjtcclxuZnVuY3Rpb24gaXNfc2xpZGVyKHBhcmFtKSB7XHJcbiAgICA7XHJcbiAgICA7XHJcbiAgICBsZXQgb2JqX2ZpeGVkX3ZhbHVlcyA9IHtcclxuICAgICAgICBzaWduOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlNpZ25cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi0JLQsNC70Y7RgtCwXCIsXHJcbiAgICAgICAgICAgIGtleV93b3JkOiBcInNpZ25cIixcclxuICAgICAgICAgICAgdmFsdWU6IFtcIuKCvVwiLCBcIiRcIl0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IFwiX3NpZ25cIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZV92aWV3OiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlR5cGVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi0KLQuNC/INGB0LvQsNC50LTQtdGA0LAgLSDQvtC00LjQvdCw0YDQvdGL0Lkg0LjQu9C4INC00LLQvtC50L3QvtC5XCIsXHJcbiAgICAgICAgICAgIGtleV93b3JkOiBcInNsaWRlcl92aWV3XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiBbXCJkb3VibGVcIiwgXCJzaW5nbGVcIl0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IFwiX3NsaWRlcl90eXBlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNsaWRlcl90eXBlOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlR5cGVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi0KLQuNC/INGB0LvQsNC50LTQtdGA0LAgLSDQstC10YDRgtC40LrQsNC70YzQvdGL0Lkg0LjQu9C4INCz0L7RgNC40LfQvtC90YLQsNC70YzQvdGL0LlcIixcclxuICAgICAgICAgICAga2V5X3dvcmQ6IFwic2xpZGVyX3R5cGVcIixcclxuICAgICAgICAgICAgdmFsdWU6IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXSxcclxuICAgICAgICAgICAgZnVuY3Rpb25fbmFtZTogXCJfdHlwZV92aWV3XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiVG9vbHRpcFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLQktGB0L/Qu9GL0LLQsNGO0YnQsNGPINC/0L7QtNGB0LrQsNC30LrQsCDQvdCw0LQg0L/QvtC70LfRg9C90LrQvtC8XCIsXHJcbiAgICAgICAgICAgIGtleV93b3JkOiBcInRvb2x0aXBcIixcclxuICAgICAgICAgICAgdmFsdWU6IFtcIm9uXCIsIFwib2ZmXCJdLFxyXG4gICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBcInRvb2x0aXBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWVfZmllbGRfc3RhdGU6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwidmFsdWVfZmllbGRfc3RhdGVcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi0J/QvtC70LUg0LLRi9Cy0L7QtNCwINCy0LDQu9GO0YLRi1wiLFxyXG4gICAgICAgICAgICBrZXlfd29yZDogXCJ2YWx1ZV9maWVsZF9zdGF0ZVwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogW1wib25cIiwgXCJvZmZcIl0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IFwidmFsdWVfZmllbGRfc3RhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICA7XHJcbiAgICA7XHJcbiAgICBsZXQgb2JqX2NoYW5nZWFibGVfdmFsdWVzID0ge1xyXG4gICAgICAgIHN0ZXA6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3RlcFwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLQqNCw0LMg0L/QvtC70LfRg9C90LrQsFwiLFxyXG4gICAgICAgICAgICBrZXlfd29yZDogXCJzdGVwXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IFwiX3N0ZXBcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWluX3N0YXJ0X3NsaWRlcjoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJNaW5fc2xpZGVyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcItCc0LjQvdC40LzQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDRiNC60LDQu9GLINGB0LvQsNC50LTQtdGA0LBcIixcclxuICAgICAgICAgICAga2V5X3dvcmQ6IFwibWluX3N0YXJ0X3NsaWRlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBcIl9taW5fdmFsdWVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4X3N0YXJ0X3NsaWRlcjoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJNYXhfc2xpZGVyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcItCc0LDQutGB0LjQvNCw0LvRjNC90L7QtSDQt9C90LDRh9C10L3QuNC1INGI0LrQsNC70Ysg0YHQu9Cw0LnQtNC10YDQsFwiLFxyXG4gICAgICAgICAgICBrZXlfd29yZDogXCJtYXhfc3RhcnRfc2xpZGVyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uX25hbWU6IFwiX21heF92YWx1ZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaW5fc2xpZGVyX3ZhbHVlOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk1pbl9zbGlkZXJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi0J3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwIC0g0LTQu9GPINC/0LXRgNCy0L7Qs9C+INC40LvQuCDQvtC00LjQvdC+0YfQvdC+0LPQviDQv9C+0LvQt9GD0L3QutCwXCIsXHJcbiAgICAgICAgICAgIGtleV93b3JkOiBcIm1pbl9zbGlkZXJfdmFsdWVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICAgICAgZnVuY3Rpb25fbmFtZTogXCJfbWluX3NsaWRlcl92YWx1ZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXhfc2xpZGVyX3ZhbHVlOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk1heF9zbGlkZXJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi0J3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0YjQutCw0LvRiyDRgdC70LDQudC00LXRgNCwIC0g0LTQu9GPINCy0YLQvtGA0L7Qs9C+INC/0L7Qu9C30YPQvdC60LBcIixcclxuICAgICAgICAgICAga2V5X3dvcmQ6IFwibWF4X3NsaWRlcl92YWx1ZVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICBmdW5jdGlvbl9uYW1lOiBcIl9tYXhfc2xpZGVyX3ZhbHVlXCJcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGxldCBzZXR0aW5ncyA9IHtcclxuICAgICAgICAvLyBfZWxlbWVudF9pZDogXCJpYXMtc2xpZGVyXCIsXHJcbiAgICAgICAgX2VsZW1lbnRfaWQ6IHBhcmFtLl9lbGVtZW50X2lkIHx8IFwiaXNzXCIsXHJcbiAgICAgICAgX3NpZ246IHBhcmFtLl9zaWduIHx8IFwi4oK9XCIsXHJcbiAgICAgICAgX21pbl92YWx1ZTogcGFyYW0uX21pbl92YWx1ZSB8fCAwLFxyXG4gICAgICAgIF9tYXhfdmFsdWU6IHBhcmFtLl9tYXhfdmFsdWUgfHwgMTAwMCxcclxuICAgICAgICBfbWluX3NsaWRlcl92YWx1ZTogcGFyYW0uX21pbl9zbGlkZXJfdmFsdWUgfHwgMjAwLFxyXG4gICAgICAgIF9tYXhfc2xpZGVyX3ZhbHVlOiBwYXJhbS5fbWF4X3NsaWRlcl92YWx1ZSB8fCA4MDAsXHJcbiAgICAgICAgX3NsaWRlcl90eXBlOiBwYXJhbS5fc2xpZGVyX3R5cGUgfHwgXCJkb3VibGVcIixcclxuICAgICAgICBfdHlwZV92aWV3OiBwYXJhbS5fdHlwZV92aWV3IHx8IFwiaG9yaXpvbnRhbFwiLFxyXG4gICAgICAgIF9zdGVwOiBwYXJhbS5fc3RlcCB8fCA1MCxcclxuICAgICAgICB0b29sdGlwOiBwYXJhbS50b29sdGlwIHx8IFwib25cIixcclxuICAgICAgICB2YWx1ZV9maWVsZF9zdGF0ZTogcGFyYW0udmFsdWVfZmllbGRfc3RhdGUgfHwgXCJvblwiLFxyXG4gICAgICAgIHNldHRpbmdzX2lkOiBwYXJhbS5zZXR0aW5nc19pZCB8fCBcImRvY19wYW5lbFwiXHJcbiAgICB9O1xyXG4gICAgLy8gbGV0IGtleV9vbmU6YW55O1xyXG4gICAgZm9yIChsZXQga2V5X29uZSBpbiBvYmpfZml4ZWRfdmFsdWVzKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgbGV0IGtleSA9IG9ial9maXhlZF92YWx1ZXNba2V5X29uZV07XHJcbiAgICAgICAgbGV0IHRpdGxlID0gb2JqX2ZpeGVkX3ZhbHVlc1trZXlfb25lXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBsZXQgdGV4dF9ub2RlX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0X25vZGVfdGl0bGUpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgICAgICBzZWxlY3QuaWQgPSBvYmpfZml4ZWRfdmFsdWVzW2tleV9vbmVdLmtleV93b3JkO1xyXG4gICAgICAgIGZvciAobGV0IGIgaW4gb2JqX2ZpeGVkX3ZhbHVlc1trZXlfb25lXS52YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3R1ZmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBvYmpfZml4ZWRfdmFsdWVzW2tleV9vbmVdLnZhbHVlW2JdO1xyXG4gICAgICAgICAgICBzdHVmZi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgdGV4dF9ub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xyXG4gICAgICAgICAgICBzdHVmZi5hcHBlbmRDaGlsZCh0ZXh0X25vZGUpO1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQoc3R1ZmYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2V0dGluZ3Muc2V0dGluZ3NfaWQpLmFwcGVuZENoaWxkKGRpdikuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2V0dGluZ3Muc2V0dGluZ3NfaWQpO1xyXG4gICAgICAgIGxldCBlbGVtZW50X2lfY2hvb3NlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBvYmpfZml4ZWRfdmFsdWVzW2tleV9vbmVdLmtleV93b3JkKTtcclxuICAgICAgICBlbGVtZW50X2lfY2hvb3NlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tvYmpfZml4ZWRfdmFsdWVzW2tleV9vbmVdLmZ1bmN0aW9uX25hbWVdID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgc2xpZGVyX3JlZnJlc2goKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgZm9yIChsZXQga2V5X29uZSBpbiBvYmpfY2hhbmdlYWJsZV92YWx1ZXMpIHtcclxuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBvYmpfY2hhbmdlYWJsZV92YWx1ZXNba2V5X29uZV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgbGV0IHRleHRfbm9kZV90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRlc2NyaXB0aW9uKTtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBpbnB1dC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICBzcGFuLmFwcGVuZENoaWxkKHRleHRfbm9kZV90aXRsZSk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgZGl2LmlkID0gXCJpc3NfX1wiICsgb2JqX2NoYW5nZWFibGVfdmFsdWVzW2tleV9vbmVdLmtleV93b3JkO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNldHRpbmdzLnNldHRpbmdzX2lkKS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZXR0aW5ncy5zZXR0aW5nc19pZCk7XHJcbiAgICAgICAgbGV0IGVsZW1lbnRfaV9jaG9vc2UgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihcIiNpc3NfX1wiICsgb2JqX2NoYW5nZWFibGVfdmFsdWVzW2tleV9vbmVdLmtleV93b3JkKTtcclxuICAgICAgICBsZXQgZl9uYW1lID0gb2JqX2NoYW5nZWFibGVfdmFsdWVzW2tleV9vbmVdLmZ1bmN0aW9uX25hbWU7XHJcbiAgICAgICAgZWxlbWVudF9pX2Nob29zZS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXR0aW5nc1tmX25hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIHNsaWRlcl9yZWZyZXNoKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGZ1bmN0aW9uIGNoYW5nZV9zdHJpbmcobiwgeCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3NcIikuaW5uZXJUZXh0ID0gbiArIFwiOiBcIiArIHg7XHJcbiAgICAgICAgc2xpZGVyX3JlZnJlc2goKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIC8v0J/QntCh0KLQoNCe0JXQndCY0JUg0KHQm9CQ0JnQlNCV0KDQkCDQn9Cg0Jgg0J/QldCg0JLQntCcINCX0JDQn9Cj0KHQmtCVXHJcbiAgICBsZXQgdmlldztcclxuICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5ncy5fdHlwZV92aWV3ICA9PT0gJyArIHNldHRpbmdzLl90eXBlX3ZpZXcpXHJcbiAgICBpZiAoc2V0dGluZ3MuX3R5cGVfdmlldyA9PSBcInZlcnRpY2FsXCIpIHtcclxuICAgICAgICAvLyB2aWV3ID0gbmV3IFZpZXdfdmVydGljYWwoc2V0dGluZ3MpO1xyXG4gICAgICAgIHZpZXcgPSBuZXcgVmlld192ZXJ0aWNhbCgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2V0dGluZ3MuX3R5cGVfdmlldyA9PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICAgIHZpZXcgPSBuZXcgVmlld19ob3Jpem9udGFsKCk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBsZXQgbW9kZWwgPSBuZXcgTW9kZWwoc2V0dGluZ3MpO1xyXG4gICAgbGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihzZXR0aW5ncyk7XHJcbiAgICBjb250cm9sbGVyLl9iaW5kX21vZGVsKG1vZGVsKTtcclxuICAgIGNvbnRyb2xsZXIuX2JpbmRfdmlldyh2aWV3KTtcclxuICAgIHZpZXcuX2JpbmRfY29udHJvbGxlcihjb250cm9sbGVyKTtcclxuICAgIGNvbnRyb2xsZXIuY3JlYXRlX3NsaWRlcigpO1xyXG4gICAgZnVuY3Rpb24gc2xpZGVyX3JlZnJlc2goKSB7XHJcbiAgICAgICAgLy8gbGV0IHZpZXc7XHJcbiAgICAgICAgaWYgKHNldHRpbmdzLl90eXBlX3ZpZXcgPT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcbiAgICAgICAgICAgIC8vIHZpZXcgPSBuZXcgVmlld192ZXJ0aWNhbChzZXR0aW5ncyk7XHJcbiAgICAgICAgICAgIHZpZXcgPSBuZXcgVmlld192ZXJ0aWNhbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZXR0aW5ncy5fdHlwZV92aWV3ID09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSBuZXcgVmlld19ob3Jpem9udGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBtb2RlbCA9IG5ldyBNb2RlbChzZXR0aW5ncyk7XHJcbiAgICAgICAgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHNldHRpbmdzKTtcclxuICAgICAgICBjb250cm9sbGVyLl9iaW5kX21vZGVsKG1vZGVsKTtcclxuICAgICAgICBjb250cm9sbGVyLl9iaW5kX3ZpZXcodmlldyk7XHJcbiAgICAgICAgdmlldy5fYmluZF9jb250cm9sbGVyKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgIGNvbnRyb2xsZXIuY3JlYXRlX3NsaWRlcigpO1xyXG4gICAgfVxyXG4gICAgO1xyXG59XHJcbjtcclxuZXhwb3J0IHsgaXNfc2xpZGVyIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzX3NsaWRlci5qcy5tYXAiLCI7XHJcbjtcclxuY2xhc3MgTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocGFyYW0pIHtcclxuICAgICAgICB0aGlzLl9taW5fdmFsdWUgPSBwYXJhbS5fbWluX3ZhbHVlIHx8IDA7XHJcbiAgICAgICAgdGhpcy5fbWF4X3ZhbHVlID0gcGFyYW0uX21heF92YWx1ZSB8fCAxMDAwO1xyXG4gICAgICAgIHRoaXMuX21pbl9zbGlkZXJfdmFsdWUgPSBwYXJhbS5fbWluX3NsaWRlcl92YWx1ZSB8fCAyMDA7XHJcbiAgICAgICAgdGhpcy5fbWF4X3NsaWRlcl92YWx1ZSA9IHBhcmFtLl9tYXhfc2xpZGVyX3ZhbHVlIHx8IDgwMDtcclxuICAgICAgICB0aGlzLl9zaWduID0gcGFyYW0uX3NpZ24gfHwgXCLigr1cIjtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9zZXRfbW9kZWwob2JqKSB7XHJcbiAgICAgICAgdGhpcy5fbWluX3NsaWRlcl92YWx1ZSA9IG9iai5fbWluX3NsaWRlcl92YWx1ZTtcclxuICAgICAgICB0aGlzLl9tYXhfc2xpZGVyX3ZhbHVlID0gb2JqLl9tYXhfc2xpZGVyX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX2dldF9tb2RlbCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBfbWluX3ZhbHVlOiB0aGlzLl9taW5fdmFsdWUsXHJcbiAgICAgICAgICAgIF9tYXhfdmFsdWU6IHRoaXMuX21heF92YWx1ZSxcclxuICAgICAgICAgICAgX21pbl9zbGlkZXJfdmFsdWU6IHRoaXMuX21pbl9zbGlkZXJfdmFsdWUsXHJcbiAgICAgICAgICAgIF9tYXhfc2xpZGVyX3ZhbHVlOiB0aGlzLl9tYXhfc2xpZGVyX3ZhbHVlLFxyXG4gICAgICAgICAgICBfc2lnbjogdGhpcy5fc2lnblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICA7XHJcbn1cclxuO1xyXG5leHBvcnQgeyBNb2RlbCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RlbC5qcy5tYXAiLCI7XHJcbmNsYXNzIFZpZXdfaG9yaXpvbnRhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZV90aGlzX3NsaWRlcnNfZWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50X2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgdGhpcy5fZWxlbWVudF9pZCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50X3dpZHRoID0gdGhpcy5wYXJlbnRfZWxlbWVudC5vZmZzZXRXaWR0aDsgLy8g0YjQuNGA0LjQvdCwINGA0L7QtNC40YLQtdC70YzRgdC60L7Qs9C+INGN0LvQtdC80LXQvdGC0LBcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRfcG9zaXRpb24gPSB0aGlzLnBhcmVudF9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LrQvtC90YLQtdC50L3QtdGAXHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggPSB0aGlzLnBhcmVudF9wb3NpdGlvbi5sZWZ0OyAvL9GA0LDQt9C80LXRidC10L3QuNC1INC60L7QvdGC0LXQudC90LXRgNCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQu9C10LLQvtCz0L4g0LrRgNCw0Y8g0Y3QutGA0LDQvdCwXHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGQgPSB0aGlzLnBhcmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNzX3ZhbHVlLWZpZWxkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJpYmJvbiA9IHRoaXMucGFyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpc3NfX2NvbG9yLWJhcl9ob3Jpem9udGFsXCIpO1xyXG4gICAgICAgICAgICAvL9Cg0JDQodCn0JXQotCrINCo0JDQk9CQXHJcbiAgICAgICAgICAgIHRoaXMuc3RlcHMgPSAodGhpcy5fbWF4X3ZhbHVlIC0gdGhpcy5fbWluX3ZhbHVlKSAvIHRoaXMuX3N0ZXA7IC8vINC60L7Qu9C40YfQtdGB0YLQstC+INGI0LDQs9C+0LJcclxuICAgICAgICAgICAgdGhpcy5waXhlbF9zdGVwID0gdGhpcy5wYXJlbnRfd2lkdGggLyB0aGlzLnN0ZXBzOyAvLyDRgNCw0LfQvNC10YAg0YjQsNCz0LAg0LIg0L/QuNC60YHQtdC70Y/RhVxyXG4gICAgICAgICAgICB0aGlzLm11bHRpcGxpZXIgPSAodGhpcy5fbWF4X3ZhbHVlIC0gdGhpcy5fbWluX3ZhbHVlKSAvIHRoaXMucGFyZW50X3dpZHRoO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJkb3VibGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8xID0gdGhpcy5wYXJlbnRfZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2lzc192YWx1ZV9maWVsZF8xLWZpZWxkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yID0gdGhpcy5wYXJlbnRfZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2lzc192YWx1ZV9maWVsZF8yLWZpZWxkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8xX2ZseSA9IHRoaXMucGFyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpc3NfX2RvdWJsZV9mbHktdmFsdWUtMVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkgPSB0aGlzLnBhcmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNzX19kb3VibGVfZmx5LXZhbHVlLTJcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl8xID0gdGhpcy5wYXJlbnRfZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2lzc19fZG91YmxlXzFfaG9yaXpvbnRhbFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzFfd2lkdGggPSB0aGlzLnNsaWRlcl8xLm9mZnNldFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJfMiA9IHRoaXMucGFyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpc3NfX2RvdWJsZV8yX2hvcml6b250YWxcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl8yX3dpZHRoID0gdGhpcy5zbGlkZXJfMi5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzFfcG9zaXRpb25fbGVmdF94X2F4aXMgPSB0aGlzLnNsaWRlcl8xLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl8yX3Bvc2l0aW9uX2xlZnRfeF9heGlzID0gdGhpcy5zbGlkZXJfMi5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NsaWRlcl90eXBlID09IFwic2luZ2xlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlID0gdGhpcy5wYXJlbnRfZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2lzc19fc2luZ2xlX2ZseS12YWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlX3N0YXRpYyA9IHRoaXMucGFyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN2YWx1ZV9maWVsZF9zaW5nbGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl9zaW5nbGUgPSB0aGlzLnBhcmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNzX19zaW5nbGVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl9zaW5nbGVfd2lkdGggPSB0aGlzLnNsaWRlcl9zaW5nbGUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zbGlkZXJfc2luZ2xlX3Bvc2l0aW9uX2xlZnRfeF9heGlzID0gdGhpcy5zbGlkZXJfc2luZ2xlLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRfcG9zaXRpb24gPSB0aGlzLnBhcmVudF9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LrQvtC90YLQtdC50L3QtdGALCDQtdGB0LvQuCDQstC00YDRg9CzINC/0L7QvNC10L3Rj9C10YLRgdGPINGA0LDQt9GA0LXRiNC10L3QuNC1INGN0LrRgNCw0L3QsFxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudF9wb3NpdGlvbl94ID0gdGhpcy5wYXJlbnRfcG9zaXRpb24ubGVmdDsgLy/RgNCw0LfQvNC10YnQtdC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LvQtdCy0L7Qs9C+INC60YDQsNGPINGN0LrRgNCw0L3QsFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJkb3VibGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJfMV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyA9IHRoaXMuc2xpZGVyXzEub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzJfcG9zaXRpb25fbGVmdF94X2F4aXMgPSB0aGlzLnNsaWRlcl8yLm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJzaW5nbGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2xpZGVyX3NpbmdsZV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyA9IHRoaXMuc2xpZGVyX3NpbmdsZS5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0X3Zpc2libGVfdGV4dF9maWVsZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGEgPSB0aGlzLl9taW5fdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBiID0gdGhpcy5fbWF4X3ZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuX21pbl9zbGlkZXJfdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkID0gdGhpcy5fbWF4X3NsaWRlcl92YWx1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLQtNC+ICDRjdGC0L7Qs9C+INC80L7QvNC10L3RgtCwINC+0LpcIilcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NsaWRlcl90eXBlID09IFwiZG91YmxlXCIgJiYgYSA8IGIgJiYgYyA8IGIgJiYgYyA8IGQgJiYgZCA8PSBiICYmIGMgLSBhID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMS5pbm5lclRleHQgPSBjICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yLmlubmVyVGV4dCA9IGQgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzFfZmx5LmlubmVyVGV4dCA9IGMgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzJfZmx5LmlubmVyVGV4dCA9IGQgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVfc2xpZGVyc19vbl9pbml0aWFsaXphdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NsaWRlcl90eXBlID09IFwic2luZ2xlXCIgJiYgYSA8IGIgJiYgYyAtIGEgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGVfc3RhdGljLmlubmVyVGV4dCA9IGMgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZS5pbm5lclRleHQgPSBjICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlX3NpbmdsZV9zbGlkZXJfb25faW5pdGlhbGl6YXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXAgPT0gXCJvZmZcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvb2x0aXAgPSB0aGlzLnBhcmVudF9lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b29sdGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYSBvZiB0b29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZV9maWVsZF9zdGF0ZSA9PSBcIm9mZlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vdmVfc2luZ2xlX3NsaWRlcl9vbl9pbml0aWFsaXphdGlvbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGZpcnN0X3NsaWRlcl9wb3NpdGlvbiA9IHRoaXMucGl4ZWxfc3RlcCAqICgodGhpcy5fbWluX3NsaWRlcl92YWx1ZSAtIHRoaXMuX21pbl92YWx1ZSkgLyB0aGlzLl9zdGVwKTtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJfc2luZ2xlLnN0eWxlLmxlZnQgPSBmaXJzdF9zbGlkZXJfcG9zaXRpb24gKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlLnN0eWxlLmxlZnQgPSBmaXJzdF9zbGlkZXJfcG9zaXRpb24gKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaF9wb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlX3JpYmJvbigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbW91c2VfZG93bl9zaW5nbGUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuX2NhbmNlbF9tb3ZlX2V2ZW50czsgLy8g0L7QsdGA0LDQsdC+0YLRh9C40Log0L3QsCDRgdC+0LHRi9GC0LjQtSDQv9C+0LTQvdGP0YLQuNC1INC60LvQsNCy0LjRiNC4INC80YvRiNC4IC0g0LfQsNC/0YPRgdGC0LjRgiDQutC+0LQsINC60L7RgtC+0YDRi9C5INC+0LHQvdGD0LvQuNGCINGB0L7QsdGL0YLQuNGPXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5fbW92ZV9lbGVtZW50X3NpbmdsZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX21vdmVfZWxlbWVudF9zaW5nbGUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGVwX2ltcGxlbWVudGF0aW9uKGUsIHRoaXMuc2xpZGVyX3NpbmdsZSk7XHJcbiAgICAgICAgICAgICAgICA7IC8vINCg0LDQsdC+0YfQsNGPINGE0YPQvdC60YbQuNGPXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jbGllbnRYID4gdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJfc2luZ2xlLnN0eWxlLmxlZnQgPSAodGhpcy5wYXJlbnRfd2lkdGggLSAodGhpcy5zbGlkZXJfMV93aWR0aCAvIDIpKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUuY2xpZW50WCA8IHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggKyAodGhpcy5zbGlkZXJfMV93aWR0aCAvIDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJfc2luZ2xlLnN0eWxlLmxlZnQgPSAnMHB4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyX3NpbmdsZS5zdHlsZS5sZWZ0ID0gKGUuY2xpZW50WCAtIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggLSAodGhpcy5zbGlkZXJfMV93aWR0aCAvIDIpKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaF9wb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hdGhfX3NsaWRlcnNfdmFsdWVfc2luZ2xlKHRoaXMucGl4ZWxfc3RlcCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVfcmliYm9uKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tb3VzZV9kb3duX2ZpcnN0X3NsaWRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8g0L7RgtC80LXQvdC40LvQuCDQstGB0LUg0LTQtdC50YHRgtCy0LjRjyDQutC+0YLQvtGA0YvQtSDQv9GA0L7QuNGB0YXQvtC00LjQu9C4INGA0LDQvdGM0YjQtVxyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSB0aGlzLl9jYW5jZWxfbW92ZV9ldmVudHM7IC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INC90LAg0YHQvtCx0YvRgtC40LUg0L/QvtC00L3Rj9GC0LjQtSDQutC70LDQstC40YjQuCDQvNGL0YjQuCAtINC30LDQv9GD0YHRgtC40YIg0LrQvtC0LCDQutC+0YLQvtGA0YvQuSDQvtCx0L3Rg9C70LjRgiDRgdC+0LHRi9GC0LjRj1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMuX21vdmVfZWxlbWVudF8xOyAvLyDRgdC+0LHRi9GC0LjQtSwg0L/RgNC+0LjQt9C+0LnQtNC10YIg0LXRgdC70Lgg0YHQtNCy0LjQvdGD0YLRjCDQvNGL0YjRg1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbW91c2VfZG93bl9zZWNvbmRfc2xpZGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQvtGC0LzQtdC90LjQu9C4INCy0YHQtSDQtNC10LnRgdGC0LLQuNGPINC60L7RgtC+0YDRi9C1INC/0YDQvtC40YHRhdC+0LTQuNC70Lgg0YDQsNC90YzRiNC1XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuX2NhbmNlbF9tb3ZlX2V2ZW50czsgLy8g0L7QsdGA0LDQsdC+0YLRh9C40Log0L3QsCDRgdC+0LHRi9GC0LjQtSDQv9C+0LTQvdGP0YLQuNC1INC60LvQsNCy0LjRiNC4INC80YvRiNC4IC0g0LfQsNC/0YPRgdGC0LjRgiDQutC+0LQsINC60L7RgtC+0YDRi9C5INC+0LHQvdGD0LvQuNGCINGB0L7QsdGL0YLQuNGPXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5fbW92ZV9lbGVtZW50XzI7IC8vINGB0L7QsdGL0YLQuNC1LCDQv9GA0L7QuNC30L7QudC00LXRgiDQtdGB0LvQuCDRgdC00LLQuNC90YPRgtGMINC80YvRiNGDXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tb3ZlX2VsZW1lbnRfMSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaF9wb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXAgPj0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RlcF9pbXBsZW1lbnRhdGlvbihlLCB0aGlzLnNsaWRlcl8xLCB0aGlzLnNsaWRlcl8yKTsgLy8g0KDQsNCx0L7Rh9Cw0Y8g0YTRg9C90LrRhtC40Y9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmNsaWVudFggPiB0aGlzLnBhcmVudF93aWR0aCArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIHsgLy8g0KDQkNCR0J7Qp9CQ0K8g0KTQo9Cd0JrQptCY0K9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl8xLnN0eWxlLmxlZnQgPSAodGhpcy5wYXJlbnRfd2lkdGggLSAodGhpcy5zbGlkZXJfMV93aWR0aCAvIDIpKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUuY2xpZW50WCA8IHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl8xLnN0eWxlLmxlZnQgPSAnMHB4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzEuc3R5bGUubGVmdCA9IChlLmNsaWVudFggLSB0aGlzLnBhcmVudF9wb3NpdGlvbl94IC0gKHRoaXMuc2xpZGVyXzFfd2lkdGggLyAyKSkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJfMl9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggPCBlLmNsaWVudFggKyAodGhpcy5zbGlkZXJfMV93aWR0aCAvIDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJfMS5zdHlsZS5sZWZ0ID0gKHRoaXMuc2xpZGVyXzJfcG9zaXRpb25fbGVmdF94X2F4aXMgLSAzMCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hfcG9zaXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXRoX19zbGlkZXJzX3ZhbHVlX2xlZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVfcmliYm9uKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tb3ZlX2VsZW1lbnRfMiA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaF9wb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXAgPj0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RlcF9pbXBsZW1lbnRhdGlvbihlLCB0aGlzLnNsaWRlcl8yLCB0aGlzLnNsaWRlcl8xKTsgLy8g0KDQsNCx0L7Rh9Cw0Y8g0YTRg9C90LrRhtC40Y9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmNsaWVudFggPiB0aGlzLnBhcmVudF93aWR0aCArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIHsgLy/QtdGB0LvQuCDQutGD0YDRgdC+0YAg0LLRi9GF0L7QtNC40YIg0LfQsCDQv9GA0LXQtNC10LvRiyDRjdC70LXQvNC10L3RgtCwINGB0L/RgNCw0LLQsCDQoNCQ0JHQntCn0JDQryDQpNCj0J3QmtCm0JjQr1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzIuc3R5bGUubGVmdCA9ICh0aGlzLnBhcmVudF93aWR0aCAtICh0aGlzLnNsaWRlcl8yX3dpZHRoIC8gMikpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5jbGllbnRYIDwgdGhpcy5wYXJlbnRfcG9zaXRpb25feCkgeyAvL9C10YHQu9C4INC60YPRgNGB0L7RgCDQstGL0YXQvtC00LjRgiDQt9CwINC/0YDQtdC00LXQu9GLINGN0LvQtdC80LXQvdGC0LAg0YHQu9C10LLQsFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzIuc3R5bGUubGVmdCA9ICh0aGlzLnNsaWRlcl8yX3dpZHRoIC8gKDIpKSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHsgLy/QtdGB0LvQuCDQutGD0YDRgdC+0YAg0LLQvdGD0YLRgNC4INGN0LvQtdC80LXQvdGC0LBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl8yLnN0eWxlLmxlZnQgPSAoZS5jbGllbnRYIC0gdGhpcy5wYXJlbnRfcG9zaXRpb25feCAtICh0aGlzLnNsaWRlcl8yX3dpZHRoIC8gMikpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVyXzFfcG9zaXRpb25fbGVmdF94X2F4aXMgKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94ID49IGUuY2xpZW50WCAtICh0aGlzLnNsaWRlcl8yX3dpZHRoICogMS41KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzIuc3R5bGUubGVmdCA9ICh0aGlzLnNsaWRlcl8xX3Bvc2l0aW9uX2xlZnRfeF9heGlzICsgdGhpcy5zbGlkZXJfMl93aWR0aCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hfcG9zaXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXRoX19zbGlkZXJzX3ZhbHVlX3JpZ2h0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlX3JpYmJvbigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fY2FuY2VsX21vdmVfZXZlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvKiBzdG9wIG1vdmluZyB3aGVuIG1vdXNlIGJ1dHRvbiBpcyByZWxlYXNlZDoqL1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNsb3NlX2RyYWdfZWxlbWVudCDRgNCw0LHQvtGC0LDQtdGCXCIpXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX2JpbmRfY29udHJvbGxlcihjb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9zZXRfZm9yX3ZpZXcob2JqX2Zyb21fY29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRfaWQgPSBvYmpfZnJvbV9jb250cm9sbGVyLl9lbGVtZW50X2lkO1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmpfZnJvbV9jb250cm9sbGVyLl9lbGVtZW50X2lkKTtcclxuICAgICAgICB0aGlzLl9zaWduID0gb2JqX2Zyb21fY29udHJvbGxlci5fc2lnbiB8fCBcIuKCvVwiO1xyXG4gICAgICAgIHRoaXMuX21pbl92YWx1ZSA9IE51bWJlcihvYmpfZnJvbV9jb250cm9sbGVyLl9taW5fdmFsdWUpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5fbWF4X3ZhbHVlID0gTnVtYmVyKG9ial9mcm9tX2NvbnRyb2xsZXIuX21heF92YWx1ZSkgfHwgMTAwMDtcclxuICAgICAgICB0aGlzLl9taW5fc2xpZGVyX3ZhbHVlID0gTnVtYmVyKG9ial9mcm9tX2NvbnRyb2xsZXIuX21pbl9zbGlkZXJfdmFsdWUpIHx8IDIwMDtcclxuICAgICAgICB0aGlzLl9tYXhfc2xpZGVyX3ZhbHVlID0gTnVtYmVyKG9ial9mcm9tX2NvbnRyb2xsZXIuX21heF9zbGlkZXJfdmFsdWUpIHx8IDgwMDtcclxuICAgICAgICB0aGlzLl9zbGlkZXJfdHlwZSA9IG9ial9mcm9tX2NvbnRyb2xsZXIuX3NsaWRlcl90eXBlIHx8IFwic2luZ2xlXCI7XHJcbiAgICAgICAgdGhpcy5fc3RlcCA9IG9ial9mcm9tX2NvbnRyb2xsZXIuX3N0ZXAgfHwgMjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAgPSBvYmpfZnJvbV9jb250cm9sbGVyLnRvb2x0aXAgfHwgXCJvblwiO1xyXG4gICAgICAgIHRoaXMudmFsdWVfZmllbGRfc3RhdGUgPSBvYmpfZnJvbV9jb250cm9sbGVyLnZhbHVlX2ZpZWxkX3N0YXRlIHx8IFwib25cIjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcItCh0L7Qt9C00LDRjiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5INCy0LjQtFwiKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlX3N0dWZmKCk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfZ2V0X3ZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgX2VsZW1lbnRfaWQ6IHRoaXMuX2VsZW1lbnRfaWQsXHJcbiAgICAgICAgICAgIF9zaWduOiB0aGlzLl9zaWduLFxyXG4gICAgICAgICAgICBfbWluX3ZhbHVlOiB0aGlzLl9taW5fdmFsdWUsXHJcbiAgICAgICAgICAgIF9tYXhfdmFsdWU6IHRoaXMuX21heF92YWx1ZSxcclxuICAgICAgICAgICAgX21pbl9zbGlkZXJfdmFsdWU6IHRoaXMuX21pbl9zbGlkZXJfdmFsdWUsXHJcbiAgICAgICAgICAgIF9tYXhfc2xpZGVyX3ZhbHVlOiB0aGlzLl9tYXhfc2xpZGVyX3ZhbHVlLFxyXG4gICAgICAgICAgICBfc2xpZGVyX3R5cGU6IHRoaXMuX3NsaWRlcl90eXBlLFxyXG4gICAgICAgICAgICBfc3RlcDogdGhpcy5fc3RlcCxcclxuICAgICAgICAgICAgdG9vbHRpcDogdGhpcy50b29sdGlwLFxyXG4gICAgICAgICAgICB2YWx1ZV9maWVsZF9zdGF0ZTogdGhpcy52YWx1ZV9maWVsZF9zdGF0ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfc2V0X2NvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgX21pbl9zbGlkZXJfdmFsdWU6IHRoaXMuX21pbl9zbGlkZXJfdmFsdWUsXHJcbiAgICAgICAgICAgIF9tYXhfc2xpZGVyX3ZhbHVlOiB0aGlzLl9tYXhfc2xpZGVyX3ZhbHVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLl9nZXRfdmlldyhvYmopO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgY3JlYXRlX3N0dWZmKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbGVtKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zbGlkZXJfdHlwZSA9PSBcImRvdWJsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJpc3NfdmFsdWUtZmllbGRcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGlkPVwiaXNzX3ZhbHVlX2ZpZWxkXzEtZmllbGRcIj48L3NwYW4+JyArICctJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBpZD1cImlzc192YWx1ZV9maWVsZF8yLWZpZWxkXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPSBcImlzcy1jb250YWluZXJcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJpc3NfX2RvdWJsZV9mbHktdmFsdWUtMVwiICBjbGFzcz1cImlzc190b29sdGlwXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiaXNzX19kb3VibGVfMV9ob3Jpem9udGFsXCIgY2xhc3M9XCJpc3NfZHJhZ1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImlzc19fZG91YmxlX2ZseS12YWx1ZS0yXCIgY2xhc3M9XCJpc3NfdG9vbHRpcFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImlzc19fZG91YmxlXzJfaG9yaXpvbnRhbFwiIGNsYXNzPVwiaXNzX2RyYWdcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJpc3NfX2NvbG9yLWJhcl9ob3Jpem9udGFsXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVfdGhpc19zbGlkZXJzX2VsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVfcmliYm9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJzaW5nbGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiaXNzX3ZhbHVlLWZpZWxkXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBpZD1cInZhbHVlX2ZpZWxkX3NpbmdsZVwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD0gXCJpc3MtY29udGFpbmVyXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiaXNzX19jb2xvci1iYXJfaG9yaXpvbnRhbFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImlzc19fc2luZ2xlX2ZseS12YWx1ZVwiIGNsYXNzPVwiaXNzX3Rvb2x0aXBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJpc3NfX3NpbmdsZVwiIGNsYXNzPVwiaXNzX2RyYWdcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZV90aGlzX3NsaWRlcnNfZWxlbWVudHMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZV9yaWJib24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXCLQndC10L/RgNCw0LLQuNC70YzQvdC+INC30LDQtNCw0L0g0L/QsNGA0LDQvNC10YLRgCDQtNC70Y8gX3NsaWRlcl90eXBlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKFwi0J3QsCDRgdGC0YDQsNC90LjRhtC1INC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0YPQutCw0LfQsNC90L3QvtCz0L4gX2VsZW1lbnRfaWQg0LTQu9GPINGB0L7Qt9C00LDQvdC40Y8g0YHQu9Cw0LnQtNC10YDQsCDQuNC70Lgg0L7QvSDQv9GA0L7RgdGC0L4g0L3QtSDRg9C60LDQt9Cw0L1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICB0aGlzLnNldF92aXNpYmxlX3RleHRfZmllbGQoKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVfbGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBtb3ZlX3NsaWRlcnNfb25faW5pdGlhbGl6YXRpb24oKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0X3NsaWRlcl9wb3NpdGlvbiA9IHRoaXMucGl4ZWxfc3RlcCAqICgodGhpcy5fbWluX3NsaWRlcl92YWx1ZSAtIHRoaXMuX21pbl92YWx1ZSkgLyB0aGlzLl9zdGVwKTtcclxuICAgICAgICBsZXQgc2Vjb25kX3NsaWRlcl9wb3NpdGlvbiA9IHRoaXMucGl4ZWxfc3RlcCAqICgodGhpcy5fbWF4X3NsaWRlcl92YWx1ZSAtIHRoaXMuX21pbl92YWx1ZSkgLyB0aGlzLl9zdGVwKTtcclxuICAgICAgICB0aGlzLnNsaWRlcl8xLnN0eWxlLmxlZnQgPSBmaXJzdF9zbGlkZXJfcG9zaXRpb24gKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJfMi5zdHlsZS5sZWZ0ID0gc2Vjb25kX3NsaWRlcl9wb3NpdGlvbiArIFwicHhcIjtcclxuICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzFfZmx5LnN0eWxlLmxlZnQgPSBmaXJzdF9zbGlkZXJfcG9zaXRpb24gKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yX2ZseS5zdHlsZS5sZWZ0ID0gc2Vjb25kX3NsaWRlcl9wb3NpdGlvbiArIFwicHhcIjtcclxuICAgICAgICB0aGlzLnJlZnJlc2hfcG9zaXRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlX3JpYmJvbigpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgbW92ZV9yaWJib24oKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9zbGlkZXJfdHlwZSA9PSBcImRvdWJsZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLmxlZnQgPSAodGhpcy5zbGlkZXJfMV93aWR0aCAvIDIpICsgdGhpcy5zbGlkZXJfMV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUud2lkdGggPSB0aGlzLnNsaWRlcl8yX3Bvc2l0aW9uX2xlZnRfeF9heGlzIC0gdGhpcy5zbGlkZXJfMV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJzaW5nbGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgdGhpcy5yaWJib24uc3R5bGUud2lkdGggPSB0aGlzLl9zbGlkZXJfc2luZ2xlX3Bvc2l0aW9uX2xlZnRfeF9heGlzICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIDtcclxuICAgIF9jcmVhdGVfbGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zbGlkZXJfdHlwZSA9PSBcImRvdWJsZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyXzEub25tb3VzZWRvd24gPSB0aGlzLl9tb3VzZV9kb3duX2ZpcnN0X3NsaWRlcjtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJfMi5vbm1vdXNlZG93biA9IHRoaXMuX21vdXNlX2Rvd25fc2Vjb25kX3NsaWRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJzaW5nbGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlcl9zaW5nbGUub25tb3VzZWRvd24gPSB0aGlzLl9tb3VzZV9kb3duX3NpbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX21hdGhfX3NsaWRlcnNfdmFsdWVfc2luZ2xlKHBpeGVsX3N0ZXAsIGUpIHtcclxuICAgICAgICBsZXQgYW5zd2VyID0gTWF0aC5mbG9vcih0aGlzLl9zbGlkZXJfc2luZ2xlX3Bvc2l0aW9uX2xlZnRfeF9heGlzICogdGhpcy5tdWx0aXBsaWVyKTtcclxuICAgICAgICBpZiAoZS5jbGllbnRYID4gdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94IC0gcGl4ZWxfc3RlcCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZS5pbm5lclRleHQgPSB0aGlzLnBhcmVudF93aWR0aCAqIHRoaXMubXVsdGlwbGllciArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlX3N0YXRpYy5pbm5lclRleHQgPSB0aGlzLnBhcmVudF93aWR0aCAqIHRoaXMubXVsdGlwbGllciArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlLmlubmVyVGV4dCA9IGFuc3dlciArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGVfc3RhdGljLmlubmVyVGV4dCA9IGFuc3dlciArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGUuc3R5bGUubGVmdCA9IHRoaXMuX3NsaWRlcl9zaW5nbGVfcG9zaXRpb25fbGVmdF94X2F4aXMgKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfbWF0aF9fc2xpZGVyc192YWx1ZV9sZWZ0KCkge1xyXG4gICAgICAgIGxldCBhbnN3ZXIxID0gTWF0aC5mbG9vcih0aGlzLnNsaWRlcl8xX3Bvc2l0aW9uX2xlZnRfeF9heGlzICogdGhpcy5tdWx0aXBsaWVyKSArIHRoaXMuX21pbl92YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzEuaW5uZXJUZXh0ID0gYW5zd2VyMSArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzFfZmx5LmlubmVyVGV4dCA9IGFuc3dlcjEgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8xX2ZseS5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJfMV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyAtIHRoaXMuc2xpZGVyXzEub2Zmc2V0V2lkdGggLyAyICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX21hdGhfX3NsaWRlcnNfdmFsdWVfcmlnaHQoZSkge1xyXG4gICAgICAgIGxldCBhbnN3ZXIyID0gTWF0aC5mbG9vcih0aGlzLnNsaWRlcl8yX3Bvc2l0aW9uX2xlZnRfeF9heGlzICogdGhpcy5tdWx0aXBsaWVyKSArIHRoaXMuX21pbl92YWx1ZTtcclxuICAgICAgICBpZiAoZS5jbGllbnRYID4gdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94IC0gdGhpcy5waXhlbF9zdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkuaW5uZXJUZXh0ID0gdGhpcy5fbWF4X3ZhbHVlICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzIuaW5uZXJUZXh0ID0gdGhpcy5fbWF4X3ZhbHVlICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yX2ZseS5pbm5lclRleHQgPSBhbnN3ZXIyICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzIuaW5uZXJUZXh0ID0gYW5zd2VyMiArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yX2ZseS5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJfMl9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIHRoaXMuc2xpZGVyXzIub2Zmc2V0V2lkdGggLyAyICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX21hdGhfX3NsaWRlcnNfdmFsdWVfc2luZ2xlX3N0ZXAoc3RlcHMsIGUpIHtcclxuICAgICAgICBsZXQgYW5zd2VyID0gdGhpcy5fc3RlcCAqIHN0ZXBzICsgTnVtYmVyKHRoaXMuX21pbl92YWx1ZSk7XHJcbiAgICAgICAgaWYgKGUuY2xpZW50WCA+IHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggJiYgZS5jbGllbnRYICsgdGhpcy5zbGlkZXJfc2luZ2xlX3dpZHRoIDwgdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlLmlubmVyVGV4dCA9IGFuc3dlciArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGVfc3RhdGljLmlubmVyVGV4dCA9IGFuc3dlciArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5jbGllbnRYID4gdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlLmlubmVyVGV4dCA9IHRoaXMuX21heF92YWx1ZSArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGVfc3RhdGljLmlubmVyVGV4dCA9IHRoaXMuX21heF92YWx1ZSArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS5jbGllbnRYIDw9IHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGUuaW5uZXJUZXh0ID0gdGhpcy5fbWluX3ZhbHVlICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZV9zdGF0aWMuaW5uZXJUZXh0ID0gdGhpcy5fbWluX3ZhbHVlICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGUuc3R5bGUubGVmdCA9IHRoaXMuX3NsaWRlcl9zaW5nbGVfcG9zaXRpb25fbGVmdF94X2F4aXMgKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfbWF0aF9fc2xpZGVyc192YWx1ZV9sZWZ0X3N0ZXAoc3RlcHMsIHBpeGVsX3N0ZXAsIGUpIHtcclxuICAgICAgICBsZXQgYW5zd2VyMSA9IHRoaXMuX3N0ZXAgKiBzdGVwcyArIE51bWJlcih0aGlzLl9taW5fdmFsdWUpO1xyXG4gICAgICAgIGlmIChlLmNsaWVudFggPD0gdGhpcy5zbGlkZXJfMl9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggLSBwaXhlbF9zdGVwICYmIGUuY2xpZW50WCA+PSB0aGlzLnBhcmVudF9wb3NpdGlvbl94KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMV9mbHkuaW5uZXJUZXh0ID0gYW5zd2VyMSArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8xLmlubmVyVGV4dCA9IGFuc3dlcjEgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIC8vIHRoaXMudmFsdWVfZmllbGRfMV9mbHkuc3R5bGUubGVmdCA9IHBpeGVsX3N0ZXAgKiBzdGVwcyArIFwicHhcIjtcclxuICAgICAgICAgICAgLy8gdGhpcy52YWx1ZV9maWVsZF8xX2ZseS5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJfMV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGlmIChlLmNsaWVudFggPD0gdGhpcy5wYXJlbnRfcG9zaXRpb25feCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzFfZmx5LmlubmVyVGV4dCA9IHRoaXMuX21pbl92YWx1ZSArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8xLmlubmVyVGV4dCA9IHRoaXMuX21pbl92YWx1ZSArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnZhbHVlX2ZpZWxkXzFfZmx5Lm9mZnNldExlZnQgPj0gdGhpcy52YWx1ZV9maWVsZF8yX2ZseS5vZmZzZXRMZWZ0IC0gdGhpcy5zbGlkZXJfMS5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIC8vIHRoaXMudmFsdWVfZmllbGRfMV9mbHkuc3R5bGUubGVmdCA9IHRoaXMudmFsdWVfZmllbGRfMl9mbHkub2Zmc2V0TGVmdCAtIHRoaXMuc2xpZGVyXzFfd2lkdGgqIDIgKyBcInB4XCJcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIHRoaXMudmFsdWVfZmllbGRfMV9mbHkuc3R5bGUubGVmdCA9IHRoaXMuc2xpZGVyXzFfcG9zaXRpb25fbGVmdF94X2F4aXMgLSB0aGlzLnNsaWRlcl8xX3dpZHRoIC8gNCArIFwicHhcIjtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9tYXRoX19zbGlkZXJzX3ZhbHVlX3JpZ2h0X3N0ZXAoc3RlcHMsIHBpeGVsX3N0ZXAsIGUpIHtcclxuICAgICAgICBsZXQgYW5zd2VyMiA9IHRoaXMuX3N0ZXAgKiBzdGVwcyArIE51bWJlcih0aGlzLl9taW5fdmFsdWUpO1xyXG4gICAgICAgIGlmIChhbnN3ZXIyID4gdGhpcy5fbWF4X3ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGFuc3dlcjIgPSB0aGlzLl9tYXhfdmFsdWU7XHJcbiAgICAgICAgICAgIHN0ZXBzIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoZS5jbGllbnRYIDwgdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94XHJcbiAgICAgICAgICAgICYmIGUuY2xpZW50WCA+PSB0aGlzLnNsaWRlcl8xX3Bvc2l0aW9uX2xlZnRfeF9heGlzICsgdGhpcy5wYXJlbnRfcG9zaXRpb25feCArIHBpeGVsX3N0ZXApIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yX2ZseS5pbm5lclRleHQgPSBhbnN3ZXIyICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzIuaW5uZXJUZXh0ID0gYW5zd2VyMiArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yX2ZseS5zdHlsZS5sZWZ0ID0gcGl4ZWxfc3RlcCAqIHN0ZXBzICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmNsaWVudFggPiB0aGlzLnBhcmVudF93aWR0aCArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggLSB0aGlzLnNsaWRlcl8yX3dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkuaW5uZXJUZXh0ID0gYW5zd2VyMiArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yLmlubmVyVGV4dCA9IGFuc3dlcjIgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkuc3R5bGUubGVmdCA9IHRoaXMuc2xpZGVyXzJfcG9zaXRpb25fbGVmdF94X2F4aXMgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZV9maWVsZF8yX2ZseS5vZmZzZXRMZWZ0IDw9IHRoaXMudmFsdWVfZmllbGRfMV9mbHkub2Zmc2V0TGVmdCArIHRoaXMuc2xpZGVyXzIub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yX2ZseS5zdHlsZS5sZWZ0ID0gdGhpcy52YWx1ZV9maWVsZF8xX2ZseS5vZmZzZXRMZWZ0ICsgdGhpcy5zbGlkZXJfMi5vZmZzZXRXaWR0aCAqIDIgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9zdGVwX2ltcGxlbWVudGF0aW9uKGUsIG1vZGlmaWVkX29iamVjdCwgc3RhdGljX29iamVjdCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF9wb3NpdGlvbnMoKTtcclxuICAgICAgICBsZXQgbW9kaWZpZWRfb2JqZWN0X3Bvc2l0aW9uID0gbW9kaWZpZWRfb2JqZWN0Lm9mZnNldExlZnQ7IC8v0YHQvNC10YnQtdC90LjQtSDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0YDQvtC00LjRgtC10LvRjyDQv9C+INClXHJcbiAgICAgICAgbGV0IG1vZGlmaWVkX29iamVjdF93aWR0aCA9IG1vZGlmaWVkX29iamVjdC5vZmZzZXRXaWR0aDsgLy8g0YjQuNGA0LjQvdCwINC/0L7Qu9C30YPQvdC60LBcclxuICAgICAgICBsZXQgcGl4ZWxfc3RlcCA9ICh0aGlzLnBhcmVudF93aWR0aCAtIG1vZGlmaWVkX29iamVjdF93aWR0aCkgLyB0aGlzLnN0ZXBzOyAvLyDRgNCw0LfQvNC10YAg0YjQsNCz0LAg0LIg0L/QuNC60YHQtdC70Y/RhVxyXG4gICAgICAgIGlmIChzdGF0aWNfb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uID0gc3RhdGljX29iamVjdC5vZmZzZXRMZWZ0OyAvL9GB0LzQtdGJ0LXQvdC40LUg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINGA0L7QtNC40YLQtdC70Y8g0L/QviDQpVxyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IE1hdGgucm91bmQoKGUuY2xpZW50WCAtIHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIC8gcGl4ZWxfc3RlcCk7IC8vINGN0YLQviDQutC+0LvQuNGH0LXRgdGC0LLQviDRiNCw0LPQvtCyINCyINC/0L7Qt9C40YbQuNC4XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmllZF9vYmplY3RfcG9zaXRpb24gPCBzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jbGllbnRYID4gc3RhdGljX29iamVjdF9wb3NpdGlvbiArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggJiYgZS5jbGllbnRYID4gdGhpcy5wYXJlbnRfcG9zaXRpb25feCArIHBpeGVsX3N0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZF9vYmplY3Quc3R5bGUubGVmdCA9IChzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uIC0gcGl4ZWxfc3RlcCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLmNsaWVudFggPCB0aGlzLnBhcmVudF9wb3NpdGlvbl94ICsgcGl4ZWxfc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkX29iamVjdC5zdHlsZS5sZWZ0ID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUuY2xpZW50WCA+IHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggJiYgZS5jbGllbnRYIDw9IHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggKyBzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uIC0gcGl4ZWxfc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkX29iamVjdC5zdHlsZS5sZWZ0ID0gKHBpeGVsX3N0ZXAgKiBzdGVwKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaF9wb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZF9vYmplY3RfcG9zaXRpb24gKyBtb2RpZmllZF9vYmplY3Rfd2lkdGggPj0gc3RhdGljX29iamVjdF9wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkX29iamVjdC5zdHlsZS56SW5kZXggPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNfb2JqZWN0LnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRfb2JqZWN0LnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY19vYmplY3Quc3R5bGUuekluZGV4ID0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXRoX19zbGlkZXJzX3ZhbHVlX2xlZnRfc3RlcChzdGVwLCBwaXhlbF9zdGVwLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmIChtb2RpZmllZF9vYmplY3RfcG9zaXRpb24gPiBzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jbGllbnRYID4gc3RhdGljX29iamVjdF9wb3NpdGlvbiArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggKyBwaXhlbF9zdGVwICYmIGUuY2xpZW50WCA8IHRoaXMucGFyZW50X3dpZHRoICsgdGhpcy5wYXJlbnRfcG9zaXRpb25feCAtIG1vZGlmaWVkX29iamVjdF93aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkX29iamVjdC5zdHlsZS5sZWZ0ID0gcGl4ZWxfc3RlcCAqIHN0ZXAgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLmNsaWVudFggPiB0aGlzLnBhcmVudF93aWR0aCArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggLSBtb2RpZmllZF9vYmplY3Rfd2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZF9vYmplY3Quc3R5bGUubGVmdCA9IHRoaXMucGFyZW50X3dpZHRoIC0gbW9kaWZpZWRfb2JqZWN0X3dpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5jbGllbnRYIDwgdGhpcy5wYXJlbnRfcG9zaXRpb25feCArIHN0YXRpY19vYmplY3RfcG9zaXRpb24gKyBtb2RpZmllZF9vYmplY3Rfd2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZF9vYmplY3Quc3R5bGUubGVmdCA9IHN0YXRpY19vYmplY3RfcG9zaXRpb24gKyBtb2RpZmllZF9vYmplY3Rfd2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hfcG9zaXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kaWZpZWRfb2JqZWN0X3Bvc2l0aW9uIC0gbW9kaWZpZWRfb2JqZWN0X3dpZHRoIDw9IHN0YXRpY19vYmplY3RfcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZF9vYmplY3Quc3R5bGUuekluZGV4ID0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljX29iamVjdC5zdHlsZS56SW5kZXggPSBcIjFcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkX29iamVjdC5zdHlsZS56SW5kZXggPSBcIjFcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNfb2JqZWN0LnN0eWxlLnpJbmRleCA9IFwiMlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF0aF9fc2xpZGVyc192YWx1ZV9yaWdodF9zdGVwKHN0ZXAsIHBpeGVsX3N0ZXAsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmVmcmVzaF9wb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgbGV0IHN0ZXAgPSBNYXRoLnJvdW5kKChlLmNsaWVudFggLSB0aGlzLnBhcmVudF9wb3NpdGlvbl94KSAvIHBpeGVsX3N0ZXApOyAvLyDRjdGC0L4g0LrQvtC70LjRh9C10YHRgtCy0L4g0YjQsNCz0L7QsiDQsiDQv9C+0LfQuNGG0LjQuFxyXG4gICAgICAgICAgICBpZiAoZS5jbGllbnRYIDwgdGhpcy5wYXJlbnRfcG9zaXRpb25feCkge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRfb2JqZWN0LnN0eWxlLmxlZnQgPSAwICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGUuY2xpZW50WCA+IHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggKyB0aGlzLnBhcmVudF93aWR0aCAtIG1vZGlmaWVkX29iamVjdF93aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRfb2JqZWN0LnN0eWxlLmxlZnQgPSB0aGlzLnBhcmVudF93aWR0aCAtIG1vZGlmaWVkX29iamVjdF93aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmNsaWVudFggPiB0aGlzLnBhcmVudF9wb3NpdGlvbl94ICYmIGUuY2xpZW50WCA8IHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggKyB0aGlzLnBhcmVudF93aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRfb2JqZWN0LnN0eWxlLmxlZnQgPSAocGl4ZWxfc3RlcCAqIHN0ZXApICsgXCJweFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXRoX19zbGlkZXJzX3ZhbHVlX3NpbmdsZV9zdGVwKHN0ZXAsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIDtcclxufVxyXG47XHJcbmV4cG9ydCB7IFZpZXdfaG9yaXpvbnRhbCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD12aWV3X2hvcml6b250YWwuanMubWFwIiwiO1xyXG5jbGFzcyBWaWV3X3ZlcnRpY2FsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlX3RoaXNfc2xpZGVyc19lbGVtZW50cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRfZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyB0aGlzLl9lbGVtZW50X2lkKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRfd2lkdGggPSB0aGlzLnBhcmVudF9lbGVtZW50Lm9mZnNldEhlaWdodDsgLy8g0YjQuNGA0LjQvdCwINGA0L7QtNC40YLQtdC70YzRgdC60L7Qs9C+INGN0LvQtdC80LXQvdGC0LBcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRfcG9zaXRpb24gPSB0aGlzLnBhcmVudF9lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0LrQvtC90YLQtdC50L3QtdGAXHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggPSB0aGlzLnBhcmVudF9wb3NpdGlvbi50b3A7IC8v0YDQsNC30LzQtdGJ0LXQvdC40LUg0LrQvtC90YLQtdC50L3QtdGA0LAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC70LXQstC+0LPQviDQutGA0LDRjyDRjdC60YDQsNC90LBcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZCA9IHRoaXMucGFyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpc3NfdmFsdWUtZmllbGRcIik7XHJcbiAgICAgICAgICAgIHRoaXMucmliYm9uID0gdGhpcy5wYXJlbnRfZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2lzc19jb2xvci1iYXJfdmVydGljYWxcIik7XHJcbiAgICAgICAgICAgIC8v0KDQkNCh0KfQldCi0Ksg0KjQkNCT0JBcclxuICAgICAgICAgICAgdGhpcy5zdGVwcyA9ICh0aGlzLl9tYXhfdmFsdWUgLSB0aGlzLl9taW5fdmFsdWUpIC8gdGhpcy5fc3RlcDsgLy8g0LrQvtC70LjRh9C10YHRgtCy0L4g0YjQsNCz0L7QslxyXG4gICAgICAgICAgICB0aGlzLnBpeGVsX3N0ZXAgPSB0aGlzLnBhcmVudF93aWR0aCAvIHRoaXMuc3RlcHM7IC8vINGA0LDQt9C80LXRgCDRiNCw0LPQsCDQsiDQv9C40LrRgdC10LvRj9GFXHJcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGllciA9ICh0aGlzLl9tYXhfdmFsdWUgLSB0aGlzLl9taW5fdmFsdWUpIC8gdGhpcy5wYXJlbnRfd2lkdGg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zbGlkZXJfdHlwZSA9PSBcImRvdWJsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzEgPSB0aGlzLnBhcmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNzX3ZhbHVlX2ZpZWxkXzEtZmllbGRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzIgPSB0aGlzLnBhcmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNzX3ZhbHVlX2ZpZWxkXzItZmllbGRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzFfZmx5ID0gdGhpcy5wYXJlbnRfZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2lzc19fZG91YmxlX2ZseS12YWx1ZS0xX3ZlcnRpY2FsXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yX2ZseSA9IHRoaXMucGFyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpc3NfX2RvdWJsZV9mbHktdmFsdWUtMl92ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzEgPSB0aGlzLnBhcmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNzX19kb3VibGVfMV92ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzFfd2lkdGggPSB0aGlzLnNsaWRlcl8xLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzIgPSB0aGlzLnBhcmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNzX19kb3VibGVfMl92ZXJ0aWNhbFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzJfd2lkdGggPSB0aGlzLnNsaWRlcl8yLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzFfcG9zaXRpb25fbGVmdF94X2F4aXMgPSB0aGlzLnNsaWRlcl8xLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzJfcG9zaXRpb25fbGVmdF94X2F4aXMgPSB0aGlzLnNsaWRlcl8yLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zbGlkZXJfdHlwZSA9PSBcInNpbmdsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZSA9IHRoaXMucGFyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpc3NfX3NpbmdsZV9mbHktdmFsdWVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZV9zdGF0aWMgPSB0aGlzLnBhcmVudF9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaXNzX3ZhbHVlX2ZpZWxkX3NpbmdsZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyX3NpbmdsZSA9IHRoaXMucGFyZW50X2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNpc3NfX3NpbmdsZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyX3NpbmdsZV93aWR0aCA9IHRoaXMuc2xpZGVyX3NpbmdsZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zbGlkZXJfc2luZ2xlX3Bvc2l0aW9uX2xlZnRfeF9heGlzID0gdGhpcy5zbGlkZXJfc2luZ2xlLm9mZnNldFRvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hfcG9zaXRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudF9wb3NpdGlvbiA9IHRoaXMucGFyZW50X2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDQutC+0L3RgtC10LnQvdC10YBcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRfcG9zaXRpb25feCA9IHRoaXMucGFyZW50X3Bvc2l0aW9uLnRvcDsgLy/RgNCw0LfQvNC10YnQtdC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LvQtdCy0L7Qs9C+INC60YDQsNGPINGN0LrRgNCw0L3QsFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJkb3VibGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJfMV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyA9IHRoaXMuc2xpZGVyXzEub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJfMl9wb3NpdGlvbl9sZWZ0X3hfYXhpcyA9IHRoaXMuc2xpZGVyXzIub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NsaWRlcl90eXBlID09IFwic2luZ2xlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NsaWRlcl9zaW5nbGVfcG9zaXRpb25fbGVmdF94X2F4aXMgPSB0aGlzLnNsaWRlcl9zaW5nbGUub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0X3Zpc2libGVfdGV4dF9maWVsZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGEgPSB0aGlzLl9taW5fdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBiID0gdGhpcy5fbWF4X3ZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgYyA9IHRoaXMuX21pbl9zbGlkZXJfdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBkID0gdGhpcy5fbWF4X3NsaWRlcl92YWx1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLQtNC+ICDRjdGC0L7Qs9C+INC80L7QvNC10L3RgtCwINC+0LpcIilcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NsaWRlcl90eXBlID09IFwiZG91YmxlXCIgJiYgYSA8IGIgJiYgYyA8IGIgJiYgYyA8IGQgJiYgZCA8PSBiICYmIGMgLSBhID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMS5pbm5lclRleHQgPSBjICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yLmlubmVyVGV4dCA9IGQgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzFfZmx5LmlubmVyVGV4dCA9IGMgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzJfZmx5LmlubmVyVGV4dCA9IGQgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVfc2xpZGVyc19vbl9pbml0aWFsaXphdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NsaWRlcl90eXBlID09IFwic2luZ2xlXCIgJiYgYSA8IGIgJiYgYyAtIGEgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGVfc3RhdGljLmlubmVyVGV4dCA9IGMgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZS5pbm5lclRleHQgPSBjICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlX3NpbmdsZV9zbGlkZXJfb25faW5pdGlhbGl6YXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2x0aXAgPT0gXCJvZmZcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvb2x0aXAgPSB0aGlzLnBhcmVudF9lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpc3NfdG9vbHRpcFwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGEgb2YgdG9vbHRpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVfZmllbGRfc3RhdGUgPT0gXCJvZmZcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tb3ZlX3NpbmdsZV9zbGlkZXJfb25faW5pdGlhbGl6YXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmaXJzdF9zbGlkZXJfcG9zaXRpb24gPSB0aGlzLnBpeGVsX3N0ZXAgKiAoKHRoaXMuX21pbl9zbGlkZXJfdmFsdWUgLSB0aGlzLl9taW5fdmFsdWUpIC8gdGhpcy5fc3RlcCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyX3NpbmdsZS5zdHlsZS50b3AgPSBmaXJzdF9zbGlkZXJfcG9zaXRpb24gKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlLnN0eWxlLnRvcCA9IGZpcnN0X3NsaWRlcl9wb3NpdGlvbiArIFwicHhcIjtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVfcmliYm9uKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tb3VzZV9kb3duX3NpbmdsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gdGhpcy5fY2FuY2VsX21vdmVfZXZlbnRzOyAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQvdCwINGB0L7QsdGL0YLQuNC1INC/0L7QtNC90Y/RgtC40LUg0LrQu9Cw0LLQuNGI0Lgg0LzRi9GI0LggLSDQt9Cw0L/Rg9GB0YLQuNGCINC60L7QtCwg0LrQvtGC0L7RgNGL0Lkg0L7QsdC90YPQu9C40YIg0YHQvtCx0YvRgtC40Y9cclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLl9tb3ZlX2VsZW1lbnRfc2luZ2xlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbW92ZV9lbGVtZW50X3NpbmdsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwID49IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0ZXBfaW1wbGVtZW50YXRpb24oZSwgdGhpcy5zbGlkZXJfc2luZ2xlKTtcclxuICAgICAgICAgICAgICAgIDsgLy8g0KDQsNCx0L7Rh9Cw0Y8g0YTRg9C90LrRhtC40Y9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmNsaWVudFkgPiB0aGlzLnBhcmVudF93aWR0aCArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl9zaW5nbGUuc3R5bGUudG9wID0gKHRoaXMucGFyZW50X3dpZHRoIC0gKHRoaXMuc2xpZGVyXzFfd2lkdGggLyAyKSkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLmNsaWVudFkgPCB0aGlzLnBhcmVudF9wb3NpdGlvbl94ICsgKHRoaXMuc2xpZGVyXzFfd2lkdGggLyAyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyX3NpbmdsZS5zdHlsZS50b3AgPSAnMHB4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyX3NpbmdsZS5zdHlsZS50b3AgPSAoZS5jbGllbnRZIC0gdGhpcy5wYXJlbnRfcG9zaXRpb25feCAtICh0aGlzLnNsaWRlcl8xX3dpZHRoIC8gMikpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF0aF9fc2xpZGVyc192YWx1ZV9zaW5nbGUodGhpcy5waXhlbF9zdGVwLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZV9yaWJib24oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX21vdXNlX2Rvd25fZmlyc3Rfc2xpZGVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyDQvtGC0LzQtdC90LjQu9C4INCy0YHQtSDQtNC10LnRgdGC0LLQuNGPINC60L7RgtC+0YDRi9C1INC/0YDQvtC40YHRhdC+0LTQuNC70Lgg0YDQsNC90YzRiNC1XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMuX2NhbmNlbF9tb3ZlX2V2ZW50czsgLy8g0L7QsdGA0LDQsdC+0YLRh9C40Log0L3QsCDRgdC+0LHRi9GC0LjQtSDQv9C+0LTQvdGP0YLQuNC1INC60LvQsNCy0LjRiNC4INC80YvRiNC4IC0g0LfQsNC/0YPRgdGC0LjRgiDQutC+0LQsINC60L7RgtC+0YDRi9C5INC+0LHQvdGD0LvQuNGCINGB0L7QsdGL0YLQuNGPXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5fbW92ZV9lbGVtZW50XzE7IC8vINGB0L7QsdGL0YLQuNC1LCDQv9GA0L7QuNC30L7QudC00LXRgiDQtdGB0LvQuCDRgdC00LLQuNC90YPRgtGMINC80YvRiNGDXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tb3VzZV9kb3duX3NlY29uZF9zbGlkZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vINC+0YLQvNC10L3QuNC70Lgg0LLRgdC1INC00LXQudGB0YLQstC40Y8g0LrQvtGC0L7RgNGL0LUg0L/RgNC+0LjRgdGF0L7QtNC40LvQuCDRgNCw0L3RjNGI0LVcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gdGhpcy5fY2FuY2VsX21vdmVfZXZlbnRzOyAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQvdCwINGB0L7QsdGL0YLQuNC1INC/0L7QtNC90Y/RgtC40LUg0LrQu9Cw0LLQuNGI0Lgg0LzRi9GI0LggLSDQt9Cw0L/Rg9GB0YLQuNGCINC60L7QtCwg0LrQvtGC0L7RgNGL0Lkg0L7QsdC90YPQu9C40YIg0YHQvtCx0YvRgtC40Y9cclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLl9tb3ZlX2VsZW1lbnRfMjsgLy8g0YHQvtCx0YvRgtC40LUsINC/0YDQvtC40LfQvtC50LTQtdGCINC10YHQu9C4INGB0LTQstC40L3Rg9GC0Ywg0LzRi9GI0YNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX21vdmVfZWxlbWVudF8xID0gKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGVwX2ltcGxlbWVudGF0aW9uKGUsIHRoaXMuc2xpZGVyXzEsIHRoaXMuc2xpZGVyXzIpOyAvLyDQoNCw0LHQvtGH0LDRjyDRhNGD0L3QutGG0LjRj1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuY2xpZW50WSA+IHRoaXMucGFyZW50X3dpZHRoICsgdGhpcy5wYXJlbnRfcG9zaXRpb25feCkgeyAvLyDQoNCQ0JHQntCn0JDQryDQpNCj0J3QmtCm0JjQr1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzEuc3R5bGUudG9wID0gKHRoaXMucGFyZW50X3dpZHRoIC0gKHRoaXMuc2xpZGVyXzFfd2lkdGggLyAyKSkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlLmNsaWVudFkgPCB0aGlzLnBhcmVudF9wb3NpdGlvbl94KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJfMS5zdHlsZS50b3AgPSAnMHB4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzEuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggLSAodGhpcy5zbGlkZXJfMV93aWR0aCAvIDIpKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlcl8yX3Bvc2l0aW9uX2xlZnRfeF9heGlzICsgdGhpcy5wYXJlbnRfcG9zaXRpb25feCA8IGUuY2xpZW50WSArICh0aGlzLnNsaWRlcl8xX3dpZHRoIC8gMikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl8xLnN0eWxlLnRvcCA9ICh0aGlzLnNsaWRlcl8yX3Bvc2l0aW9uX2xlZnRfeF9heGlzIC0gMzApICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWF0aF9fc2xpZGVyc192YWx1ZV9sZWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tb3ZlX3JpYmJvbigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbW92ZV9lbGVtZW50XzIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hfcG9zaXRpb25zKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwID49IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0ZXBfaW1wbGVtZW50YXRpb24oZSwgdGhpcy5zbGlkZXJfMiwgdGhpcy5zbGlkZXJfMSk7IC8vINCg0LDQsdC+0YfQsNGPINGE0YPQvdC60YbQuNGPXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5jbGllbnRZID4gdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94KSB7IC8v0LXRgdC70Lgg0LrRg9GA0YHQvtGAINCy0YvRhdC+0LTQuNGCINC30LAg0L/RgNC10LTQtdC70Ysg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0YDQsNCy0LAg0KDQkNCR0J7Qp9CQ0K8g0KTQo9Cd0JrQptCY0K9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl8yLnN0eWxlLnRvcCA9ICh0aGlzLnBhcmVudF93aWR0aCAtICh0aGlzLnNsaWRlcl8yX3dpZHRoIC8gMikpICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5jbGllbnRZIDwgdGhpcy5wYXJlbnRfcG9zaXRpb25feCkgeyAvL9C10YHQu9C4INC60YPRgNGB0L7RgCDQstGL0YXQvtC00LjRgiDQt9CwINC/0YDQtdC00LXQu9GLINGN0LvQtdC80LXQvdGC0LAg0YHQu9C10LLQsFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzIuc3R5bGUudG9wID0gKHRoaXMuc2xpZGVyXzJfd2lkdGggLyAoMikpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyAvL9C10YHQu9C4INC60YPRgNGB0L7RgCDQstC90YPRgtGA0Lgg0Y3Qu9C10LzQtdC90YLQsFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyXzIuc3R5bGUudG9wID0gKGUuY2xpZW50WSAtIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggLSAodGhpcy5zbGlkZXJfMl93aWR0aCAvIDIpKSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNsaWRlcl8xX3Bvc2l0aW9uX2xlZnRfeF9heGlzICsgdGhpcy5wYXJlbnRfcG9zaXRpb25feCA+PSBlLmNsaWVudFkgLSAodGhpcy5zbGlkZXJfMl93aWR0aCAqIDEuNSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWRlcl8yLnN0eWxlLnRvcCA9ICh0aGlzLnNsaWRlcl8xX3Bvc2l0aW9uX2xlZnRfeF9heGlzICsgdGhpcy5zbGlkZXJfMl93aWR0aCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hfcG9zaXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXRoX19zbGlkZXJzX3ZhbHVlX3JpZ2h0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlX3JpYmJvbigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fY2FuY2VsX21vdmVfZXZlbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvKiBzdG9wIG1vdmluZyB3aGVuIG1vdXNlIGJ1dHRvbiBpcyByZWxlYXNlZDoqL1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNsb3NlX2RyYWdfZWxlbWVudCDRgNCw0LHQvtGC0LDQtdGCXCIpXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX2JpbmRfY29udHJvbGxlcihjb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9zZXRfZm9yX3ZpZXcob2JqX2Zyb21fY29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRfaWQgPSBvYmpfZnJvbV9jb250cm9sbGVyLl9lbGVtZW50X2lkO1xyXG4gICAgICAgIHRoaXMuX2VsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmpfZnJvbV9jb250cm9sbGVyLl9lbGVtZW50X2lkKTtcclxuICAgICAgICB0aGlzLl9zaWduID0gb2JqX2Zyb21fY29udHJvbGxlci5fc2lnbiB8fCBcIuKCvVwiO1xyXG4gICAgICAgIHRoaXMuX21pbl92YWx1ZSA9IE51bWJlcihvYmpfZnJvbV9jb250cm9sbGVyLl9taW5fdmFsdWUpIHx8IDA7XHJcbiAgICAgICAgdGhpcy5fbWF4X3ZhbHVlID0gTnVtYmVyKG9ial9mcm9tX2NvbnRyb2xsZXIuX21heF92YWx1ZSkgfHwgMTAwMDtcclxuICAgICAgICB0aGlzLl9taW5fc2xpZGVyX3ZhbHVlID0gTnVtYmVyKG9ial9mcm9tX2NvbnRyb2xsZXIuX21pbl9zbGlkZXJfdmFsdWUpIHx8IDIwMDtcclxuICAgICAgICB0aGlzLl9tYXhfc2xpZGVyX3ZhbHVlID0gTnVtYmVyKG9ial9mcm9tX2NvbnRyb2xsZXIuX21heF9zbGlkZXJfdmFsdWUpIHx8IDgwMDtcclxuICAgICAgICB0aGlzLl9zbGlkZXJfdHlwZSA9IG9ial9mcm9tX2NvbnRyb2xsZXIuX3NsaWRlcl90eXBlIHx8IFwic2luZ2xlXCI7XHJcbiAgICAgICAgdGhpcy5fc3RlcCA9IG9ial9mcm9tX2NvbnRyb2xsZXIuX3N0ZXAgfHwgMjtcclxuICAgICAgICB0aGlzLnRvb2x0aXAgPSBvYmpfZnJvbV9jb250cm9sbGVyLnRvb2x0aXAgfHwgXCJvblwiO1xyXG4gICAgICAgIHRoaXMudmFsdWVfZmllbGRfc3RhdGUgPSBvYmpfZnJvbV9jb250cm9sbGVyLnZhbHVlX2ZpZWxkX3N0YXRlIHx8IFwib25cIjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcItCh0L7Qt9C00LDRjiDQstC10YDRgtC40LrQsNC70YzQvdGL0Lkg0LLQuNC0XCIpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVfc3R1ZmYoKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9nZXRfdmlldygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBfZWxlbWVudF9pZDogdGhpcy5fZWxlbWVudF9pZCxcclxuICAgICAgICAgICAgX3NpZ246IHRoaXMuX3NpZ24sXHJcbiAgICAgICAgICAgIF9taW5fdmFsdWU6IHRoaXMuX21pbl92YWx1ZSxcclxuICAgICAgICAgICAgX21heF92YWx1ZTogdGhpcy5fbWF4X3ZhbHVlLFxyXG4gICAgICAgICAgICBfbWluX3NsaWRlcl92YWx1ZTogdGhpcy5fbWluX3NsaWRlcl92YWx1ZSxcclxuICAgICAgICAgICAgX21heF9zbGlkZXJfdmFsdWU6IHRoaXMuX21heF9zbGlkZXJfdmFsdWUsXHJcbiAgICAgICAgICAgIF9zbGlkZXJfdHlwZTogdGhpcy5fc2xpZGVyX3R5cGUsXHJcbiAgICAgICAgICAgIF9zdGVwOiB0aGlzLl9zdGVwLFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXHJcbiAgICAgICAgICAgIHZhbHVlX2ZpZWxkX3N0YXRlOiB0aGlzLnZhbHVlX2ZpZWxkX3N0YXRlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9zZXRfY29udHJvbGxlcigpIHtcclxuICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICBfbWluX3ZhbHVlOiB0aGlzLl9taW5fdmFsdWUsXHJcbiAgICAgICAgICAgIF9tYXhfdmFsdWU6IHRoaXMuX21heF92YWx1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5fZ2V0X3ZpZXcob2JqKTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGNyZWF0ZV9zdHVmZigpIHtcclxuICAgICAgICBpZiAodGhpcy5fZWxlbSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJkb3VibGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiaXNzX3ZhbHVlLWZpZWxkXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBpZD1cImlzc192YWx1ZV9maWVsZF8xLWZpZWxkXCI+PC9zcGFuPicgKyAnLScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHNwYW4gaWQ9XCJpc3NfdmFsdWVfZmllbGRfMi1maWVsZFwiPjwvc3Bhbj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD0gXCJpc3MtY29udGFpbmVyX3ZlcnRpY2FsXCI+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiaXNzX19kb3VibGVfZmx5LXZhbHVlLTFfdmVydGljYWxcIiAgY2xhc3M9XCJpc3NfdG9vbHRpcFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImlzc19fZG91YmxlXzFfdmVydGljYWxcIiBjbGFzcz1cImlzc19kcmFnXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiaXNzX19kb3VibGVfZmx5LXZhbHVlLTJfdmVydGljYWxcIiBjbGFzcz1cImlzc190b29sdGlwXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiaXNzX19kb3VibGVfMl92ZXJ0aWNhbFwiIGNsYXNzPVwiaXNzX2RyYWdcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJpc3NfY29sb3ItYmFyX3ZlcnRpY2FsXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVfdGhpc19zbGlkZXJzX2VsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVfcmliYm9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJzaW5nbGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbS5pbm5lckhUTUwgPSAnPGRpdiBpZD1cImlzc192YWx1ZS1maWVsZFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8c3BhbiBpZD1cImlzc192YWx1ZV9maWVsZF9zaW5nbGVcIj48L3NwYW4+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPSBcImlzcy1jb250YWluZXJfdmVydGljYWxcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImlzc19jb2xvci1iYXJfdmVydGljYWxcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImlzc19fc2luZ2xlX2ZseS12YWx1ZVwiIGNsYXNzPVwiaXNzX3Rvb2x0aXBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImlzc19fc2luZ2xlXCIgY2xhc3M9XCJpc3NfZHJhZ1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVfdGhpc19zbGlkZXJzX2VsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVfcmliYm9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKFwi0J3QtdC/0YDQsNCy0LjQu9GM0L3QviDQt9Cw0LTQsNC9INC/0LDRgNCw0LzQtdGC0YAg0LTQu9GPIF9zbGlkZXJfdHlwZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcihcItCd0LAg0YHRgtGA0LDQvdC40YbQtSDQvdC1INGB0YPRidC10YHRgtCy0YPQtdGCINGD0LrQsNC30LDQvdC90L7Qs9C+IF9lbGVtZW50X2lkINC00LvRjyDRgdC+0LfQtNCw0L3QuNGPINGB0LvQsNC50LTQtdGA0LAg0LjQu9C4INC+0L0g0L/RgNC+0YHRgtC+INC90LUg0YPQutCw0LfQsNC9XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgdGhpcy5zZXRfdmlzaWJsZV90ZXh0X2ZpZWxkKCk7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlX2xpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgbW92ZV9zbGlkZXJzX29uX2luaXRpYWxpemF0aW9uKCkge1xyXG4gICAgICAgIGxldCBmaXJzdF9zbGlkZXJfcG9zaXRpb24gPSB0aGlzLnBpeGVsX3N0ZXAgKiAoKHRoaXMuX21pbl9zbGlkZXJfdmFsdWUgLSB0aGlzLl9taW5fdmFsdWUpIC8gdGhpcy5fc3RlcCk7XHJcbiAgICAgICAgbGV0IHNlY29uZF9zbGlkZXJfcG9zaXRpb24gPSB0aGlzLnBpeGVsX3N0ZXAgKiAoKHRoaXMuX21heF9zbGlkZXJfdmFsdWUgLSB0aGlzLl9taW5fdmFsdWUpIC8gdGhpcy5fc3RlcCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJfMS5zdHlsZS50b3AgPSBmaXJzdF9zbGlkZXJfcG9zaXRpb24gKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJfMi5zdHlsZS50b3AgPSBzZWNvbmRfc2xpZGVyX3Bvc2l0aW9uICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMudmFsdWVfZmllbGRfMV9mbHkuc3R5bGUudG9wID0gZmlyc3Rfc2xpZGVyX3Bvc2l0aW9uICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkuc3R5bGUudG9wID0gc2Vjb25kX3NsaWRlcl9wb3NpdGlvbiArIFwicHhcIjtcclxuICAgICAgICB0aGlzLnJlZnJlc2hfcG9zaXRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5tb3ZlX3JpYmJvbigpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgbW92ZV9yaWJib24oKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9zbGlkZXJfdHlwZSA9PSBcImRvdWJsZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmliYm9uLnN0eWxlLnRvcCA9ICh0aGlzLnNsaWRlcl8xX3dpZHRoIC8gMikgKyB0aGlzLnNsaWRlcl8xX3Bvc2l0aW9uX2xlZnRfeF9heGlzICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSB0aGlzLnNsaWRlcl8yX3Bvc2l0aW9uX2xlZnRfeF9heGlzIC0gdGhpcy5zbGlkZXJfMV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJzaW5nbGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICB0aGlzLnJpYmJvbi5zdHlsZS5oZWlnaHQgPSB0aGlzLl9zbGlkZXJfc2luZ2xlX3Bvc2l0aW9uX2xlZnRfeF9heGlzICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIDtcclxuICAgIF9jcmVhdGVfbGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zbGlkZXJfdHlwZSA9PSBcImRvdWJsZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyXzEub25tb3VzZWRvd24gPSB0aGlzLl9tb3VzZV9kb3duX2ZpcnN0X3NsaWRlcjtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJfMi5vbm1vdXNlZG93biA9IHRoaXMuX21vdXNlX2Rvd25fc2Vjb25kX3NsaWRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2xpZGVyX3R5cGUgPT0gXCJzaW5nbGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlcl9zaW5nbGUub25tb3VzZWRvd24gPSB0aGlzLl9tb3VzZV9kb3duX3NpbmdsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX21hdGhfX3NsaWRlcnNfdmFsdWVfc2luZ2xlKHBpeGVsX3N0ZXAsIGUpIHtcclxuICAgICAgICBsZXQgYW5zd2VyID0gTWF0aC5mbG9vcih0aGlzLl9zbGlkZXJfc2luZ2xlX3Bvc2l0aW9uX2xlZnRfeF9heGlzICogdGhpcy5tdWx0aXBsaWVyKTtcclxuICAgICAgICBpZiAoZS5jbGllbnRZID4gdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94IC0gcGl4ZWxfc3RlcCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZS5pbm5lclRleHQgPSB0aGlzLnBhcmVudF93aWR0aCAqIHRoaXMubXVsdGlwbGllciArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlX3N0YXRpYy5pbm5lclRleHQgPSB0aGlzLnBhcmVudF93aWR0aCAqIHRoaXMubXVsdGlwbGllciArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlLmlubmVyVGV4dCA9IGFuc3dlciArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGVfc3RhdGljLmlubmVyVGV4dCA9IGFuc3dlciArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGUuc3R5bGUudG9wID0gdGhpcy5fc2xpZGVyX3NpbmdsZV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIFwicHhcIjtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9tYXRoX19zbGlkZXJzX3ZhbHVlX2xlZnQoKSB7XHJcbiAgICAgICAgbGV0IGFuc3dlcjEgPSBNYXRoLmZsb29yKHRoaXMuc2xpZGVyXzFfcG9zaXRpb25fbGVmdF94X2F4aXMgKiB0aGlzLm11bHRpcGxpZXIpICsgdGhpcy5fbWluX3ZhbHVlO1xyXG4gICAgICAgIHRoaXMudmFsdWVfZmllbGRfMS5pbm5lclRleHQgPSBhbnN3ZXIxICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgIHRoaXMudmFsdWVfZmllbGRfMV9mbHkuaW5uZXJUZXh0ID0gYW5zd2VyMSArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzFfZmx5LnN0eWxlLnRvcCA9IHRoaXMuc2xpZGVyXzFfcG9zaXRpb25fbGVmdF94X2F4aXMgLSB0aGlzLnNsaWRlcl8xLm9mZnNldEhlaWdodCAvIDIgKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfbWF0aF9fc2xpZGVyc192YWx1ZV9yaWdodChlKSB7XHJcbiAgICAgICAgbGV0IGFuc3dlcjIgPSBNYXRoLmZsb29yKHRoaXMuc2xpZGVyXzJfcG9zaXRpb25fbGVmdF94X2F4aXMgKiB0aGlzLm11bHRpcGxpZXIpICsgdGhpcy5fbWluX3ZhbHVlO1xyXG4gICAgICAgIGlmIChlLmNsaWVudFkgPiB0aGlzLnBhcmVudF93aWR0aCArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggLSB0aGlzLnBpeGVsX3N0ZXApIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yX2ZseS5pbm5lclRleHQgPSB0aGlzLl9tYXhfdmFsdWUgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMi5pbm5lclRleHQgPSB0aGlzLl9tYXhfdmFsdWUgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzJfZmx5LmlubmVyVGV4dCA9IGFuc3dlcjIgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMi5pbm5lclRleHQgPSBhbnN3ZXIyICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzJfZmx5LnN0eWxlLnRvcCA9IHRoaXMuc2xpZGVyXzJfcG9zaXRpb25fbGVmdF94X2F4aXMgKyB0aGlzLnNsaWRlcl8yLm9mZnNldEhlaWdodCAvIDIgKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfbWF0aF9fc2xpZGVyc192YWx1ZV9zaW5nbGVfc3RlcChzdGVwcywgZSkge1xyXG4gICAgICAgIGxldCBhbnN3ZXIgPSB0aGlzLl9zdGVwICogc3RlcHMgKyBOdW1iZXIodGhpcy5fbWluX3ZhbHVlKTtcclxuICAgICAgICBpZiAoZS5jbGllbnRZID4gdGhpcy5wYXJlbnRfcG9zaXRpb25feCAmJiBlLmNsaWVudFkgKyB0aGlzLnNsaWRlcl9zaW5nbGVfd2lkdGggPCB0aGlzLnBhcmVudF93aWR0aCArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGUuaW5uZXJUZXh0ID0gYW5zd2VyICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZV9zdGF0aWMuaW5uZXJUZXh0ID0gYW5zd2VyICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmNsaWVudFkgPiB0aGlzLnBhcmVudF93aWR0aCArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF9zaW5nbGUuaW5uZXJUZXh0ID0gdGhpcy5fbWF4X3ZhbHVlICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZV9zdGF0aWMuaW5uZXJUZXh0ID0gdGhpcy5fbWF4X3ZhbHVlICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmNsaWVudFkgPD0gdGhpcy5wYXJlbnRfcG9zaXRpb25feCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZS5pbm5lclRleHQgPSB0aGlzLl9taW5fdmFsdWUgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfc2luZ2xlX3N0YXRpYy5pbm5lclRleHQgPSB0aGlzLl9taW5fdmFsdWUgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkX3NpbmdsZS5zdHlsZS50b3AgPSB0aGlzLl9zbGlkZXJfc2luZ2xlX3Bvc2l0aW9uX2xlZnRfeF9heGlzICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgX21hdGhfX3NsaWRlcnNfdmFsdWVfbGVmdF9zdGVwKHN0ZXBzLCBwaXhlbF9zdGVwLCBlKSB7XHJcbiAgICAgICAgbGV0IGFuc3dlcjEgPSB0aGlzLl9zdGVwICogc3RlcHMgKyBOdW1iZXIodGhpcy5fbWluX3ZhbHVlKTtcclxuICAgICAgICBpZiAoZS5jbGllbnRZIDw9IHRoaXMuc2xpZGVyXzJfcG9zaXRpb25fbGVmdF94X2F4aXMgKyB0aGlzLnBhcmVudF9wb3NpdGlvbi50b3AgLSBwaXhlbF9zdGVwICYmIGUuY2xpZW50WSA+PSB0aGlzLnBhcmVudF9wb3NpdGlvbi50b3ApIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8xX2ZseS5pbm5lclRleHQgPSBhbnN3ZXIxICsgXCIgXCIgKyB0aGlzLl9zaWduO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlX2ZpZWxkXzEuaW5uZXJUZXh0ID0gYW5zd2VyMSArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgLy8gdGhpcy52YWx1ZV9maWVsZF8xX2ZseS5zdHlsZS50b3AgPSBwaXhlbF9zdGVwICogc3RlcHMgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICBpZiAoZS5jbGllbnRYIDw9IHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8xX2ZseS5pbm5lclRleHQgPSB0aGlzLl9taW5fdmFsdWUgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMS5pbm5lclRleHQgPSB0aGlzLl9taW5fdmFsdWUgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICAvLyBpZiAodGhpcy52YWx1ZV9maWVsZF8xX2ZseS5vZmZzZXRUb3AgPj0gdGhpcy52YWx1ZV9maWVsZF8yX2ZseS5vZmZzZXRUb3AgLSB0aGlzLnNsaWRlcl8xLm9mZnNldEhlaWdodCkge1xyXG4gICAgICAgIC8vIFx0dGhpcy52YWx1ZV9maWVsZF8xX2ZseS5zdHlsZS50b3AgPSB0aGlzLnZhbHVlX2ZpZWxkXzJfZmx5Lm9mZnNldFRvcCAtIHRoaXMuc2xpZGVyXzEub2Zmc2V0SGVpZ2h0ICogMiArIFwicHhcIlxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8xX2ZseS5zdHlsZS50b3AgPSB0aGlzLnNsaWRlcl8xX3Bvc2l0aW9uX2xlZnRfeF9heGlzIC0gdGhpcy5zbGlkZXJfMV93aWR0aCAvIDQgKyBcInB4XCI7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBfbWF0aF9fc2xpZGVyc192YWx1ZV9yaWdodF9zdGVwKHN0ZXBzLCBwaXhlbF9zdGVwLCBlKSB7XHJcbiAgICAgICAgbGV0IGFuc3dlcjIgPSB0aGlzLl9zdGVwICogc3RlcHMgKyBOdW1iZXIodGhpcy5fbWluX3ZhbHVlKTtcclxuICAgICAgICBpZiAoYW5zd2VyMiA+IHRoaXMuX21heF92YWx1ZSkge1xyXG4gICAgICAgICAgICBhbnN3ZXIyID0gdGhpcy5fbWF4X3ZhbHVlO1xyXG4gICAgICAgICAgICBzdGVwcyAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgaWYgKGUuY2xpZW50WSA8IHRoaXMucGFyZW50X3dpZHRoICsgdGhpcy5wYXJlbnRfcG9zaXRpb25feFxyXG4gICAgICAgICAgICAmJiBlLmNsaWVudFkgPj0gdGhpcy5zbGlkZXJfMV9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggKyBwaXhlbF9zdGVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkuaW5uZXJUZXh0ID0gYW5zd2VyMiArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yLmlubmVyVGV4dCA9IGFuc3dlcjIgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkuc3R5bGUudG9wID0gcGl4ZWxfc3RlcCAqIHN0ZXBzICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChlLmNsaWVudFkgPiB0aGlzLnBhcmVudF93aWR0aCArIHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggLSB0aGlzLnNsaWRlcl8yX3dpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkuaW5uZXJUZXh0ID0gYW5zd2VyMiArIFwiIFwiICsgdGhpcy5fc2lnbjtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZV9maWVsZF8yLmlubmVyVGV4dCA9IGFuc3dlcjIgKyBcIiBcIiArIHRoaXMuX3NpZ247XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkuc3R5bGUudG9wID0gdGhpcy5zbGlkZXJfMl9wb3NpdGlvbl9sZWZ0X3hfYXhpcyArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlX2ZpZWxkXzJfZmx5Lm9mZnNldFRvcCA8PSB0aGlzLnZhbHVlX2ZpZWxkXzFfZmx5Lm9mZnNldFRvcCArIHRoaXMuc2xpZGVyXzIub2Zmc2V0SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVfZmllbGRfMl9mbHkuc3R5bGUudG9wID0gdGhpcy52YWx1ZV9maWVsZF8xX2ZseS5vZmZzZXRUb3AgKyB0aGlzLnNsaWRlcl8yLm9mZnNldEhlaWdodCAqIDIgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIDtcclxuICAgIF9zdGVwX2ltcGxlbWVudGF0aW9uKGUsIG1vZGlmaWVkX29iamVjdCwgc3RhdGljX29iamVjdCkge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaF9wb3NpdGlvbnMoKTtcclxuICAgICAgICBsZXQgbW9kaWZpZWRfb2JqZWN0X3Bvc2l0aW9uID0gbW9kaWZpZWRfb2JqZWN0Lm9mZnNldFRvcDsgLy/RgdC80LXRidC10L3QuNC1INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDRgNC+0LTQuNGC0LXQu9GPINC/0L4g0KVcclxuICAgICAgICBsZXQgbW9kaWZpZWRfb2JqZWN0X3dpZHRoID0gbW9kaWZpZWRfb2JqZWN0Lm9mZnNldEhlaWdodDsgLy8g0YjQuNGA0LjQvdCwINC/0L7Qu9C30YPQvdC60LBcclxuICAgICAgICBsZXQgcGl4ZWxfc3RlcCA9ICh0aGlzLnBhcmVudF93aWR0aCAtIG1vZGlmaWVkX29iamVjdF93aWR0aCkgLyB0aGlzLnN0ZXBzOyAvLyDRgNCw0LfQvNC10YAg0YjQsNCz0LAg0LIg0L/QuNC60YHQtdC70Y/RhVxyXG4gICAgICAgIGlmIChzdGF0aWNfb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uID0gc3RhdGljX29iamVjdC5vZmZzZXRUb3A7IC8v0YHQvNC10YnQtdC90LjQtSDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0YDQvtC00LjRgtC10LvRjyDQv9C+INClXHJcbiAgICAgICAgICAgIGxldCBzdGVwID0gTWF0aC5yb3VuZCgoZS5jbGllbnRZIC0gdGhpcy5wYXJlbnRfcG9zaXRpb25feCkgLyBwaXhlbF9zdGVwKTsgLy8g0Y3RgtC+INC60L7Qu9C40YfQtdGB0YLQstC+INGI0LDQs9C+0LIg0LIg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWVkX29iamVjdF9wb3NpdGlvbiA8IHN0YXRpY19vYmplY3RfcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmNsaWVudFkgPiBzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uICsgdGhpcy5wYXJlbnRfcG9zaXRpb25feCAmJiBlLmNsaWVudFkgPiB0aGlzLnBhcmVudF9wb3NpdGlvbl94ICsgcGl4ZWxfc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkX29iamVjdC5zdHlsZS50b3AgPSAoc3RhdGljX29iamVjdF9wb3NpdGlvbiAtIHBpeGVsX3N0ZXApICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5jbGllbnRZIDwgdGhpcy5wYXJlbnRfcG9zaXRpb25feCArIHBpeGVsX3N0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZF9vYmplY3Quc3R5bGUudG9wID0gXCIwcHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGUuY2xpZW50WSA+IHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggJiYgZS5jbGllbnRZIDw9IHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggKyBzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uIC0gcGl4ZWxfc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkX29iamVjdC5zdHlsZS50b3AgPSAocGl4ZWxfc3RlcCAqIHN0ZXApICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVkX29iamVjdF9wb3NpdGlvbiArIG1vZGlmaWVkX29iamVjdF93aWR0aCA+PSBzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRfb2JqZWN0LnN0eWxlLnpJbmRleCA9IFwiMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY19vYmplY3Quc3R5bGUuekluZGV4ID0gXCIxXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZF9vYmplY3Quc3R5bGUuekluZGV4ID0gXCIxXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljX29iamVjdC5zdHlsZS56SW5kZXggPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21hdGhfX3NsaWRlcnNfdmFsdWVfbGVmdF9zdGVwKHN0ZXAsIHBpeGVsX3N0ZXAsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgaWYgKG1vZGlmaWVkX29iamVjdF9wb3NpdGlvbiA+IHN0YXRpY19vYmplY3RfcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLmNsaWVudFkgPiBzdGF0aWNfb2JqZWN0X3Bvc2l0aW9uICsgdGhpcy5wYXJlbnRfcG9zaXRpb25feCArIHBpeGVsX3N0ZXAgJiYgZS5jbGllbnRZIDwgdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94IC0gbW9kaWZpZWRfb2JqZWN0X3dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRfb2JqZWN0LnN0eWxlLnRvcCA9IHBpeGVsX3N0ZXAgKiBzdGVwICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5jbGllbnRZID4gdGhpcy5wYXJlbnRfd2lkdGggKyB0aGlzLnBhcmVudF9wb3NpdGlvbl94IC0gbW9kaWZpZWRfb2JqZWN0X3dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRfb2JqZWN0LnN0eWxlLnRvcCA9IHRoaXMucGFyZW50X3dpZHRoIC0gbW9kaWZpZWRfb2JqZWN0X3dpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZS5jbGllbnRZIDwgdGhpcy5wYXJlbnRfcG9zaXRpb25feCArIHN0YXRpY19vYmplY3RfcG9zaXRpb24gKyBtb2RpZmllZF9vYmplY3Rfd2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZF9vYmplY3Quc3R5bGUudG9wID0gc3RhdGljX29iamVjdF9wb3NpdGlvbiArIG1vZGlmaWVkX29iamVjdF93aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaF9wb3NpdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZF9vYmplY3RfcG9zaXRpb24gLSBtb2RpZmllZF9vYmplY3Rfd2lkdGggPD0gc3RhdGljX29iamVjdF9wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkX29iamVjdC5zdHlsZS56SW5kZXggPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNfb2JqZWN0LnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRfb2JqZWN0LnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY19vYmplY3Quc3R5bGUuekluZGV4ID0gXCIyXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXRoX19zbGlkZXJzX3ZhbHVlX3JpZ2h0X3N0ZXAoc3RlcCwgcGl4ZWxfc3RlcCwgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5yZWZyZXNoX3Bvc2l0aW9ucygpO1xyXG4gICAgICAgICAgICBsZXQgc3RlcCA9IE1hdGgucm91bmQoKGUuY2xpZW50WSAtIHRoaXMucGFyZW50X3Bvc2l0aW9uX3gpIC8gcGl4ZWxfc3RlcCk7IC8vINGN0YLQviDQutC+0LvQuNGH0LXRgdGC0LLQviDRiNCw0LPQvtCyINCyINC/0L7Qt9C40YbQuNC4XHJcbiAgICAgICAgICAgIGlmIChlLmNsaWVudFkgPCB0aGlzLnBhcmVudF9wb3NpdGlvbl94KSB7XHJcbiAgICAgICAgICAgICAgICBtb2RpZmllZF9vYmplY3Quc3R5bGUudG9wID0gMCArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmNsaWVudFkgPiB0aGlzLnBhcmVudF9wb3NpdGlvbl94ICsgdGhpcy5wYXJlbnRfd2lkdGggLSBtb2RpZmllZF9vYmplY3Rfd2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIG1vZGlmaWVkX29iamVjdC5zdHlsZS50b3AgPSB0aGlzLnBhcmVudF93aWR0aCAtIG1vZGlmaWVkX29iamVjdF93aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChlLmNsaWVudFkgPiB0aGlzLnBhcmVudF9wb3NpdGlvbl94ICYmIGUuY2xpZW50WSA8IHRoaXMucGFyZW50X3Bvc2l0aW9uX3ggKyB0aGlzLnBhcmVudF93aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZpZWRfb2JqZWN0LnN0eWxlLnRvcCA9IChwaXhlbF9zdGVwICogc3RlcCkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hfcG9zaXRpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX21hdGhfX3NsaWRlcnNfdmFsdWVfc2luZ2xlX3N0ZXAoc3RlcCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgO1xyXG59XHJcbjtcclxuZXhwb3J0IHsgVmlld192ZXJ0aWNhbCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD12aWV3X3ZlcnRpY2FsLmpzLm1hcCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=