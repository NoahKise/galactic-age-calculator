import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { allAgesCalc, exactAge,} from "./calculator.js";

function handleBirthdaySubmit(e) {
  e.preventDefault();
  const userBDay = new Date(document.getElementById("dateOfBirth").value);
  const todaysDate = new Date();
  const preciseAge = exactAge(userBDay, todaysDate);
  const planetAges = allAgesCalc(preciseAge);
  const divResult = document.getElementById('result');
  let earthH3 = document.createElement("h3");
  let mercH3 = document.createElement("h3");
  let venH3 = document.createElement("h3");
  let marsH3 = document.createElement("h3");
  let jupH3 = document.createElement("h3");
  let satH3 = document.createElement("h3");
  let urH3 = document.createElement("h3");
  let nepH3 = document.createElement("h3");
  let pluH3 = document.createElement("h3");
  earthH3.append("You are currently " + planetAges.earthAge + " years old on Earth.");
  mercH3.append("You are currently " + planetAges.mercAge + " years ond on Mercury.");
  venH3.append("You are currently " + planetAges.venAge + " years old on Venus.");
  marsH3.append("You are currently " + planetAges.marsAge + " years old on Mars.");
  jupH3.append("You are currently " + planetAges.jupAge + " years old on Jupiter.");
  satH3.append("You are currently " + planetAges.satAge + " years old on Saturn.");
  urH3.append("You are currently " + planetAges.urAge + " years old on Uranus.");
  nepH3.append("You are currently " + planetAges.nepAge + " years old on Neptune.");
  pluH3.append("You are currently " + planetAges.pluAge + " years old on Pluto.");
  divResult.append(earthH3, mercH3, venH3, marsH3, jupH3, satH3, urH3, nepH3, pluH3);

}

function handleSinceDateSubmit(e) {
  e.preventDefault();
  const pastDate = new Date(document.getElementById("pastDate").value);
  const todaysDate = new Date();
  const since = exactAge(pastDate, todaysDate);
  const sinceAges = allAgesCalc(since);
  const divResult = document.getElementById('result');
  let earthH3 = document.createElement("h3");
  let mercH3 = document.createElement("h3");
  let venH3 = document.createElement("h3");
  let marsH3 = document.createElement("h3");
  let jupH3 = document.createElement("h3");
  let satH3 = document.createElement("h3");
  let urH3 = document.createElement("h3");
  let nepH3 = document.createElement("h3");
  let pluH3 = document.createElement("h3");
  earthH3.append("It has been " + sinceAges.earthAge + " Earth years since " + pastDate.toLocaleDateString() + ".");
  mercH3.append("It has been " + sinceAges.mercAge + " Mercury years since " + pastDate.toLocaleDateString() + ".");
  venH3.append("It has been " + sinceAges.venAge + " Venus years since " + pastDate.toLocaleDateString() + ".");
  marsH3.append("It has been " + sinceAges.marsAge + " Mars years since " + pastDate.toLocaleDateString() + ".");
  jupH3.append("It has been " + sinceAges.jupAge + " Jupiter years since " + pastDate.toLocaleDateString() + ".");
  satH3.append("It has been " + sinceAges.satAge + " Saturn years since " + pastDate.toLocaleDateString() + ".");
  urH3.append("It has been " + sinceAges.urAge + " Uranus years since " + pastDate.toLocaleDateString() + ".");
  nepH3.append("It has been " + sinceAges.nepAge + " Neptune years since " + pastDate.toLocaleDateString() + ".");
  pluH3.append("It has been " + sinceAges.pluAge + " Pluto years since " + pastDate.toLocaleDateString() + ".");
  divResult.append(earthH3, mercH3, venH3, marsH3, jupH3, satH3, urH3, nepH3, pluH3);
}


document.getElementById("birthday").addEventListener("submit", handleBirthdaySubmit);
document.getElementById("sinceDate").addEventListener("submit", handleSinceDateSubmit);
// document.getElementById("birthday").addEventListener("submit", handleSubmit);