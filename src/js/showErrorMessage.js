import { showComponent, hideComponent } from "./toggleComponent";

export const showErrorMessage = msg => {
  const el = document.querySelector("#error-message");
  el.innrtText = msg;
  showComponent(el);
};
