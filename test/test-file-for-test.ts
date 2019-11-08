import { helloTest } from '../src/function-for-test';
import { expect } from 'chai';
import 'mocha';
mocha.setup('bdd');
describe('First test',
	() => {
		it('should return true', () => {
			const result = helloTest();
			expect(result).to.equal(true);
		})
	})

	mocha.run();