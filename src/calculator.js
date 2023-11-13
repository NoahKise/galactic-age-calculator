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
}

