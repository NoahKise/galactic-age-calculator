import { EarthAge, SolarAges, allAgesCalc, sinceBDay, untilBDay, exactAge } from "../src/calculator.js";

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
  test('should take an EarthAge object and return a SolarAges object', () => {
    const noah = new EarthAge(33);
    expect(allAgesCalc(noah)).toEqual({earthAge: 33, mercAge: 137.511, venAge: 53.229, marsAge: 17.556, jupAge: 2.772, satAge: 1.122, urAge: 0.396, nepAge: 0.198, pluAge: 0.132});
  });
});

describe('sinceBDay', () => {
  test('should take an earth age as an argument, and a past age as a second argument. then, should find the difference in those two numbers, and create a new EarthAge object with the value of the age property set to the difference. then, it should calculate how many years that translates to on each planet', () => {
    const currentAge = 33;
    const pastAge = 21;
    expect(sinceBDay(currentAge, pastAge)).toEqual({earthAge: 12, mercAge: 50.004, venAge: 19.356, marsAge: 6.384, jupAge: 1.008, satAge: 0.408, urAge: 0.144, nepAge: 0.072, pluAge: 0.048});
  });
});

describe('untilBDay', () => {
  test('should take an earth age as an argument, and a future age as a second argument. then, should find the difference in those two numbers, and create a new EarthAge object with the value of the age property set to the difference. then, it should calculate how many years that translates to on each planet', () => {
    const currentAge = 33;
    const futureAge = 45;
    expect(untilBDay(currentAge, futureAge)).toEqual({earthAge: 12, mercAge: 50.004, venAge: 19.356, marsAge: 6.384, jupAge: 1.008, satAge: 0.408, urAge: 0.144, nepAge: 0.072, pluAge: 0.048});
  });
});

describe('exactAge', () => {
  test('should take two dates as arguments and find the number of days between them. then, should convert that number into an exact age in years and create a new EarthAge object with that exact age as the value for the age property', () => {
    const date1 = new Date("1990-11-02");
    const date2 = new Date("2023-11-13");
    expect(exactAge(date1, date2)).toEqual({age: 33.029});
  });
});

describe('nextBirthday', () => {
  test('should take a SolarAges object and create a new object with properties for each planet with key values representing how many days until the next birthday on that planet', () => {
    const noah = new SolarAges(33, 137.511, 53.229, 17.556, 2.772, 1.122, 0.396, 0.198, 0.132);
    expect(nextBirthday(noah)).toEqual({ })
  })
})