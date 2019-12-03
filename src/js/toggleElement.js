export const showElement = element => {
  element.classList.add("app-element-is-visible");
};

export const hideElement = element => {
  element.classList.remove("app-element-is-visible");
};
