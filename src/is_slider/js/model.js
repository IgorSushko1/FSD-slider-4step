"use strict";
exports.__esModule = true;
;
;
var Model = /** @class */ (function () {
    function Model(param) {
        this._min_value = param._min_value || 0;
        this._max_value = param._max_value || 1000;
        this._min_slider_value = param._min_slider_value || 200;
        this._max_slider_value = param._max_slider_value || 800;
        this._sign = param._sign || "₽";
    }
    ;
    Model.prototype._set_model = function (obj) {
        this._min_slider_value = obj._min_slider_value;
        this._max_slider_value = obj._max_slider_value;
    };
    ;
    Model.prototype._get_model = function () {
        return {
            _min_value: this._min_value,
            _max_value: this._max_value,
            _min_slider_value: this._min_slider_value,
            _max_slider_value: this._max_slider_value,
            _sign: this._sign
        };
    };
    ;
    return Model;
}());
exports.Model = Model;
;
