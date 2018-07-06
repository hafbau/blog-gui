// ##############################
// // // Footer styles
// #############################

import { defaultFont, container, primaryColor } from 'assets/jss/global_styles_variables';

const footerStyle = {
  footer: {
    position: 'absolute',
    bottom: '0',
    padding: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    ...defaultFont
  },
  arrows: {
    borderRadius: '50%',
    backgroundColor: 'white'
  }
};
export default footerStyle;
