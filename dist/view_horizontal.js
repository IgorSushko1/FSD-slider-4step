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
export { View_horizontal };
//# sourceMappingURL=view_horizontal.js.map