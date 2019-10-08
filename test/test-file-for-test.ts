import { helloTest } from '../src/function-for-test';
import { expect } from 'chai';
import 'mocha';

describe('First test',
  () => {
    it('should return true', () => {
      const result = helloTest();
      expect(result).to.equal(true);
  });
});
describe('First test',
  () => {
    it('should return true', () => {
      const result = helloTest();
      expect(result).to.equal(true);
  });
});