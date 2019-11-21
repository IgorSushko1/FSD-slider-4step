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
export { Controller };
//# sourceMappingURL=controller.js.map