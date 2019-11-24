import { getTimezoneData } from "./getTimezoneData";
import { displayTimezoneData } from "./displayTimezoneData";
import { showComponent, hideComponent } from "./toggleComponent";

export const handleInputSubmit = (nodes, e) => {
  e.preventDefault();
  hideComponent(nodes.infoContainer);
  showComponent(nodes.preloader);
  getTimezoneData(e.target[0].value)
    .then(timezoneData => displayTimezoneData(timezoneData, nodes))
    .catch(err => console.log("ERROR_getTimezoneData", err));
  e.target[0].value = "";
};
