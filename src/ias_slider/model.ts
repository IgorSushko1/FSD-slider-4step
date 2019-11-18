interface Model {
	_min_start_slider?: number,
	_max_start_slider?: number,
	_min_slider_value?: number,
	_max_slider_value?: number,
	_sign?: string
}
class Model {
	constructor(param: Model) {
		this._min_start_slider = param._min_start_slider || 0;
		this._max_start_slider = param._max_start_slider || 1000;
		this._min_slider_value = param._min_slider_value || 200;
		this._max_slider_value = param._max_slider_value || 800;
		this._sign = param._sign || "₽"
	};

	// facade_model_update(obj: Object) {
	// 	Object.assign(this, obj)
	// };

	// _facade_model_to_server () {
	// 	return this;
	// }

};

export { Model }