import { getTimezoneData } from "./getTimezoneData";
import { displayTimezoneData } from "./displayTimezoneData";
import { showElement, hideElement } from "./toggleElement";
import elements from "./elements";

export const handleFormSubmit = async event => {
  event.preventDefault();
  hideElement(elements.infoContainer);
  showElement(elements.preloader);
  const timezoneData = await getTimezoneData(event.target[0].value);
  event.target[0].value = "";
  displayTimezoneData(timezoneData);
  return;
};
