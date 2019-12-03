import { showElement, hideElement } from "./toggleElement";
import elements from "./elements";

const { errorMessageElement, infoContainer, preloader } = elements;
const notFoundMsg = "Location not found, please try again.";
const apiErrorMsg =
  "Cannot get data from GeoNames API. Open the browser console to see errors";

export const showErrorMessage = msg => {
  hideElement(errorMessageElement);
  hideElement(infoContainer);
  hideElement(preloader);
  errorMessageElement.innerText =
    msg === "NOT_FOUND" ? notFoundMsg : apiErrorMsg;
  showElement(errorMessageElement);
};
