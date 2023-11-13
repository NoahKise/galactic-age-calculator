import { EarthAge } from "../src/calculator.js";

describe('EarthAge', () => {
  test('should create an object with one property for age with an intiger as a value', () => {
    const noah = new EarthAge(33);
    expect(noah.age).toEqual(33);
  });
});

describe('mercCalc()', () => {
  test('should take an earth age and convert it to mercury age', () => {
    const noah = new EarthAge(33);
    expect(noah.mercCalc()).toEqual(137.511);
  });
});