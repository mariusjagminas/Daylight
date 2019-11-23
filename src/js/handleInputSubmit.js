export const handleInputSubmit = (infoContainer, preloader, e) => {
  e.preventDefault();
  preloader.classList.add("preloader-is-active");
  infoContainer.classList.add("element-is-hidden");
  // fetchTimezoneData(e.target[0].value);
  e.target[0].value = "";
};
