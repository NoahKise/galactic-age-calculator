export class EarthAge {
  constructor(age) {
      this.age = age;
  }
  mercCalc() {
    let mercAge = this.age * 4.167;
    return mercAge;
  }
  venCalc() {
    let venAge = this.age * 1.613;
    return venAge;
  }
  marsCalc() {
    let marsAge = this.age * 0.532;
    return marsAge;
  }
  jupCalc() {
    let jupAge = this.age * 0.084;
    return parseFloat(jupAge.toFixed(3));
  }
  satCalc() {
    let satAge = this.age * 0.034;
    return satAge;
  }
  urCalc() {
    let urAge = this.age * 0.012;
    return urAge;
  }
  nepCalc() {
    let nepAge = this.age * 0.006
    return nepAge;
  }
  pluCalc() {
    let pluAge = this.age * 0.004
    return pluAge;
  }
}

export class SolarAges {
  constructor(earthAge, mercAge, venAge, marsAge, jupAge, satAge, urAge, nepAge, pluAge) {
    this.earthAge = earthAge;
    this.mercAge = mercAge;
    this.venAge = venAge;
    this.marsAge = marsAge;
    this.jupAge = jupAge;
    this.satAge = satAge;
    this.urAge = urAge;
    this.nepAge = nepAge;
    this.pluAge = pluAge;
  }
}

export function allAgesCalc(EarthAge){
  let earthAge = EarthAge.age;
  let mercAge = EarthAge.mercCalc();
  let venAge = EarthAge.venCalc();
  let marsAge = EarthAge.marsCalc();
  let jupAge = EarthAge.jupCalc();
  let satAge = EarthAge.satCalc();
  let urAge = EarthAge.urCalc();
  let nepAge = EarthAge.nepCalc();
  let pluAge = EarthAge.pluCalc();
  const calculatedSolarAges = new SolarAges(earthAge, mercAge, venAge, marsAge, jupAge, satAge, urAge, nepAge, pluAge);
  console.log(calculatedSolarAges);
  return calculatedSolarAges;
}