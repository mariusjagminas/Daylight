export const showComponent = node => {
  node.classList.add("app-element-is-visible");
};

export const hideComponent = node => {
  node.classList.remove("app-element-is-visible");
};
