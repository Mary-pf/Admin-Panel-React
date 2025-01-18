import { createPortal } from "react-dom";

const ModalsContainer = (Children) => {
  return createPortal(<>{Children}</>, document.getElementById("modal-root"));
};

export default ModalsContainer;
