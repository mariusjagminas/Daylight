import { handleFormSubmit } from "./handleFormSubmit";
import elements from "./elements";

export const app = () => {
  elements.inputField.addEventListener("submit", handleFormSubmit);
};
