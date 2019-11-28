export const showElement = node => {
  node.classList.add("app-element-is-visible");
};

export const hideElement = node => {
  node.classList.remove("app-element-is-visible");
};
