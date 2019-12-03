import { getTimezoneData } from "./getTimezoneData";
import { displayTimezoneData } from "./displayTimezoneData";
import { showElement, hideElement } from "./toggleElement";
import elements from "./elements";

export const handleInputSubmit = e => {
  e.preventDefault();
  hideElement(elements.infoContainer);
  showElement(elements.preloader);
  getTimezoneData(e.target[0].value)
    .then(timezoneData => displayTimezoneData(timezoneData))
    .catch(err => console.log(err));
  e.target[0].value = "";
};
