import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { allAgesCalc, exactAge, nextBirthday } from "./calculator.js";

function handleBirthdaySubmit(e) {
  e.preventDefault();
  const userBDay = new Date(document.getElementById("dateOfBirth").value);
  const todaysDate = new Date();
  const preciseAge = exactAge(userBDay, todaysDate);
  const planetAges = allAgesCalc(preciseAge);
  const divResult = document.getElementById('result');
  let earthh6 = document.createElement("h6");
  let merch6 = document.createElement("h6");
  let venh6 = document.createElement("h6");
  let marsh6 = document.createElement("h6");
  let juph6 = document.createElement("h6");
  let sath6 = document.createElement("h6");
  let urh6 = document.createElement("h6");
  let neph6 = document.createElement("h6");
  let pluh6 = document.createElement("h6");
  earthh6.append("You are currently " + planetAges.earthAge + " years old on Earth.");
  merch6.append("You are currently " + planetAges.mercAge + " years ond on Mercury.");
  venh6.append("You are currently " + planetAges.venAge + " years old on Venus.");
  marsh6.append("You are currently " + planetAges.marsAge + " years old on Mars.");
  juph6.append("You are currently " + planetAges.jupAge + " years old on Jupiter.");
  sath6.append("You are currently " + planetAges.satAge + " years old on Saturn.");
  urh6.append("You are currently " + planetAges.urAge + " years old on Uranus.");
  neph6.append("You are currently " + planetAges.nepAge + " years old on Neptune.");
  pluh6.append("You are currently " + planetAges.pluAge + " years old on Pluto.");
  divResult.innerHTML = '';
  divResult.append(earthh6, merch6, venh6, marsh6, juph6, sath6, urh6, neph6, pluh6);

}

function handleSinceDateSubmit(e) {
  e.preventDefault();
  const pastDate = new Date(document.getElementById("pastDate").value + 'T00:00:00Z');
  const todaysDate = new Date();
  const since = exactAge(pastDate, todaysDate);
  const sinceAges = allAgesCalc(since);
  const divResult = document.getElementById('result');
  let earthh6 = document.createElement("h6");
  let merch6 = document.createElement("h6");
  let venh6 = document.createElement("h6");
  let marsh6 = document.createElement("h6");
  let juph6 = document.createElement("h6");
  let sath6 = document.createElement("h6");
  let urh6 = document.createElement("h6");
  let neph6 = document.createElement("h6");
  let pluh6 = document.createElement("h6");
  earthh6.append("It has been " + sinceAges.earthAge + " Earth years since " + pastDate.toISOString().split('T')[0] + ".");
  merch6.append("It has been " + sinceAges.mercAge + " Mercury years since " + pastDate.toISOString().split('T')[0] + ".");
  venh6.append("It has been " + sinceAges.venAge + " Venus years since " + pastDate.toISOString().split('T')[0] + ".");
  marsh6.append("It has been " + sinceAges.marsAge + " Mars years since " + pastDate.toISOString().split('T')[0] + ".");
  juph6.append("It has been " + sinceAges.jupAge + " Jupiter years since " + pastDate.toISOString().split('T')[0] + ".");
  sath6.append("It has been " + sinceAges.satAge + " Saturn years since " + pastDate.toISOString().split('T')[0] + ".");
  urh6.append("It has been " + sinceAges.urAge + " Uranus years since " + pastDate.toISOString().split('T')[0] + ".");
  neph6.append("It has been " + sinceAges.nepAge + " Neptune years since " + pastDate.toISOString().split('T')[0] + ".");
  pluh6.append("It has been " + sinceAges.pluAge + " Pluto years since " + pastDate.toISOString().split('T')[0] + ".");
  divResult.innerHTML = '';
  divResult.append(earthh6, merch6, venh6, marsh6, juph6, sath6, urh6, neph6, pluh6);
}

