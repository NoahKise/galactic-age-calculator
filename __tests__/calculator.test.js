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

describe('venCalc()', () => {
  test('should take an earth age and convert it to venus age', () => {
    const noah = new EarthAge(33);
    expect(noah.venCalc()).toEqual(53.229);
  });
});

describe('marsCalc', () => {
  test('should take an earth age and convert it to mars age', () => {
    const noah = new EarthAge(33);
    expect(noah.marsCalc()).toEqual(17.556);
  });
});

describe('jupCalc', () => {
  test('should take an earth age and convert it to jupiter age', () => {
    const noah = new EarthAge(33);
    expect(noah.jupCalc()).toEqual(2.772);
  });
});

describe('satCalc', () => {
  test('should take an earth age and convert it to saturn age', () => {
    const noah = new EarthAge(33);
    expect(noah.satCalc()).toEqual(1.122);
  });
});

describe('urCalc', () => {
  test('should take an earth age and convert it to uranus age', () => {
    const noah = new EarthAge(33);
    expect(noah.urCalc()).toEqual(0.396);
  });
});

describe('nepCalc', () => {
  test('should take an earth age and convert it to neptune age', () => {
    const noah = new EarthAge(33);
    expect (noah.nepCalc()).toEqual(0.198);
  })
})