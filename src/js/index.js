import "../sass/styles.scss";
import { handleInputSubmit } from "./handleInputSubmit";

const preloader = document.querySelector(".preloader");
const infoContainer = document.querySelector("#info-container");
document
  .querySelector("#input")
  .addEventListener(
    "submit",
    handleInputSubmit.bind(null, infoContainer, preloader)
  );
