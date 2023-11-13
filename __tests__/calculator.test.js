import { EarthAge, SolarAges } from "../src/calculator.js";

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
    expect(noah.nepCalc()).toEqual(0.198);
  })
})

describe('pluCalc', () => {
  test('should take an earth age and convert it to pluto age', () => {
    const noah = new EarthAge(33);
    expect(noah.pluCalc()).toEqual(0.132);
  });
});

describe('SolarAges', () => {
  test('should create an object with properties for the solar age on each planet', () => {
    const noah = new SolarAges(33, 137.511, 53.229, 17.556, 2.772, 1.122, 0.396, 0.198, 0.132);
    expect(noah.earthAge).toEqual(33);
    expect(noah.mercAge).toEqual(137.511);
    expect(noah.venAge).toEqual(53.229);
    expect(noah.marsAge).toEqual(17.556);
    expect(noah.jupAge).toEqual(2.772);
    expect(noah.satAge).toEqual(1.122);
    expect(noah.urAge).toEqual(0.396);
    expect(noah.nepAge).toEqual(0.198);
    expect(noah.pluAge).toEqual(0.132);
  })
})


describe('allAgesCalc', () => {
  test('should take an earth age and return a SolarAges object', () => {
    const noah = 33;
    expect(allAgesCalc(noah)).toEqual({mercAge: 137.511, venAge: 53.229, marsAge: 17.556, jupAge: 2.772, satAge: 1.122, urAge: 0.396, nepAge: 0.198, pluAge: 0.132});
  });
});





// describe('sinceBDay', () => {
//   test('should take an earth age as an argument, and a past age as a second argument. then, should find the difference in those two numbers, and calculate how many years that translates to on each planet', () => {
//     const currentAge = 33;
//     const pastBDay = 21;
//     expect(sinceBDay(currentAge, pastBDay)).toEqual({ })
//   });
// });