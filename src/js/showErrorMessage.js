import { showElement, hideElement } from "./toggleElement";
import elements from "./elements";

const { errorMessageElement, infoContainer, preloader } = elements;

export const showErrorMessage = message => {
  hideElement(infoContainer);
  hideElement(preloader);
  errorMessageElement.innerText = message;
  showElement(errorMessageElement);
};
