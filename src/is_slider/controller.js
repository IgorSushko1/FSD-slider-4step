"use strict";
exports.__esModule = true;
;
var Controller = /** @class */ (function () {
    function Controller(param) {
        this._element_id = param._element_id;
        this._sign = param._sign || "₽";
        this._slider_type = param._slider_type || "single";
        this._step = param._step || 2;
        this.tooltip = param.tooltip || "on";
        this.value_field_state = param.value_field_state || "on";
    }
    ;
    Controller.prototype._bind_model = function (model) {
        this.model = model;
    };
    ;
    Controller.prototype._bind_view = function (view) {
        this.view = view;
    };
    Controller.prototype._get_model = function () {
        return this.model._get_model();
    };
    ;
    Controller.prototype._set_model = function () {
        this.model._set_model({
            _min_slider_value: this._min_slider_value,
            _max_slider_value: this._max_slider_value
        });
    };
    ;
    Controller.prototype._get_view = function (obj) {
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
    };
    ;
    Controller.prototype._set_view = function () {
        var obj = {
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
    };
    ;
    Controller.prototype._get_controller = function () {
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
    Controller.prototype._set_controller = function () {
        var obj_from_model = this._get_model();
        this._min_slider_value = obj_from_model._min_slider_value;
        this._max_slider_value = obj_from_model._max_slider_value;
        this._min_value = obj_from_model._min_value;
        this._max_value = obj_from_model._max_value;
        this._sign = obj_from_model._sign;
    };
    ;
    Controller.prototype.create_slider = function () {
        this._set_controller();
        this._set_view();
    };
    ;
    return Controller;
}());
exports.Controller = Controller;
