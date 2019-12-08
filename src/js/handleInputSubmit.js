import { getTimezoneData } from "./getTimezoneData";
import { displayTimezoneData } from "./displayTimezoneData";
import { showElement, hideElement } from "./toggleElement";
import elements from "./elements";

export const handleInputSubmit = async e => {
  e.preventDefault();
  hideElement(elements.infoContainer);
  showElement(elements.preloader);
  const timezoneData = await getTimezoneData(e.target[0].value);
  e.target[0].value = "";
  displayTimezoneData(timezoneData);
  return;
};
