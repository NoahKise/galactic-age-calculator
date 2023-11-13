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

}