function handleUntilDateSubmit(e) {
  e.preventDefault();
  const futureDate = new Date(document.getElementById("futureDate").value + 'T00:00:00Z');
  const todaysDate = new Date();
  const until = exactAge(todaysDate, futureDate);
  const untilAges = allAgesCalc(until);
  const divResult = document.getElementById('result');
  let earthh6 = document.createElement("h6");
  let merch6 = document.createElement("h6");
  let venh6 = document.createElement("h6");
  let marsh6 = document.createElement("h6");
  let juph6 = document.createElement("h6");
  let sath6 = document.createElement("h6");
  let urh6 = document.createElement("h6");
  let neph6 =  document.createElement("h6");
  let pluh6 = document.createElement("h6");
  earthh6.append("It will be " + untilAges.earthAge + " Earth years until " + futureDate.toISOString().split('T')[0] + ".");
  merch6.append("It will be " + untilAges.mercAge + " Mercury years until " + futureDate.toISOString().split('T')[0] + ".");
  venh6.append("It will be " + untilAges.venAge + " Venus years until " + futureDate.toISOString().split('T')[0] + ".");
  marsh6.append("It will be " + untilAges.marsAge + " Mars years until " + futureDate.toISOString().split('T')[0] + ".");
  juph6.append("It will be " + untilAges.jupAge + " Jupiter years until " + futureDate.toISOString().split('T')[0] + ".");
  sath6.append("It will be " + untilAges.satAge + " Saturn years until " + futureDate.toISOString().split('T')[0] + ".");
  urh6.append("It will be " + untilAges.urAge + " Uranus years until " + futureDate.toISOString().split('T')[0] + ".");
  neph6.append("It will be " + untilAges.nepAge + " Neptune years until " + futureDate.toISOString().split('T')[0] + ".");
  pluh6.append("It will be " + untilAges.pluAge + " Pluto years until " + futureDate.toISOString().split('T')[0] + ".");
  divResult.innerHTML = '';
  divResult.append(earthh6, merch6, venh6, marsh6, juph6, sath6, urh6, neph6, pluh6);
}

function handleNextBirthdaySubmit(e) {
  e.preventDefault();
  const userBDay = new Date(document.getElementById("dateOfBirth").value);
  const todaysDate = new Date();
  const preciseAge = exactAge(userBDay, todaysDate);
  const planetAges = allAgesCalc(preciseAge);
  const daysUntilNextBirthday = nextBirthday(planetAges);
  const divResult = document.getElementById('result');
  let earthh6 = document.createElement("h6");
  let merch6 = document.createElement("h6");
  let venh6 = document.createElement("h6");
  let marsh6 = document.createElement("h6");
  let juph6 = document.createElement("h6");
  let sath6 = document.createElement("h6");
  let urh6 = document.createElement("h6");
  let neph6 = document.createElement("h6");
  let pluh6 = document.createElement("h6");
  earthh6.append("It is " + daysUntilNextBirthday.earthAge + " earth days until your next birthday on Earth.");
  merch6.append("It is " + daysUntilNextBirthday.mercAge + " earth days until your next birthday on Mercury.");
  venh6.append("It is " + daysUntilNextBirthday.venAge + " earth days until your next birthday on Venus.");
  marsh6.append("It is " + daysUntilNextBirthday.marsAge + " earth days until your next birthday on Mars.");
  juph6.append("It is " + daysUntilNextBirthday.jupAge + " earth days until your next birthday on Jupiter.");
  sath6.append("It is " + daysUntilNextBirthday.satAge + " earth days until your next birthday on Saturn.");
  urh6.append("It is " + daysUntilNextBirthday.urAge + " earth days until your next birthday on Uranus.");
  neph6.append("It is " + daysUntilNextBirthday.nepAge + " earth days until your next birthday on Neptune.");
  pluh6.append("It is " + daysUntilNextBirthday.pluAge + " earth days until your next birthday on Pluto.");
  divResult.innerHTML = '';
  divResult.append(earthh6, merch6, venh6, marsh6, juph6, sath6, urh6, neph6, pluh6);

}

document.getElementById("birthday").addEventListener("submit", handleBirthdaySubmit);
document.getElementById("sinceDate").addEventListener("submit", handleSinceDateSubmit);
document.getElementById("untilDate").addEventListener("submit", handleUntilDateSubmit);
document.getElementById("birthday2").addEventListener("submit", handleNextBirthdaySubmit);