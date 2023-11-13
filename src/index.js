import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { allAgesCalc, exactAge } from "./calculator.js";

function handleSubmit(e) {
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

document.getElementById("birthday").addEventListener("submit", handleSubmit);