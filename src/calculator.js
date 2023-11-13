export class EarthAge {
  constructor(age) {
      this.age = age;
  }
  mercCalc() {
    let mercAge = this.age * 4.167;
    return parseFloat(mercAge.toFixed(3));
  }
  venCalc() {
    let venAge = this.age * 1.613;
    return parseFloat(venAge.toFixed(3));
  }
  marsCalc() {
    let marsAge = this.age * 0.532;
    return parseFloat(marsAge.toFixed(3));
  }
  jupCalc() {
    let jupAge = this.age * 0.084;
    return parseFloat(jupAge.toFixed(3));
  }
  satCalc() {
    let satAge = this.age * 0.034;
    return parseFloat(satAge.toFixed(3));
  }
  urCalc() {
    let urAge = this.age * 0.012;
    return parseFloat(urAge.toFixed(3));
  }
  nepCalc() {
    let nepAge = this.age * 0.006
    return parseFloat(nepAge.toFixed(3));
  }
  pluCalc() {
    let pluAge = this.age * 0.004
    return parseFloat(pluAge.toFixed(3));
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