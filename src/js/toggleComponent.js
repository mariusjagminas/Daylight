export const showComponent = node => {
  node.classList.add("component-is-visible");
};

export const hideComponent = node => {
  node.classList.remove("component-is-visible");
};
