import "../__tests__/custom-matchers"

import { IntInRange, NextDouble, NextGaussian } from "./random";

describe('Random', () => {
  describe('nextDouble', () => {
    it('returns a number between 0 and 1', () => {
      for (let i = 0; i < 1000; i++) {
        let result = NextDouble();
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(1);
      }
    });
  });

  describe('intInRange', () => {
    it('returns a number within the specified range', () => {
      for (let i = 0; i < 1000; i++) {
        let result = IntInRange(1, 10);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
      }
    });
  });


  describe('nextGaussian', () => {
    it('returns a number with the specified mean and standard deviation', () => {
      for (let i = 0; i < 1000; i++) {
        let result = NextGaussian(0, 1);
        expect(result).toBeWithinRange(-5, 5);
      }
    });
  });
});
