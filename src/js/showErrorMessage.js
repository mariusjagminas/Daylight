import { showComponent, hideComponent } from "./toggleComponent";
import nodes from "./nodes";

const { errorMessage, infoContainer, preloader } = nodes;
const notFoundMsg = "Location not found, please try again.";
const apiErrorMsg = "Can't fetch data from an API. Please try later";

export const showErrorMessage = msg => {
  hideComponent(errorMessage);
  hideComponent(infoContainer);
  hideComponent(preloader);
  errorMessage.innerText = msg === "NOT_FOUND" ? notFoundMsg : apiErrorMsg;
  showComponent(errorMessage);
};
