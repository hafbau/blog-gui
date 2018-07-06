// ##############################
// // // Header styles
// #############################

import {
  defaultFont,
} from "assets/jss/global_styles_variables";

const headerStyle = theme => ({
  appBar: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    position: "absolute",
    zIndex: "1029",
    color: "#555555",
    padding: "10px 40px",
    transition: "all 150ms ease 0s",
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  middle: {
    verticalAlign: "middle"
  },
  pageTitle: {
    color: "#f4f4f4",
    fontWeight: "700"
  }
});

export default headerStyle;
