// ##############################
// // // Articles Page styles
// #############################
import { transition } from 'assets/jss/global_styles_variables'

export const articles = {
    alignItems: 'stretch',
    display: 'flex',
    height: '100vh',
    width: 'fit-content',
}
export const articlePreviewTextWrapper = {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    height: '100%',
    fontSize: '1.2rem',
    fontWeight: '500',
    boxSizing: 'border-box'
}

export const absoluteLink = {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0'
};

const articlesPageStyle = theme => ({
    articles: {
        ...articles,
        ...transition,
        transform: 'translateX(0)'
    },
    articlePreviewTextWrapper,
    absoluteLink,
    articlePreview: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: `${100/3}vw`,
        backgroundColor: '#232',
        position: 'relative',
        overflow: 'hidden',
        // ...transition,
        '& h1': {
            ...transition,
            transform: 'translateY(100px)',
        },
        '&:hover p, &:hover h1': {
            transform: 'translateY(0)'
        }
    },
    articlePreviewSummary: {
        ...transition,
        transform: 'translateY(3333px)',
        height: '100px',
        overflowY: 'hidden'
    },
    footer: {
        position: 'absolute',
        bottom: '0',
        padding: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
    },
    arrows: {
        borderRadius: '50%',
        backgroundColor: 'white',
        boxSizing: 'content-box',
        padding: '15px',
        cursor: 'pointer',
        color: '#555555'
    }
});

export default articlesPageStyle;
