interface Model {
	min_limit : number;
	max_limit : number;
	min_slider_value: number;
	max_slider_value: number
}
class Model {
	constructor(param: Model) {
		this.min_limit = param.min_limit || 0;
		this.max_limit= param.max_limit || 5000;
		this.min_slider_value = param.min_slider_value;
		this.max_slider_value = param.max_slider_value
	};

	set_model(obj) {
		Object.assign(this, obj)
	};
};

export { Model }