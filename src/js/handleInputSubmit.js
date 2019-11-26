import { getTimezoneData } from "./getTimezoneData";
import { displayTimezoneData } from "./displayTimezoneData";
import { showComponent, hideComponent } from "./toggleComponent";
import nodes from "./nodes";

export const handleInputSubmit = e => {
  e.preventDefault();
  hideComponent(nodes.infoContainer);
  showComponent(nodes.preloader);
  getTimezoneData(e.target[0].value)
    .then(timezoneData => displayTimezoneData(timezoneData))
    .catch(err => console.log(err));
  e.target[0].value = "";
};
