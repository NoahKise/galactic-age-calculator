import { EarthAge, SolarAges, allAgesCalc, sinceBDay, untilBDay, exactAge, nextBirthday } from "../src/calculator.js";

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

describe('futEarthCal()', () => {
  test('should find how much of a year is left before the next birthday on earth, and multiply that by 365.25', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(noah.futEarthCal()).toEqual(353.562);
  });
});

describe('futMercCal()', () => {
  test('should find how much of a year is left before the next birthday on Mercury, and multiply that by 88', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(noah.futMercCal()).toEqual(29.568);
  });
});

describe('futVenCal()', () => {
  test('should find how much of a year is left before the next birthday on Venus, and multiply that by 225', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(noah.futVenCal()).toEqual(161.775);
  });
});

describe('futMarsCal()', () => {
  test('should find how much of a year is left before the next birthday on Mars, and multiply that by 687', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(noah.futMarsCal()).toEqual(293.349);
  });
});

describe('futJupCal()', () => {
  test('should find how much of a year is left before the next birthday on Jupiter, and multiply that by 4333', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(noah.futJupCal()).toEqual(974.925);
  });
});

describe('futSatCal()', () => {
  test('should find how much of a year is left before the next birthday on Saturn, and multiply that by 10759', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(noah.futSatCal()).toEqual(9435.643);
  });
});

describe('futUrCal()', () => {
  test('should find how much of a year is left before the next birthday on Uranus, and multiply that by 30687', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(noah.futUrCal()).toEqual(18534.948);
  });
});

describe('futNepCal()', () => {
  test('should find how much of a year is left before the next birthday on Neptune, and multiply that by 60190', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(noah.futNepCal()).toEqual(48272.38);
  });
});

describe('futPluCal()', () => {
  test('should find how much of a year is left before the next birthday on Pluto, and multiply that by 90650', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(noah.futPluCal()).toEqual(78684.2);
  });
});

describe('nextBirthday', () => {
  test('should take a SolarAges object and return a new object with properties for how many days it is until the next birthday on each planet', () => {
    const noah = new SolarAges(33.032, 137.664, 53.281, 17.573, 2.775, 1.123, 0.396, 0.198, 0.132)
    expect(nextBirthday(noah)).toEqual({earthAge: 353.562, mercAge: 29.568, venAge: 161.775, marsAge: 293.349, jupAge: 974.925, satAge: 9435.643, urAge: 18534.948, nepAge: 48272.38, pluAge: 78684.2});
  });
});