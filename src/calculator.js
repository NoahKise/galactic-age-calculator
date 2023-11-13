export class EarthAge {
  constructor(age) {
      this.age = age;
  }
  mercCalc() {
    let mercAge = this.age * 4.167;
    return mercAge;
  }
}

