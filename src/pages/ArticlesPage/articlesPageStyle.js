// ##############################
// // // Articles Page styles
// #############################

export const articles = {
    alignItems: 'stretch',
    display: 'flex',
    height: '100vh',
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
    articlesPage: {
        transition: 'transform 0.5s, opacity 0.5s'
    },
    articles,
    articlePreview: {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '33.3%',
        backgroundColor: '#232',
        position: 'relative'
    },
    articlePreviewTextWrapper,
    absoluteLink,
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
