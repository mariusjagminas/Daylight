import "../sass/styles.scss";
import { handleInputSubmit } from "./handleInputSubmit";

const nodes = {
  preloader: document.querySelector(".preloader"),
  infoContainer: document.querySelector("#info-container"),
  locationName: document.querySelector("#location-name"),
  currentDate: document.querySelector("#current-date"),
  sunriseTime: document.querySelector("#sunrise-time"),
  sunsetTime: document.querySelector("#sunset-time"),
  dayLenght: document.querySelector("#day-lenght"),
  input: document.querySelector("#input")
};

nodes.input.addEventListener("submit", handleInputSubmit.bind(null, nodes));
