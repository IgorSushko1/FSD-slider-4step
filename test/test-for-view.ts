import { View } from '';
import { IasSlider } from '';
import { expect, assert } from 'chai';
import 'mocha';

describe('Тестирование View',
	() => {
		it('1. Наличие класса View', () => {
			const result = new View();
			expect(typeof result).to.equal("object");
		})
		it('2. Наличие в классе создания шкалы', () => {
			const result = new View();
			expect(result.createViewPresenter()).to.equal(true);
		})
		// it('2. Наличие в классе создания шкалы', () => {
		// 	const result = new ViewFasade();
		// 	expect(result.refreshNumbers()).to.equal("success");
		// })
	})


	describe('Тестирование CreateSlider',
	() => {
		it('1. Наличие класса IasSlider', () => {
			const result = new IasSlider();
			expect(result.createSlider()).to.equal("success");
		})
		
	})