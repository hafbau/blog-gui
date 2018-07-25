// ##############################
// // // Articles Page styles
// #############################
import {
    articles,
    articlePreviewTextWrapper
} from 'pages/ArticlesPage/articlesPageStyle';
import { transition } from 'assets/jss/global_styles_variables';

const openedMenuStyle = theme => ({
    openedMenu: {
        ...transition,
        ...articles,
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '-1'
    },
    menuItem: {
        width: '33.3%',
    },
    menuItemTextWrapper: {
        ...articlePreviewTextWrapper,
        color: 'white'
    }
});

export default openedMenuStyle;
