// ##############################
// // // HeaderLinks styles
// #############################

import {
  defaultFont,
  transition
} from "assets/jss/global_styles_variables";

const headerLinksStyle = theme => ({
  linkText: {
    visibility: "hidden",
    ...defaultFont,
    color: "#f4f4f4",
    fontSize: "14px",
    fontWeight: "700",
    padding: "0 15px 0 20px",
    ...transition,
  },
  buttonLink: {
    cursor: 'pointer',
    borderRadius: "25px",
    marginLeft: "auto",
    display: "flex",
    ...transition,
    "&:hover": {
      backgroundColor: "#555555",
    },
    "&:hover p": {
      visibility: "visible"
    },
    "&:hover svg": {
      transform: "rotate(90deg)"
    }
  },
  links: {
    zIndex: "4",
    width: "50px",
    height: "50px",
    boxSizing: "border-box",
    padding: "10px",
    textAlign: "center",
    borderRadius: "50%",
    backgroundColor: "#f4f4f4",
    ...transition,
  }
});

export default headerLinksStyle;
