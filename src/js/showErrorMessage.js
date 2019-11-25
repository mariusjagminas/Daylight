import { showComponent, hideComponent } from "./toggleComponent";
import nodes from "./nodes";

const { errorMessage, infoContainer, preloader } = nodes;

export const showErrorMessage = msg => {
  hideComponent(errorMessage);
  hideComponent(infoContainer);
  hideComponent(preloader);
  errorMessage.innrtText = msg;
  showComponent(errorMessage);
};
