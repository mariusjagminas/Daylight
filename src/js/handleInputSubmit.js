import { getTimezoneData } from "./getTimezoneData";
import { displayTimezoneData } from "./displayTimezoneData";
import { showElement, hideElement } from "./toggleComponent";
import nodes from "./nodes";

export const handleInputSubmit = e => {
  e.preventDefault();
  hideElement(nodes.infoContainer);
  showElement(nodes.preloader);
  getTimezoneData(e.target[0].value)
    .then(timezoneData => displayTimezoneData(timezoneData))
    .catch(err => console.log(err));
  e.target[0].value = "";
};
