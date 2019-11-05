import { View_horizontal } from '../src/ias_slider v2/view_horizontal';
// import { IasSlider } from '';
import { expect, assert } from 'chai';
import * as mocha from 'mocha';
// mocha.setup('bdd'); // используется если запускается в браузере
describe('Тестирование View',
	() => {
		it('1. Наличие класса View', () => {
			let settings: any = {
				_element_id: "id",
				_sign: "₽",
				_min_start_slider: 0,
				_max_start_slider: 1000,
				_min_slider_value: 200,
				_max_slider_value: 800,
				_slider_type: "duble",
				_type_view: "horizontal",
				_step: 50,
				tooltip: "on",
				value_field: "on",
				settings_id: "none"
			};
			const result = new View_horizontal(settings);
			expect(typeof result).to.equal("object");
		});
		it('2. Вызов родительского элемента', () => {
			let parent = "<div id='ias_slider'></div>";
			expect(View_horizontal.get_parent()).to.equal(parent);
		})
		// it('2. Наличие в классе создания шкалы', () => {
		// 	const result = new View();
		// 	expect(result.createViewPresenter()).to.equal(true);
		// })
		// it('2. Наличие в классе создания шкалы', () => {
		// 	const result = new ViewFasade();
		// 	expect(result.refreshNumbers()).to.equal("success");
		// })
	})


// describe('Тестирование CreateSlider',
	// () => {
	// 	it('1. Наличие класса IasSlider', () => {
	// 		const result = new IasSlider();
	// 		expect(result.createSlider()).to.equal("success");
	// 	})

	// }
// )
// mocha.run(); // используется если запускается в браузере