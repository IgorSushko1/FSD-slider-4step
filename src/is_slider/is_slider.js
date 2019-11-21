"use strict";
exports.__esModule = true;
var view_horizontal_1 = require("./view_horizontal");
// import { View_vertical } from "./view_vertical";
var view_vertical_1 = require("./view_vertical");
var model_1 = require("./model");
var controller_1 = require("./controller");
;
function is_slider(param) {
    ;
    ;
    var obj_fixed_values = {
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
    var obj_changeable_values = {
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
        }
    };
    var settings = {
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
    var _loop_1 = function (key_one) {
        var select = document.createElement("select");
        var key = obj_fixed_values[key_one];
        var title = obj_fixed_values[key_one].description;
        var text_node_title = document.createTextNode(title);
        var div = document.createElement("div");
        var span = document.createElement("span");
        span.appendChild(text_node_title);
        div.appendChild(span);
        select.id = obj_fixed_values[key_one].key_word;
        for (var b in obj_fixed_values[key_one].value) {
            var stuff = document.createElement("option");
            var value = obj_fixed_values[key_one].value[b];
            stuff.value = value;
            var text_node = document.createTextNode(value);
            stuff.appendChild(text_node);
            select.appendChild(stuff);
        }
        ;
        document.getElementById(settings.settings_id).appendChild(div).appendChild(select);
        var parent_1 = document.getElementById(settings.settings_id);
        var element_i_choose = parent_1.querySelector("#" + obj_fixed_values[key_one].key_word);
        element_i_choose.onchange = function () {
            settings[obj_fixed_values[key_one].function_name] = this.value;
            slider_refresh();
        };
    };
    // let key_one:any;
    for (var key_one in obj_fixed_values) {
        _loop_1(key_one);
    }
    ;
    var _loop_2 = function (key_one) {
        var description = obj_changeable_values[key_one].description;
        var text_node_title = document.createTextNode(description);
        var div = document.createElement("div");
        var span = document.createElement("span");
        var input = document.createElement("input");
        input.type = "number";
        span.appendChild(text_node_title);
        div.appendChild(span);
        div.appendChild(input);
        div.id = "iss__" + obj_changeable_values[key_one].key_word;
        document.getElementById(settings.settings_id).appendChild(div);
        var parent_2 = document.getElementById(settings.settings_id);
        var element_i_choose = parent_2.querySelector("#iss__" + obj_changeable_values[key_one].key_word);
        var f_name = obj_changeable_values[key_one].function_name;
        element_i_choose.oninput = function () {
            settings[f_name] = input.value;
            slider_refresh();
        };
    };
    for (var key_one in obj_changeable_values) {
        _loop_2(key_one);
    }
    ;
    function change_string(n, x) {
        document.getElementById("settings").innerText = n + ": " + x;
        slider_refresh();
    }
    ;
    //ПОСТРОЕНИЕ СЛАЙДЕРА ПРИ ПЕРВОМ ЗАПУСКЕ
    var view;
    // console.log('settings._type_view  === ' + settings._type_view)
    if (settings._type_view == "vertical") {
        // view = new View_vertical(settings);
        view = new view_vertical_1.View_vertical();
    }
    else if (settings._type_view == "horizontal") {
        view = new view_horizontal_1.View_horizontal();
    }
    ;
    var model = new model_1.Model(settings);
    var controller = new controller_1.Controller(settings);
    controller._bind_model(model);
    controller._bind_view(view);
    view._bind_controller(controller);
    controller.create_slider();
    function slider_refresh() {
        // let view;
        if (settings._type_view == "vertical") {
            // view = new View_vertical(settings);
            view = new view_vertical_1.View_vertical();
        }
        else if (settings._type_view == "horizontal") {
            view = new view_horizontal_1.View_horizontal();
        }
        ;
        model = new model_1.Model(settings);
        controller = new controller_1.Controller(settings);
        controller._bind_model(model);
        controller._bind_view(view);
        view._bind_controller(controller);
        controller.create_slider();
    }
    ;
}
exports.is_slider = is_slider;
;
