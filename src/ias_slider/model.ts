interface Model {
	max_value: number;
	min_value: number;
	min_border_value: number;
	max_border_value: number
}
class Model {
	constructor(param: Model) {
		this.max_value = param.max_value || 1000;
		this.min_value = param.min_value || 0;
		this.min_border_value;
		this.max_border_value
	}
};