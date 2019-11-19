interface Model {
	_min_value?: number,
	_max_value?: number,
	_min_slider_value?: number,
	_max_slider_value?: number,
	_sign?: string
};

interface Model_obj {
	_min_slider_value?: number,
	_max_slider_value?: number
};
class Model {
	constructor(param: Model) {
		this._min_value = param._min_value || 0;
		this._max_value = param._max_value || 1000;
		this._min_slider_value = param._min_slider_value || 200;
		this._max_slider_value = param._max_slider_value || 800;
		this._sign = param._sign || "₽"
	};

	_set_model(obj: Model_obj) {
		this._min_slider_value = obj._min_slider_value;
		this._max_slider_value = obj._max_slider_value
	};

	_get_model() {
		return {
			_min_value: this._min_value,
			_max_value: this._max_value,
			_min_slider_value: this._min_slider_value,
			_max_slider_value: this._max_slider_value,
			_sign: this._sign
		}
	};

};

export { Model }