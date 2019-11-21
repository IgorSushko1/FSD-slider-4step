"use strict";
exports.__esModule = true;
;
var View_horizontal = /** @class */ (function () {
    function View_horizontal() {
        var _this = this;
        this.create_this_sliders_elements = function () {
            _this.parent_element = document.querySelector("#" + _this._element_id);
            _this.parent_width = _this.parent_element.offsetWidth; // ширина родительского элемента
            _this.parent_position = _this.parent_element.getBoundingClientRect(); // родительский контейнер
            _this.parent_position_x = _this.parent_position.left; //размещение контейнера относительно левого края экрана
            _this.value_field = _this.parent_element.querySelector("#iss_value-field");
            _this.ribbon = _this.parent_element.querySelector("#iss__color-bar_horizontal");
            //РАСЧЕТЫ ШАГА
            _this.steps = (_this._max_value - _this._min_value) / _this._step; // количество шагов
            _this.pixel_step = _this.parent_width / _this.steps; // размер шага в пикселях
            _this.multiplier = (_this._max_value - _this._min_value) / _this.parent_width;
            if (_this._slider_type == "double") {
                _this.value_field_1 = _this.parent_element.querySelector("#iss_value_field_1-field");
                _this.value_field_2 = _this.parent_element.querySelector("#iss_value_field_2-field");
                _this.value_field_1_fly = _this.parent_element.querySelector("#iss__double_fly-value-1");
                _this.value_field_2_fly = _this.parent_element.querySelector("#iss__double_fly-value-2");
                _this.slider_1 = _this.parent_element.querySelector("#iss__double_1_horizontal");
                _this.slider_1_width = _this.slider_1.offsetWidth;
                _this.slider_2 = _this.parent_element.querySelector("#iss__double_2_horizontal");
                _this.slider_2_width = _this.slider_2.offsetWidth;
                _this.slider_1_position_left_x_axis = _this.slider_1.offsetLeft;
                _this.slider_2_position_left_x_axis = _this.slider_2.offsetLeft;
            }
            ;
            if (_this._slider_type == "single") {
                _this.value_field_single = _this.parent_element.querySelector("#iss__single_fly-value");
                _this.value_field_single_static = _this.parent_element.querySelector("#value_field_single");
                _this.slider_single = _this.parent_element.querySelector("#iss__single");
                _this.slider_single_width = _this.slider_single.offsetWidth;
                _this._slider_single_position_left_x_axis = _this.slider_single.offsetLeft;
            }
            ;
        };
        this.refresh_positions = function () {
            _this.parent_position = _this.parent_element.getBoundingClientRect(); // родительский контейнер, если вдруг поменяется разрешение экрана
            _this.parent_position_x = _this.parent_position.left; //размещение контейнера относительно левого края экрана
            if (_this._slider_type == "double") {
                _this.slider_1_position_left_x_axis = _this.slider_1.offsetLeft;
                _this.slider_2_position_left_x_axis = _this.slider_2.offsetLeft;
            }
            ;
            if (_this._slider_type == "single") {
                _this._slider_single_position_left_x_axis = _this.slider_single.offsetLeft;
            }
            ;
        };
        this.set_visible_text_field = function () {
            var a = _this._min_value;
            var b = _this._max_value;
            var c = _this._min_slider_value;
            var d = _this._max_slider_value;
            // console.log("до  этого момента ок")
            if (_this._slider_type == "double" && a < b && c < b && c < d && d <= b && c - a >= 0) {
                _this.value_field_1.innerText = c + " " + _this._sign;
                _this.value_field_2.innerText = d + " " + _this._sign;
                _this.value_field_1_fly.innerText = c + " " + _this._sign;
                _this.value_field_2_fly.innerText = d + " " + _this._sign;
                _this.move_sliders_on_initialization();
            }
            ;
            if (_this._slider_type == "single" && a < b && c - a >= 0) {
                _this.value_field_single_static.innerText = c + " " + _this._sign;
                _this.value_field_single.innerText = c + " " + _this._sign;
                _this.move_single_slider_on_initialization();
            }
            ;
            if (_this.tooltip == "off") {
                var tooltip = _this.parent_element.getElementsByClassName("tooltip");
                for (var _i = 0, tooltip_1 = tooltip; _i < tooltip_1.length; _i++) {
                    var a_1 = tooltip_1[_i];
                    a_1.style.display = "none";
                }
            }
            ;
            if (_this.value_field_state == "off") {
                _this.value_field.style.display = "none";
            }
            ;
        };
        this.move_single_slider_on_initialization = function () {
            var first_slider_position = _this.pixel_step * ((_this._min_slider_value - _this._min_value) / _this._step);
            _this.slider_single.style.left = first_slider_position + "px";
            _this.value_field_single.style.left = first_slider_position + "px";
            _this.refresh_positions();
            _this.move_ribbon();
        };
        this._mouse_down_single = function (e) {
            e.preventDefault();
            document.onmouseup = _this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
            document.onmousemove = _this._move_element_single;
        };
        this._move_element_single = function (e) {
            if (_this._step >= 2) {
                _this._step_implementation(e, _this.slider_single);
                ; // Рабочая функция
            }
            else {
                if (e.clientX > _this.parent_width + _this.parent_position_x) {
                    _this.slider_single.style.left = (_this.parent_width - (_this.slider_1_width / 2)) + "px";
                }
                else if (e.clientX < _this.parent_position_x + (_this.slider_1_width / 2)) {
                    _this.slider_single.style.left = '0px';
                }
                else {
                    _this.slider_single.style.left = (e.clientX - _this.parent_position_x - (_this.slider_1_width / 2)) + "px";
                }
                ;
                _this.refresh_positions();
                _this._math__sliders_value_single(_this.pixel_step, e);
            }
            ;
            _this.move_ribbon();
        };
        this._mouse_down_first_slider = function (e) {
            e.preventDefault(); // отменили все действия которые происходили раньше
            document.onmouseup = _this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
            document.onmousemove = _this._move_element_1; // событие, произойдет если сдвинуть мышу
        };
        this._mouse_down_second_slider = function (e) {
            e.preventDefault(); // отменили все действия которые происходили раньше
            document.onmouseup = _this._cancel_move_events; // обработчик на событие поднятие клавиши мыши - запустит код, который обнулит события
            document.onmousemove = _this._move_element_2; // событие, произойдет если сдвинуть мышу
        };
        this._move_element_1 = function (e) {
            _this.refresh_positions();
            if (_this._step >= 2) {
                _this._step_implementation(e, _this.slider_1, _this.slider_2); // Рабочая функция
            }
            else {
                if (e.clientX > _this.parent_width + _this.parent_position_x) { // РАБОЧАЯ ФУНКЦИЯ
                    _this.slider_1.style.left = (_this.parent_width - (_this.slider_1_width / 2)) + "px";
                }
                else if (e.clientX < _this.parent_position_x) {
                    _this.slider_1.style.left = '0px';
                }
                else {
                    _this.slider_1.style.left = (e.clientX - _this.parent_position_x - (_this.slider_1_width / 2)) + "px";
                }
                ;
                if (_this.slider_2_position_left_x_axis + _this.parent_position_x < e.clientX + (_this.slider_1_width / 2)) {
                    _this.slider_1.style.left = (_this.slider_2_position_left_x_axis - 30) + "px";
                }
                ;
                _this.refresh_positions();
                _this._math__sliders_value_left();
            }
            _this.move_ribbon();
        };
        this._move_element_2 = function (e) {
            _this.refresh_positions();
            if (_this._step >= 2) {
                _this._step_implementation(e, _this.slider_2, _this.slider_1); // Рабочая функция
            }
            else {
                if (e.clientX > _this.parent_width + _this.parent_position_x) { //если курсор выходит за пределы элемента справа РАБОЧАЯ ФУНКЦИЯ
                    _this.slider_2.style.left = (_this.parent_width - (_this.slider_2_width / 2)) + "px";
                }
                else if (e.clientX < _this.parent_position_x) { //если курсор выходит за пределы элемента слева
                    _this.slider_2.style.left = (_this.slider_2_width / (2)) + 'px';
                }
                else { //если курсор внутри элемента
                    _this.slider_2.style.left = (e.clientX - _this.parent_position_x - (_this.slider_2_width / 2)) + "px";
                }
                ;
                if (_this.slider_1_position_left_x_axis + _this.parent_position_x >= e.clientX - (_this.slider_2_width * 1.5)) {
                    _this.slider_2.style.left = (_this.slider_1_position_left_x_axis + _this.slider_2_width) + "px";
                }
                ;
                _this.refresh_positions();
                _this._math__sliders_value_right(e);
            }
            ;
            _this.move_ribbon();
        };
        this._cancel_move_events = function () {
            /* stop moving when mouse button is released:*/
            // console.log("close_drag_element работает")
            document.onmouseup = null;
            document.onmousemove = null;
        };
    }
    ;
    View_horizontal.prototype._bind_controller = function (controller) {
        this.controller = controller;
    };
    ;
    View_horizontal.prototype._set_for_view = function (obj_from_controller) {
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
    };
    ;
    View_horizontal.prototype._get_view = function () {
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
    };
    ;
    View_horizontal.prototype._set_controller = function () {
        var obj = {
            _min_slider_value: this._min_slider_value,
            _max_slider_value: this._max_slider_value
        };
        this.controller._get_view(obj);
    };
    ;
    View_horizontal.prototype.create_stuff = function () {
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
    };
    ;
    View_horizontal.prototype.move_sliders_on_initialization = function () {
        var first_slider_position = this.pixel_step * ((this._min_slider_value - this._min_value) / this._step);
        var second_slider_position = this.pixel_step * ((this._max_slider_value - this._min_value) / this._step);
        this.slider_1.style.left = first_slider_position + "px";
        this.slider_2.style.left = second_slider_position + "px";
        this.value_field_1_fly.style.left = first_slider_position + "px";
        this.value_field_2_fly.style.left = second_slider_position + "px";
        this.refresh_positions();
        this.move_ribbon();
    };
    ;
    View_horizontal.prototype.move_ribbon = function () {
        this.refresh_positions();
        if (this._slider_type == "double") {
            this.ribbon.style.left = (this.slider_1_width / 2) + this.slider_1_position_left_x_axis + "px";
            this.ribbon.style.width = this.slider_2_position_left_x_axis - this.slider_1_position_left_x_axis + "px";
        }
        else if (this._slider_type == "single") {
            this.ribbon.style.left = "0px";
            this.ribbon.style.width = this._slider_single_position_left_x_axis + "px";
        }
    };
    ;
    View_horizontal.prototype._create_listeners = function () {
        if (this._slider_type == "double") {
            this.slider_1.onmousedown = this._mouse_down_first_slider;
            this.slider_2.onmousedown = this._mouse_down_second_slider;
        }
        else if (this._slider_type == "single") {
            this.slider_single.onmousedown = this._mouse_down_single;
        }
        ;
    };
    ;
    View_horizontal.prototype._math__sliders_value_single = function (pixel_step, e) {
        var answer = Math.floor(this._slider_single_position_left_x_axis * this.multiplier);
        if (e.clientX > this.parent_width + this.parent_position_x - pixel_step) {
            this.value_field_single.innerText = this.parent_width * this.multiplier + this._sign;
            this.value_field_single_static.innerText = this.parent_width * this.multiplier + " " + this._sign;
        }
        else {
            this.value_field_single.innerText = answer + " " + this._sign;
            this.value_field_single_static.innerText = answer + " " + this._sign;
        }
        this.value_field_single.style.left = this._slider_single_position_left_x_axis + "px";
    };
    ;
    View_horizontal.prototype._math__sliders_value_left = function () {
        var answer1 = Math.floor(this.slider_1_position_left_x_axis * this.multiplier) + this._min_value;
        this.value_field_1.innerText = answer1 + " " + this._sign;
        this.value_field_1_fly.innerText = answer1 + " " + this._sign;
        this.value_field_1_fly.style.left = this.slider_1_position_left_x_axis - this.slider_1.offsetWidth / 2 + "px";
    };
    ;
    View_horizontal.prototype._math__sliders_value_right = function (e) {
        var answer2 = Math.floor(this.slider_2_position_left_x_axis * this.multiplier) + this._min_value;
        if (e.clientX > this.parent_width + this.parent_position_x - this.pixel_step) {
            this.value_field_2_fly.innerText = this._max_value + " " + this._sign;
            this.value_field_2.innerText = this._max_value + " " + this._sign;
        }
        else {
            this.value_field_2_fly.innerText = answer2 + " " + this._sign;
            this.value_field_2.innerText = answer2 + " " + this._sign;
        }
        this.value_field_2_fly.style.left = this.slider_2_position_left_x_axis + this.slider_2.offsetWidth / 2 + "px";
    };
    ;
    View_horizontal.prototype._math__sliders_value_single_step = function (steps, e) {
        var answer = this._step * steps + Number(this._min_value);
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
    };
    ;
    View_horizontal.prototype._math__sliders_value_left_step = function (steps, pixel_step, e) {
        var answer1 = this._step * steps + Number(this._min_value);
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
    };
    ;
    View_horizontal.prototype._math__sliders_value_right_step = function (steps, pixel_step, e) {
        var answer2 = this._step * steps + Number(this._min_value);
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
    };
    ;
    View_horizontal.prototype._step_implementation = function (e, modified_object, static_object) {
        this.refresh_positions();
        var modified_object_position = modified_object.offsetLeft; //смещение относительно левого верхнего угла родителя по Х
        var modified_object_width = modified_object.offsetWidth; // ширина ползунка
        var pixel_step = (this.parent_width - modified_object_width) / this.steps; // размер шага в пикселях
        if (static_object) {
            var static_object_position = static_object.offsetLeft; //смещение относительно левого верхнего угла родителя по Х
            var step = Math.round((e.clientX - this.parent_position_x) / pixel_step); // это количество шагов в позиции
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
            var step = Math.round((e.clientX - this.parent_position_x) / pixel_step); // это количество шагов в позиции
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
    };
    ;
    return View_horizontal;
}());
exports.View_horizontal = View_horizontal;
;
